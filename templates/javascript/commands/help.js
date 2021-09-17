const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

exports.run = function run(msg) {
  const files = readdirSync(__dirname);
  const embed = new MessageEmbed()
    .setTitle("My commands")
    .setAuthor(
      msg.client.user.username,
      msg.client.user.avatarURL({ dynamic: true })
    );

  for (const file of files) {
    const command = require(`./${file}`);
    embed.addField(file.slice(0, -2), command.description);
  }

  await msg.channel.send(embed);
};

exports.description = "Says pong";

exports.admin = false;
