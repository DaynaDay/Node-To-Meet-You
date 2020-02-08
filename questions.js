var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username",
      validate: function (nameInput) {
        if (nameInput) {
          return true;
        }
        {
          return false;
        },
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
    
  ]);

  .then(responseObj => {
    console.log(responseObj);
  
  });