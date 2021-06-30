const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    var rolid = message.mentions.roles.first()
    var kisi = message.mentions.members.first()

    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.reply('üzgünüm bunu kullanamazsınız')
    }

    if(!rolid) return message.reply('Rol Etiketleyin')
    if(!kisi) return message.reply('Kişi Etiketlieyin')

    kisi.roles.remove(rolid)
    return message.channel.send(`Rol Alındı !!! Alınan Rol: ${rolid}, Kişi: ${kisi}`)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rol-al'],
    permLevel: 2
};
  
  exports.help = {
    name: 'rolal',
    description: '',
    usage: 'rolal'
};