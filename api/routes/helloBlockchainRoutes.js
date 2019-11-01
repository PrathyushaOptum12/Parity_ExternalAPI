'use strict';
module.exports = function(app) {
    var helloWorld = require('../controllers/helloBlockchainController');

    //Helloworld Routes
    app.route('/getMessage')
    .get(helloWorld.read_HelloBlockchain);
}
