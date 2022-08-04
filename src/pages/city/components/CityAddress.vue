<template>
    <div id="box_address">
        <div id="address_title">
            <div class="_content">您的位置</div>
        </div>
        <div id="address_button" ref="address_buttons">
          <button>{{home_city}}</button>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default{
    name:'CityAddress',
    computed:{
    // store_city(){
    //     return this.$store.state.home_city;
    // }
    ...mapState(['home_city'])
}
}
</script>
<style scoped>
#address_title{
    width: 100%;
    height: 0;
    padding-bottom: 6%;
    background: #dddddd78;
    border-bottom: 1px solid #a185851c;
}
#address_title ._content{
    font-size: 12px;
    width: 20%;
    margin-left: 2%;
    padding-top: 2px;
}
#address_title span{
    padding:2% 2% 2% 5%;
}
#address_button{
    width: 100%;
    height: 0;
    padding-bottom: 10%;
}
#address_button button{
    color: aqua;
    border: 1px solid aqua;
    width: 20%;
    border-radius: 4px;
    background: white;
    margin-top: 2.5%;
    height: 0;
    padding-bottom: 5%;
    margin-left: 2%;
}

#box_address{
    border-bottom: 1px solid #ddd;
    text-align: left;

}
</style>