const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {

  console.log('The bot is up and running, yaayy!');

});

client.on('message', message => {
  
   message.reply('Ring.'); // Bot join message
  
});

client.login(process.env.BOT_TOKEN);
