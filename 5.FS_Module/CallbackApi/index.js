import * as fs from "fs";

fs.mkdir("c:\\NODEJS", function (error) {
  if (error) throw error;
  console.log("Directory created.. Shabash!!");
});
