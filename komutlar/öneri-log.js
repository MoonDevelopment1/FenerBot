const Discord = require("discord.js");
const db = require("croxydb");

exports.run = (client, message, args) => {
  let lostelectus = args[0];

  let kanal = message.mentions.channels.first();

  let x;
  if (lostelectus === "ayarla") x = ".";
  if (lostelectus === "sıfırla") x = ".";
  if (!x)
    return message.reply(
      ":regional_indicator_x:  Lütfen **ayarla** veya **sfırla** yaz."
    );

  if (lostelectus === "ayarla") {
    if (!kanal)
      message.channel.send(
        ":regional_indicator_x:  Bir kanal belirtmelisin."
      );
    db.set(`ökanal_${message.guild.id}`, kanal.id);
    return message.channel.send(
      ":ballot_box_with_check:  Öneri log kanalı başarıyla **" +  
        kanal + 
        "** olarak ayarlandı"
    );
  }
  if (lostelectus === "sıfırla") db.delete(`ökanal_${message.guild.id}`);
  return message.channel.send(
    ":ballot_box_with_check: Önerilog kanalı sıfırlandı. "
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öneri-log"],
  permlevel: 4
};
exports.help = {
  name: "önerilog",
  despricton: "açıklama",
  usage: "önerilog"
};
