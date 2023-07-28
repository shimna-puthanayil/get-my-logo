const { validateColor } = require('./validateColor');
class Shape {
    constructor(color) {
        this.color = color;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }
    renderShapeColor() {

        if (validateColor(this.color)) {
            return this.color;
        }
        else {
            throw new TypeError('Invalid shape color');

        }
    }
}
class Circle extends Shape {
    constructor(color, cx, cy, r) {
        super(color);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    render() {
        try {

            return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.renderShapeColor()}"/>`;
        }
        catch (e) {
            console.log('Invalid shape color'); //  if the shape color entered is a invalid 
        }
    }
}

class Triangle extends Shape {
    constructor(color, p1, p2, p3, p4, p5, p6) {
        super(color);
        this.points = `${p1}, ${p2} ${p3}, ${p4} ${p5}, ${p6}`;
    }
    render() {
        return `<polygon points="${this.points}" fill="${this.renderShapeColor()}"/>`;
    }
}

class Square extends Shape {
    constructor(color, x, y, width, height) {
        super(color);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render() {
        return ` <rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.renderShapeColor()}"/>`;
    }
}
module.exports = { Circle, Triangle, Square };