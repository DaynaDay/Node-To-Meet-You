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
    
  ]);

  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
  });

  