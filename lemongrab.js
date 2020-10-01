const Discord = require("discord.js");
const client = new Discord.Client();

const SHEEPY_BOT_ID = '329668530926780426';

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (
    msg.member.id === SHEEPY_BOT_ID &&
    msg.content.includes("to pick it up")
  ) {
    msg.channel.send(">pick");
  }
});

const args = process.argv.slice(2);
client.login(args[0]);
