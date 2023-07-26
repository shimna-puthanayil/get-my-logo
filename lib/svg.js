class SVG {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        if(text.length>3){
            throw new Error('Text must not be more than 3 characters long.');
        }
    }
    render(){

    }
    setText() {
console.log(this.text );
console.log(this.textColor);
    }
    setShape() {

    }
    createSVG() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
       
        </svg>
        `;
    }

}
module.exports = SVG;