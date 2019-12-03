const searchxkcd = require('../Scripts/searchxkcd.js')

module.exports = {
    bind: 'xkcd',
    handler: async function(message) {
        const keyword = message.content.split(' ').slice(1).join(' ');
        console.log(keyword);
        let img = searchxkcd.searchxkcd(keyword)
        message.reply(img);
    }
}