import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

// import helloworld from '@/pages/home/Helloworld';
import test from "@/pages/other/test"
// import Axios from '@/components/Axios'
// import Store from '@/components/Store'
// import Table from '@/components/Table'//Grid
// import Grid from '@/components/Grid'
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },{
//       path: '/home',
//       name: 'Home',
//       component: Home
//     },{
//       path: '/axios',
//       name: 'axios',
//       component: Axios
//     },{
//       path: '/store',
//       name: 'store',
//       component: Store
//     },{
//       path: '/table',
//       name: 'table',
//       component: Table,
//       meta:{

//         keepAlive:false

//       }
//     },{
//       path: '/grid',
//       name: 'grid',
//       component: ()=>import('@/components/Grid'),
//     }
//   ]
// })
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }
  ,{
    path: '/city',
    name: 'City',
    component: City
  }
  // ,{
  //   path:'/helloworld',
  //   name:'HelloWorld',
  //   component:helloworld
  // }
]
})