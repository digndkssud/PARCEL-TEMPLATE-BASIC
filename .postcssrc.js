// ESM
// CommonJS

// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer') 
// => plugins에 직접 입력하여 사용한다.

// export{
//   plugins:[
//     autoprefixer
//   ]
// }

module.exports = {
 plugins: [
  require('autoprefixer')
 ]
}