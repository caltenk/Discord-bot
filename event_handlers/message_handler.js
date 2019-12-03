const config = require("../config.json");
const prefix = config.prefix;
const fs = require('fs');
const path = require('path');

let commandHandlers = [];
const commandHandlerLoadPath = path.resolve(process.cwd(), './command_handlers');
fs.readdir(commandHandlerLoadPath, function(err,files){
    files.forEach(function(file){
        if (file.match(/^.+\.js$/)) {
            const commHandler = require(path.resolve(commandHandlerLoadPath, file));
            if (
                typeof commHandler === 'object' &&
                commHandler.bind && typeof commHandler.bind === 'string' &&
                commHandler.handler && typeof commHandler.handler === 'function'
              ) {
                  commandHandlers.push(commHandler)
              }
        }
    })
});




module.exports.sendMessage = async function(message) {
    if (!message.content.startsWith(prefix) || message.author.bot || !(message.author.id == config.author_id)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const possibleHandlers = commandHandlers.filter((handler) => handler.bind == command);

    handler = possibleHandlers[0]

    handler.handler(message);

}