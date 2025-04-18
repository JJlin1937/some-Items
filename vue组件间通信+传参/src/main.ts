import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
// 引入element ui的样式
import 'element-plus/dist/index.css'

// 引入App组件
import App from './App.vue'
// 引入路由
import  router  from './router'
// 引入仓库
import store from './store'

// 创建app实例
const app = createApp(App)
// 注册仓库
app.use(store)
//注册路由
app.use(router)
// 注册element ui
app.use(ElementPlus)
// 挂载到id为app的元素上
app.mount('#app')
