/*####Задача 10
Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив*/

function myReverse(array) {
    if (!Array.isArray(array))
        throw new Error('Параметр array не является массивом');
    if (array.length == 0)
        throw new Error('Массив нулевой длинны');
    let revers = [];
    for (let i = 0; i < array.length; i++)
        revers.unshift(array[i])
    return revers;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr);
arr = myReverse(arr);
console.log(arr);


