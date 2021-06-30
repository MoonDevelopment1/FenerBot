const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

  const embed = new Discord.MessageEmbed()
  .setColor("#00ff00")
  .setDescription("**Başarıyla Sohbet Kanalı Kapatılmıştır**");
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kanal-kilit-kapat"],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "lock",
  description: "kapat ac",
  usage: "prefix + sohbet-kapat"
};