const{Circle, Triangle,Square}=require('./shapes');
class SVG {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.textTag='';
        this.shapeTag='';
        if (text.length > 3) {
            throw new Error('Text must not be more than 3 characters long.');
        }
    }
    setText() {
        this.textTag=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        
    }
    setShape() {
    
        if(this.shape==="Circle")
        {
            this.shapeTag=new Circle(this.shapeColor,150,110,80).render();
        }
        else if(this.shape==="Triangle")
        {
            this.shapeTag=new Triangle(this.shapeColor,150,18,220,150,80,150).render();
        }
        else
        {
            this.shapeTag=new Square(this.shapeColor,100,60,100,100).render();
        }
        
    }
    renderSVG() {
        this.setText(); 
        this.setShape();
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeTag}
        ${this.textTag}
        </svg>
        `;
    }

}
module.exports = SVG;