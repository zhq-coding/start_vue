import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from 'vuex-persistedstate';//数据持久化插件

//1.安装插件
Vue.use(Vuex)
let defaultCity="北京";
// try{
//   if(localStorage.city){
//     defaultCity=localStorage.city;
//   }
// }catch(e){

// }
const store = new Vuex.Store({
  state:{
    cur_alpha:'A' ,  //state：存放需要共享的状态信息，使用时通过 $store.state.counter 即可拿到状态信息。
    alopha_obj:{},
    home_city:defaultCity
  },
  mutations:{
    changeCity (state, city) {
      state.home_city = city//刷新后city就改变了，初始化取state中city  刷新浏览器，vuex中的state会重新变为初始状态
      // try {
      //   localStorage.city = city  //防止刷新时state数据恢复成初始值
      // } catch (e) {}
    }
  },
  actions:{},
  getters:{
    powerCounter(state){ // $store.getters.powerCounter 获取
        return state.counter * state.counter
      },

  },
  modules:{},
  plugins: [persistedState()], //是在页面刷新的时候vuex里的数据会重新初始化，导致数据丢失,默认存储到localStorage

})
export default store;