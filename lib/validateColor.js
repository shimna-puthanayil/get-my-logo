const { isValidColorName, isValidHSL, isValidRGB, } = require('is-valid-css-color');
function validateColor(color) {
    if (isValidColorName(color) || isValidRGB(color) || isValidHSL(color)) {
        return true;
    }
    else {
        return false;
    }
}
module.exports = { validateColor };