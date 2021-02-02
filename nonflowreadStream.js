// for this example to run as aspected you have to have a big file 
// with name learn.txt in the current folder in which the this
//  application is stored .


// the example will show how we can read from a stream through non 
// flowing mode.

//this example will show that how read method read a data preasent
// in current buffer due to readStream and pass it as chunks.


//pulled fs module from node core module.
const fs = require('fs');
const pro = fs.createReadStream('./learn.txt');// created a readStream for learn.txt
let i = 1;//variable for S_no. of chunks.
pro.on('readable',()=>{
    let chunk ;//variable to store chunk which will store the current 
    // readed data from read method.
    
    console.log('New data available');

    //if pro.read() gives some data.
    if((chunk = pro.read()) !== null){
        console.log(`${i++} : ${chunk.length} :`);
        console.log(chunk.toString())//buffer to string.
       
    }
})
//registering event handeler for end event.
pro.on('end',function() {
    console.log('end');
})