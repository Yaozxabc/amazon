// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Button,Select} from 'element-ui'
import '@/assets/scripts/reset.css'
import '@/assets/iconfont/iconfont.css'
import  axios from 'axios'
import  _ from 'lodash'
import  Store from './store'
import "lib-flexible"
import loading from './components/common/loading'
import Vuelazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.use(ElementUi)
Vue.use(Vuelazyload,{
  loading:require('@/assets/images/loading.gif')
})
Vue.use(Button)
Vue.use(Select)
Vue.use(loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:Store,
  components: { App },
  template: '<App/>'
})
