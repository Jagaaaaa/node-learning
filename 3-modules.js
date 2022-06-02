const sayHi = require('./1-module.js')
const name = require('./1-vars.js')
const data = require('./2-altExport.js')
require('./3-mindGrenade')
console.log(data)
/* sayHi(name.john)
sayHi(name.peter)
sayHi('Susan') */