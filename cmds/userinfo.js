const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor('#ff00f0')
    .addField("Имя",a.username)
    .addField("Тэг",a.tag)
    .addField("Дискорд Тэг",a.discriminator)
    .addField("Создание аккаунта",a.createdAt)
    .addField("ID",a.id)
    .addField("Вы бот?",a.bot)
    .setThumbnail(a.avatarURL)

    bot.send(embed);

};
module.exports.help = {
    name: "userinfo"
};