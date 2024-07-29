import * as fs from "fs/promises";

//creating dir or file
try {
  await fs.mkdir("C:\\nodejs");
  console.log("File created...!!");
} catch (error) {
  console.log(error);
}

// //reading dir/folder
try {
  const files = await fs.readdir("C:\\nodejs");
  for (const file of files) {
    console.log(file);
  }
} catch (error) {
  console.log(error);
}

// //removing dir/folder
try {
  await fs.rmdir("C://nodejs");
} catch (error) {
  console.log(error);
}

// // create and writing files
try {
  await fs.writeFile("ReadMe.md", "Writing it asynchronously");
} catch (error) {
  console.log(error);
}

//Append Data:
try {
  await fs.appendFile("ReadMe.md", " \n Writing it asynchronously");
} catch (error) {
  console.log(error);
}

//file information
try {
  const info = await fs.stat("ReadMe.md");
  console.log(info);
  console.log(info.isDirectory());
  console.log(info.isFile());
} catch (error) {
  console.log(error);
}
