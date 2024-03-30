#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let loop = true;

while (loop) {
  let todoQuestion = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "please type anything You want to add in todos",
    },
    {
      name: "addTodo",
      type: "confirm",
      message: "You want to add anyhing more in todos",
      default: "false",
    },
  ]);

  todos.push(todoQuestion.todo);
  loop = todoQuestion.addTodo;
  console.log(todos);
}