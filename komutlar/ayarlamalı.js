const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const proreiz = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128")
  .setAuthor(client.user.username,"https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048") 
	 .setFooter(`Fener Bot`, client.user.avatarURL ) 
  .addField(`**f/sa-as**`,`Oto sa-ası ayarlarsınız`, true)
  .addField(`**f/link-engel**`,`Link engelleme sistemini ayarlarsınız`, true) 
  .addField(`**f/küfür-engel**`,`Küfür engelleme sistemini ayarlarsınız`, true) 
  .addField(`**f/ever-engel**`,`Ever-Here engelleme sistemini ayarlarsınız`, true) 
  .addField(`**f/log-kanal**`,`Log Kanalını Ayarlarsınız`, true) 
  


return message.channel.send(proreiz)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["settings"],
    permLevel: 0
}

exports.help = {
    name: 'ayarlamalı',
    description: 'Yardım List.',
    usage: 'yardım'
}