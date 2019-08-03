const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("607042515954040843")
setInterval(function() {
channel.send(`شقاوة غبي شقاوة غبي شقاوة غبي شقاوة غبي`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
