#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todo_list = [];
let loop_condtion = true;
while (loop_condtion) {
    let twoOptions = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: chalk.green("select any one option"),
            choices: ["Add", "Remove"],
        },
    ]);
    if (twoOptions.options === "Add") {
        let addOption = await inquirer.prompt([
            {
                name: "adding",
                type: "input",
                message: chalk.red("please type, what you want to add in your todos list"),
            },
        ]);
        if (addOption.adding !== "") {
            todo_list.push(addOption.adding);
            console.log(todo_list);
        }
        else {
            console.log(chalk.blue("You Should type anything, it is necessary"));
        }
    }
    else if (twoOptions.options === "Remove") {
        let remove = await inquirer.prompt([
            {
                name: "removing",
                type: "list",
                message: chalk.yellow("select any element you want to remove"),
                choices: todo_list,
            },
        ]);
        let indexNumber = todo_list.indexOf(remove.removing);
        if (indexNumber >= 0) {
            todo_list.splice(indexNumber, 1);
            console.log(chalk.magenta(`you removed : ${remove.removing}`));
            console.log(todo_list);
        }
    }
    let userAnsewr = await inquirer.prompt([
        {
            name: "confirmation",
            type: "confirm",
            message: chalk.cyan("if you want to continue so press Yes OR you want to exit so press No"),
            default: true,
        },
    ]);
    if (userAnsewr.confirmation === false) {
        loop_condtion = false;
    }
}
console.log(chalk.green("Thanks For Using Todo List"));
