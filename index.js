// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFile = require('./utils/createMarkdown');
  
// TODO: Create an array of questions for user input
const questions = () => {

  // uses inquire to prompt user for a series of questions, and the answers will be returned
  return inquirer.prompt([

  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub Username!');
        return false;
      }
    }
  },
  
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  },
  
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your project name');
        return false;
      }
    }
  
  },

  {
      type: 'input',
      name: 'description',
      message: 'Write a short description of your project',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a short description for your project');
          return false;
        }
      }
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
    message: 'What does the user need to know about contributing to the repo?',

    
  },
  ]);
};

// TODO: Create a function to initialize app
function init() {
  message = "Hello and welcome to README-maker.  Please answer the following quesitons for your README.md file to be built";
  console.log(message);
};

init();

// questions data passed to generateMarkdown.js
questions()
.then(answerData => {
  console.log('The following data has been entered for your README');
  console.log(answerData);
  writeFile(generateMarkdown(answerData));
})