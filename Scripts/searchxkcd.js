var fs = require('fs');
const tags = require('../Scripts/tags');





/*rl.question('Enter keyword: ', (answer) => {
    console.log(searchJson(answer));
})*/

module.exports.searchxkcd = function (keyword) {
    
    var contents = fs.readFileSync('/Users/cameronaltenkirch/BarryBotII/Scripts/tags.json');
    var jsonContent = JSON.parse(contents);
    var i,x;
    for (i = 1; i<=2220; i++) {
        if(i<403){
            x=1;
        }
        else{
            x=2
        }
        var entity = jsonContent[i][i+x];
        var num = i+x;
        var transcript = entity.transcript;
        var title = entity.title;
        var img = entity.img;
        if(title.includes(keyword) || transcript.includes(keyword)){
            console.log(num);
            return img;
        }

    }
    return("Keyword not found");
}


