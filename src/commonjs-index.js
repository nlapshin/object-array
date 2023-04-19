const cjsAPI = require('./commonjs-api');

cjsAPI.getGoogleMainPageNodeFetch().then(res => {
  console.log(res);
});
