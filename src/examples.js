const obj = {
  name: 'Nik',
  age: 33,
  skills: ['javascript', 'typescript']
}; // Это объект

// console.log(obj.name);
// console.log(obj.skills);

const array = [
  1,
  2,
  3,
  5, // Как получить число 5?
  8,
  13,
  21
] // Число фибоначчи

// console.log(array[0]) // 1
// console.log(array[3]) // 5

// Массив в JavaScript — это упорядоченный список элементов с указанным индексом (ключом к ним).

// 1. Как нам в конце добавить новое число?

// array.push(34) // push - толкать. Добавить в конце число

// 2. Как нам узнать длинну массива?

// console.log(array.length) // Длинна массива.

// push - это метод массива(встроенный). Просто функция.
// length - это свойства массива(встроенный). Просто переменная.

// 3. Какие ещё методы есть?

// // Добавлять в начало
// array.unshift(-1000);

// console.log(array);

// // Убираем из конца. 
// array.pop();

// console.log(array);

// // Убираем из начала. 
// array.shift();

// console.log(array);

// 4. Ещё методы.

// Найти что-то
const fiveNumber = array.find(value => value === 500);

// console.log(fiveNumber) // Или значение или undefined

// Отфильтровать
const onlyOddNumber = array.filter(value => value % 2);

// console.log(onlyOddNumber)

// Преобразовать
const multiHundred = array.map(value => value * 100);

// console.log(multiHundred)

// reduce - это сокращать. Функция трансформатор массивов.
// array - object
// sum array
// 1,2,3,5,8 => 17.
// 1,2,3,5,8 => { 1: 1, 2: 2, 3: 3, 5: 5, 8: 8 };

// console.log(sumArray([1, 2, 3]));

// array

// const ourResult = array.reduce((result, currentValue) => {
//   // Код

//   return result;
// }, initValue);

function sumArray(array) {
  return array.reduce((res, value) => {
    res = res + value; // на каждой итерации суммирую значения.

    return res;
  }, 0);
}

function arrayToObject(array) {
  return array.reduce((res, value) => {
    res[value] = value;

    return res;
  }, {});
}

// console.log(arrayToObject([1, 2, 3, 5, 8]));
// { '1': 1, '2': 2, '3': 3, '5': 5, '8': 8 }

// array.reduce - это метод массива, у него два аргумента

// 1 Аргумент - это функция которая выполняется на каждом проходе цикла.
// Эта функция-аргумент принимает 4 аргумента
// Первый - это накопитель результата. Остальные значение массива, индекс и все массива
// Второй аргумент - это начальное значение накопителя результата.

// Циклы обычные циклы

// underscore и lodash
// for и while

// Это тоже перебор массива
// for (let index = 0; index < array.length; index++) {
//   console.log('индекс:', index, 'значение:', array[index]);
// }

// // Есть вариация for

// for (let value of array) {
//   console.log('значение:', value);
// }

// // while

// // Условия входа в цикл
// let index = 0;

// // Условия проверки
// while(index < array.length) {
//   console.log('индекс:', index, 'значение:', array[index]);
  
//   // код в конце цикла.
//   index++;
// }


const user = {
  name: 'Nik', // ключ - это свойство объекта
  surname: 'Lapshin',
  'some-key': 'value',
  showFullName() { // это называется метод.
    console.log(`${this.name} ${this.surname}`);
  }
}

// Добавляем свойство
user.age = 33;

// изменяем свойство
user.name = 'New nik';

user['some-key']

// удаляем
delete user.age;

user.showFullName();

// 1 Способ
// Использовать for in

for (const key in user) {
  // console.log(key, user[key]);
}

// 2 Способ
// Преобразовать в массив и работать как с массив

// Получить массив ключей
console.log(Object.keys(user)); // массив ключей
console.log(Object.values(user)); // массив значенй
console.log(Object.entries(user)); // массив ключ-значение

// JSON - это объект?
// HTML - это формат данных, Markdown, XML


// // mock и stub
// // https://jestjs.io/ru/docs/mock-function-api

// // localStorage.getItem('key')

// // Объекты и массив
// // 1. Типы данных JS
// // 2. Про массивы и объекты.
// // 3. Практические задания.

