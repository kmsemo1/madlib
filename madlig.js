var inquirer = require('inquirer');

function Madlib (noun1, noun2, adjective, verb) {
    this.noun1 = noun1;
    this.noun2 = noun2;
    this.adjective = adjective;
    this.verb = verb;

    this.printInfo = function() {
        console.log("_________________________________")
        console.log("Once upon a " + this.noun1 +"there was a " + this.adjective + " village filled with " + this.noun2 + ". The villagers loved to " + this.verb + " all day long.");
        console.log("_________________________________")
    }
}

Madlib();

var askQuestion = function() {
    inquirer.prompt([
        {
name: "noun1",
message: "Enter a noun: "    
    },
    {
name:"noun2",
message:"Enter another noun: "
    },
    {
        name: "adjective",
        message:"Enter an adjective: "
    },
    {
        name: "verb",
        message: "Enter a verb: "
    }
])
}

askQuestion();