/**
 * Created by Administrator on 2018/6/23.
 */
import Vuex from 'vuex';
import Vue from 'vue';
import orderlist from  './module/orderlist.json'
Vue.use(Vuex)
export  default  new  Vuex.Store({
  module:{
    orderlist
  }
})
