// Global Requirements for App
const http = require("http");
const fsSync = require('fs');
const fsPromise = require('fs').promises;
const shell = require('shelljs');
const path = require('path');

//Global Requirements for Server
const host = 'localhost';
const port = 1515;

// Global ShellJS commands
const cd = shell.cd('../');

// Joining Paths for HTML Service
//const htmlPath = path.join(__dirname, '..', '_splash', 'index.html');
const homePath = path.join(__dirname, '..', 'splash', 'index.html');
//const htmlString = fsSync.readFileSync(htmlPath, 'utf8'); // review contents as output

let indexFile;

const requestListener = function (req, res) {
    /*fs.readFile(__dirname + "/index.html").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });*/
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

const server = http.createServer(requestListener);

fsPromise.readFile(`${homePath}`)
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });

/*server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});*/
