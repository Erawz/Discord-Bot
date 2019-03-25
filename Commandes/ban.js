const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('Vous n\'avez pas la permission !'); }
    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('Le bot n\'a pas la permission !'); }
    if (message.mentions.users.size === 0) { return message.channel.send('Vous devez mentionner un utilisateur !'); }

        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) { return message.channel.send('Je n\'ai pas trouvé l\'utilisateur !'); }
    
        message.mentions.users.first().send(`Vous avez été banni du serveur **${message.guild.name}** par ${message.author.username}`)
            .then((member) => {
                banMember.ban()
                    .then((member) => {
                        message.channel.send({
                            embed: {
                                color: 0x730cd4,
                                title: `${member.user.username} a été ban par ${message.author.username}`,
                            }
                        })
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((err) => {
                    if (err) { console.error(err); }
                        banMember.ban()
                            .then((member) => {
                                message.channel.send(`${member.user.username} a été ban par ${message.author.username}`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: 'ban'
};