<template>
  <div class="hello">
     <v-app>
      <v-btn color="success">Success</v-btn>
      <v-btn color="error" large>Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info" small>Info</v-btn>
      <v-btn color="teal">teal</v-btn>
       <h1>{{ msg }}</h1>
    <button @click="countSub" class="float-left">-20</button>
   <P>{{this.$store.state.counter}}</P>
      <p id="showclg">{{clgFUn}}</p>
      <button @click="getComputedchange" id="‘btn1">computed缓存证明改变值</button>
        <button @click="getComputedconst" id="btn2">computed缓存不变值</button>
    </v-app>
   

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home',
      change_sum:1,
      const_num:0
    }
  },
  methods:{
    countSub(){
      this.addresult=this.$store.commit('sub',20);
    },
    getComputedchange(){ //触发和计算属性有关的计算，sum累加时和num为1
         this.change_sum++;
		console.log("change_sum："+this.clgFUn);
	},
    getComputedconst(){ //触发和计算属性有关的计算，sum累加时和num为1
        //  this.sum++;
		console.log("const_num："+this.clgConst); //clgConst只是在点击btn2时触发一次，其他取缓存
	}
  },
  computed:{
    clgFUn(){ //返回一个和方法同名的属性   切换到home页面时，这个方法会执行一次，因为p#showclg元素初始化展示clgFun的值
   console.log('我依赖的数据会改变'); 
    return this.change_sum;
    },
    clgConst(){ 
        console.log('我依赖的数据是定值');//clgConst只是在点击btn2时触发一次，其他取缓存 ，因为返回值依赖的const_num始终是0
            return this.const_num;

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
