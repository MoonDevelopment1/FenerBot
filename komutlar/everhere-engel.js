const db = require('croxydb');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`❌ Bu Komutu Kullana Bilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`)
  if (!args[0]) return message.channel.send('Hatalı kullanım! **Örnek Kullanım:** f/ever-engel aç/kapat')
  
  if (args[0] == 'aç') {
    db.set(`hereengel_${message.guild.id}`, 'acik')
      message.channel.send('Everyone Engel başarıyla açıldı! Kapatmak için **f/ever-engel kapat** ')
   
  }
  if (args[0] == 'kapat') {
    db.delete(`hereengel_${message.guild.id}`, 'kapali')
      message.channel.send('Everyone Engel başarıyla kapatıldı! Açmak için **f/ever-engel aç** ')
  
  } 


}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['everengel','everyoneengel','hereengel',"everyone-engel"],
  permLevel: 0
};

exports.help = {
  name: 'ever-engel',
  description: 'everyone ve here yi engeller.',
  usage: 'everengelle'
};