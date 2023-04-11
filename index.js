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


