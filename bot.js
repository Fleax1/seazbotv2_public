const Discord = require('discord.js'),
    {Client, MessageEmbed} = require('discord.js'),
    client = new Discord.Client(),
    config = require("./config.json"),
    ytdl = require("ytdl-core"),
    fetch = require('node-fetch'),
    querystring = require('querystring'),
    queue = new Map();



const version = 'v1.166_Online';
const botactivity = 'Zentyks faire des danses Fortnite sur TikTok';

client.on('ready', () => {

    console.log(`${client.user.tag} est en ligne !`);
    client.user.setActivity(botactivity, {type: 'WATCHING'});

    let taverneid = client.guilds.cache.get('634088471492952090');

    const interval = setInterval(function () {
        taverneid.members.fetch().then(fetchedMembers => {
            const onlineMemberCount = fetchedMembers.filter(member => member.presence.status !== 'offline');
            const memberCount = taverneid.memberCount;
            const memberCountChannel = taverneid.channels.cache.get('696662940341895178');
            const channelName = '👥En ligne : ' + onlineMemberCount.size + '/' + memberCount;
            console.log(channelName)
            memberCountChannel.setName('👥En ligne : ' + onlineMemberCount.size + '/' + memberCount);
        });
    }, 6 * 60 * 1000);


    const seazbot = client.users.cache.get('442035389687922688');
    const tavernedev = '684741642875568188'

    const embed = {
        "title": "Reboot to " + version,
        "description": "Bot successfully reboot",
        "color": 0,
        "timestamp": new Date(),
        "footer": {
            "icon_url": `${seazbot.avatarURL()}`
        },
        "thumbnail": {
            "url": `${seazbot.avatarURL()}`
        }
    };
    client.channels.cache.get(tavernedev).send({embed});
});

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get('634090555453997076').send("𝔅𝔦𝔢𝔫𝔳𝔢𝔫𝔲𝔢 𝔡𝔞𝔫𝔰 𝖑𝖆 𝕿𝖆𝖛𝖊𝖗𝖓𝖊 " + "<@" + member + ">" + ", 𝔭𝔞𝔰𝔰𝔢 𝔲𝔫 𝔟𝔬𝔫 𝔪𝔬𝔪𝔢𝔫𝔱 𝔭𝔞𝔯𝔪𝔦 𝔫𝔬𝔲𝔰");
    member.guild.channels.cache.get('684741642875568188').send("New member : " + "<@" + member + ">");
});


