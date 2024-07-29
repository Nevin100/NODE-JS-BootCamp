import http from "http";
//Creating server!!
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write("<h1>Heyyyy from the node</h1>");
});

server.listen(9000, () => {
  console.log("server up babu!!");
});
