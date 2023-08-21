// accessing the elements shared by another module/file
const names = require('./names_modules')
const sayHi = require("./modules")

// this will execute the function even without being invoked, if the func being imported is already called
require("./mind_grenade")

// call the function you have imported with arguments
sayHi(names.amos)
sayHi(names.peter)
sayHi("njoro")
sayHi("mankind")