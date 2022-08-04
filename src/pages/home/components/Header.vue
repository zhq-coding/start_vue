<template>
 <div>
    <div id="box_header">
         <!-- <slot name="head"></slot> -->
        <div id="back">
            <i class="iconfont">&#xe600;</i>
        </div>
        <div id="search_input">
            <input type="text">
        </div>
        <div id="search_select" @click="enter_city"> 
           <router-link to="/city"> <span >{{home_city}}</span> </router-link>
            <i class="iconfont">&#xe667;</i>
        </div>
                <!-- <slot name="foot"></slot> -->
  <!-- <slot></slot>
    <slot></slot>
  <slot></slot> -->

    </div>
     
 </div>

</template>
<script>
import '../../../assets/styles/iconfont/iconfont.css'
import {mapState} from 'vuex';
export default{
name:'home',
methods:{
    enter_city(){
        //{path:'/',query:{id:1,age:2}}
        // this.$router.replace({path:'/city',query:{id:1,age:2}})
    },
},
computed:{
    // store_city(){
    //     return this.$store.state.home_city;
    // }
    ...mapState(['home_city'])
}
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
#box_header{
    background-color: aqua;
       height: 42px;

    display: flex;
    flex-direction:row;
    align-items:center;
    /* width: 70%; */
    margin: auto;
}
#back{
    margin-right: 20px;
    font-size:20px;
}
#back i{
    color: white;
    font-size: 30px;
}
#box_header #search_input{
    width: 60%;
    height: 90%;
    margin-top: 3px;
}
#box_header #search_input input{
    border: 1px solid #ccc;
    border-radius: 4px;
}
#box_header input{
    width: 100%;
    height: 80%;

}
#box_header span{
    color: white;
}

#search_select{
 margin-left: 40px;
 width: 40%;
 color: white;
 height: 40px;
line-height: 40px;

}
#search_select i{
    color: white;
}
#search_select a{
    text-decoration: none;
}
</style>
