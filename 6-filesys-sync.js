const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8');
const secnd = readFileSync('./content/secnd.txt','utf8');

console.log(first, secnd)

writeFileSync('./content/third.txt',`here is the result: ${first}, ${secnd}`,'utf8');
