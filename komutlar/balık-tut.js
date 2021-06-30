const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {

message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {

    var moon = [
      "``Sazan Tuttun!`` :fish:",
      "``Köpek Balığı Tuttun İyi Para Eder Sat Sat`` :D",
      "``Uskumru Tuttun!`` :fish:",
      "``Mezgit Tuttun! Havyarıda Var Hee`` :) :fish:",
      "``Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?``",
      "``Hamsi Tuttun!`` :fish:",
      "``Levrek Tuttun!`` :fish:",
      "``Hiçbirşey Tutamadın Maalesef!`` :wastebasket:",
      "``Alabalık Tuttun!`` :fish:",
      "``Maalesef Balık Oltadan Kaçtı!`` :wastebasket:",
      "``İstavrit Tuttun!`` :fish:"
    ];
    var moon = moon[Math.floor(Math.random() * moon.length)];
    message.edit(`${moon}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["balık", "balıktut"],
  permLevel: 0
};

exports.help = {
  name: "balık-tut",
  description: "Balık Tutarsın.",
  usage: "balıktut"
};