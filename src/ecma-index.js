import ecmaAPI from './ecma-api.js';

ecmaAPI.getGoogleMainPage().then(res => {
  console.log(res);
});

// Есть некоторые функции и переменные, которые в nodeJS доступны глобально
// jest хитрая библиотека добавляет в глобальное простраснтво describe it и т.д.
