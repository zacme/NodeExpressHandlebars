var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function (req, res) {
    burger.all()
        .then(function (burger_data) {
            console.log(burger_data);
            //displays burger information on index.handlebars page
            res.render("index", { burger_data });
        })

});

router.put('/burgers/update', function (req, res) {
    burger.update(req.body.burger_id)
        .then(function (burger) {
            console.log(burger);
            res.redirect("/");
        })
        .catch(function (error) {
            console.log(error);
        })
});

router.post("/burgers/create", function (req, res) {
    burger.add(req.body.burger_name)
        .then(function (add_burger) {
            res.redirect("/")
            console.log(add_burger);
        })
        .catch(function(error) {
            console.log(error);
        })
})

module.exports = router;