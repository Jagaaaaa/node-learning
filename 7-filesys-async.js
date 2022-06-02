const {readFile, writeFile} = require('fs')

console.log('Start');
readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/secnd.txt','utf8',(err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const secnd = result;
        writeFile(
            './content/result-async.txt',
            `Here is teh result: ${first}, ${secnd} `,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('Done wit this task');
            }   
        )
    })    
})
console.log('Starting next task');