const Discord = require('discord.js');
const fs = require("fs");

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

//grabs all the handlers 
['command_handler','event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client,Discord);
})

//Logs in the bot
client.login('INSERTBOTTOKENHERE');