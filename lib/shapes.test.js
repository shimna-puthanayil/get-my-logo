// Constructor Shape is imported.

const { Circle, Triangle, Square, Shape } = require('./shapes');

// A testing suite for Shapes is created.

describe('Shapes', () => {

    // A test is created to check that render() function for Circle returns a circle  tag with the given shape color.
    describe('Circle', () => {
        it('should return a string for the circle tag with the given shape color', () => {
            const shapeColor = 'blue';
            const circle = new Circle(shapeColor, 150, 110, 60);
            expect(circle.render()).toEqual('<circle cx="150" cy="110" r="60" fill="blue"/>');
        });
    });

    // A test is created to check that render() function for Circle returns undefined when the shape color is invalid.
    describe('Invalid color for Circle', () => {
        it('should return undefined when the shape color is invalid', () => {
            const shapeColor = 'blues';
            const circle = new Circle(shapeColor, 150, 110, 60);
            expect(circle.render()).toBeUndefined();
        });
    });

    // A test is created to check that render() function for Triangle returns a polygon tag with the given shape color.
    describe('Triangle', () => {
        it('should return a string for the polygon tag to represent triangle with the given shape color', () => {
            const shapeColor = 'blue';
            const triangle = new Triangle(shapeColor, 150, 18, 240, 170, 56, 170);
            expect(triangle.render()).toEqual('<polygon points="150, 18 240, 170 56, 170" fill="blue"/>');
        });
    });

    // A test is created to check that render() function for Triangle returns undefined when the shape color is invalid.
    describe('Invalid color for Triangle', () => {
        it('should return undefined when the shape color is invalid', () => {
            const shapeColor = 'blues';
            const triangle = new Triangle(shapeColor, 150, 18, 240, 170, 56, 170);
            expect(triangle.render()).toBeUndefined();
        });
    });

    // A test is created to check that render() function for Square returns a rect tag with the given shape color.
    describe('Square', () => {
        it('should return a string for the rect tag with equal height and width to represent square with the given shape color', () => {
            const shapeColor = 'blue';
            const square = new Square(shapeColor, 100, 60, 100, 100);
            expect(square.render()).toEqual('<rect x="100" y="60" width="100" height="100" fill="blue"/>');
        });
    });

    // A test is created to check that render() function for Square returns undefined when the shape color is invalid.
    describe('Invalid color for Square', () => {
        it('should return undefined when the shape color is invalid', () => {
            const shapeColor = 'blues';
            const square = new Square(shapeColor, 100, 60, 100, 100);
            expect(square.render()).toBeUndefined();
        });
    });

    // A test is created to check that render() function for Shape throws an error.
    describe('render method for Shape', () => {
        it('should throw an error when render() method is called', () => {
            const shape = new Shape('');
            function render() {
                shape.render();
            }
            const err = new Error('Child class must implement a render() method.');
            expect(render).toThrowError(err);
        });
    });
});

