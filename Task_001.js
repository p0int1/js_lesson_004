/* ####Задача 1
Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию*/

function myForEach(array, callback) {
    if (!Array.isArray(array) && typeof callback !== 'function') {
        console.log("Первый параметр обязателен и может принимать только массив");
        console.log("Второй параметр обязателен и может принимать только функцию");
        return;
    }
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function callback(element) {
    console.log(element + 1);
}

const array = [2, 3, 4, 5, 6, 7];
myForEach(array, callback);










































// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i]);
//     }
// };

// function callback(element) {
//     console.log(element + 1);
// }

// var array = [2, 4, 6, 8, 10];
// array.myForEach(callback);
