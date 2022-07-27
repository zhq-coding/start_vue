<template>
  <div class="hello">
     <div>
         {{msg}}
     </div> 

   <button @click="test()">测试按钮</button>
      <button @click="html()">测试按钮test</button>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Axios',
      
    }
  },
  methods:{
    //
   test(){
     let p=this.$axios.get("http://127.0.0.1:8081/src/components/data.json").then(function(res){
      console.log(res.code);

    }).catch(function(rej){
console.log(rej);
    })
//      .then(function (res) {
//        console.log(res);
//      }).catch(function(rej){
// console.log(rej);
//      })
console.log(p);
  },
  html(){
    this.$axios.get("https://test.ecc360.cn").then(function(res){
      console.log(res.code);

    }).catch(function(rej){
console.log(rej);
    })
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
