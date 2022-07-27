<template>
<div id="container" class="wrapper" ref="wrapper" >
 <!-- {{this.$store.cur_alpha}} -->
 <div class="content" ref="content">
    <div class="box_header" v-for="item of contents" :key="item.id">
        <div class="detail_title">
            <div class="_content" :ref="item.id">{{item.id}}</div>
        </div>
        <div class="detail_container" v-for=" con of item.alpha_content" :key="con.id">
            <div class="detail_content">
            <span>{{con.name}}</span>
            </div>
        </div>
        
    </div>
 </div>
</div>
    
</template>
<script>
import BScroll from 'better-scroll'
// let scroll=new BScroll(wrapper);
export default{
    name:'CityList',
    props:{
        cityObj:{
            typeof:Object
        },
        letter:{
            typeof:String
        }
    },
    data(){
        return{
            contents:[]
        }
      
    },
    mounted(){
        for(let i in this.$store.state.alopha_obj){
                    // this.alphas.push({id:count,alpha:i});
            this.contents.push({id:i,alpha_content:this.$store.state.alopha_obj[i]});
        }
        this.scroll=new BScroll(this.$refs.wrapper)
    },
    watch:{
        letter(){
            if(this.letter){
                const element=this.$refs[this.letter][0]
                let x=element.getBoundingClientRect().left;
                let y=element.getBoundingClientRect().top;

                this.scroll.scrollToElement(element);
                // this.scroll.scrollTo(x,y);
                this.scroll.refresh();
                // this.$refs.content.style.transform='none';
            }
            console.log(this.letter);
        }
    },
    updated(){ //：只有事先设置好的data变量如下arrData改变并且要在页面重新渲染{{ arrData }}完成之后,才会进updated方法，
        this.scroll.refresh();
    },
    
}
</script>
<style scoped>
#container{
    height: 400px;    /* 设定高度很重要 */
    overflow: hidden;
}
.detail_container{
    width: 100%;
    /* height: 0;
    padding-bottom: 70%; */
    /* overflow-y: scroll; */

    /* overflow-y: scroll; */

}
.detail_title{
    width: 100%;
    height: 0;
    padding-bottom: 6%;
    background: #dddddd78;
    border-bottom: 1px solid #a185851c;
}
.detail_title ._content{
    font-weight: bold;
    font-size: 15px;
    width: 20%;
    margin-left: 2%;
    padding-top: 2px;
}
.detail_title span{
    padding:2% 2% 2% 5%;
}
.detail_content{
    /* float: left; */
    /* margin: 1%; */
    /* margin-top: 2%; */
    border-bottom:1px solid #ddd ;
    padding: 3% 0 3% 3%;


}
.detail_content span{
    color: black;
    border-color: #dddddd87;
    width: 70px;
    border-radius: 4px;
    background: white;
    /* margin-top: 2.5%; */
    height: 21px;
    /* padding-bottom: 5%; */
    /* margin-left: 2%; */
    font-size: 12px;
}

.box_header{
    border-bottom: 1px solid #ddd;
    text-align: left;

}
</style>