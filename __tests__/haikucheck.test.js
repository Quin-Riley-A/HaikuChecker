import lineCount from '../src/haikucheck';

describe('lineCount', () => {
  test('receiving an input of one line should return a result of one', () => {
    const newString = "This is a line.";
    const numberOfLines = lineCount(newString);
    expect(numberOfLines).toEqual(1);
  });
  

});