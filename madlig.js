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
    concole.log(loop);
    if (loop < 2) {
        inquirer.prompt([
            {
                name: "noun1",
                message: "Enter a noun: "
            }
        ]).then(function (answers) {
            loop++;
            getWords(loop);
        })
    }
}

getWords(loop);


