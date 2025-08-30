const path = require('path');

const filepath = path.join('foo', 'bar', 'file.jpg')
const filename = path.basename(filepath)

console.log(filename);