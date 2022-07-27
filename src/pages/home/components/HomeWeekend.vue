<template>
<div class="recommond-container">
    <!-- 我是热销推荐 -->
      <div class="recommond_h">周末去哪儿游</div>
<div>
    <div class="recommond-box" v-for="(item,index) of Weekend_List"   :key="item.id">
        <div class="img-content"> 
            <img :src="item.imgUrl" alt="" class="recommond_img"/>
        </div>
        <div class="recomond-content">
            <div class="recomond-title">{{item.title}}</div>
            <div class="recomond-desc">{{item.desc}}</div>
           
        </div>
    </div>
    
</div>
</div>
</template>
<script>
export default{
    name:'HotRecommond',
    props:{
        Weekend_List:{
            type:Array
        }
    }
}
</script>
<style scoped>
.recommond-box{
    background-color: white;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #dddddd4a;
        padding-bottom: 4%;

}
.recommond-container{
     background-color: #eee;
     width: 100%;
     margin-top: 20px;
}
.img-content{
    width: 100%;
    height: 0;
    padding-bottom: 33%;
    overflow: hidden;
    /* float: left; */
}
.recomond-content{
    /* float: left; */
    width:100%;
    text-align: left;
    padding: 2%;
}
.recomond-title{
font-size: 10px;
font-weight: bold;
}
.recomond-desc{
    color: #ccc;
    font-size: 8px !important;
}
.recommond_img{
    width: 100%;
}
.recomond-price{
    color: rgb(248, 188, 77);
    font-size: 13px;

}
.recomond-price span{
    color: #ccc;
    font-size: 10px;

}
.recommond_h{
    text-align: left;
    font-size: 16px;
    padding: 6px;
    /* margin-left: 6px; */
    font-family: '宋体';
    font-weight: bold;
}
.button_detail{
    font-size: 10px;
    border: 1px solid #ddd;
    color: #fff;
    border-radius: 2px;
    background-color: #ff9300;
}
</style>