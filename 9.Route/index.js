import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home</h1>");
  } else if (req.url === "/about") {
    res.end("<h2>About</h2>");
  } else {
    res.end("<h1> 404 page not found </h1>");
  }
});

server.listen(8000, () => console.log("Server Up!!"));
