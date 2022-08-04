<template>
    <div id="box_hot">
        <div id="hot_city_title">
            <div class="_content">热门城市</div>
        </div>
        <div id="hot_btns_container">
            <div class="address_button" v-for="item of hot_city_lists" :key="item.id" @click="changeAddress(item.name)">
                <button>{{item.name}}</button>
            </div>
        </div>
        
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default{
    name:'HotCity',
    props:{
        hot_city_lists:{
            type:Array
        }
    },
    methods:{
        changeAddress(cur_city){
            // this.$emit("yourAddress",cur_city);
            this.changeCity(cur_city);
            this.$router.replace('/')

        },
        ...mapMutations(['changeCity'])
    }
}
</script>
<style scoped>
#hot_btns_container{
    width: 100%;
    /* height: 0;
    padding-bottom: 50%;
    overflow-y: scroll; */

}
#hot_city_title{
    width: 100%;
    /* height: 0;
    padding-bottom: 6%; */
    background: #dddddd78;
    border-bottom: 1px solid #a185851c;
}
#hot_city_title ._content{
    font-size: 12px;
    width: 20%;
    margin-left: 2%;
    padding-top: 2px;
}
#hot_city_title span{
    padding:2% 2% 2% 5%;
}
.address_button{
    /* float: left; */
    margin: 1%;
    margin-top: 2%;
    display: inline-block;
}
.address_button button{
    color: black;
    border:1px solid #574e4e45;
    width: 70px;
    border-radius: 4px;
    background: white;
    margin-top: 2.5%;
    height: 21px;
    padding-bottom: 5%;
    margin-left: 2%;
}

#box_hot{
    border-bottom: 1px solid #ddd;
    text-align: left;

}
</style>