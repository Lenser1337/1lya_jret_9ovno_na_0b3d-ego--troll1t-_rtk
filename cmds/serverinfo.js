const Discord = module.require("discord.js");
const fs = require("fs");

function formatDate(date) {
    var monthNames = [
      "января", "февраля", "марта",
      "апреля", "мая", "июня", "июля",
      "августа", "сентября", "октября",
      "ноября", "декабря"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = hour + ":" + minute + ":" + second;
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year + ', ' + time;
  }

module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor('#10c7e2')
    .addField("Название сервера",message.guild.name)
    .addField("Создание сервера",formatDate(message.guild.createdAt))
    .addField("Вы присоеденились к серверу",formatDate(message.guild.joinedAt))
    .addField("Кол-Во участников",message.guild.memberCount)
    .addField("Регион",message.guild.region)
    .setThumbnail(message.guild.iconURL)

    bot.send(embed);

};
module.exports.help = {
    name: "serverinfo"
};