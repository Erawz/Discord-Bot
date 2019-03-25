const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const useruser = 'Commande demandée par : ' + message.author.username;
    const userurl = message.author.avatarURL;
    let embed = new Discord.RichEmbed()
        .setColor(0x730cd4)
        .setDescription(`Chargement...`)
        .setTimestamp()
    message.channel.send(embed).then(message => {
        embed.setColor(0x730cd4)
        embed.setDescription(`:ping_pong: Pong ! **\`${client.pings[0]}ms\`**`)
        embed.setFooter(useruser, userurl)
        embed.setTimestamp()
        message.edit(embed)
    });
};

module.exports.help = {
    name: "ping"
};