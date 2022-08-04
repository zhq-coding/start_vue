<template>
<div class="home-box">
    <!-- <school/> -->
    <div class="comp">
        <home-header> 
       
        </home-header >
        <!-- 插槽真实内容一定要在子组件便签内，如果没有插槽，父组件无法在子组件里添加内容,使用插槽，父组件可在子组件里添加template或html元素 -->
        <home-banner :banner_list="swiperList" v-if="swiperList.length>0"></home-banner>
        <home-icons  :icons="pages"  v-if="pages.length>0"></home-icons> 
        <!--v-if 控制元素或模板的渲染,根据表达式的值true或false在DOM中生成或者移除一个元素（或多个元素）
        v-if 当数据不为空时渲染子组件-->
        <hot-recomond :Recomond_List="Recomonds_home"  v-if="Recomonds_home.length>0"></hot-recomond>
        <home-weekend :Weekend_List="Weekends_home"   v-if="Weekends_home.length>0"></home-weekend>
    </div>
    <div class="version_container" v-if="Object.keys(city_datas).length>0"> 
           <nav-footer></nav-footer>
    </div>
    <!-- {{pages}} -->
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
// if (window.performance.navigation.type === 1) {
//       console.log('页面被刷新')
//     } else {
//     // 这里可以写调用什么方法
//       console.log('页面首次被加载')
//     }

    created(){   //执行顺序  home created-->icon created-->icon mounted-->home mounted
        if(this.first_load){
            this.getHomeInfor();
        }
        // console.log('页面首次被加载')

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
            home_city:'',
            city_datas:{},
            first_load:true,
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
                            this.city_datas=datas;
                            that.icon_res=datas.iconList;
                            that.Recomonds_home=datas.recommendList;
                            that.Weekends_home=datas.weekendList;
                            this.swiperList=datas.swiperList;
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
.comp{
    margin-bottom: 20px;
}
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