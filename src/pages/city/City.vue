<template>
<div>
    <!-- city -->
    <div class="comp">
        <city-header ref="headers"></city-header>
        <city-search :searchObj="alphaObj" v-if="JSON.stringify(alphaObj)!='{}'" ></city-search>
        <city-address :city="City" ref="address"  v-if="City!=''"></city-address>
        <hot-city :hot_city_lists="hot_citylists" v-if="hot_citylists.length>0" ></hot-city>
        <city-list  :cityObj="alphaObj" v-if="JSON.stringify(alphaObj)!='{}'"  ref="cityList" :letter="Letter"></city-list>
        <city-alphabet :alpha_obj="alphaObj" v-if="JSON.stringify(alphaObj)!='{}'" ref="alpha_com"></city-alphabet>
    </div>
        <div class="version_container" v-if="Object.keys(city_datas).length>0"> 
            <nav-footer ></nav-footer>
        </div>
</div>

</template>
<script>
//体会：2022/7/28由于组件中数据都是异步获取的，正常添加一个version组件，会先渲染出version信息，再显示出其他组件的信息，
// 像是抖动了一次啊，可以加一句 v-if="Object.keys(city_datas).length>0"  ,让异步请求有返回后再显示version，
// 和其他组件渲染一个原理，这样看起来就不会"抖动"了
import CityHeader from "./components/CityHeader";
import CityAddress from "./components/CityAddress";
import HotCity from "./components/HotCity";
import CityList from "./components/CityList";
import CityAlphabet from "./components/CityAlphabet";
import CitySearch from "./components/CitySearch";

import BScroll from 'better-scroll'
import axios from 'axios';

export default{
    name:'city',
    components:{
        CityHeader,
        CityAddress,
        HotCity,
        CityList,
        CityAlphabet,
        CitySearch,
        
    },
    data(){
        return {
            City:'',
            hot_citylists:[],
            //  detailList:[
            //        {id:1,text:'阿克苏'}, {id:2,text:'阿拉'} ,{id:3,text:'阿姨'}, {id:4,text:'阿富汗'}, {id:5,text:'阿拉善盟'}, {id:6,text:'阿勒泰'}, {id:7,text:'啊上海'} , {id:8,text:'啊北京'} 
            //  ]
            detailList:[],
            alphaObj:{},
            ceshi:'001',
            Letter:'',
            city_datas:{}
        }
    }
    ,mounted(){
        // let wrapper=this.$refs.wrapper;
        // this.scroll=new BScroll(wrapper);
        this.getCityInfo();
 
    }
    ,
    updated(){
        // this.scroll.refresh();
    },
    methods:{
        getCityInfo(){
            let that=this;
             axios.get('/static/mock/city.json').then(res=>{
                let datas=res.data.data;
                this.city_datas=datas;
                that.City=datas.city;
                that.hot_citylists=datas.hotCities;
                // that.detailList=datas.cities['A'];
                that.alphaObj=datas.cities;
                this.$store.state.alopha_obj=that.alphaObj;

             }).catch(function(rej){
                   
             })
        },
        handleLetterChange(word){ //兄弟a--》父==》兄弟b
            this.Letter=word;
        }
    }
}
</script>
<style scoped>
.content{
    position: relative;
}
</style>