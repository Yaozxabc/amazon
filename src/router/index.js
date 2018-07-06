import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import details from '@/components/pages/details'
import sales from '@/components/pages/sales'
import orderlist from '@/components/pages/orderlist'
import productlist from '@/components/pages/productlist'
import page01 from '@/components/pages/details/page01'
import page02 from '@/components/pages/details/page02'
import page03 from '@/components/pages/details/page03'
import page04 from '@/components/pages/details/page04'



Vue.use(Router)

export default new Router({
  //mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/details',
      name: 'details',
      component: details,
      redirect:'/details/detail01',
      children:[
        {
          path:'detail01',
          component: page01
        },
        {
          path:"detail02",
          component: page02
        },
        {
          path:"detail03",
          component: page03
        },
        {
          path:"detail04",
          component: page04
        }
      ]
    },
    {
      path:'/sales',
      name:'sales',
      component:sales
    },
    {
      path:'/orderlist',
      name:"orderlist",
      component:orderlist
    },
    {
      path:'/productlist',
      name:"productlist",
      component:productlist
    }
  ]
})
