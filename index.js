#!/usr/bin/env node
'use strict';
//程序入口 初始化程序
var cfg = require("./config.js");
var jsf = require("./frame/index.js");
jsf.InitFrame(cfg);
