const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const proreiz = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128")
  .setAuthor(client.user.username,"https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048") 
	 .setFooter(`Fener Bot`, client.user.avatarURL ) 
	   .addField(`**f/abone-rol**`,`Abone Rolünü Ayarlarsınız`, true)  
     .addField(`**f/abone-yetkili-rol**`,`Abone Yetkili Rolünü Ayarlarsınız`, true) 
		 .addField(`**f/abone**`,`Abone Rolünü Verir`, true) 

return message.channel.send(proreiz)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["abone-menü"],
    permLevel: 0
}

exports.help = {
    name: 'abone-sistem',
    description: 'Yardım List.',
    usage: 'yardım'
}