const Discord = require("discord.js");

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("#1b1b1f")
      .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
      .addField(":warning: Uyarı","`sunucuresmi` **adlı komutu özel mesajlarda kullanamazsın.**");
    return message.author.send(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const sunucubilgi = new Discord.MessageEmbed()
      .setAuthor(message.guild.name)
      .setColor("#1b1b1f")
      .setImage(message.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
    return message.channel.send(sunucubilgi);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-pp", "sunucu-resmi"],
  permLevel: 0
};

exports.help = {
  name: "sunucu-icon",
  description: "Sunucu Resminin Linkini Atar.",
  usage: "profil"
};