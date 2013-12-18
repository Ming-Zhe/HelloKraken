'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'hellokraken' };
        
        res.render('index', model);
        
    });

};
