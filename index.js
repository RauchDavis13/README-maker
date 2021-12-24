// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
const { writeFile, copyFile } = require('./utils/generateMarkdown');


  
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([

  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',

  },
  
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email (Required)',
    
  },
  
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  
  },

  {
      type: 'input',
      name: 'description',
      message: 'Write a short description of your project',
    
    },
   
    {
      type: 'list',
      name: 'license',
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
    
    },

    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
      default: 'npm i',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to run tests?',
      default: 'npm test',
    
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
      
    
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user to know about contributing to the repo?',

    
    },
  ]);
  
};
questions().then(answers => console.log(answers));


      
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  //return inquirer.prompt(questions);
};

// Function call to initialize app
init();
