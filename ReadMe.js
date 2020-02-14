const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

const generateMarkdown = require('generate-markdown');
const questions = require('questions');

.then(promptResponse => {
  const queryUrl = `https://api.github.com/search/users?q=${promptResponse.username}`;


  axios.get(queryUrl).then(({ data }) => {
    const avatarURL = data.items[0].avatar_url


    fs.writeFile("readmeready.txt", `${username}`, function (err) {
      if (err) {
        throw err;
      }
      const markdownData = { ...promptResponse, readmeData: { ...data } };

      const finishedMarkdown = generateMarkdown(markdownData);

      fs.writeFile('./profile.md', finishedMarkdown, err => {
        if (err) {
          return console.log(err);
        }
        console.log('success!');
    })
