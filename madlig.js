var inquirer = require('inquirer');

function Madlib(nouns, adjective, verb, story) {
    this.nouns = nouns;
    this.adjective = adjective;
    this.verb = verb;
    this.story = "Once upon a [noun] there was a [adjective] village filled with [noun]. The villagers lover to [verb] all day long.";

}

var nouns = [];
var adjective = [];
var verb = [];

var loop = 0;

Madlib();

var getWords = function (loop) {
    console.log(nouns);
    console.log(adjective);
    console.log(verb);
    if (loop < 2) {
        inquirer.prompt({
            name: "noun",
            message: "Enter a noun: "
        }).then(function (answers) {
            nouns.push(answers.noun);
            loop++;
            getWords(loop);
        })
    }
    if (loop >= 2 && loop < 3) {
        inquirer.prompt({
            name: "adjective",
            message: "Enter an adjective: "
        }).then(function (answers) {
            adjective.push(answers.adjective);
            loop++;
            getWords(loop);
        })
    }
    if (loop >= 3 && loop < 4) {
        inquirer.prompt({
            name: "verb",
            message: "Enter a verb: "
        }).then(function (answers) {
            verb.push(answers.verb);
            var madLib = new Madlib(nouns, adjective, verb);
            console.log(madLib);
        })
    }
}

var constructStory = function (completeObject) {
    for (i = 0; i < 2; i++) {
        constructStory.story = completeObject.story.replace("[noun]", completeObject.nouns[i]);
    }
    for (i = 0; i < 2; i++) {
        constructStory.story = completeObject.story.replace("[adjective]", completeObject.adjective[i]);
    }
    for (i = 0; i < 2; i++) {
        constructStory.story = completeObject.story.replace("[verb]", completeObject.verb[i]);
    }
    console.log(completeObject.story);
}

getWords(loop);


