/* ####Задача 2
Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию*/

function myFilter(array, callback) {
    if (!Array.isArray(array) && typeof callback !== 'function') {
        console.log("Первый параметр обязателен и может принимать только массив");
        console.log("Второй параметр обязателен и может принимать только функцию");
        return;
    }
    let mas = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            mas.push(array[i]);
        }
    }
    return mas;
}

function callback(element) {
    return element >= 5;
}

const array = [2, 3, 4, 5, 6, 7];
let new_arr = myFilter(array, callback);
console.log(new_arr);