// // Вопрос. Сколько типов данных? 8(6).

// // 1. undefined
// // 2. null

// let str;

// //console.log(str) // undefined
// str = null // null

// // 3. string
// // 4. number(integer and float)
// // 5. boolean(true, false)

// // integer - целочисленный тип. -100, 1, 2 и т.д.
// // float - с плавающей точкой. -100.5, 1.1, 3.14 и т.д.
// // Infinity - это бесконечность.

// // 6. Object.

// const user = {
//   username: 'nik',
//   age: 32,  
// }

// // 7. BigInt, 8. Symbol

// // 8 типов, но используются 6.
// // формат JSON. Нет undefined.


// describe('user', () => {
//   const myUser = {
//     username: 'nik',
//     age: 32,
//     balance: {
//       amount: -100,
//       currency: 'usd'
//     }
//   }

//   test('should compare user', () => {
//     expect(myUser).toEqual({
//       username: 'nik',
//       age: 32,
//       balance: {
//         amount: -100,
//         currency: 'usd'
//       }
//     })

//     expect(myUser.balance.amount).toEqual(-100)
//     expect(myUser?.price?.value).toEqual(undefined)
//   })
// })

// /*
// console.log(myUser) // выведет весь объект
// console.log(myUser.balance.currency) // выведет currency
// console.log(myUser.balance.value) // выведет undefined
// // console.log(myUser.price.value) // Error. Cannot read properties of undefined (reading 'value')
// console.log(myUser?.price?.value) // выведет undefined
// */
// // myUser.price // undefined - это не объект

// // Объекты - это набор данных. Получить доступ по ключу.

// // Массив - это коллекция данных.

// const users = [
//   {
//     username: 'nik',
//     age: 32
//   },
//   {
//     username: 'kate',
//     age: 25
//   },
//   {
//     username: 'petya',
//     age: 18
//   },
// ]

// // Первый элемент - это нулевой индекс(0)
// console.log(users[0]) // Получить первый элемент массив.
// console.log(users[1]) // Получить второй элемент массив.

// users.push({ username: 'elena', age: 15 }) // Добавить элемент в конец
// console.log(users)

// users.pop() // Убрать последний элемент
// console.log(users)

// users.unshift({ username: 'elena', age: 15 }) // Добавить элемент в начало
// console.log(users)

// users.shift() // Убрать первый элемент
// console.log(users)

// console.log(users.length) // Длина массива

// users.forEach(user => {
//   console.log(user)
// })

// // Задание 1. Написать функцию которая высчитывает средний возраст всех пользователей.

// function usersAgeAverage(users) {
//   let sum = 0 // Инициализировали сумму

//   users.forEach(user => {
//     sum = sum + user.age // Просуммировали все возраста
//   })

//   return sum / users.length // Поделили сумму на количество пользователей
// }

// // (32 + 25 + 18) / 3 = 25
// console.log(usersAgeAverage(users)) // number
// describe('usersAgeAverage', () => {
//   test('should calculate age average for users', () => {
//     const result = usersAgeAverage(users)

//     expect(result).toEqual(25)
//   })
// })

// // array. push, pop, unshift, shift и т.д. - это методы.

// // Из объекта в массив.

// const languages = {
//   ru: 100,
//   en: 50,
//   fr: 10,
//   'es-br': 5
// }

// languages.ge = 1

// //es-br // es минус br

// // Кавычки для ключей в объекте. Можно без, можно одинарные, можно двойные. Для JSON - объязательно двойный.

// // Задание 2. Есть объект. Хотим получить все ключи в виде массива.
// console.log(Object.keys(languages)) // [ 'ru', 'en', 'fr', 'es-br', 'ge' ]

// // Задание 3. Есть объект. Хотим получить все значения в виде массива.
// console.log(Object.values(languages)) // [ 100, 50, 10, 5, 1 ]

// // Задание 4. Есть объект. Хотим получить пару ключ-значение в виде массива.
// console.log(Object.entries(languages))

// /*[
//   [ 'ru', 100 ],
//   [ 'en', 50 ],
//   [ 'fr', 10 ],
//   [ 'es-br', 5 ],
//   [ 'ge', 1 ]
// ]
// */

