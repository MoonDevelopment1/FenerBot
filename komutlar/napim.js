const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const fener = new Discord.MessageEmbed()
  
.setColor("BLACK")
.setImage("https://cdn.discordapp.com/attachments/802911190459744267/803529901445480508/Ej5ZGPkXkAEC56f.png")
.setTitle("Nasıl Bu Kadar Hawlisin Acaba.");
  message.channel.send(fener);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: `Yok`
};

exports.help = {
  name: "napim",
  description: "FBİ Gif Atar",
  usage: "Fbi"
};