<template>
<div>
    <div class="search_input">
            <input type="text" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
 <div class="search_content" v-show="keyword">
    <ul >
        <li class="search_item" v-for="item of list" :key="item.id" >{{item.name}}</li>
     <li class="search-item border-bottom" v-show="!hasData">
          没有找到匹配数据
        </li>
    </ul>
</div>
</div>

</template>
<script>
//watch:用于监听data里面的数据是否被修改，一旦修改就可以执行一些其他的操作【也是方法】

//  watch: {
//             //监听器的作用就是用来监听数据是否发生了变化，变化后可以进行一些其他操作
//             //只要没有发生变化，就没有办法进行其他的操作
           
//             text: function (newData, oldData) {
//                 //newData是更新后的数据
//                 //oldData是旧数据
//                 console.log(newData, oldData)
//                 this.text = '我是最新的一'
//             }
//         }


export default{
    name:'CitySearch',
    props:{
        searchObj:{
            typeof:String
        }
    },
    data(){
        return {
            list:[],
            keyword:'',
            // hasData:false
        }
    },
    watch:{
        keyword(){
            let that=this;
            that.list=[]
            for(let i in that.searchObj){
                that.searchObj[i].forEach(function(value){
                    console.log(that);
                    if(value.spell.indexOf(that.keyword)>-1||value.name.indexOf(that.keyword)>-1){
                        that.list.push(value);
                    }
                })
            }
        },
        
    }, mounted(){
       console.log(this.searchObj);
    },
    computed:{
        hasData(){
            return  this.list.length>0?true:false
        }

    }
}
</script>
<style scoped>
div.search_input{
    background: aqua;
    width: 100%;
    height: 40px;

}
input{
    width: 95%;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 20px;
    margin-top: 9px;
    text-align: center;
}
.search_content{
    /* position: absolute; */
    /* width: 100%; */
    /* height: 400px; */
    /* top: 90px;
    left: 0;
    overflow: hidden; */
    /* height: auto; */
    /* background-color: #eee;
    overflow: hidden */
        z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 90px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    height: 600px; 
    /* 设定高度很重要 */

}
ul{
    list-style: none;
    padding: 0;
}
.search_item{
    /* height: 20px;
    background-color: white; */
    line-height: 30px;
    text-align: left;
    padding-left: 10px;
    background: #fff;
    color: #666;
    border-bottom: 1px solid #eeeeeeb0;
}
</style>
