// Constructor Shapes is imported.
const { Circle, Triangle, Square } = require('./shapes');
// A testing suite for Shapes is created.
describe('Shapes', () => {
    // A test is created to check that render() function for Circle returns a circle  tag with the given shape color.
    describe('Circle', () => {
        it('should return a string for the circle tag with the given shape color', () => {
            const shapeColor='blue';
            const circle = new Circle(shapeColor, 150, 110, 60);
            expect(circle.render()).toEqual('<circle cx="150" cy="110" r="60" fill="blue"/>');
        });
    });

    // A test is created to check that render() function for Triangle returns a triangle  tag with the given shape color.
    describe('Triangle', () => {
        it('should return a string for the polygon tag to represent triangle with the given shape color', () => {
            const shapeColor='blue';
            const triangle = new Triangle(shapeColor, 150, 18, 240, 170, 56, 170);
            expect(triangle.render()).toEqual('<polygon points="150, 18 240, 170 56, 170" fill="blue"/>');
        });
    });

    // A test is created to check that render() function for Square returns a square  tag with the given shape color.
    describe('Square', () => {
        it('should return a string for the rect tag with equal height and width to represent square with the given shape color', () => {
            const shapeColor='blue';
            const square = new Square(shapeColor, 100, 60, 100, 100);
            expect(square.render()).toEqual('<rect x="100" y="60" width="100" height="100" fill="blue"/>');
        });
    });
});

