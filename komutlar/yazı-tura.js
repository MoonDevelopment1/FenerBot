const Discord = require('discord.js');
var yellow = [
    " **Tura Geldi** ",
    " **Çap Geldi** ",
    " **Yazı Geldi** ",
    " **Yazı Geldi** ",
    " **Tura Geldi** ",
    " **Çap Geldi** ",
    " **Tura Geldi** ",
    " **Yazı Geldi** "
];
module.exports.run = async (bot, message, args) => {
message.channel.send(message.author.toString() + " **Para Atılıyor! Vee Atıldı:** " + (yellow[Math.floor(Math.random() * yellow.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura atarsın.',
  usage: 'yazı-tura'
};