const inquirer = require('inquirer');
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
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Please enter text for logo (Must not be more than 3 characters. )',
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
                const svg = new SVG(text, textColor, shape, shapeColor);
                svg.setText();
                svg.setShape();
                return svg;
            })
            .then((svg) => {
                return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), svg.renderSVG());

            })
            .then(() => console.log('Generated logo.svg'))
            .catch((err) => {
                console.log(err);
                console.log('Oops. Something went wrong.');
            });
    }
}

module.exports = CLI;
