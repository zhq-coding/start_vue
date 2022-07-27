import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from 'vuex-persistedstate';//数据持久化插件
import axios from 'axios'
Vue.use(Vuex);
//vuex缺点是当页面刷新时，数据会重新初始化，使用vuex-persistedstate可以把数据缓存，即使刷新state中的数据也不会被初始化
export default new Vuex.Store({
    state:{
        counter:500   //state：存放需要共享的状态信息，使用时通过 $store.state.counter 即可拿到状态信息。
    
    },
    mutations:{
        add(state,payload){//this.$store.commit('sub')  对 state 的状态信息进行修改：先拿到 store 对象，然后通过 commit 提交 mutations 中的方法。
             state.counter+=payload;
            // setTimeout(() => {

            //     state.counter += payload
                
            //     }, 3000)
        },
        sub(state,payload){//this.$store.commit('sub')  对 state 的状态信息进行修改：先拿到 store 对象，然后通过 commit 提交 mutations 中的方法。
            state.counter-=payload;
        },
        dubNum(state,payload){//this.$store.commit('sub')  对 state 的状态信息进行修改：先拿到 store 对象，然后通过 commit 提交 mutations 中的方法。
            state.counter*=payload.num;
        },
        dubreverse(state,payload){//this.$store.commit('sub')  对 state 的状态信息进行修改：先拿到 store 对象，然后通过 commit 提交 mutations 中的方法。
            // state.counter= state.counter/payload;
         
            axios.get("http://127.0.0.1:8081/src/components/data.json").then(function(res){
                console.log(res.code);
                state.counter=6666;
            }).catch(function(rej){
                console.log(rej);
            })
        },
    },
    getters:{
        powerCounter(state){ // $store.getters.powerCounter 获取
            return state.counter * 2
        },
    },
    plugins: [persistedState()], //是在页面刷新的时候vuex里的数据会重新初始化，导致数据丢失,默认存储到localStorage
    actions:{
        increament(context,payload){  //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
            context.commit('sub',payload) 
        },
        dublAction(context,payload){  //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
            context.commit('dubNum',payload) 
        },
        counter_add(context,payload){
            context.commit('add',payload);
        },
        async_action(context,payload){
            setTimeout(function(){
                context.commit('dubreverse',payload)
            },2000)
        }
    }

      
})