
// node.js, "classic" way:
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

var result = md.render('# markdown-it rulezz!');
console.log(result);


// render results to file in folder
function saveStaticDataToFile() {
    // blob way, not currently working 
    // var blob = new Blob(["Welcome to Websparrow.org."],
    //     { type: "text/plain;charset=utf-8" });
    // saveAs(blob, "static.txt");

    fs = require('fs');
    fs.writeFile('_marked/helloworld.txt', 'Hello World!', function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
}
saveStaticDataToFile();
//pass rendered file to simple server