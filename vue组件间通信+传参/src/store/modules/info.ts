// 定义info小仓库
import { defineStore } from "pinia";

// 第一个参数是小仓库的id，
// 第二个参数是一个函数，返回一个对象，里面是小仓库的state、getters、actions等
// defineStore方法执行返回一个函数，该函数作用是让组件获取到仓库内容
let useInfoStore = defineStore("info", {
  // 存储数据：state
  state: () => {
    return {
      // info小仓库的状态
      count: 99,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  actions: {
    // 注意：函数没有context上下文对象，this指向当前小仓库
    updateNum(a: any, b: any) {
      console.log(a, b);

      // 更新状态的方法
      this.count++;
    },
  },
  // 计算属性：getters
  getters: {
    // 计算属性：getters
    total() {
      let result:any = this.arr.reduce((prev, next) => {
        return prev + next;
      }, 0);
      return result
    },
  },
});

// 导出info小仓库
export default useInfoStore;
