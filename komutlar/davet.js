const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const davet = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setThumbnail('https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128')
  .setDescription(`** Fener Bot Davet Linkleri**
**
Botumuzu Eklemek için
[Tıkla](https://discord.com/oauth2/authorize?client_id=839536853693890585&scope=bot&permissions=3157798463)**
**
Destek Sunucusu için
[Tıkla](https://discord.gg/p9Abwqagax)** 
`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "davet"
}