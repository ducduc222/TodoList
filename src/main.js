import Vue from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHouse, faHockeyPuck, faCheck , faCircleCheck, faTrashCan, faCirclePlus} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faHouse, faHockeyPuck, faCheck, faCircleCheck, faTrashCan, faCirclePlus)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './Routes'
const router = new VueRouter({
  mode: 'history',
  routes
})
import store from './store'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
