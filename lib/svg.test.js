// Constructor SVG is imported.
const SVG = require('./svg');
// A testing suite for SVG is created.
describe('SVG', () => {
    // A test is created to check that setShape() function for Circle returns a circle tag with the given shape color.
    describe('setShape', () => {
        it('should return a string for the circle SVG tag with the given shape color', () => {
            const shape = 'Circle';
            const shapeColor = 'red';
            const svg = new SVG('', '', shape, shapeColor);
            expect(svg.setShape()).toEqual('<circle cx="150" cy="110" r="60" fill="red"/>');
        });
    });

    // A test is created to check that setShape() function for Triangle returns a polygon  tag with the given shape color.
    describe('setShape', () => {
        it('should return a string for the polygon tag to represent triangle with the given shape color', () => {
            const shape = 'Triangle';
            const shapeColor = 'red';
            const svg = new SVG('', '', shape, shapeColor);
            expect(svg.setShape()).toEqual('<polygon points="150, 18 240, 170 56, 170" fill="red"/>');
        });
    });

    // A test is created to check that setShape() function for Square returns a rect tag with the given shape color.
    describe('setShape', () => {
        it('should return a string for the rect SVG tag with equal height and width to represent square with the given shape color', () => {
            const shape = 'Square';
            const shapeColor = 'red';
            const svg = new SVG('', '', shape, shapeColor);
            expect(svg.setShape()).toEqual('<rect x="100" y="60" width="100" height="100" fill="red"/>');
        });
    });

    // A test is created to check that setText() function returns a  text tag with the given text and color.
    describe('setText', () => {
        it('should return a string for the text SVG tag with the given text and color', () => {
            const text = 'SVG';
            const textColor = '#333';
            const svg = new SVG(text, textColor, '', '');
            expect(svg.setText()).toEqual('<text x="150" y="125" font-size="40" text-anchor="middle" fill="#333">SVG</text>');
        });
    });

    // A test is created to check that renderSVG() function returns a text tag and shape tag enclosed with in  a SVG tag with the given text, text color, shape and shape color.
    describe('renderSVG()', () => {
        it('should return a string for the SVG tag with the given text, text color, shape and shape color', () => {
            const svg = new SVG('SVG', 'MAROON', 'Circle', 'teal');
            svg.setText();
            svg.setShape();
            expect(svg.renderSVG()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="110" r="60" fill="teal"/>
                <text x="150" y="125" font-size="40" text-anchor="middle" fill="maroon">SVG</text>
                </svg>`);

        });
    });

     // A test is created to check that the length of logo text is not more than 3.
     describe('textLength', () => {
        it('should throw an error when the text length is greater than 3', () => {
            const text = 'SVGt';
            const err = new Error('Text must not be more than 3 characters long.');
            const svg =()=> new SVG(text,'', '', '');
            expect(svg).toThrowError(err);
        });
    });
});


