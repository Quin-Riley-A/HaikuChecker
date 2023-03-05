export default function lineCount(passage) {
  const passageArr = passage.split('\n')
  return passageArr.length;
}

// function isHaiku(passage) {
//  const haikuState = lineCount(passage) === 3 && other conditionals
//  return haikuState;
// }