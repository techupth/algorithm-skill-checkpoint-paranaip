// Problem
// Write a function getTop2MaxNumbers that takes an Arrayay of numbers as input
// and returns an Arrayay containing the top two maximum numbers
// from the input Arrayay and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  const uniqueArray = [...new Set(numbers)]; //สร้าง array ใหม่ขึ้นมาและใช้ฟังก์ชั่น set() เพื่อเก็บค่า numbers ใหม่โดยไม่สนใจตัวซ้ำ
  uniqueArray.sort((a, b) => b - a); //เรียงลำดับจากมากไปหาน้อย
  return uniqueArray.slice(0, 2); //หั่นเอาค่า index no. ที่ต้องการโดยเริ่มรับค่าที่ index no.0 และให้ไปจบที่ index no.2 และตัดค่าของ index no.2 ออกด้วย
};

let result1 = getTop2MaxNumbers([10, 40, 20, 2, 9, 19]); //[40, 20]
console.log(result1);
let result2 = getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]); //[-2, -9]
console.log(result2);
let result3 = getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]); //[40, 20]
console.log(result3);
