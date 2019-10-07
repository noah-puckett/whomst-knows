import addPart from '../src/function.js';
const test = QUnit.test;

test('appends part to parent element', function(assert) {
    //Arrange
    const colorName = 'yellow';
    const parentElement = document.createElement('div');
    const expected = '<span class="part yellow"></span>';

    //Act 
    addPart(parentElement, colorName);
    // Call the function you're testing and set the result to a const

    //Assert
    const parentInnerHTML = parentElement.innerHTML;
    assert.equal(parentInnerHTML, expected);
});