// string;
let myName: string = 'chinhpd5';
console.log(myName);

// number
let myAge: number = 10;
let score: number = 9.5;
let math = -10;

// boolean
let myGender: boolean = true;

// array
let myArray: string[] = ["nam", "Long", "bình"];
// myArray.push(10);
let myArray2: number[] = [0, 1, -3, 4.5];

for(let i: number = 0; i< myArray.length; i++){
  console.log(myArray[i]);
}

// object
let myInfo: {
  name: string,
  age: number,
  gender: boolean
} = {
  name: 'chinhpd5',
  age: 10,
  gender: false
}

console.log(
  `Tôi tên là ${myInfo.name}, 
  Tuổi: ${myInfo.age}, 
  Giới tính: ${myInfo.gender ? 'Nam': 'Nữ'}`
);

function showInfo(name: string): string {
  return `Xin chào ${name}`
}

console.log(showInfo('chinhpd5'));

const sum = (a: number, b: number): number => {
  return a+b;
}
console.log(sum(1, 2));

const myFun = (): void => {
  console.log("Hello");
  
}
myFun()





// 1. Hàm viết hoa tên
function toUpperCaseName(name: string): string {
  return name.toUpperCase();
}

// 2. Hàm tính bình phương
function calculateSquare(n: number): number {
  return n * n;
}

// 3. Hàm kiểm tra số chẵn
function isEven(n: number): boolean {
  return n % 2 === 0;
}

// 4. Hàm tính tổng mảng
function sumArray(numbers: number[]): number {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// 5. Hàm lấy thông tin sinh viên
function getStudentName(student: { name: string; age: number; gender: boolean }): string {
  const gioiTinh = student.gender ? "Nam" : "Nữ";
  return `Tên: ${student.name}, Tuổi: ${student.age}, Giới tính: ${gioiTinh}`;
}