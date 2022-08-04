<template>
    <div id="box_header">
        <div id="back" @touchstart="back_home">
            <i class="iconfont">&#xe600;</i>
        </div>
        <div id="search_input" ref="sear_input">
            <!-- <input type="text" placeholder="输入城市名或拼音"> -->
            <span>{{city_title}}</span>
        </div>
    </div>
</template>
<script>
export default{
    name:'CityHeader',
    data(){
        return{
            city_title:'城市选择'
        }
    },
    methods:{
        back_home(){
            this.$router.replace("/");
            
        },
        child_methods(){
            console.log('ref调用子组件方法');
        },
        children_header(){
            alert('$children调用子组件方法');
        }
    },mounted(){
    let $par=this.$parent; //父组件对象
    console.log($par.ceshi);
    }
}
</script>
<style scoped>
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
    width: 81%;
    height: 73%;
}
#box_header #search_input input{
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
}
#box_header input{
    width: 100%;
    height: 80%;

}
</style>