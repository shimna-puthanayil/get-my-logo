const{Circle, Triangle,Square}=require('./shapes');
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
        // console.log(this.shapeColor);
        let shapeTag='';
        if(this.shape==="Circle")
        {
            shapeTag=new Circle(this.shapeColor,150,110,80).render();
        }
        else if(this.shape==="Triangle")
        {
            shapeTag=new Triangle(this.shapeColor,150,18,220,150,80,150).render();
        }
        else
        {
            shapeTag=new Square(this.shapeColor,100,100,100,100).render();
        }
        
        return shapeTag;
    }
    createSVG() {
        const svgText = this.renderText(); 
        const shapeTag=this.renderShape();
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${shapeTag}
        ${svgText}
        </svg>
        `;
    }

}
module.exports = SVG;