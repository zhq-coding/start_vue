// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
// import axios from 'axios';
// import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
Vue.use(Vuetify)
Vue.config.productionTip = false
// axios.defaults.baseURL='/test'
Vue.prototype.$axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  axios,
  vuetify:new Vuetify,//这一句是关键
  // vuetify,
  mounted(){
    axios.interceptors.request.use(function(config){
      // config.headers['token']='aspka'; //在请求头中添加token  aspka
      // return config;
    }, function (error) {
      console.log(error)
      // 对请求错误做些什么  //请求错误执行的，请求错误的常见状态码：4XX  401-请求超时  404-mot found
      return Promise.reject(error);
    })
    axios.interceptors.response.use(function(res){ //// 响应错误的常见状态码 5XX 500-服务器错误 502-服务器重启
      // console.log(res)
      res.data.code=200;
      return res;
    },function(err){
      console.log(err)

    })
  }
})
