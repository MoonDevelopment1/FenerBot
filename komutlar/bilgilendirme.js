const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const moon = new Discord.MessageEmbed()

  .setColor('#f698d4')
  .setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048")
  .setTimestamp()
  .setFooter(client.user.username,client.user.avatarURL())  
  .setAuthor(client.user.username,"https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048")
  .setDescription(`
** Fener Bot Bilgilendirme Sistemi **

⚒️ Moderasyon 
🎡 Eğlence
🖼️ Logo 
⚙️ Ayarlamalı 
🔔 Öneri
🔔 Abone Sistemi
 Komutlarını İçermektedir  

Gelişmekte Olan Fener Bot 13.06.2021 Tarihinde Kurulmuşdur

**Botun Sahibi** \n <@!848839906444181554>
**Botun Geliştiricisi** \n  <@!804793099179130891>

**Botun Pingi** \n ${client.ws.ping}ms 
`)
 
return message.channel.send(moon)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["bilgi"],
    permLevel: 0
}

exports.help = {
    name: 'bilgilendirme',
    description: 'bilgilendirme',
    usage: 'bilgilendirme'
}