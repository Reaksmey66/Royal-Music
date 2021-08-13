const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json");
const ee = require("../../embed.json");

module.exports = {
    name: "botinfo",
    category: "Information",
    aliases: ["stats"],
    cooldown: 4,
    usage: "help",
    description: "Shows all available Commands",
    run: async (client, message, args) => {

    try{
      message.channel.send(new MessageEmbed()
 .setColor(config.colors.yes)
 .setAuthor("Stats", client.user.displayAvatarURL())
          .setThumbnail(client.user.displayAvatarURL())
          .setFooter(client.user.username + "", client.user.displayAvatarURL())
          .setTimestamp()
          .addField('Servers',`**\`${client.guilds.cache.size}\`**`)
          .addField('Users',`
          **\`${client.users.cache.size}\`**`)
          .addField('Text channels',`**\`${client.channels.cache.filter((ch) => ch.type === "text").size}\`**`)
          .addField('Voice channels',`**\`${client.channels.cache.filter((ch) => ch.type === "voice").size}\`**`)
          .addField('**Node Version**',`**\`v16.5.0\`**`)
          .addField('**Discord.js**',`**\`v13.0.0\`**`)
          .addField('**Ping**',`**\`${client.ws.ping}ms\`**`)





.setFooter(client.user.username + " | powered by: Royal Development", client.user.displayAvatarURL())
);
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(config.colors.no)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code!
  * @INFO
*/