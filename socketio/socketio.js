#!/usr/bin/env node

/**
 * Module dependencies.
 */

var soketio = require('socket.io');

module.exports.init = function (http) {
    var io = soketio(http);

    /**
     * */
    io.on('connection', function (socket) {
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });


        socket.on('sendmessageevent', function (msg) {
            console.log('message: ' + msg);
            io.emit('receivedmessageevent', msg);
        });

    });
}



