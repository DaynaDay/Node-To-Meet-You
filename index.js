const fs = require("fs")
const inquirer = require("inquirer")
const axios = require("axios");


const markdown = profileData => {
  return `
  ## Project Title
#${profileData.project},

## Description
#${profileData.description},

## Installation

## Usage
#${profileData.usage},

};




