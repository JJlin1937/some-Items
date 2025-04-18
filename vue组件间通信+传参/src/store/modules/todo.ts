// 定义组合式API仓库
import { defineStore } from 'pinia'
import { ref,computed } from 'vue'
// 定义todo小仓库
let useTodoStore = defineStore('todo',()=> {
  // 务必返回一个对象：属性与方法可以提供给组件使用
  let todos = ref([
    { id: 1, title: '吃饭', done: false },
    { id: 2, title: '睡觉', done: true },
    { id: 3, title: '打豆豆', done: false },
  ])
  let arr=ref([1,2,3,4,5,])

  const total = computed(() => {
    return arr.value.reduce((pre,cur)=>{
      return pre+cur
    },0)
  })

  return {
    todos,
    arr,
    total,
    // 添加todo的方法
    updateTodo(){
      todos.value.push({
        id: Math.random(),
        title: '新的todo',
        done: false
      })
    }
  }

})
export default useTodoStore