// // Перебрать элементы объекта
// for (let key in languages) {
//   console.log('Ключ', key)
//   console.log('Значение по ключу', languages[key]) // здесь мы получаем значение переменной key и уже получаем по нему значение свойства объекат 
//   // console.log(languages.key) // это получить значение свойства с именем key
// }

// // Объект - это тип данных
// // Массив - это подтип типа Object

// // Из массива в объект

// // Задание 3. Из массива получить объект в виде { [lang]: count }

// const userLanguages = [
//   {
//     lang: 'en',
//     count: 100
//   },
//   {
//     lang: 'ru',
//     count: 50
//   },
// ]

// const objectLanguages = {}

// userLanguages.forEach(item => {
//   const key = item.lang
//   const value = item.count

//   objectLanguages[key] = value
// })

// console.log(objectLanguages) // { en: 100, ru: 50 }

// //
// const arr = [1, 2, 3]

// // Первый элемент
// console.log(arr[0])

// // Деструктуризация
// const [firstElement, ...newArr] = arr // ... - spread оператор

// console.log(firstElement, newArr) // firstElement: 1, newArr: [ 2, 3 ]

// const me = {
//   user: 'name',
//   age: 100
// }

// // Первый способ
// console.log(me.age) // 100

// // Деструктуризация
// const { age } = me
// console.log(age)

// // Сравнение данных.
// // == и ===.
// // === - это строгое сравнение.
// // == - это сравнение с приведением типов

// console.log(0 === false) // false
// console.log(0 == false) // true. 0 - это число. false - булев тип. 0 преобразует в булев тип. 0 -> false.


// describe('comparation', () => {
//   test('test', () => {
//     expect(0 === false).toBe(false)
//     expect(0 == false).toBe(true)
//     expect('' === false).toBe(false)
//     expect('' == false).toBe(true)
//     expect(1 == true).toBe(true)
//   })
// })

// // forEach - перебирает массив.
// // Массив - []
// // Объект - {}


// const nums = [2, 1, 100, 4]

// // find - найти элемент
// console.log(nums.find(num => num === 100))
// console.log(nums.find(num => num === 100500))

// // findIndex - найти индекс элемент
// console.log(nums.findIndex(num => num === 100)) // 2
// console.log(nums.findIndex(num => num === 100500)) // -

// // filter
// console.log(nums.filter(num => num > 2)) // [100, 4]

// // map. Они преобразуют массив и в результате получаем новый массив
// console.log(nums.map(num => num * 2)) // [ 4, 2, 200, 8 ]

// const usersNew = [
//   {
//     age: 100
//   },
//   {
//     age: 200
//   }
// ] // [100, 200]

// const usersNewAges = usersNew.map((user, index) => {
//   return {
//     index: index,
//     age: user.age
//   }
// }) // [100, 200]

// console.log(usersNewAges)

// const usersNewWithIndex = usersNew.map((user, index) => {
//   return {
//     index: index,
//     age: user.age
//   }
// }) // [ { index: 0, age: 100 }, { index: 1, age: 200 } ]

// console.log(usersNewWithIndex)

// const str1 = 'Hello'
// const str2 = 'World'

// // const str = 'Hello World'

// // Первый способ
// const strNew1 = str1 + ' ' + str2

// // Второй способ
// const strNew2 = `${str1} ${str2}`

// const username = 'nik'

// const html = `
//   <div>
//     <span>Привет ${username}</span>
//   </div>
// `

// console.log(html) // `

// const objectWithMethod = {
//   helloWorld: () => {
//     console.log('Привет мир')
//   }, // ключ - helloWorld. А значение функция. 

//   helloWorldShort() {
//     console.log('Привет мир короткий')
//   }  // ключ - helloWorldShort. А значение функция. 
// }

// // objectWithMethod: объект с методом helloWorld
// objectWithMethod.helloWorld()


// const calc = {
//   sum(a, b) {
//     return a + b
//   },

//   sub(a, b) {
//     return a - b
//   }
// }

// describe('calc', () => {
//   test('sum', () => {
//     expect(calc.sum(2, 2)).toEqual(4)
//   })

//   test('sub', () => {
//     expect(calc.sub(2, 2)).toEqual(0)
//   })
// })
