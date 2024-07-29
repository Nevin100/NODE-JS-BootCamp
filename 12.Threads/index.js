import fs from "fs";

//Without CallBack
console.log("Start!");
const read = fs.readFileSync("text.txt");
console.log(read.toString());
console.log("Stop!!");

// With Callback
console.log("Start!");
fs.readFile("text.txt", "utf-8", (err, res) => {
  err ? console.log(err) : console.log(res);
});
console.log("Stop!");
