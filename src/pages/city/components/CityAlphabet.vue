<template>
    <!-- <div id="container_alpha" > -->
     
       <ul class="alphbet_list" ref="container_box"> 
        <li class="item" v-for="item of alphas" :key="item.id" @click="change_CityList($event)"
        @touchmove="handleTouchMove"   @touchend="handleTouchEnd"    @touchstart="handleTouchStart" :ref="item.alpha">
            {{item.alpha}}   
        </li>
        
    </ul>
    <!-- </div> -->
</template>
<script>
//上下滑动时，是第几个字母？
//（手指距离顶部高度-a距离顶部的高度）/每个字母之间的距离
//为什么要根据下标找字母？？？？
// //想要的效果：手指滑动一定距离，列表显示也变动
// clientX：当鼠标事件发生时（不管是onclick，还是omousemove，onmouseover等），鼠标相对于浏览器（这里说的是浏览器的有效区域）x轴的位置；
// clientY：当鼠标事件发生时，鼠标相对于浏览器（这里说的是浏览器的有效区域）y轴的位置；
export default{
    name:'CityAlphabet',
    methods:{
      
    },
    props:{
        alpha_obj:{
            typeof:Object
        }
    },
    data(){
        return{
            alphas:[],
            touch_start:false,
            timer:null
        }
    }
    ,mounted(){
        let count=0;
        for(let i in this.alpha_obj){
            this.alphas.push({id:count,alpha:i});
            count++;
        }
    },
    // computed:{
    //     contents(){
        
    //         return  this.$store.state.cur_alpha;
    //     }
    // },
    methods:{
        change_CityList(e){
            let el=e.target;//字母索引
            console.log(el.innerText);
            this.$parent.handleLetterChange(el.innerText);
          
        },
        handleTouchStart(e){
            this.touch_start=true;
            // console.log('开始触摸');
            
        },
        handleTouchMove(e){
            let alpha_arr=[];
            for(let i in this.alpha_obj){
                alpha_arr.push(i);
            }
            if(this.timer){//函数截留
                // clearTimeout(this.timer);
                return;
            }
            let that=this;
            this.timer=setTimeout(function(){  //箭头函数中的this,限制拖动显示频率
                if(that.touch_start==true){
                // let y=this.$refs['A'][0].offsetTop;//offsettop是相对于父元素而言的
                    let top_a=that.$refs['A'][0].getBoundingClientRect().top,
                    top_b=that.$refs['B'][0].getBoundingClientRect().top;
                    let cur_y=e.touches[0].clientY
                    let dev=Math.floor((cur_y-top_a)/( top_b-top_a));
                    if(dev>=0&&dev<alpha_arr.length){
                        let letter=alpha_arr[dev];
                        that.$parent.handleLetterChange(letter);
                    }
                    // clearTimeout(that.timer);
                    that.timer=null;
                }
            },16)
            
            // console.log("触摸不松动");
        },
        handleTouchEnd(){
            this.touch_start=false;
            // console.log("刚结束触摸");
        }
    }
}
</script>
<style scoped>
.alphbet_list li{
    list-style: none    ;
    color: aqua;
}
.alphbet_list{
   /* background-color: red; */
    position: absolute;
    top: 200px;
    right: 0px;
    width: 16px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0;

}
#back{
    margin-right: 20px;
    font-size:20px;
}
#back i{
    color: white;
    font-size: 30px;
}
#box_header #search_input{
    width: 81%;
    height: 73%;
}
#box_header #search_input input{
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
}
#box_header input{
    width: 100%;
    height: 80%;

}
</style>