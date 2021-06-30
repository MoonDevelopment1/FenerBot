const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle(":shield: Ping")
  .setColor("RANDOM")
	.setThumbnail("https://cdn.discordapp.com/avatars/853309520579395626/eb5892e2d3a1f1145d2a82d94d275a30.png?size=128")
  .setDescription(`**:pushpin: Mesaj Gecikmesi** \n ${new Date().getTime() - message.createdTimestamp}ms 
**:pushpin: Bot Gecikmesi** \n ${client.ws.ping}ms `)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'ping',
 description: 'Botun Pingine Bakarsın',
 usage: '!ping'
};
 