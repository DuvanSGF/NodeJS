const fs = require('fs');

fs.writeFile('./texto.txt', 'Hello world! from Nodejs', function(err){
    if (err){
        console.log(err);
    }
    console.log('Archivo creado');

});
console.log('Listo');