class SVG {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        if (text.length > 3) {
            throw new Error('Text must not be more than 3 characters long.');
        }
    }
// setText(){
//     const logoText = this.text;
//     return logoText;
// }
    renderText() {
        const svgText=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return svgText;
    }
    renderShape() {

    }
    createSVG() {
        const svgText = this.renderText(); 
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${svgText}
        </svg>
        `;
    }

}
module.exports = SVG;