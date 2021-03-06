const http = require("http");
const host = 'localhost';
const port = 1515;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Server is working!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

