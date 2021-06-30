const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const proreiz = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128")
  .setAuthor(client.user.username,"https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048") 
	 .setFooter(`Fener Bot`, client.user.avatarURL )  
  .addField(`**f/aşk-ölç** `,`İstatistikleri Gösterir`, true) 
	.addField(`**f/efkar**`,`Efkarını Ölçer`, true) 
  .addField(`**f/yazı-tura**`,`Yazı Tura Atar`, true) 
  .addField(`**f/stres-çarkı**`,`Stres Çarkı Çevirir`, true) 
  .addField(`**f/balık-tut**`,`Balık Tutar`, true) 
  .addField(`**f/espri**`,`Espri Yapar`, true) 
  .addField(`**f/beşlik**`,`Beşlik Çakar`, true) 
  .addField(`**f/ateş-et**`,`Ateş Eder`, true) 
	.addField(`**f/napim**`,`Napim Der`, true) 


return message.channel.send(proreiz)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["fun"],
    permLevel: 0
}

exports.help = {
    name: 'eğlence',
    description: 'Yardım List.',
    usage: 'yardım'
}