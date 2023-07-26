class Shape {
    constructor(children) {
        this.children = children;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
      }
    renderShape() {
        // Loop over children and convert any children that aren't strings to an
        // html string by calling its render method.
        return this.children
            .map((child) => {
                if (typeof child === 'string') {
                    return child;
                }
                return child.render();
            })
            .join('');
    }
}
class Circle extends Shape {
    constructor(children) {
        super(children);
    }
    render() {
        return ``;
    }
}
class Triangle extends Shape {

}
class Square extends Shape {

}
module.exports = { Circle, Triangle, Square };