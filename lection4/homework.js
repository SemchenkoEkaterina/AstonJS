// Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли):
// 1)
// console.log('1');
// setTimeout(() => console.log('2'), 5);
// let promiseNew = new Promise((resolve) => {
//     console.log('3');
//     resolve();
// });
// promiseNew.then(() => console.log('4'));
// setTimeout(() => console.log('5'));
// console.log('6');
////  1, 3, 6, 4, 2, 5 Такой порядок будет за счет задержки 1 мс, 
//// если задержку сделать больше 4 мс порядок изменится на 1, 3, 6, 4, 5, 2
//////////////////////////////
// 2)
// let promiseTree = new Promise((resolve, reject) => {
//     resolve("a");
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     }, 0);
//     console.log("3");
// });
// // 1, 3, 2
// ///////////////////////
// 3)
// let promiseTwo = new Promise((resolve, reject) => {
//     resolve("a");
// });
// promiseTwo
//     .then((res) => {
//         return res + "b";
//     })
//     .then((res) => {
//         return res + "с";
//     })
//     .finally((res) => { // нисего не передается
//         return res + "!!!!!!!";
//     })
//     .catch((res) => { // в reject ничего не уходило
//         return res + "d";
//     })
//     .then((res) => {
//         console.log(res);
//     });
//// abc
/////////////////////////////
// 4)
// function doSmth() {
//     return Promise.resolve("123");
// }
// doSmth()
//     .then(function (a) {
//         console.log("1", a); //
//         return a;
//     })
//     .then(function (b) {
//         console.log("2", b);
//         return Promise.reject("321");
//     })
//     .catch(function (err) {
//         console.log("3", err);
//     })
//     .then(function (c) {
//         console.log("4", c);
//         return c;
//     });
//// 1 123
//// 2 123
//// 3 321
//// 4 undefined
///////////////////////////
// 5)
// console.log("1");
// setTimeout(function () {
//     console.log("2");
// }, 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");
//// 1, 4, 3, 2
////////////////////////////
//7)
// async function a() {
//   console.log("a");
// }

// console.log("1");

// (async function () {
//   console.log("f1");
//   await a();
//   console.log("f2");
// })();
// console.log("2");
//// 1, f1, a, 2, f2
////////////////////////////////
//8)
// console.log(1);

// setTimeout(() => console.log(2));

// async function func() {
//   console.log(3);

//   await new Promise((resolve) => {
//     console.log(4);
//     resolve();
//     console.log(5);
//   })
//     .then(() => console.log(6))
//     .then(() => console.log(7));

//   console.log(8);
// }

// setTimeout(() => console.log(9));

// func();

// console.log(10);
//// 1, 3, 4, 5, 10, 6, 7, 8, 2, 9
///////////////////////////////////
// 9)*
function foo(callback) {
    setTimeout(() => {
        callback('A');
    }, Math.random() * 100);
}
function bar(callback) {
    setTimeout(() => {
        callback('B');
    }, Math.random() * 100);
}
function baz(callback) {
    setTimeout(() => {
        callback('C');
    }, Math.random() * 100);
}
// 1 способ
const promiseFn = function(fun) {
 return new Promise((res) => fun(res))
}
async function promiseFn1(){
    const pr1 = await promiseFn(foo);
    console.log(pr1);
    const pr2 = await promiseFn(bar);
    console.log(pr2);
    const pr3 = await promiseFn(baz);
    console.log(pr3);
}
promiseFn1()

//// 3 способ
// promiseFn(foo).then((res) => console.log(res))
// .then(() => promiseFn(bar)).then((res) => console.log(res))
// .then(() => promiseFn(baz)).then((res) => console.log(res))

//// 2 способ, но это вроде как дурной тон использовать Promise и async/await одновременно
// const promiseFn = async function() {
//     const pr1 = await new Promise((res) => foo(res));
//     console.log(pr1);
//     const pr2 = await new Promise((res) => bar(res));
//     console.log(pr2);
//     const pr3 = await new Promise((res) => baz(res));
//     console.log(pr3);
// }
// promiseFn();

// Написать функцию, чтобы починить последовательность выполнения A,B,C без использования колбэк хэлла
// в функциях foo, bar,baz запрещено что-либо менять
// подсказка: нужны промисы =))
