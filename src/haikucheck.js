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

//lineCount("this is a real haiku")
//lineCount("this is a real haiku")(conditioned input of the haiku in the previous param)

export default function lineCount(passage) {
  const passageArr = passage.split('\n');
  console.log("passageArr: " + passageArr);
  const syllableArr = passageArr.map(function (line, index) {
    const lineArr = line.split(" ");
    console.log("syllableArr index[" + index + "]:" + lineArr);
    const lineSyllArr = lineArr.map(function (word) {
      word = word.toLowerCase();
      if(word.length < 1) {
        return 0;
      }
      if(word.length <= 3) { 
        return 1; 
      }
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
      word = word.replace(/^y/, '');
      return word.match(/[aeiouy]{1,2}/g).length;
    });
    console.log("lineSyllArr: " + lineSyllArr);
    return lineSyllArr.reduce((lineSyllCount, runningSum) => lineSyllCount + runningSum);
  });
  console.log("syllableArr: " + syllableArr);
  if (syllableArr[0] === 5 && syllableArr[1] === 7 && syllableArr[2] === 5 && syllableArr.length === 3) {
    return true;
  }
  else {
    return false;
  }
}

// export default function lineCount(passage) {
//   const passageArr = passage.split('\n')
//   return function syllableCount(passageArr) {
//     const syllableArr = passageArr.map(function (line) {
//       const lineArr = line.split(" ");
//       const lineSyllArr = lineArr.map(function (word) {
//         word = word.toLowerCase();
//         if(word.length <= 3) { 
//           return 1; 
//         }
//         word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
//         word = word.replace(/^y/, '');
//         return word.match(/[aeiouy]{1,2}/g).length;
//       });
//       lineSyllArr.reduce((lineSyllCount, runningSum) => lineSyllCount + runningSum, 0);
//     });
//     if (syllableArr === [5,7,5]) {//syllableArr[0] === 5 && syllableArr[1] === 7 && syllableArr[2] === 5 && syllableArr.length === 3) \n
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
// }

// function new_count(word) {
//   word = word.toLowerCase();                                     //word.downcase!
//   if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
//     word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
//     word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
//     return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
// }