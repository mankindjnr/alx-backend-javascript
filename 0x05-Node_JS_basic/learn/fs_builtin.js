// FILE SYSTEM builtin system - SYNCHRONOUS
const {readFileSync, writeFileSync} = require("fs")
//this is similar to 
//const fs = require("fs")
//fs.read

//reading from the file system
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8")

console.log(first, second)

// creating a new file if it does not exist, overwrite if it exists
writeFileSync("./content/result-sync.txt", `here is the result ${first}, ${second}`)

//append the file
writeFileSync("./content/result-sync2.txt", `here is the result ${first}`, { flag: "a"})
