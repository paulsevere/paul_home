const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("static/index.html", "utf-8");
const favicon = fs.readFileSync("static/favicon.ico");

http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      return res.end(favicon);
    }
    res.end(index);
  })
  .listen(80);
