var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "project",
    },
    {
      type: "input",
      message: "What is your project description?",
      name: "description",
    },
    {
      type: "input",
      message: "What are your project usages?",
      name: "usage",
    },
    {
      type: "input",
      message: "What is your Github name?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your github email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your github email?",
      name: "email",
    },
  ]);

  .then(responseObj => {
    console.log(responseObj);
  
  });