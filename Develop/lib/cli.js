const inquirer = require('inquirer');


class CLI {
    constructor() {

    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Please enter text for logo',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please enter color of text',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please choose shape for logo',

                    choices: [
                        { name: 'Circle' },
                        { name: 'Triangle' },
                        { name: 'Square' },
                    ]
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please enter color of shape',
                },
            ])
          
    } 
}

module.exports = CLI;