client.on("message", async message => {
    const taverne = '634088471492952090'
    const taverneadmin = '689497139096584224'

    if (message.author.bot) return;

    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'jointest') {
        message.member._roles.forEach((async item => {
                if (item === taverneadmin) {
                    client.emit('guildMemberAdd', message.member || await message.guild.members.fetch(message.author));
                }
            }
        ));
    }

    if (command === 'say') {
        //console.log(message.member._roles);
        message.member._roles.forEach((item => {
                if (item === '689497139096584224') {
                    const sayMessage = args.join(" ");
                    message.delete().catch(O_o => {
                    });
                    message.channel.send(sayMessage);
                }
            }
        ));
    }

    if (command === 'nsfw') {
      if (message.channel.nsfw === true) {
        if (!args.length) {
          return message.channel.send('Vous devez entrer une catégorie !');
          }
        const query = querystring.stringify({ term: args.join(' ') });
        if (args == 'boobs' | args=='ass' | args=='pgif' | args=='gif' | args== 'hass'| args== 'hmidriff'| args== 'pgif'| args== '4k'| args== 'hentai'| args== 'holo'| args== 'hneko'| args== 'neko'| args== 'hkitsune'| args== 'kemonomimi'| args== 'anal'| args== 'hanal'| args== 'gonewild'| args== 'kanna'| args== 'ass'| args== 'pussy'| args== 'thigh'| args== 'hthigh'| args== 'gah'| args== 'coffee'| args== 'food'| args== 'paizuri'| args== 'tentacle' | args== 'hboobs') {
          const nsfwlink = `https://nekobot.xyz/api/image?type=${args}`;
          if (args == 'gif') {
            const nsfwlink = `https://nekobot.xyz/api/image?type=pgif`;
            const {response} = await fetch(nsfwlink).then(res => res.json()).then(data => {message.channel.send(data.message);})
          } else {
            const {response} = await fetch(nsfwlink).then(res => res.json()).then(data => {message.channel.send(data.message);})
          }
         }  else {
           return message.channel.send("Veuillez entrer une catégorie valide !");
         }
        } else {
          message.channel.send("Ce n'est pas un salon NSFW !");
        }
      }

    if (message.member.guild.id === taverne) {
        if (command === "ping") {
            message.reply('pong');
        }
    }

    if (command === 'purge') {
        //console.log(message.member._roles);
        message.member._roles.forEach((async item => {
                if (item === '689497139096584224') {
                    const deleteCount = (parseInt(args[0], 10)) + 1;

                    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
                        return message.reply("Merci d'indiquer le nombre de message à supprimer (entre 2 et 100)");

                    const fetched = await message.channel.messages.fetch({limit: deleteCount});
                    message.channel.bulkDelete(fetched)
                        .catch(error => message.reply(`Impossible de supprimer les messages en raison de: ${error}`));
                }
            }
        ));
    }

    if (command === 'zentyks') {
        const zentyks = client.users.cache.get("206896607155847168");
        const embed = {
            "title": "Zentyks haboné vou",
            "color": 0,
            "footer": {
                "icon_url": "https://pbs.twimg.com/profile_images/894924068952125442/K2oYrG5I_400x400.jpg",
                "text": "Faites des dons !"
            },
            "thumbnail": {
                "url": zentyks.avatarURL()
            },
            "fields": [
                {
                    "name": "Paypal :",
                    "value": "zentyks.pro@gmail.com"
                },
                {
                    "name": "Twitter :",
                    "value": "[@Zentyks](https://twitter.com/Zentyks)"
                },
                {
                    "name": "Instagram :",
                    "value": "[@zentyks](https://www.instagram.com/zentyks/)"
                },
                {
                    "name": "Twitch :",
                    "value": "[Zentyks](https://www.twitch.tv/zentyks)"
                },
                ,
                {
                    "name": "TikTok :",
                    "value": "[zentyks](https://www.tiktok.com/@zentyks)"
                }
            ]
        };
        message.channel.send({embed});
    }

    if (command === 'help') {
        const embed = {
            "title": "Liste des commandes:",
            "color": 0,
            "footer": {
                "icon_url": "https://pbs.twimg.com/profile_images/894924068952125442/K2oYrG5I_400x400.jpg",
                "text": "N'hésitez pas à mentionner @Admin si vous avez besoin !"
            },
            "thumbnail": {
                "url": "http://image.noelshack.com/fichiers/2018/19/6/1526134811-icon.png"
            },
            "fields": [
                // {
                //     "name": ".viewer",
                //     "value": "receive a notification when a streamer is live"
                // },
                // {
                //     name: '__Make this command a second time to no longer receive notifications__',
                //     value: '\u200B',
                // },
                {
                    "name": "+play <link>",
                    "value": "play music in your vocal channel"
                }
            ]
        };
        message.channel.send({embed});
    }

    // if(command === "bangbangcon") {
    //   message.reply("Pour regarder la bangbangcon en direct, cliquez sur <@!206896607155847168> sur la gauche. Si vous ne voyez pas écrit 'en direct' en rouge, essayez de redémarrer l'application. Bon stream !");
    // }

    const serverQueue = queue.get(message.guild.id);

    if (command === 'play') {
        if (message.channel.id === '634106477572784176') {
            const args = message.content.split(" ");

            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel)
                return message.channel.send(
                    "You need to be in a voice channel to play music!"
                );
            const permissions = voiceChannel.permissionsFor(message.client.user);
            if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
                return message.channel.send(
                    "I need the permissions to join and speak in your voice channel!"
                );
            }

            const songInfo = await ytdl.getInfo(args[1]);
            const song = {
                title: songInfo.title,
                url: songInfo.video_url
            };

            if (!serverQueue) {
                const queueContruct = {
                    textChannel: message.channel,
                    voiceChannel: voiceChannel,
                    connection: null,
                    songs: [],
                    volume: 5,
                    playing: true
                };

                queue.set(message.guild.id, queueContruct);

                queueContruct.songs.push(song);

                try {
                    var connection = await voiceChannel.join();
                    queueContruct.connection = connection;
                    play(message.guild, queueContruct.songs[0]);
                } catch (err) {
                    console.log(err);
                    queue.delete(message.guild.id);
                    return message.channel.send(err);
                }
            } else {
                serverQueue.songs.push(song);
                return message.channel.send(`${song.title} has been added to the queue!`);
            }
        } else {
            message.reply("merci d'écrire les commandes de musique dans le salon <#634106477572784176>")
        }

    } else if (command === 'skip') {
        if (message.channel.id === '634106477572784176') {
            skip(message, serverQueue);
            return;
        } else {
            message.reply("merci d'écrire les commandes de musique dans le salon <#634106477572784176>")
        }
    }


    if (command === 'stop') {
        if (message.channel.id === '634106477572784176') {
            stop(message, serverQueue);
            return;
        } else {
            message.reply("merci d'écrire les commandes de musique dans le salon <#634106477572784176>")
        }
    }


    function skip(message, serverQueue) {
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to stop the music!"
            );
        if (!serverQueue)
            return message.channel.send("There is no song that I could skip!");
        serverQueue.connection.dispatcher.end();
    }

    function stop(message, serverQueue) {
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to stop the music!"
            );
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }

    function play(guild, song) {
        const serverQueue = queue.get(guild.id);
        if (!song) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }

        const dispatcher = serverQueue.connection
            .play(ytdl(song.url))
            .on("finish", () => {
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
            .on("error", error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        serverQueue.textChannel.send(`Start playing: **${song.title}**`);
    }

});

client.login(config.token);
