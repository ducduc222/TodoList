import Vue from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHouse, faHockeyPuck, faCheck , faCircleCheck} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faHouse, faHockeyPuck, faCheck, faCircleCheck)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)


import store from './store'
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
