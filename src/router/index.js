import Vue from 'vue'
import VueRouter from 'vue-router'
/*
import Home from '../pages/home'
*/
import Home from '../pages/home'
import Goods from '../pages/goodsDetail'
import Msg from '../components/Message'
// import Cart from '../pages/shoppingCart'
// import Order from '../pages/orderNow'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: Home
  },
  {
    path: '/msg',
    component: Msg,
    name: Msg
  },
  {
    path: '/goods',
    component: Goods,
    name: Goods,
    children: [
      {
          path:'msg',
          component: Msg,
          name: Msg
      }
    ]
  }
  // {
  //   path: '/cart',
  //   component: Cart,
  //   name: Cart,
  // },
  // {
  //   path: '/order',
  //   component: Order,
  //   name: Order,
  // }
]
export default new VueRouter({
  routes
})
