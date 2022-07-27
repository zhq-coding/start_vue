import Vue from 'vue';
import Vuex from 'vuex';
//1.安装插件
Vue.use(Vuex)
 
const store = new Vuex.Store({
  state:{
    cur_alpha:'A' ,  //state：存放需要共享的状态信息，使用时通过 $store.state.counter 即可拿到状态信息。
    alopha_obj:{},
    scroll_obj:{x:354,y:0}
  },
  mutations:{
 sub(){//this.$store.commit('sub')  对 state 的状态信息进行修改：先拿到 store 对象，然后通过 commit 提交 mutations 中的方法。
 }
  },
  actions:{
 
  },
  getters:{
  powerCounter(state){ // $store.getters.powerCounter 获取
      return state.counter * state.counter
    },

  },
  modules:{
    
  },
//   plugins: [persistedState()], //是在页面刷新的时候vuex里的数据会重新初始化，导致数据丢失,默认存储到localStorage

})
export default store;