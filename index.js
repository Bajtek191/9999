const botconfing = require("./botconfing.json");
const Discord = require("discord.js")
const prefix = "`"
var nazwabota = "Prod.!Maniek#6757"

const bot = new Discord.Client({disableEveryone: true })

bot.on("ready", async () =>{
    console.log(`${nazwabota}) jest online`)
});

bot.login(botconfing.token)