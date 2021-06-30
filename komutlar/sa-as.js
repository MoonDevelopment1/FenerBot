const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async (client ,message, args) =>{
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(new Discord.MessageEmbed().setDescription(` **Bu komutu kullanabilmek için \`MANAGE_MESSAGES\` yetkisine sahip olmalısın!**`).setColor("1b1b1f"));
if(args[0] === 'aç') {
    db.set(`saas_${message.guild.id}`, true)
    message.channel.send(new Discord.MessageEmbed().setDescription(':white_check_mark: **Başarılı bir şekilde SA-AS sistemi `açıldı!`**').setColor("1b1b1f"))
      db.set(`saas_${message.guild.id}`, "acik")
  return
}
if (args[0] === 'kapat') {
  db.delete(`saas_${message.guild.id}`)
message.channel.send(new Discord.MessageEmbed().setDescription(':white_check_mark: **Başarılı bir şekilde SA-AS sistemi `kapatıldı!`**').setColor("1b1b1f"))
      db.set(`saas_${message.guild.id}}`, "kapali")
return
}
  message.channel.send(new Discord.MessageEmbed().setDescription(' **Lüten `aç` ya da `kapat` yazın!**').setColor("1b1b1f"))
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'sa-as', 
 description: 'reklam-engel',
 usage: 'reklam-engel' 
};