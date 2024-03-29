// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import version from './utils/version.js';
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
Vue.component('nav-footer',{template:"<div class='version'>版本号："+version +"</div>"})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store

})
