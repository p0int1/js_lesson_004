/*Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число*/

function myReduceRight(array, callback) {
    if (!Array.isArray(array) && typeof callback !== 'function') {
        console.log("Первый параметр обязателен и может принимать только массив");
        console.log("Второй параметр обязателен и может принимать только функцию");
        return;
    }
    let result = 0;
    for (let i = array.length; i > 0; i--) {
        result = callback(result, array[i - 1]);
    }
    return result;
}

function callback(previousValue, element) {
    return previousValue -= element;
}

const array = [2, -3, 5];
let result = myReduceRight(array, callback);
console.log(result);