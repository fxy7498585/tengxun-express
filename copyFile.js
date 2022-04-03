/*
 * Copyright (c) HowBuy, All rights reserved.
 * @Description:  long description for the file
 * @summary: 
 * @Author: xingyue.fu
 * @Date: 2022-04-03 18:36:15
 * @LastEditors: xingyue.fu
 * @LastEditTime: 2022-04-03 18:38:42
 */

const path = require('path')
const fs = require('fs-extra')

const targetFolder = path.join(__dirname, `./views`)

fs.emptyDirSync(targetFolder)

fs.copySync(
    path.join(__dirname, './vue/dist'),
    path.join(targetFolder),
    { overwrite: true }
)
