const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const proreiz = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128")
  .setAuthor(client.user.username,"https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048") 
	 .setFooter(`Fener Bot`, client.user.avatarURL )  
  .addField(`**f/istatistik** `,`İstatistikleri Gösterir`, true) 
	.addField(`**f/bilgilendirme**`,`Bot Hakkında Bilgi Verir`, true) 
  .addField(`**f/nitro**`,`Nitro Hediye Eder`, true) 
  .addField(`**f/token**`,`Tokeni Atar`, true) 
  .addField(`**f/ping**`,`Pingi Gösterir`, true) 
  .addField(`**f/hata-bildir**`,`Hata Bildirirsiniz`, true) 
  .addField(`**f/canlıdestek**`,`Destek Ekibini Çağırırsınız`, true) 
	  .addField(`**f/sunucu-icon**`,`Sunucu İconunu Atar`, true) 
.addField(`**f/afk**`,`Afk Moduna Geçersin`, true)

return message.channel.send(proreiz)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kullanıcı"],
    permLevel: 0
}

exports.help = {
    name: 'genel',
    description: 'Yardım List.',
    usage: 'yardım'
}