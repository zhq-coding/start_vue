<template>
<div class="recommond-container">
    <!-- 我是热销推荐 -->
      <div class="recommond_h">热销推荐</div>
<div>
    <div class="recommond-box" v-for="(item,index) of Recomond_List"   :key="item.id">
        <div class="img-content"> 
            <img :src="item.imgUrl" alt="" class="recommond_img"/>
        </div>
        <div class="recomond-content">
            <div class="recomond-title">{{item.title}}</div>
            <div class="recomond-desc">{{item.desc}}</div>
            <div class="recomond-price">{{item.price}}<span>起</span></div>
            <button class="button_detail">查看详情</button>
        </div>
    </div>
    
</div>
</div>
</template>
<script>
export default{
    name:'HotRecommond',
    props:{
        Recomond_List:{
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
    width: 29%;
    height: 0;
    padding-bottom: 20%;
    float: left;
}
.recomond-content{
    float: left;
    width: 67%;
    text-align: left;
    padding-left: 2%;
}
.recomond-title{
font-size: 13px;
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
    font-size: 15px;
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