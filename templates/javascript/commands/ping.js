exports.run = async function run(msg) {
  await msg.channel.send("Pong!");
};

exports.description = "Says pong";

exports.admin = false;
