const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async(client, message, args)  => {
    client.on('message', message => {

    if(message.guild.member === '!test max') {
        message.reply("Wow !");
    }
    })
};


module.exports.help = {
    name: "mumuse"
};