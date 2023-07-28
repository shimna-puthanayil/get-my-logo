const { validateColor } = require('./validateColor');
const { Circle, Triangle, Square } = require('./shapes');
class SVG {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor.toLowerCase();
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.textTag = '';
        this.shapeTag = '';
        if (text.length > 3) {
            throw new Error('Text must not be more than 3 characters long.');
        }
    }
    setText() {

        if (validateColor(this.textColor)) {
            this.textTag = `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }
        else {
            throw new TypeError('Invalid text color');
        }
        return this.textTag;
    }
    setShape() {
        switch (this.shape) {
            case 'Circle':
                this.shapeTag = new Circle(this.shapeColor, 150, 110, 60).render();
                break;
            case 'Triangle':
                this.shapeTag = new Triangle(this.shapeColor, 150, 18, 240, 170, 56, 170).render();
                break;
            case 'Square':
                this.shapeTag = new Square(this.shapeColor, 100, 60, 100, 100).render();
                break;
            default: break;
        }
        return this.shapeTag;
    }
    renderSVG() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                ${this.shapeTag}
                ${this.textTag}
                </svg>`;
    }
}
module.exports = SVG;