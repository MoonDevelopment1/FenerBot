const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
   let lost = args.slice(0).join(' ');
   
  if (!lost) return message.reply('Destek Ekibini çağırmam için bir sebep gir!')
  if (lost.length < 7) return message.channel.send("Sebebiniz Daha Bilgilendirici Olması İçin **En Az 7** Karakterli Olmalıdır!");
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {

    message.channel.send(":white_check_mark: |  Destek Ekibine mesajı İlettim!")
    
    let electus = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL()}`)
    .setTitle('Heey Destek Ekibi Bi Sunucunun Yardıma İhtiyacı Var')
    .addField('Sebep:', `${message}`)
    .addField(`Sunucunun Davet Linki:`, `${invite}`)
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setFooter('Destek Sistemi');
    client.channels.cache.get("854683107160489990").send(electus);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["canlı-destek"],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Yapımcıya destek mesajı gönderir.',
  usage: '841245674929913856'
};