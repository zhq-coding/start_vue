<template>
<div>
    <!-- city -->
       <div  >
        <div >
    <city-header ref="headers"></city-header>
    <city-search :searchObj="alphaObj" v-if="JSON.stringify(alphaObj)!='{}'" ></city-search>
    <city-address :city="City" ref="address"  v-if="City!=''"></city-address>
    <hot-city :hot_city_lists="hot_citylists" v-if="hot_citylists.length>0" ></hot-city>
    <city-list  :cityObj="alphaObj" v-if="JSON.stringify(alphaObj)!='{}'"  ref="cityList" :letter="Letter"></city-list>
    <city-alphabet :alpha_obj="alphaObj" v-if="JSON.stringify(alphaObj)!='{}'" ref="alpha_com"></city-alphabet>
        </div>
       </div>
</div>

</template>
<script>
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
        CitySearch
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
            Letter:''
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