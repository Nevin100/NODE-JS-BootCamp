import * as fs from "fs";

fs.mkdirSync("c:\\nodejs\\courses\\demo", { recursive: true });
fs.rmdir("c:\\nodejs\\courses\\demo", { recursive: true });
