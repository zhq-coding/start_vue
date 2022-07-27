<template>
<div>
    <!-- <school/> -->
    <home-header :city='home_city' v-if="home_city!=''"> 
       
    </home-header >
    <!-- 插槽真实内容一定要在子组件便签内，如果没有插槽，父组件无法在子组件里添加内容,使用插槽，父组件可在子组件里添加template或html元素 -->
    <home-banner :banner_list="swiperList" v-if="swiperList.length>0"></home-banner>
     <home-icons  :icons="pages"  v-if="pages.length>0"></home-icons> 
     <!--v-if 控制元素或模板的渲染,根据表达式的值true或false在DOM中生成或者移除一个元素（或多个元素）
     v-if 当数据不为空时渲染子组件-->
    <hot-recomond :Recomond_List="Recomonds_home"  v-if="Recomonds_home.length>0"></hot-recomond>
    <home-weekend :Weekend_List="Weekends_home"   v-if="Weekends_home.length>0"></home-weekend>
    <!-- {{pages}} -->
    <div class="icons_container"  >
        <ul  class="ul_icon">
            
            <swiper :options="swiperOption">
                <swiper-slide  v-for="(page,index) of pages" :key="index">
                <li class="icon_li_box" v-for="item of page" :key="item.id">
                  <home-icons :icon="pages"></home-icons>
                  </li>
                  </swiper-slide>
            </swiper>    
        </ul>
    </div>
    <div>
        <div class="hot_title">
            <span>热销推荐</span>
            <!-- 文字也放组件里 -->
            <hot-recomond :Recomond_List="Recomonds_home"></hot-recomond>
        </div>

    </div>
   

