const inquirer = require("inquirer")
const fs = require("fs")

function showReadMe(data) {
    function renderLicenseBadge(data) {
        if(data === "MIT") {
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        }
        if(data === "APACHE 2.0") {
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        }
        if(data === "GPL 3.0") {
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        }
        if(data === "BSD 3") {
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        }
        if(data === "NONE") {
            return ''
        }
    }    

    console.log("show read me function", data)
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## description
${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necssary dependencies run the following command: ${data.installation}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} License

## Contributing

${data.contributing}

## Tests

To run tests run the following command:

${data.tests}

## Questions

If you have any questions please contact me at ${data.email}

My github is located at [${data.username}](https://github.com/${data.username})

`

}


function showQuestions() {
    inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:"What is the title for your project?"
        },
        {
            type:"input",
            name:"description",
            message:"Please describe your project"
        },
        {
            type:"input",
            name:"installation",
            message:"What command should be run for dependancy installation?",
            default:"npm i"
        },
        {
            type:"input",
            name:"usage",
            message:"How do you use this repo?"
        },
        {
            type:"list",
            name:"license",
            message:"What license is this repo under?",
            choices:["MIT","APACHE 2.0","GPL 3.0",'BSD 3',"NONE"]
        },
        {
            type:"input",
            name:"contributing",
            message:"Who is contributing to this repo?"
        },
        {
            type:"input",
            name:"tests",
            message:"What's the test command?",
            default:"npm run test"
        },
        {
            type:"input",
            name:"username",
            message:"What is your Github username?",
        },
        {
            type:"input",
            name:"email",
            message:"What is your email address?",
        },
    ])
        .then((answers) => {
            // showReadMe(answers)
            fs.writeFileSync("readme.md", showReadMe(answers))
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

showQuestions()


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
