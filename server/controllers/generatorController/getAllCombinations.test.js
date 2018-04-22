const { getAllCombinations } = require('./index');

const inputs = ['2', '3'];
const expectedResult = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

test('test inputs 2 and 3 to be equal with expected result', () => {
    expect(getAllCombinations(inputs)).toEqual(expectedResult);
});
