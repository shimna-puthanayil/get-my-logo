class Shape {
    constructor(color) {
        this.color = color;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }
    renderShapeColor() {
     
        if (typeof this.color === 'string') {
            return this.color;
        }
       
    }
}
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="150" cy="110" r="80" fill="${this.renderShapeColor()}"/>`;
    }
}
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="150, 18 220, 150 80, 150" fill="${this.renderShapeColor()}"/>`;
    }
}
class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return ` <rect x="100" y="60" width="100" height="90" fill="${this.renderShapeColor()}"/>`;
    }
}
module.exports = { Circle, Triangle, Square };