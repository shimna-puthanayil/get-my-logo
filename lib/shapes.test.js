// Constructor Shapes is imported.
const { Circle, Triangle, Square } = require('./shapes');
// A testing suite for Shapes is created.
describe('Shapes', () => {
    // A test is created to check that render() function for Circle returns a circle SVG tag with the given shape color.
    describe('Circle', () => {
        it('should return a string for the circle SVG tag with the given shape color', () => {
            const circle = new Circle('blue', 150, 110, 60);
            expect(circle.render()).toEqual('<circle cx="150" cy="110" r="60" fill="blue"/>');
        });
    });

    // A test is created to check that render() function for Triangle returns a circle SVG tag with the given shape color.
    describe('Triangle', () => {
        it('should return a string for the triangle SVG tag with the given shape color', () => {
            const triangle = new Triangle('blue', 150, 18, 240, 170, 56, 170);
            expect(triangle.render()).toEqual('<polygon points="150, 18 240, 170 56, 170" fill="blue"/>');
        });
    });

    // A test is created to check that render() function for square returns a circle SVG tag with the given shape color.
    describe('Rectangle', () => {
        it('should return a string for the square SVG tag with the given shape color', () => {
            const square = new Square('blue', 100, 60, 100, 100);
            expect(square.render()).toEqual(' <rect x="100" y="60" width="100" height="100" fill="blue"/>');
        });
    });
});

