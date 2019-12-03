const config = require("../config.json");
const request = require("request");


var keyword = "grill";
var url = "https://words.bighugelabs.com/api/2/" + config.thesaurus_api + "/" + keyword + "/json";
console.log(url);

let options = {json : true};
request(url, options, (error, res, body) => {
    if (error) {
        return console.log(error);
    };

    if(!error && res.statusCode == 200) {
        console.log(body.noun.syn[0]);
    }
})