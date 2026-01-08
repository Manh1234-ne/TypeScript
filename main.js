// string;
var myName = 'chinhpd5';
console.log(myName);
// number
var myAge = 10;
var score = 9.5;
var math = -10;
// boolean
var myGender = true;
// array
var myArray = ["nam", "Long", "bình"];
// myArray.push(10);
var myArray2 = [0, 1, -3, 4.5];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// object
var myInfo = {
    name: 'chinhpd5',
    age: 10,
    gender: false
};
console.log("T\u00F4i t\u00EAn l\u00E0 ".concat(myInfo.name, ", \n  Tu\u1ED5i: ").concat(myInfo.age, ", \n  Gi\u1EDBi t\u00EDnh: ").concat(myInfo.gender ? 'Nam' : 'Nữ'));
function showInfo(name) {
    return "Xin ch\u00E0o ".concat(name);
}
console.log(showInfo('chinhpd5'));
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2));
var myFun = function () {
    console.log("Hello");
};
myFun();
// 1. Hàm viết hoa tên
function toUpperCaseName(name) {
    return name.toUpperCase();
}
// 2. Hàm tính bình phương
function calculateSquare(n) {
    return n * n;
}
// 3. Hàm kiểm tra số chẵn
function isEven(n) {
    return n % 2 === 0;
}
// 4. Hàm tính tổng mảng
function sumArray(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        sum += num;
    }
    return sum;
}
// 5. Hàm lấy thông tin sinh viên
function getStudentName(student) {
    var gioiTinh = student.gender ? "Nam" : "Nữ";
    return "T\u00EAn: ".concat(student.name, ", Tu\u1ED5i: ").concat(student.age, ", Gi\u1EDBi t\u00EDnh: ").concat(gioiTinh);
}
