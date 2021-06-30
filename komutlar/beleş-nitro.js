const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const fenerbot = new Discord.MessageEmbed()
  
.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/814836246357737512/814844848330637332/nitro2.png")
.setTitle("Üff Nede Hawli Olucan Şimdi");
  message.channel.send(fenerbot);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nitro"],
  permLevel: `Yok`
};

exports.help = {
  name: "beleş-nitro",
  description: "beleşş",
  usage: "beleş"
};

