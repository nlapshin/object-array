


import nodeFetch from 'node-fetch' // ./node_modules/node-fetch/src/index.js

;(async () => {
  const result = await request()

  console.log(await result.text())
})()

function request() {
  return nodeFetch('https://www.google.ru')
}
