export default {
  namespaced: true,
  state: () => {
    return {
      userinfo: {
        token: '123',
        username: '林俊杰',
      }
    }
  },
  // 同步修改
  mutations: {
    updateName(state, payload){
      state.userinfo.username = payload
    }
  },
  // 异步修改
  actions: {
    updateNameAsync(context, payload){
      setTimeout(() => {
        context.commit('updateName', payload)
      }, 2000)
    }
  },
  getters: {
    
  }
}