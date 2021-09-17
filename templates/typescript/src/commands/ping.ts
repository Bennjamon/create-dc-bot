import { Message } from "discord.js";

export async function run(msg: Message) {
  await msg.channel.send("Pong!");
}

export const description = "Says pong";

export const admin = false;
