// Модуль(класс)

import axios from 'axios'; // Подключаем пакет axios commonjs module
// Я его установил при помощи npm install axios

// Полезный код.
function getGoogleMainPage() {
  return axios('https://www.google.ru')
}

// async function getGoogleMainPageNodeFetch() {
//   const nodeFetch = (await import('node-fetch')).default
//   return nodeFetch('https://www.google.ru')
// }

// Отдаем наружу функцию getGoogleMainPage
export default {
  getGoogleMainPage
}

// 100 

// ECMA script
// 1. В package.json добавляем "type": "module"
// 2. Используем import/export или exports.default
