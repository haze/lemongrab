const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (
    msg.content.includes("to pick it up") &&
    //sheepy bot
    msg.member.id === "329668530926780426"
  ) {
    msg.channel.send(">pick");
  }
});

const args = process.argv.slice(2);
client.login(args[0]);
