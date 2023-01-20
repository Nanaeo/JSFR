#!/usr/bin/env node
'use strict';
//加载配置
var FrameEnv = {};
function InitFrame(config)
  {
  FrameEnv.NodeVer = process.version.substr(1).split(".");
  (config.hasOwnProperty("debug") &&  config.debug == "true")? FrameEnv.debug = true:null;
  }
//检测环境
//初始化部分必须变量
//提前加载脚手架 全局变量控制 ...
//初始化所有插件
//挂载点识别 对应插件配置载入
//替换模式 r 标准替换模式(冲突请手动调节优先级) rw 等待替换模式 rx 强替换模式(注销所有其它挂载)
//读取模式 rd 读取模式  rx 强读模式(注销所有其它载载)
//事件驱动触发流程插件事件
module.exports = {InitFrame};
