var log = require('../logger')(module);

function User(name, age) {
    this.name  = name;
    this.age = age;
}

User.prototype.hello = function (who) {
    log('Hello ' + who.name + ' I\'m ' + who.age + ' years old');
};

module.exports = User;