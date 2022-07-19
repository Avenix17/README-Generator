// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {licenses, generateMarkdown} = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        default: 'Project Title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license do you wish to use?',
        name: 'license',
        choices: Object.keys(licenses),
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.stat('build', (err, stat) => {
        if (err) {
            fs.mkdirSync('build');
        }
        fs.writeFile('build/' + fileName, data, err => {
            if (err) {
                return console.log(err);
            }
            console.log('Congratulations! Your README.md file has been created!!');
        });
    });
}

// Function to initialize app
async function init() {
    try {

        //Inquirer questions
        const responses = await inquirer.prompt(questions);
        console.log('Submitted repsonses: ', responses);

        //Inserts responses into generateMarkdown
        const markdown = generateMarkdown(responses);

        //Makes markdown into file? Uses writeToFile function.
        writeToFile('README.md', markdown);
    }
    catch (error) {
        console.log(error);
    }
}

init();
