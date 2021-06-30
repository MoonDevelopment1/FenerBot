const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const moon = new Discord.MessageEmbed()

.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/838537125631885352/844828766824038420/abp.jpg")
.setTitle("Al Tokenim Git Sunucuları Patlat Şimdi");

  message.channel.send(moon);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "token",
  description: "Bot Tokeni Atar",
  usage: "token"
};
