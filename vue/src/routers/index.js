/*
 * Copyright (c) HowBuy, All rights reserved.
 * @Description:  long description for the file
 * @summary: 
 * @Author: xingyue.fu
 * @Date: 2022-04-03 19:07:45
 * @LastEditors: xingyue.fu
 * @LastEditTime: 2022-04-03 20:11:45
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import homerRoutes from './home'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...homerRoutes,
    ],
})

export default router
