const http = require('http');

// the local computer where the server is running
const hostname ='127.0.0.1';
// a port we will use to watch for traffic
const port = 3000;

const server = http.createServer((req, res)=>{
    //create our server
    //status code to be returned to the client
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from Node');
});


server.listen(port, hostname, () => {
    //start watching for connections on the port specified
    console.log(`Server running at http://${hostname}:${port}/`);
});