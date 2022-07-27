<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <!-- <home-header></home-header> -->
   <button @click="countAdd">+20</button>
   <P>{{this.$store.state.counter}}</P>
     <div>计数器的2倍：{{thisDoubleCount()}}</div>
    <h2>{{constfun()}}</h2>
 <div @click="divClick('点击事件的')"></div>
 <p>{{show('直接调用')}}</p>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
// import HomeHeader from "./Home.vue";
//getters自动调用时也会触发其他函数自执行

// vuex会刷新浏览器，vuex中的state会重新变为初始状态
// 解决方案-插件vuex-persistedstate
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your helloworld',
      addresult:''
    }
  },
  // components:{ //注意单词别写错
  //   HomeHeader
  // },
  methods:{
    ...mapMutations (['add']),
    countAdd(){
      // this.$store.commit('add',20);//这样写会多次触发getters函数，因为powerCounter方法依赖的数据counter被+20了
      this.add(20);
},
    thisDoubleCount(){
      return this.$store.getters.powerCounter;
    },
    constfun(){
      console.log(this.$store.state.counter);
      return 11111111111;
    },
    divClick(prop){
      return prop+'div';
    },
    show(prop){
      return prop
    }
  },
  updated(){
    console.log('页面刷新了')
  }
 
  // computed:{
    // thisDoubleCount(){
    //   return this.$store.getters.powerCounter;
    // }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
