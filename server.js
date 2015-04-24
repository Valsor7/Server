var log = require('./logger')(module);

var User = require('./user');

var vasya = new User('Master', '16');

vasya.hello(vasya);

log();


