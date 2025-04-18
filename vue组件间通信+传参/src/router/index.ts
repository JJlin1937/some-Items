import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'; // 引入 routes.ts 中的路由配置

const router = createRouter({
  history: createWebHistory(),
  routes, // 使用 routes.ts 中定义的路由
});

export default router;