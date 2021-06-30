const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const proreiz = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTimestamp()
	 .setAuthor(client.user.username,"https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048") 
  .setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128")
  .setFooter(`Fener Bot`,client.user.avatarURL())  
  .setDescription(`Bilgileri Okumayı Unutma! \`(f/bilgi)\``)
  .addField(`**🛠 f/mod** `,`Moderasyon Komutları`, true) 
	.addField(`**🎡 f/eğlence**`,`Eğlence Komutları`, true) 
  .addField(`**⚓ f/genel**`,`Genel Komutları`, true) 
  .addField(`**⚙ f/ayarlamalı**`,`Ayarlamalı Komutları`, true) 
	.addField(`**💎 f/logo (YENİ)**`,`Logo Komutları`, true)
  .addField(`**🔔 f/öneri (YENİ)**`,`Öneri Sistemi Komutları`, true) 
  .addField(`**:credit_card: f/abone-sistem (YENİ)** `,`Abone Sistemini Komutlarını Gösterir`, true) 


return message.channel.send(proreiz)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["help","y","h"],
    permLevel: 0
}

exports.help = {
    name: 'yardım',
    description: 'Yardım List.',
    usage: 'yardım'
}