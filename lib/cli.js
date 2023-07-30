//packages needed for this application

const inquirer = require('inquirer');
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxLengthInput', maxLengthInputPrompt)
const { join } = require('path');
const { writeFile } = require('fs/promises');
const SVG = require('./svg');
class CLI {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }
    // This function creates the prompt interface
    run() {
        return inquirer
            .prompt([
                {
                    type: 'maxLengthInput',
                    name: 'text',
                    message: 'Please enter text for logo (Must not be more than 3 characters. )',
                    maxLength: 3,
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please enter a text color',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please choose a shape for logo',

                    choices: [
                        { name: 'Circle' },
                        { name: 'Triangle' },
                        { name: 'Square' },
                    ]
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please enter a shape color',
                },
            ])
            .then(({ text, textColor, shape, shapeColor }) => {
                const svg = new SVG(text.trim(), textColor.trim(), shape, shapeColor.trim());
                if (svg.setShape() && svg.setText()) {
                    return svg;
                }
            })
            .then((svg) => {
                //calls the function which returns markup for SVG file and logo.svg is stored in a folder named 'examples'.
                return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), svg.renderSVG());
            })
            .then(() => console.log('Generated logo.svg'))
            .catch((err) => {
                console.log('Oops. Something went wrong.');
            });
    }
}

module.exports = CLI;
