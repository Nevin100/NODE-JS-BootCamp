import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./public/Home.html", (error, data) => {
      if (error) {
        throw error;
      }
      res.end(data);
    });
  }
});

server.listen(8000, () => console.log("Server up!!!"));
