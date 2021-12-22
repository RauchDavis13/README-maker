// TODO: Include packages needed for this application
const inquirer = require('inquirer');
console.log("coding sucks");

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
  console.log(`
  =================
  Enter User Info
  =================
  `);
  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'project',
      message: 'What is the name of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('You need to enter a project GitHub link!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },
  
  ]);
};

const promptProject = portfolioData => {
  console.log(`
===================
Enter Project Info
===================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'confirm',
        name: 'confirmTOC',
        message: 'Would you like to add a Table Of Contents?',
        default: true
      },
      {
        type: 'input',
        name: 'TOC',
        message: 'Provide some information about yourself:',
        when: ({ confirmTOC }) => confirmTOC
      },
      {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to add an Installation section (recommended)?',
        default: true
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide a description of the installation of the project',
        when: ({ confirmInstall }) => confirmInstall
      },
      {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to add a Usage section (recommended)?',
        default: true
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide a description of the usage of the project',
        when: ({ confirmUsage }) => confirmUsage
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a License?',
        default: true
      },
      {
        type: 'input',
        name: 'license',
        message: 'Provide a license for the project (a badge will be added)',
        when: ({ confirmLicense }) => confirmLicense
      },
      {
        type: 'confirm',
        name: 'confirmContrib',
        message: 'Would you like to add a Contributor section (recommended)?',
        default: true
      },
      {
        type: 'input',
        name: 'contributor',
        message: 'Provide a contributor name',
        when: ({ confirmContrib }) => confirmContrib
      },
     
     
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  message = "Welcome to README-maker.  Answer the following questions to make your README.md file.";
  console.log(message);
  message = "You'll answer a series of questions to fill in sections for: my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions";
  console.log(message);
 
  // promptUser();
}

// Function call to initialize app
init();

// const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');





promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

