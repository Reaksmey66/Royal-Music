const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json");
const ee = require("../../embed.json");

module.exports = {
    name: "help",
    category: "Information",
    aliases: ["Help", "H", "h"],
    cooldown: 4,
    usage: "help",
    description: "Shows all available Commands",
    run: async (client, message, args, user, text, prefix) => {

    try{
      message.channel.send(new MessageEmbed()
      .setImage("https://media.discordapp.net/attachments/842229048754044978/871595864316059699/standard_9.gif")
 .setColor(config.colors.yes)
.setAuthor("Commands List of Royal Music",client.user.displayAvatarURL())
        //SONG CMD
.setDescription("**To get info of each command you can do $help [command]**")
.addField('<a:ayarlar:872451260769505280> ❯ __INFORMATION COMMANDS__',`

\`dj\`, \`help\`, \`invite\`, \`ping\`, \`uptime\`, \`botinfo\`, \`embed\`, \`info\`, \`sleeptimer\`, \`addbotchat\`, \`adddj\`, \`removedj\`, \`prefix\`, \`removebotchat\`, \`reset\``)


.addField('<a:DiscordMusic:844932255964594186> ❯ __MUSIC COMMANDS__',`

\`addrelated\`, \`autoplay\`, \`playlist\`, \`clearqueue\`, \`custom\`, \`forward\`, \`grab\`, \`join\`, \`jump\`, \`loop\`, \`lyrics\`, \`moveme\`, \`mycustom\`, \`nowplaying\`, \`pause\`, \`play\`, \`playsc\`, \`playskip\`, \`radio\`, \`removetrack\`, \`replay\`, \`resume\`, \`rewind\`, \`search\`, \`searchrelated\`, \`searchsc\`, \`seek\`, \`shuffle\`, \`skip\`, \`status\`, \`stop\`, \`volume\``
)


.addField('<:atlanta_playlist:875593088427520051> ❯ __MUSIC FILTERS__',` 

\`8d\`, \`bassboost\`, \`clear\`, \`earrape\`, \`echo\`, \`flanger\`, \`gate\`, \`haas\`, \`heavybass\`, \`karaoke\`, \`lightbass\`, \`mcompand\`, \`nightcore\`, \`phaser\`, \`pulsator\`, \`purebass\`, \`reverse\`, \`subboost\`, \`surrounding\`, \`treble\`, \`tremolo\`, \`vaporwave\`, \`vibrato\`
[Invite Me](https://discord.com/api/oauth2/authorize?client_id=837283899414806618&permissions=8&scope=bot) | [Vote me](https://top.gg/bot/837283899414806618) | [Support Server](https://discord.gg/naUJjDSf8E)`)




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