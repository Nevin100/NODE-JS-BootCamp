import path from "path";

//basename:--> FileName
console.log(path.basename("c://Node//index.js", ".js"));
console.log(path.basename("c://mongo//index.html"));
console.log(path.basename("c://Radheshyam//app.jsx"));
console.log(path.basename("c://chintu//index.txt"));

//DirName:--> DirectoryName

console.log(path.dirname("c://mongo//index.html"));
console.log(path.dirname("c://monga//index.js"));
console.log(path.dirname("c://monza//index.jsx"));

//Extname:--> exensionName
console.log(path.extname("c://monga//index.jsx"));

//joinPath...
console.log(path.join("C:", "Nevin", "Node", "Socket.io"));

//parse:
console.log(path.parse("c://Radheshyam//app.jsx"));
