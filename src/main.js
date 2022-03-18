import Vue from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHouse, faHockeyPuck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faHouse, faHockeyPuck)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)


import store from './store'
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
