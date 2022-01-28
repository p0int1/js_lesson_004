/* ####Задача 3
Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию*/

function myEvery(array, callback) {
    if (!Array.isArray(array) && typeof callback !== 'function') {
        console.log("Первый параметр обязателен и может принимать только массив");
        console.log("Второй параметр обязателен и может принимать только функцию");
        return;
    }

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

function callback(element) {
    return element > 1;
}

const array = [2, 3, 4, 5, 6, 7];
let result = myEvery(array, callback);
console.log(result);