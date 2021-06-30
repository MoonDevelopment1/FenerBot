const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const proreiz = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128")
  .setAuthor(client.user.username,"https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048") 
	 .setFooter(`Fener Bot`, client.user.avatarURL ) 
	   .addField(`**f/ayarlamalı**`,`Ayarlamalı Yetkili Komutlarını Gösterir`, true)  
  .addField(`**f/ban**`,`Etiketlediğiniz kişiyi sunucudan yasaklar`, true) 
  .addField(`**f/unban**`,`ID Sini Yazdığınız Kullanıcının Banını Kaldırır`, true) 
  .addField(`**f/banlist**`,`Banlananları Gösterir`, true) 
  .addField(`**f/nuke**`,`Kanalı Silip Yeniden Oluşturur`, true) 
  .addField(`**f/sil**`,`Belirttiğiniz Sayıda Mesajı Siler`, true) 
  .addField(`**f/rol-al**`,`Belirtilen kullanıcıdan istediğiniz rolü alır`, true) 
  .addField(`**f/rol-ver**`,`Belirtilen kullanıcıya istediğiniz rolü verir`, true) 
  .addField(`**f/oylama**`,`Oylama Yapar`, true) 
  .addField(`**f/lock**`,`Kanalı Kilitler`, true) 
  .addField(`**f/unlock**`,`Kanalı Açar`, true) 
  .addField(`**f/slowmode**`,`Yavaş Modu Ayarlar`, true) 


return message.channel.send(proreiz)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["mod"],
    permLevel: 0
}

exports.help = {
    name: 'moderasyon',
    description: 'Yardım List.',
    usage: 'yardım'
}