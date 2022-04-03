/*
 * Copyright (c) HowBuy, All rights reserved.
 * @Description:  long description for the file
 * @summary: 
 * @Author: xingyue.fu
 * @Date: 2022-04-03 18:19:23
 * @LastEditors: xingyue.fu
 * @LastEditTime: 2022-04-03 19:21:57
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index'

const app = createApp(App)

app.use(router)
app.mount('#app')
