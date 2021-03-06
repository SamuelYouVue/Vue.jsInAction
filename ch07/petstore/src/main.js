import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('./assets/app.css')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// }).$mount("'#app")

