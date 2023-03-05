import lineCount from '../src/haikucheck';

describe('lineCount', () => {
  test('receiving an input of one line should return a result of one', () => {
    const newString = "This is a line.";
    const numberOfLines = lineCount(newString);
    expect(numberOfLines).toEqual(1);
  });
  
  test('receiving an input of two or more lines should return a result of one', () => {
    const newString = "This is a line. \n This is a second one. \n And a third";
    const numberOfLines = lineCount(newString);
    expect(numberOfLines).toEqual(3);
  });

});