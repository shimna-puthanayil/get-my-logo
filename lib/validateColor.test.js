// Constructor validateColor is imported.
const {validateColor} = require('./validateColor');
// A testing suite for validateColor is created.
describe('validateColors', () => {
    // A test is created to check that validateColor() function returns true for a valid color
    describe('validateColor', () => {
        it('should return true for a valid css color', () => {
            const color = 'red';
            const isValid = validateColor(color);
            expect(isValid).toEqual(true);
        });
    });
});