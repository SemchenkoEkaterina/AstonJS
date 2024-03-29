//Как исправить "одни пятёрки"?

// var result = [];
// for (let i = 0; i < 5; i++) {
//     result[i] = function () {
//         console.log(i);
//     };
// }
// result[0](); //5
// result[1](); //5
// result[2](); //5
// result[3](); //5
// result[4](); //5

//////////////////////////////////////////////////

// function getGroup() {
//     let students = [];
//     for (let i = 0; i < 10; i++) {
//         students[i] = function() {
//             console.log(i);
//         }
//     }

//     return students;
// }

// let group = getGroup();

// group[0](); // 10 как исправить на 0
// group[5](); // 10                  5

//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.
// function multiply(a) {
//     let mul = a
//     const  _multiply = (b) => {
//         if (b) {
//             mul *= b;
//             return _multiply
//         } else {
//             return mul
//         }
//     }
//     return _multiply;
// }
// const result1 = multiply(2)(3)(4)();
// console.log(result1); // Вывод: 24
// const result2 = multiply(2)(3)(4)(5)();
// console.log(result2); // Вывод: 120

// const result1 = multiply(2)(3)(4)();
// console.log(result1); // Вывод: 24

// Пример использования:
// const result1 = multiply(2)(4)();
// console.log(result1); // Вывод: 8

// const result2 = multiply(5)(2)(3)(6)();
// console.log(result2); // Вывод: 180

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

// Первая реализация с помощью коллекции
// function getUniqArray(arr) {
//   const checkType = arr.every((el) => typeof el == "number" && !isNaN(el));
//   if (!checkType) {
//     throw Error(
//       "В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел"
//     );
//   }
//   const uniqueArr = new Set(arr);
//   return Array.from(uniqueArr);
// }

// Вторая реализация с помощью массивов
// function getUniqArray(arr) {
//   const checkType = arr.every((el) => typeof el == "number" && !isNaN(el));
//   if (!checkType) {
//     throw Error(
//       "В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел"
//     );
//   }
//   const uniqueArr = arr.reduce((acc, item) => {
//     if (acc.includes(item)) {
//       return acc;
//     } else {
//       return [...acc, item];
//     }
//   }, []);
//   return uniqueArr;
// }

// третья реализация с помощью массивов
// function getUniqArray(arr) {
//   const checkType = arr.every((el) => typeof el == "number" && !isNaN(el));
//   if (!checkType) {
//     throw Error(
//       "В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел"
//     );
//   }
//   const uniqueArr = [];
//   for (let num of arr) {
//     if (!uniqueArr.includes(num)) {
//       uniqueArr.push(num);
//     }
//   }
//   return uniqueArr;
// }
//  console.log(getUniqArray([1, 2, 3, 1, 3, 5, 3, 5, 6]))
