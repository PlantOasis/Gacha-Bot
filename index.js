// JavaScript source code
const Discord = require("discord.js")
require("dotenv").config()

//token for bot 
const TOKEN = "OTYwOTU5MDAyMTk4NTYwOTA4.YkyAzw.5Zb6O3ZYd8HcGX4Kqhsm6O6ys8E"

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]


})
client.on("ready", () => {
console.log ("just loged in")
})

client.on("messageCreate", (message) => {
    if (message.content == "Test") {
        message.reply("If you see this bad things are happening")
    }

})

client.login(process.env.TOKEN)
