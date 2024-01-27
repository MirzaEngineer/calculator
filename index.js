// import chalk from "chalk";
// import inquirer from "inquirer";
// console.log(chalk.red.bgGreen.bgYellow("Mirza Usama"));
// const data = inquirer.prompt([
//     {
//         name: "num1",
//         type: "number",
//         message: "Enter number1",
//     }, {
//         name: "num2",
//         type: "number",
//         message: "Enter number2?"
//     }, {
//         name: "operate",
//         type: "list",
//         message: "Operation",
//         choices: ["+", "*", "/", "-", "^",]
//     }
// ]).then((value)=>{
//     console.log(value);
// })
// console.log(data);
import inquirer from "inquirer";
import chalk from "chalk";
const questions = [{
        name: "num1",
        type: "number",
        message: "Enter number1",
    }, {
        name: "num2",
        type: "number",
        message: "Enter number2?"
    }, {
        name: "operate",
        type: "list",
        message: "Operation",
        choices: ["+", "*", "/", "-", "^",]
    }
];
var reply = inquirer.prompt(questions);
reply.then((reply) => {
    switch (reply.operate) {
        case "+":
            console.log(chalk.red.bgWhite(`${reply.num1} + ${reply.num2} = ${reply.num1 + reply.num2}`));
            break;
        case "*":
            console.log(chalk.blue.bgYellow(`${reply.num1} * ${reply.num2} = ${reply.num1 * reply.num2}`));
            break;
        case "-":
            console.log(chalk.black.bgGreen(`${reply.num1} - ${reply.num2} = ${reply.num1 - reply.num2}`));
            break;
        case "/":
            console.log(chalk.yellow.bgGray(`${reply.num1} / ${reply.num2} = ${reply.num1 / reply.num2}`));
            break;
        case "^":
            console.log(chalk.cyanBright.bgRedBright(`${reply.num1} ^ 2 = ${reply.num1 * reply.num2}`));
            break;
        default:
            break;
    }
    // console.log("replies", reply);
});
reply.catch((error) => {
    console.log("Error", error);
});
