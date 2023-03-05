import lineCount from '../src/haikucheck';
import syllableCount from '../src/haikucheck';

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

describe('syllableCount', () => {
  test('function will count and return the number of syllables in a given string input', () => {
    const testString = "Test String";
    const numberOfSyllables = syllableCount(testString);
    expect(numberOfSyllables).toEqual(2);
  });
});