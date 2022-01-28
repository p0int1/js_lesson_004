/*Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число*/

function myReduce(array, callback) {
    if (!Array.isArray(array) && typeof callback !== 'function') {
        console.log("Первый параметр обязателен и может принимать только массив");
        console.log("Второй параметр обязателен и может принимать только функцию");
        return;
    }
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i]);
    }
    return result;
}

function callback(previousValue, element) {
    return previousValue -= element;
}

const array = [2, -3, 5];
let result = myReduce(array, callback);
console.log(result);