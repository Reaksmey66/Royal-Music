const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "invite",
    aliases: ["add"],
    category: "Information",
    description: "Invite the Bot to your Server",
    useage: "invite",
    run: async (client, message, args) => {
        let inviteembed = new Discord.MessageEmbed()
            .setColor(`#FF3300`)
            .setAuthor("Invite", client.user.displayAvatarURL())
            .setDescription("Invite one or more of the bots, they all work together seamlessly!")
            .addField('Music Bots',`[Royal Music](https://discord.com/api/oauth2/authorize?client_id=837283899414806618&permissions=8&scope=bot)\n[Royal Music 2](https://discord.com/api/oauth2/authorize?client_id=870898984212889651&permissions=8&scope=bot)`)
            .addField('Moderation Bots',`[Royal Bot](https://discordapp.com/oauth2/authorize?client_id=787260574551375903&scope=bot&permissions=2146958847)`)
            .setFooter("To invite a bot click on the corresponding link above")

        message.reply(inviteembed);
    }
}