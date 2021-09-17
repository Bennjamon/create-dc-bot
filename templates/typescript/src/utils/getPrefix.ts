import { Message } from "discord.js";

export default function getPrefix(msg: Message): string {
  return (process.env.PREFIX as string).toLowerCase();
}
