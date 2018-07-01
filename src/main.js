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
import  _ from 'lodash'
import  Store from './store'
import "lib-flexible"

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(Button)
Vue.use(Select)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:Store,
  components: { App },
  template: '<App/>'
})
