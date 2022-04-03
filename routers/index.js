/*
 * Copyright (c) HowBuy, All rights reserved.
 * @Description:  long description for the file
 * @summary: 
 * @Author: xingyue.fu
 * @Date: 2022-04-03 17:35:13
 * @LastEditors: xingyue.fu
 * @LastEditTime: 2022-04-03 18:08:30
 */
const path = require("path");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('path', path.resolve(__dirname, '../views/index.html'))
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

// 更新计数
router.post("/api/count", async (req, res) => {
    const { action } = req.body;
    if (action === "inc") {
        await Counter.create();
    } else if (action === "clear") {
        await Counter.destroy({
            truncate: true,
        });
    }
    res.send({
        code: 0,
        data: await Counter.count(),
    });
});

// 获取计数
router.get("/api/count", async (req, res) => {
    const result = await Counter.count();
    res.send({
        code: 0,
        data: result,
    });
});

module.exports = router;