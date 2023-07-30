const { validateColor } = require('./validateColor');
const { Circle, Triangle, Square } = require('./shapes');

//class SVG

class SVG {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor.toLowerCase();
        this.shape = shape;
        this.shapeColor = shapeColor.toLowerCase();
        this.textTag = '';
        this.shapeTag = '';
        if (text.length > 3) {
            throw new Error('Text must not be more than 3 characters long.');
        }
    }

    //This function returns the tag for text of the logo

    setText() {
        try {
            if (validateColor(this.textColor)) {
                this.textTag = `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
            }
        }
        catch (e) {
            console.log('Invalid text color'); //  if the text color entered is a invalid 
            return e.Error;
        }

        return this.textTag;
    }

    //This function returns the tag for shape of the logo

    setShape() {
        switch (this.shape) {
            case 'Circle':
                //if the chosen shape is circle
                this.shapeTag = new Circle(this.shapeColor, 150, 110, 60).render();
                break;
            case 'Triangle':
                //if the chosen shape is triangle
                this.shapeTag = new Triangle(this.shapeColor, 150, 18, 240, 170, 56, 170).render();
                break;
            case 'Square':
                //if the chosen shape is square
                this.shapeTag = new Square(this.shapeColor, 100, 60, 100, 100).render();
                break;
            default: break;
        }
        return this.shapeTag;
    }

    // a function to generate markup for SVG file

    renderSVG() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeTag}
        ${this.textTag}
</svg>`;
    }
}
module.exports = SVG;