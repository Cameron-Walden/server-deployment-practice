'use strict';

module.exports = function(req, res, next) {
    console.log(req.method);
    //middleware needs next() to be called
    next();
};