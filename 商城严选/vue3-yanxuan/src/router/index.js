import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue' 
import Home from '@/views/Home/Home.vue'
// 异步加载组件，按需引入，提高性能
const Login=()=>import('@/views/Login.vue')
const Category=()=>import('@/views/Category/Category.vue')
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/category/:id',
        name: 'Category',
        component: Category
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = createRouter({
  // 创建一个hash模式，hash模式是基于#号来实现的，#号后面的内容不会发送给服务器
  history: createWebHashHistory(),
  routes
})

export default router
