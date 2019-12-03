const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;

const messageHandler = require("./event_handlers/message_handler");


client.on("ready", () => {
    console.log("I am ready!");
    client.user.setActivity("Online");
    client.user.setUsername("BarryBot II");
  });


  client.on('message', messageHandler.sendMessage);
  client.login(config.token);

