const { config } = require("dotenv");
const { Client } = require("discord.js");
const getPrefix = require("./utils/getPrefix");

config();

const client = new Client({
  intents: ["GUILD_MESSAGES", "GUILDS"],
});

client.on("message", async (msg) => {
  const prefix = getPrefix(msg);
  if (msg.content.toLowerCase().startsWith(prefix.toLowerCase())) {
    const [commandName, ...args] = msg.content
      .slice(prefix.length)
      .split(/ +/g);
    try {
      const path = require.resolve(`./commands/${commandName}`);
      delete require.cache[path];
      const command = require(path);
      if (command.admin && !msg.member?.permissions.has("ADMINISTRATOR")) {
        msg.channel.send("You don't have permission to use this command");
        return;
      }
      await command.run(msg, args);
    } catch (error) {
      if (/Cannot find module '\.\/commands/.test(error.message))
        await msg.channel.send(
          `Command not found, use \`${prefix}help to show the command\^`
        );
    }
  }
});

client.login(process.env.TOKEN);
