const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const proreiz = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128")
  .setAuthor(client.user.username,"https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048") 
	 .setFooter(`Fener Bot`, client.user.avatarURL ) 
	   .addField(`**f/öneri-log ayarla/sıfırla**`,`Öneri Log Kanalını Ayarlar veya Sıfırlar`, true)  
  .addField(`**f/öneri-yap**`,`Öneri Yapar`, true) 
  .addField(`**f/şikayet-et**`,`Bir Üyeyi Şikayet Eder`, true) 



return message.channel.send(proreiz)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["öneri-menü"],
    permLevel: 0
}

exports.help = {
    name: 'öneri-şikayet',
    description: 'Yardım List.',
    usage: 'yardım'
}