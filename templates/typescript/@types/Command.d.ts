import { Message } from "discord.js";

declare global {
  // Here you can add properties for your commands
  interface Command {
    description: string;
    admin: boolean;
    run(msg: Message, args: string[]): Promise<void>;
  }
}
