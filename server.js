var log = require('./logger')(module);

var User = require('./user');

var kolya = new User('Kolya', '12');

kolya.hello(kolya);

log();


