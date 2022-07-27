<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="countSub">-20</button>
        <button @click="countDulble">*2</button>
    <button @click="countAdd">+20</button>
        <button @click="countDulblereverse">除以2</button>

   <P>{{this.$store.state.counter}}</P>


  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Store',
//   mounted(){
// this.$store.state.counter=500;
//   },
  data () {
    return {
      msg: 'Welcome to Store',
      change_sum:1,
      const_num:0
    }
  },
  methods:{
      //将 `this.incrementBy()` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ...mapActions(['increament','dublAction','counter_add','async_action']), /// 将 `this.increment()` 映射为 `this.$store.dispatch('increment')
    countSub(){
    //   this.$store.commit('sub',20);
        this.$store.dispatch('increament',20)//Action 通过 store.dispatch 方法触发：
    },countDulble(){
        //  this.$store.dispatch('dublAction',{num:2});//Actions 支持同样的载荷方式和对象方式进行分发：
        this.$store.dispatch({
            type:'dublAction',
            num:2
        });
    },countAdd(){
        this.counter_add(20);
    },countDulblereverse(){
        this.async_action(2)
    }

  }
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
