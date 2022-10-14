"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
// import exp = require('constants')
var app = express();
app.use(cors({
    origin: ['http://localhost:4200']
}));
app.use(express.json());
console.log('Listening to port: 8000');
app.listen(port, 8000);
