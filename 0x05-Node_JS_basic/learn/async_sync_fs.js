// FILE SYSTEM builtin system - SYNCHRONOUS
const {readFileSync, writeFileSync} = require("fs")
console.log("start")
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8")

//append the file
writeFileSync("./content/resultsync.txt", `here is the result ${first}`, { flag: "a"})

console.log("done with task")
console.log("starting with the next one")