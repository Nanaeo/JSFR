#!/usr/bin/env node
'use strict';
//程序入口 初始化程序
cfg = require("./config.js");
jsf = require("./frame/index.js");
jsf.InitFrame(cfg.config)

