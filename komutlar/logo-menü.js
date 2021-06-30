const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const proreiz = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128")
  .setAuthor(client.user.username,"https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.webp?size=2048") 
	 .setFooter(`Fener Bot`, client.user.avatarURL ) 
	   .addField(`**f/arrow**`,`Arrow Logo Yapar`, true)  
  .addField(`**f/gold**`,`Gold Logo Yapar`, true) 
  .addField(`**f/grafiti**`,`Grafiti Logo Yapar`, true) 
  .addField(`**f/green**`,`Green Logo Yapar`, true) 
  .addField(`**f/neon**`,`Neon Logo Yapar`, true) 
  .addField(`**f/cool**`,`Cool Logo Yapar`, true) 
  .addField(`**f/roket**`,`Roket Logo Yapar`, true) 



return message.channel.send(proreiz)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["logo-menü"],
    permLevel: 0
}

exports.help = {
    name: 'logo',
    description: 'Yardım List.',
    usage: 'yardım'
}