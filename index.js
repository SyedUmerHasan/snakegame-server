var path = require('path');
const fs = require('fs');
const os = require('os');
const http = require('http');

var express = require('express');
var app = express();

let server = app.listen(3000)
var io = require('socket.io')(server);

var users = [];

io.on("connection", function (socket) {
    console.log("connected");
    socket.broadcast.emit('userconnected');

    
    socket.on("ClientConnected", function (socket) {
        // socket.broadcast.emit('ServerConnected', "Server : I am connect");
    });
    
    socket.on("disconnect", function (socket) {
        // socket.broadcast.emit('connectionDisconnected', "this is a test");
        console.log("leaved");
    });

    socket.on("message", function (abc) {
        // socket.broadcast.emit('message', "this is a test");
        console.log("Player is at X = " + abc.xAxisPlayerPosition + " and Y = " + abc.yAxisPlayerPosition);
        socket.broadcast.emit('message', abc);
    });

    // socket.on('connect', () => {
    //     socket.emit('startConnection', id);
    // });
    // // Connection Start
    // socket.on('disconnect', (reason) => {
    //     console.log("Server Disconnected");
    // });
    
});
