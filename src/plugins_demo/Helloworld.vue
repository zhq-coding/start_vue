<template>
<div>
    helloworld!!!
    <a @click="return_login" >返回1</a>
    <router-link :to="{path:'/',query:{id:1}}">返回</router-link>
        <!-- <router-link to="/">返回</router-link> -->

</div>
</template>
<script>

export default{
    name:'helloworld',
    methods:{
        return_login(){
            // this.$router.replace("/");
            this.$router.replace({path:'/',query:{id:1,age:2}})
        }
    }
}
</script>
<style>
a{
    color:blue;
    
}
</style>