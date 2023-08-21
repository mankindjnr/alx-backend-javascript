// a no_name function is stored in the variable sayHi that takes a single argument name
const displayMessage = (greet) => {
  console.log(`${greet}`);
};

// exporting the function using the variable its stored in
module.exports = displayMessage;
