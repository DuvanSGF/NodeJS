const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log('Memoria total', os.totalmem(), 'Bytes');