//packages needed for this file (is-valid-css-color)

const { isValidColorName, isValidHSL, isValidRGB, } = require('is-valid-css-color');

//returns true if the passed color is valid and throws an error if the color is invalid.

function validateColor(color) {
    if (isValidColorName(color) || isValidRGB(color) || isValidHSL(color)) {
        return true;
    }
    else {
        throw new TypeError('Invalid color');
    }
}
module.exports = { validateColor };