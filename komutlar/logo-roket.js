const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = (client, message, args) => {

let logoaltyap = args.slice(0).join("+");
if (!logoaltyap) return message.channel.send("Lütfen Bişey Yaz");
let link ="https://dynamic.brandcrowd.com/asset/logo/10f76bee-03aa-4398-9637-5dddeda46b50/logo?v=4&text=" + logoaltyap;

const logobotaltyapi = new Discord.MessageEmbed()
.setTitle(`Roket Logosu`)
.setImage(link)
.setFooter(`Roket Logosu`)
return message.channel.send(logobotaltyapi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "roket"
};
