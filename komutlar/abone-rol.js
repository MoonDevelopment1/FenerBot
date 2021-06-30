let database = require("croxydb")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`❌ Bu Komutu kullanmak için yeterli yetkin yok.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`❌ **Bir rol etiketlemen lazımdı mesela: __${ayarlar.prefix}abonerol @rol__**`)
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`✅ **Abone rolu başarıyla "${rol}" olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abonerol'
}

