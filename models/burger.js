var orm = require("../config/orm.js");

var burger = {
    all: function(){
        return new Promise (function(resolve, reject) {
            orm.all("burgers", function(res) {
                resolve(res);
            })
        })
    },
    update: function(id) {
        return new Promise (function(resolve, reject) {
            orm.update("burgers", id, function(res) {
                // reject(new Error("error in update"));
                resolve(res);
            })
        })
        // orm.update("burgers", id, cb)

    },

    add: function(name) {
        return new Promise (function(resolve, reject) {
            orm.add("burgers", name, function(res) {
                resolve(res)
            });
        })
        // orm.add("burgers", name, cb)
    }
}

module.exports = burger;