const Discord = require('discord.js');

 exports.run = (client, message, args) => {
 if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz :(')
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(

     new Discord.MessageEmbed()

     .addField(`Yazı Yazman Gerek.`)).then(m => m.delete(5000));

     console.log("Oylama komutu " + message.author.username + '#' + message.author.discriminator + " Tarafından Kullanıldı.")
     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("#ffd100")
       .setThumbnail(client.user.avatarURL())
       .setTimestamp()
       .setFooter('Oylama', client.user.avatarURL())

       .addField(`** Fener Bot | Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');
       });
     };
     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],
       permLevel: 2
};
exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};