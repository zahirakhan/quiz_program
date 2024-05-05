#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright(`
╦ ╦┌─┐┬  ┌─┐┌─┐┌┬┐┌─┐  ┌┬┐┌─┐  ┌┬┐┬ ┬┌─┐  
║║║├┤ │  │  │ ││││├┤    │ │ │   │ ├─┤├┤   
╚╩╝└─┘┴─┘└─┘└─┘┴ ┴└─┘   ┴ └─┘   ┴ ┴ ┴└─┘  
╔╦╗┬ ┬┌─┐┌─┐┌─┐┌─┐┬─┐┬┌─┐┌┬┐  ╔═╗ ┬ ┬┬┌─┐ 
 ║ └┬┘├─┘├┤ └─┐│  ├┬┘│├─┘ │   ║═╬╗│ ││┌─┘ 
 ╩  ┴ ┴  └─┘└─┘└─┘┴└─┴┴   ┴   ╚═╝╚└─┘┴└─┘ 
`));
const quiz = [
    {
        question: chalk.yellowBright.underline(`\n (1). What is TypeScript?`),
        choices: [
            "(a) A superset of Javascript",
            "(b) A scripting language",
            "(c) A database management system",
            "(d) A markup language"
        ],
        correctAnswer: "(a) A superset of Javascript"
    },
    {
        question: chalk.yellowBright.underline(`\n (2). Which command is used to compile a TypeScript file into JavaScript?`),
        choices: [
            "(a) ts compile file.ts",
            "(b) tsc file.ts",
            "(c) compile file.ts",
            "(d) tsc -compile file.ts"
        ],
        correctAnswer: "(b) tsc file.ts"
    },
    {
        question: chalk.yellowBright.underline(`\n (3). Which keyword is used to declare a variable in TypeScript?`),
        choices: [
            "(a) let",
            "(b) var",
            "(c) const",
            "(d) All of the above"
        ],
        correctAnswer: "(d) All of the above"
    },
    {
        question: chalk.yellowBright.underline(`\n (4). Which of the following is NOT a valid TypeScript data type?`),
        choices: [
            "(a) boolean",
            "(b) array",
            "(c) string",
            "(d) number"
        ],
        correctAnswer: "(b) array"
    },
    {
        question: chalk.yellowBright.underline(`\n (5). How do you install TypeScript globally using npm?`),
        choices: [
            "(a) npm install typescript",
            "(b) npm install -g typescript",
            "(c) npm typescript install -g",
            "(d) npm add typescript -g"
        ],
        correctAnswer: "(b) npm install -g typescript"
    }
];
async function startQuiz() {
    let score = 0;
    for (const query of quiz) {
        const { answer } = await inquirer.prompt({
            type: 'list',
            name: 'answer',
            message: (`\n ${query.question}\n`),
            choices: query.choices
        });
        if (answer === query.correctAnswer) {
            console.log(chalk.greenBright(`\n ______Correct!_____`));
            score++;
        }
        else {
            console.log(chalk.redBright.bold(`\n __Incorrect!___ ${chalk.bgBlack.whiteBright(`The correct answer is: ${query.correctAnswer}`)}`));
        }
    }
    console.log(chalk.cyanBright.underline.bold(`\n >>>  Quiz complete! Your score is: ${score}/${quiz.length} <<<\n `));
}
startQuiz();
