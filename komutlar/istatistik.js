const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const os = require("os")
const osutils = require('os-utils');
const moment = require("moment");
require("moment-duration-format");

exports.run = async(client, message, args) => {
	
	const proreiz = new Discord.MessageEmbed()

  .setColor('RANDOM')
  .setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128")
  .setFooter(client.user.username,client.user.avatarURL())  
  .setAuthor(client.user.username,"https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048")
  .setDescription(`
📚 İstatistikler

**👑▪Bot Sahibi** \n <@!804793099179130891>  <@!749657463959191662>
**💻▪Bot Geliştiricisi** \n <@!804793099179130891> <@!749657463959191662>

**🔥▪Sunucu Sayısı** \n ${client.guilds.cache.size.toLocaleString()}
**👤▪Kullanıcı Sayısı** \n ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}

**🏓▪Mesaj Gecikmesi** \n ${new Date().getTime() - message.createdTimestamp}ms 
**🏓▪Bot Gecikmesi** \n ${client.ws.ping}ms 
**📌▪Discord.js sürümü** \n ${Discord.version}
**🖥▪İşletim Sistemi** \n ${os.cpus().map(i => `${i.model}`)[0]}
**⌨▪Ram** \n ${(process.memoryUsage().heapUsed / 2024 / 2024).toFixed(2)}/2024MB
`)
 
return message.channel.send(proreiz)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["i"],
    permLevel: 0
}

exports.help = {
    name: 'istatistik',
    description: 'bilgilendirme',
    usage: 'bilgilendirme'
}