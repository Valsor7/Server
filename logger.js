module.exports = function (module) {

    return function () {
        var args = [module.filename.slice(38)].concat([].join.apply(arguments));
        console.log.apply(console,args);
    }

};