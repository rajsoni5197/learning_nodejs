// for this example to run as aspected you have to have a big file 
// with name learn.txt in the current folder in which the this
//  application is stored .


// this example will show how the flowing mode of reading data works.


// if you run this application you will see how chunks of data is pushed
// to the data event listenr as soon as it is arrived.

// Another way to read from a stream is by attaching a listener to the data event;
// this will switch the stream into using the flowing mode where the data is not
// pulled using read(), but instead it's pushed to the data listener as soon as it arrives.


//pulled fs module from node core module.
const fs = require('fs');
const pro = fs.createReadStream('./learn.txt');// created a readStream for learn.txt
let i = 1;//variable for S_no. of chunks.

pro.on('data',(chunk)=>{//data is pushed as chunk parameter.
    
    
    console.log('New data available');

        console.log(`${i++} : ${chunk.length} :`);
        console.log(chunk.toString())//buffer to string.
       
   
})
//registering event handeler for end event.
pro.on('end',function() {
    console.log('end');
})