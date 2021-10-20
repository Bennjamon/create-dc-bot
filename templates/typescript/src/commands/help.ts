import { Message, MessageEmbed } from "discord.js";
import { readdirSync } from "fs";

export async function run(msg: Message) {
  const files = readdirSync(__dirname);
  const embed = new MessageEmbed()
    .setTitle("My commands")
    .setAuthor(
      msg.client.user.username,
      msg.client.user.avatarURL({ dynamic: true })
    );

  for (const file of files) {
    const command: Command = require(`./${file}`);
    embed.addField(file.slice(0, -2), command.description);
  }

  await msg.channel.send({ embed: [embed] });
}

export const description = "Says pong";

export const admin = false;
