var log = require('./logger')(module);

var User = require('./user');

var vasya = new User('Vasya and Petya', '16');

vasya.hello(vasya);

log();


