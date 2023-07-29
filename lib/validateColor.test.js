// Constructor validateColor is imported.
const {validateColor} = require('./validateColor');
// A testing suite for validateColor is created.
describe('validColor', () => {
    // A test is created to check that validateColor() function returns true for a valid color
    describe('validateColor', () => {
        it('should return true for a valid css color', () => {
            const color = 'red';
            const isValid = validateColor(color);
            expect(isValid).toEqual(true);
        });
    });

     // A test is created to check that validateColor() function throws an error for an invalid color
     describe('inValidColor', () => {
        it('should throw an error when the color is invalid', () => {
            const color = 'reds';
            const isValid = ()=> validateColor(color);
            const err = new Error('Invalid color');
            expect(isValid).toThrowError(err);
        });
    });
});