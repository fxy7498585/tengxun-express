/*
 * Copyright (c) HowBuy, All rights reserved.
 * @Description:  long description for the file
 * @summary: 
 * @Author: xingyue.fu
 * @Date: 2022-04-03 19:08:53
 * @LastEditors: xingyue.fu
 * @LastEditTime: 2022-04-03 20:13:34
 */


// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
export default [
  { path: '/', component: () => import('../components/index.vue') },
  { path: '/about', component: () => import('../components/HelloWorld.vue') },
]