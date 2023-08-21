// OS module
const os = require("os")

//info about current user
const user = os.userInfo()

// return the system uptime in seconds
//console.log(`system uptime is: ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}


// PATH module
const path = require("path")

console.log(path.sep)
console.log(path.join)
const createFilePath = path.join("/folder/", "subfolder", "file.txt")
