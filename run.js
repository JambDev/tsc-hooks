const path = require('path');
const script = require(path.resolve(__dirname, 'scripts', process.argv[2]));
let relative = __dirname.lastIndexOf(path.sep + "node_modules" + path.sep);
script(path.resolve(relative === -1 ? '' : __dirname.slice(0, relative), 'node_modules/typescript/bin/tsc'));
