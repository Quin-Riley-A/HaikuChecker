export default function lineCount(passage) {
  const passageArr = passage.split('\n')
  return passageArr.length;
}

export function syllableCount(passage) {
  const syllablePattern = /([bcdfghjklmnpqrstvwxyz]*)([aeiouy]+[bcdfghjklmnpqrstvwxyz]*)*/gi
  const foundSyllables = passage.match(syllablePattern);
  console.log(foundSyllables);
  return foundSyllables.length;
}

// const syllablePattern = /([bcdfghjklmnpqrstvwxyz]*)([aeiouy]+[bcdfghjklmnpqrstvwxyz]*)*/gi
// String.prototype.match()
// function isHaiku(passage) {
//   const haikuState = lineCount(passage) === 3 && other conditionals
//   return haikuState;
// }

//(?:[^laeiouy]es?|ed)$/