</div>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeBanner from './components/Banner.vue'
import HomeIcons from './components/icons.vue'
import HotRecomond from './components/HotRecomond.vue'
import HomeWeekend from './components/HomeWeekend.vue'
import axios from 'axios';
import Vue from 'vue'// 解析为 const Vue = require('vue')。
// const school=Vue.extend({template:''})
// Vue.component('school',{template:'<section>12445</section>'});
export default{
    name:'Home',
    components:{
        HomeHeader,
        HomeBanner,
        HomeIcons,
        HotRecomond,
        HomeWeekend
    },
    //home渲染前
// icons.vue?ec24:26 icon渲染前
// icons.vue?ec24:29 icon渲染完
// Home.vue?5584:57 home渲染完
      created(){   //执行顺序  home created-->icon created-->icon mounted-->home mounted
       this.getHomeInfor();
console.log('home渲染前');

    },
    mounted(){//created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
// mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
       console.log('home渲染完');  //router-link 传参  {path:'/',query:{id:1}}
    },
    data(){
        return{
            swiperOption: {
        // pagination: '.swiper-pagination',
        speed:300,
        // loop:true,
        spaceBetween:0,//slide间距 
       
      },
       pages:[],
       Recomonds_home:[],
       icon_res:[],
       Weekends_home:[],
       swiperList:[],
       home_city:''
        //     icon_res:[{
        //     id:'001',
        //     src:'https://img1.qunarzz.com/travel/poi/1411/23/2328b50c72930d7213a9cdb.jpg',
        //     text:'景点门票'
        // },{
        //     id:'002',
        //     src:'https://img1.qunarzz.com/travel/poi/1501/16/090d50ede54b99.jpg',
        //     text:'泡温泉'
        // },{
        //     id:'003',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/7399cd427f86356e35b8e7eae5850031.jpg_200x150x95_73457f5a.jpg',
        //     text:'1234'
        // },{
        //     id:'004',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/45a4e09567253f0051fa23c0ea9215d1.jpg_200x150x95_85a30734.jpg',
        //     text:'aa23'
        // },{
        //     id:'005',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/e5fbf8985abb1bf9a07528e4d41c4ceb.jpg_200x150x95_b9fa2552.jpg',
        //     text:'56ert'
        // },{
        //     id:'006',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/7399cd427f86356e35b8e7eae5850031.jpg_200x150x95_73457f5a.jpg',
        //     text:'qwer3'
        // },{
        //     id:'007',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/7399cd427f86356e35b8e7eae5850031.jpg_200x150x95_73457f5a.jpg',
        //     text:'qwer3'
        // }],
        // Recomonds_home:[{
        //     id:'001',
        //     src:'https://img1.qunarzz.com/travel/poi/1411/23/2328b50c72930d7213a9cdb.jpg',
        //     title:'大连圣地亚海洋世界',
        //     desc:'浪漫大连首站，连忙的海洋主题乐园',
        //     price:99
        // },{
        //     id:'002',
        //     src:'https://img1.qunarzz.com/travel/poi/1501/16/090d50ede54b99.jpg',
        //     title:'大连森林动物园',
        //     desc:'与动物嘻嘻，共享和谐自然',
        //     price:48
        // },{
        //     id:'003',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/7399cd427f86356e35b8e7eae5850031.jpg_200x150x95_73457f5a.jpg',
        //     title:'大连森林动物园',
        //     desc:'与动物嘻嘻，共享和谐自然',
        //     price:48
        // },{
        //     id:'004',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/45a4e09567253f0051fa23c0ea9215d1.jpg_200x150x95_85a30734.jpg',
        //     title:'大连森林动物园',
        //     desc:'与动物嘻嘻，共享和谐自然',
        //     price:48
        // },{
        //     id:'005',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/e5fbf8985abb1bf9a07528e4d41c4ceb.jpg_200x150x95_b9fa2552.jpg',
        //    title:'大连森林动物园',
        //     desc:'与动物嘻嘻，共享和谐自然',
        //     price:48
        // },{
        //     id:'006',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/7399cd427f86356e35b8e7eae5850031.jpg_200x150x95_73457f5a.jpg',
        //     title:'杭州西湖',
        //     desc:'欣赏西湖美景',
        //     price:30
        // },{
        //     id:'007',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/7399cd427f86356e35b8e7eae5850031.jpg_200x150x95_73457f5a.jpg',
        //     title:'大连森林动物园',
        //     desc:'与动物嘻嘻，共享和谐自然',
        //     price:48
        // }],
        //  Weekends_home:[{
        //     id:'001',
        //     src:'https://img1.qunarzz.com/travel/poi/1411/23/2328b50c72930d7213a9cdb.jpg',
        //     title:'温泉有水上乐园',
        //     desc:'泡泡温泉，闻闻花香',
        // },{
        //     id:'002',
        //     src:'https://img1.qunarzz.com/travel/poi/1501/16/090d50ede54b99.jpg',
        //     title:'大连森林动物园',
        //     desc:'与动物嘻嘻，共享和谐自然',
        // },{
        //     id:'003',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/7399cd427f86356e35b8e7eae5850031.jpg_200x150x95_73457f5a.jpg',
        //     title:'大连森林动物园',
        //      desc:'与动物嘻嘻，共享和谐自然',
        // },{
        //     id:'004',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/45a4e09567253f0051fa23c0ea9215d1.jpg_200x150x95_85a30734.jpg',
        //     title:'大连森林动物园',
        //     desc:'与动物嘻嘻，共享和谐自然',
          
        // },{
        //     id:'005',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/e5fbf8985abb1bf9a07528e4d41c4ceb.jpg_200x150x95_b9fa2552.jpg',
        //    title:'大连森林动物园',
        //     desc:'与动物嘻嘻，共享和谐自然',
          
        // },{
        //     id:'006',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/7399cd427f86356e35b8e7eae5850031.jpg_200x150x95_73457f5a.jpg',
        //     title:'杭州西湖',
        //     desc:'欣赏西湖美景',
        // },{
        //     id:'007',
        //     src:'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/7399cd427f86356e35b8e7eae5850031.jpg_200x150x95_73457f5a.jpg',
        //     title:'大连森林动物园',
        //     desc:'与动物嘻嘻，共享和谐自然',
        // }],
        }
        
    },
    computed:{
        // pages(){
            
            
           
        // }
    },
    methods:{
          getHomeInfor(){
            let that=this;
            // axios.get('/src/mock/mock.json').then(this.getResult)
                        // axios.get('/src/mock/mock.json').then(res=>{
                        //     console.log(res);
                        // }).catch(rej=>{
                        //     console.log(rej); 
                        //     // 报错信息GET http://localhost:8080/src/mock/mock.json 404 (Not Found)
                        //     //src 目录的也不能被直接访问到 ，只有static目录下的可以被直接访问到
                        // })

                         axios.get('/static/mock/home.json').then(res=>{
                            console.log('父组件获取到异步加载的数据'); //输出对象 data属性是hello world
                            let datas=res.data.data;
                            that.icon_res=datas.iconList;
                            that.Recomonds_home=datas.recommendList;
                            that.Weekends_home=datas.weekendList;
                            this.swiperList=datas.swiperList;
                            this.home_city=datas.city;
                            // let pages=[];
                            if(that.icon_res.length>0){
                                for(let i=0 ;i<that.icon_res.length;i++){
                                    let page=Math.floor(i/6);//页码数
                                    if(!that.pages[page]){ //!0=true
                                        that.pages[page]=[]
                                    }
                                    that.pages[page].push(that.icon_res[i]);
                                } 
                         
                            }
                        }).catch(rej=>{
                            console.log(rej); 
                            // 
                            //src 目录的也不能被直接访问到 ，只有static目录下的可以被直接访问到
                        })

        },
        // getResult(res){
        //     console.log(res);
        // }
    }
}
</script>
<style scoped>
/* @import "../../assets/styles/mixins.styl" */
.icon_li_box{
    width: 29%;
    height: 0;
    float: left;
    list-style: none;
   padding-bottom: 34%;
    border: 1px solid #ddd;
    margin-right: 3%;
    margin-bottom: 3%;
}
.ul_icon:nth-child(3n){
    padding-right: 0px !important;
}
.ul_icon{
    height: 0;
    overflow: hidden;
    padding-bottom: 74%;
}
</style>