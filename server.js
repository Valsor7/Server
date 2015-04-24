var log = require('./logger')(module);

var User = require('./user');

var vasya = new User('Vasya', '16');

vasya.hello(vasya);

log();


