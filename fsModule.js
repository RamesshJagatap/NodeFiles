const fs = require ('fs')

fs.readFile('myfile1.txt' 'utf-8', ( err, data) => {
    console.log(data);  
});