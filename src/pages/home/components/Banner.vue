<template>
    <div class="slide-box">
      <swiper :options="swiperOption">
              <swiper-slide v-for="item of banner_list" :key="item.id" class="img-parent">
                <img class="swiper-img" :src="item.imgUrl" alt="">
    <!--以下看需要添加-->
              
            </swiper-slide> 
            <div class="swiper-pagination"></div>
    </swiper>

    </div>
</template>

<script>

export default {
  name: 'a',
  props: {
    banner_list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        speed:300,
        loop:true,
        spaceBetween:0,//slide间距 
       
      },
       swiperList:[{
          id:'0001',
          imgUrl:'http://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
        },{
          id:'0002',
          imgUrl:'http://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
        }]

    }
  },
  // computed: {
  //   showSwiper () {
  //     return this.list.length
  //   }
  // }
}
</script>
<style scoped>
/* .swiper-pagination {
    position: relative !important;
    color:'red' !important;
    } */
.swiper-img{
  width:100%;
  display: block;
}

.slide-box{
  transform: translateZ(0);
 overflow: hidden;
 padding-bottom:30.5%; 
 
 width:100%;
 height:0;

}
.slide-box>>>.swiper-pagination-bullet-active {
    opacity: 1;
    background: white !important;
}
 /* 真实值接近图片高度 */
 /*  padding-bottom基于父元素宽度的百分比 */
 /* 设置高度0,padding-bottom 30.5%，就像提前撑大了一个图片高度的空间 */
/* 给图片的父元素添加如下代码：
.style{
 transform: translateZ(0);
 overflow: hidden;
 padding-bottom:（图片高/宽）百分比;
 width:100%;
 height:0;
 } */
 /* // v-bind指令主要用于响应式的更新html属性
// 一般我们要想在元素节点的属性上绑定vue的data数据
// 是不可以直接使用{{ }}插入值语法来使用
/* height:auto; */
  /* 抖动的原因，盒子高度是被内容撑开的，当img没加载出来，img在容器中占位高度0，则底下的元素会自动跑到上面 */
  /* 给图片设置百分比高度不行，%是基于包含它的块级对象的百分比高度，如果包含它的会计对象的高度没有设置，那它就无法达到想要的效果。 */
/* // 轮播缺点解决页面加载时，轮播图加载过慢导致的抖动感


// Swiper 的每个展示块（屏）为一个slide，slide中放置图片或文字等展示的内容，全部slide排成一行(或多行)包含在包装器wrapper中，
// 而总容器container 又包裹着wrapper和
// 箭头按钮控件navigation
// 以及分页器控件pagination。 图片下的小圆点 */ 
    </style>

