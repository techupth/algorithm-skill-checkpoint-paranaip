// Problem
// Given a string,
// find and return the characteracter that appears most frequently in the string.

// Examples:
// getMaxcharacteracters("abcccccccd") === "c"
// getMaxcharacteracters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const characterCounts = {}; //สร้าง object เปล่าเพื่อเก็บผลการนับ
  for (let character of str) {
    //loop เพื่อนับจำนวนตัวอักษร
    if ((characterCounts[character] = characterCounts[character])) {
      //ถ้าตัวอักษรมีค่าตรงกัน
      characterCounts[character] = characterCounts[character] + 1; //ให้เพิ่มค่าผลการนับตัวอักษร +1
    } else {
      characterCounts[character] = 1; //ถ้าไม่ตรงกันให้ค่าตัวอักษรเท่ากับ 1
    }
  }
  console.log(characterCounts);

  let maxCharacter = ""; //declare variable maxCharacter ให้มีค่าเท่ากับ string เปล่า
  let maxCount = 0; //declare variable maxCount ให้มีค่าเท่ากับ 0
  for (let character in characterCounts) {
    //loop ตัวอักษรใน object characterCounts
    if (characterCounts[character] > maxCount) {
      //ถ้าจำนวนตัวเลขใน object มีค่ามากกว่า maxcount
      maxCharacter = character; //ให้ maxCharacter มีค่าเท่ากับตัวอักษรนั้น
      maxCount = characterCounts[character]; //และให้ maxCount มีค่าเท่ากับจำนวนตัวเลขของ character ใน object characterCounts
    }
  }
  return maxCharacter; //ให้คืนผลลัพธ์มาเป็นค่าของ maxCharacter
};

let result1 = getMaxCharacters("abcccccccd"); //"c"
console.log(result1);
let result2 = getMaxCharacters("apple 1231111"); //"1"
console.log(result2);
