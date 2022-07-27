<template>
<div class="icons_container"  >
    <ul  class="ul_icon">
        <swiper :options="swiperOption">
            <swiper-slide  v-for="(page,index) of icons" :key="index">
                <li class="icon_li_box" v-for="item of page" :key="item.id">
                    <div  class="icons">
                        <img :src="item.imgUrl" alt="">
                        <div class="icon_text">{{item.desc}}</div>
                    </div>
                </li>
            </swiper-slide>
        </swiper>
     </ul>
    </div>
</template>
<script>
export default{
    name:'HomeIcons',
    props:{
        icons:{
            type:Array
        }
    },
    created(){
console.log('icon渲染前');
    },
    mounted(){
        console.log("icon渲染完");
    },
      data(){
        return{
            swiperOption: {
        // pagination: '.swiper-pagination',
        speed:300,
        // loop:true,
        spaceBetween:0,//slide间距 
       
      }
        }
      }

    

    
}
</script>
<style scoped>
img{
    width:100%;
    /* height: 100%; */
}
/* .icon_text{
    font-size: 12px;
    padding-right: 5%;
    width: 30%;
} */
.icons{
        width: 71%;
    height: 0;
    padding-bottom: 75%;
    /* overflow: hidden; */
    /* background: green; */
}
.icon-text{
font-size: 10px !important;
}
.ul_icon{
    height: 0;
    overflow: hidden;
    padding-bottom: 74%;
}
.icon_li_box{
    width: 29%;
    height: 0;
    float: left;
    list-style: none;
   padding-bottom: 34%;
    /* border: 1px solid #ddd; */
    margin-right: 3%;
    margin-bottom: 3%;
}
</style>