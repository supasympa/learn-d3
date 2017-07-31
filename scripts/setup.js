const shelljs = require('shelljs');

shelljs.mkdir('./dist');
shelljs.cp('-r', './public/.', './dist');
shelljs.cp('-r', './src/assets', './dist');
