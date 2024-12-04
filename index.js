
/*
HTTP Server in node js with logs

const http = require("http");
const { console, url } = require("inspector");
const fs = require("fs")

const myserver = http.createServer((req, res) => {

    const log = `${Date.now()} ${req.url} New Req received\n`
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/home":
                res.end("Homepage")

                break;
            case "/name":
                res.end("My name is Harsh")

            default:
                res.end("Hello from server")
                break;
        }
    })
});

myserver.listen(8000);
*/

// Express Server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from Home page!");
})

app.get("/about", (req, res) => {
    return res.send(`Hello ${req.query.name} from about page`);

})

app.listen(8000, () => console.log("Server started"));
