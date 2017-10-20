const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {

  message.reply('Ring.');

});

client.login(process.env.BOT_TOKEN);
