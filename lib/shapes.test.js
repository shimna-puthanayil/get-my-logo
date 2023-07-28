// Constructor Shapes is imported.
const { Circle, Triangle, Square } = require('./shapes');
// A testing suite for Shapes is created.
describe('Shapes', () => {
    // A test is created to check that render() function for Circle returns a circle SVG tag with the given shape color.
    describe('Circle', () => {
      it('should return a string for the circle SVG tag with the given shape color', () => {
        const circle = new Circle("red", 150, 110, 60);
        expect(circle.render()).toEqual('<circle cx="150" cy="110" r="60" fill="red"/>');
      });
    });
  });
  
