const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.guild)
    return message.author.send(
      "Bu Komutu Sadece Sunucularda Kulanabilirsiniz!"
    );
  let güvenlik = ["Zayıf","Orta","Yüsek"]

  const say = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setTitle(message.guild.name)
    .addField(
      " 👱‍♀️ 👱  **__Toplam Üye Sayısı__**",
      `\`\`\`${message.guild.memberCount}\`\`\``
    )
    .addField(
      `🌐 **__Toplam Kanal Sayısı__**`,
      `  \`\`\`${message.guild.channels.cache.size}\`\`\``
    )
    .addField(
      "⚜️ **__Bot Sayısı__**",
      `» ${message.guild.members.cache.filter(m => m.user.bot).size}`
    )
    .addField(
      `👾 **__Rol Sayısı__**`,
      `» **${message.guild.roles.cache.size}**`
    )
    .addField(`👾 **__Boost Seviyesi__**`,`**${message.guild.premiumTier}/3**`)
    .addField(
      `👾 **__Boost Sayısı__**`,
      `» **${message.guild.premiumSubscriptionCount}**`
    )

  message.channel.send(say);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0
};

exports.help = {
  name: "gelişmiş-say",
  description: "Say"
};
