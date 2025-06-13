import { getCategoryList } from '@/api/index'
import { topCategory } from '@/utils/constants'
export default {
  namespaced: true,
  state: () => {
    return {
      cateList:topCategory,//默认值请求不到数据显示
    }
  },
  // 同步修改
  mutations: {
    setList(state, payload){
      state.cateList = payload
    }
  },
  // 异步修改
  actions: {
    // 请求后台，加载分类数据
    async getAllCategory({commit}){
      try {
        const res = await getCategoryList()
        if (res.code == 200) {
          commit('setList', res.data.cateList)
        }
      } catch (error) {
        console.log(error);
        
      }
    }
  },
  getters: {
    
  }
}