const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("static/index.html", "utf-8");

http
  .createServer((req, res) => {
    res.end(index);
  })
  .listen(80);
