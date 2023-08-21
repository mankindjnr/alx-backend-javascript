process.stdin.setEncoding("utf-8");

console.log("Welcome to Holberton School, what is your name?");

process.stdin.on("data", function(input){
    input = input.trim()
    console.log(`Your name is: ${input}`);
});

process.stdin.on("end", function() {
    console.log("This important software is now closing");
});

process.stdin.resume();