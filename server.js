const http = require("http");

let counter = 1;

http.createServer(function (request, response) {
    if (request.url === "/") {
        // method: is a function that belongs to a variable (e.g. object)
        console.log(request.url, request.headers)
        response.end("hello world: " + counter)
        counter = counter + 1
    } else if (request.url === "/coffee") {
        response.writeHead(418);
        response.end("418 - I'm not a teepot!.");
    } else {
        response.writeHead(404);
        response.end("404 - Page not found.");
    }
}).listen(8080)
