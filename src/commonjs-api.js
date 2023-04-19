// Модуль(класс)

// const axios = require('axios'); // Подключаем пакет axios commonjs module
// Я его установил при помощи npm install axios

// const nodeFetch = require('node-fetch');
// Как подключить?
// 1. Найти аналог
// 2. Использовать ecmascript module(долгий путь)
// 3. Использовать асинхронное подключение через await import('node-fetch')

 // ecmascript модуль

// Полезный код.
// function getGoogleMainPage() {
//   return axios('https://www.google.ru')
// }

// async function getGoogleMainPageNodeFetch() {
//   const nodeFetch = (await import('node-fetch')).default
//   return nodeFetch('https://www.google.ru')
// }

// // Отдаем наружу функцию getGoogleMainPage
// module.exports = {
//   getGoogleMainPage,
//   getGoogleMainPageNodeFetch
// }

// 100 

// CommonJS
// 1. По-умолчанию в проекте
// 2. Используем require/module.exports
// 3. Не очень хорошо дружит с новыми модулями.
