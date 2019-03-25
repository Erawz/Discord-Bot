const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async(client, message, args) => {

client.on('ready', () => {
  console.log('Lubisz pingponga?');
});

client.on("ready", () => {
  client.user.setGame("pingpong");
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }

if (message.content === 'pong') {
    message.reply('Peng!');
  }

if (message.content === 'peng') {
    message.reply('Ping!');
  }

if (message.content === '#hug me') {
    message.reply('I hugs you!');
  }

if (message.content === 'pokemon') {
    message.reply('gotta catch them all!');
  }

if (message.content === '#darwin') {
    message.reply('Darwin Raglan Caspian Ahab Poseidon Nicodemius Watterson III better known as just Darwin, is the deuteragonist in The Amazing World of Gumball. He used to be Gumball s pet goldfish, but, one day, he grew legs and generally adapted to life outside of water, so he was adopted by the Watterson family.');
  }

if (message.content === '#gumball') {
    message.reply('Gumball, formerly Zach Tristopher Watterson is the main character of The Amazing World of Gumball. He is a twelve-year-old, light blue male cat that goes to Elmore Junior High. His have a brother Darwin and sister Anais.');
  }

if (message.content === 'i wanna have PingBot in my server') {
    message.reply('Please, my friend! https://discordapp.com/oauth2/authorize?client_id= 271941605840257024&scope=bot&permissions=66186303');
  }

if (message.content === '#help') {
    message.reply('PingBot by MrNovak based on discord.js. Commands: #hug me, #darwin, or others in some phrases! Updated sometimes. Thanks for help to @vistafan12#5320 and discord.js site! Or a little for Google Translate... ;)');
  }

if (message.content === '#commands') {
    message.reply('Commands list: ping, pong, peng, #hug me, pokemon, #darwin, #darwin2, i wanna have PingBot in my server, #help. Commands is updated sometimes.');
  }

if (message.content === '#commands') {
    message.reply('Commands list: ping, pong, peng, #hug me, pokemon, #darwin, #gumball, i wanna have PingBot in my server, #help. Commands is updated sometimes.');
  }
});


client.on("guildMemberAdd", (member) => {
    console.log(`Nowy uzytkownik "${member.user.username}" dolaczyl do "${member.guild.name}"` );
    member.guild.defaultChannel.sendMessage(`${member.user.username} dolaczyl do tego serwera!`);
});

client.on("guildMemberRemove", (member) => {
    console.log(`"${member.user.username}" odszedl z "${member.guild.name}"` );
    member.guild.defaultChannel.sendMessage(`${member.user.username} odszedl z tego serwera!`);
});

client.login('NTQyODczMzI3MTE5NzYxNDEw.Dz0ZJw.VFnLynjLipbOkBX3tkrUqYxNd9s');

};

module.exports.help = {
    name: "#hug me"
};