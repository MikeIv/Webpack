// JS
import './js/'

// SCSS
import './assets/scss/styles.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')
import store from './store'

// Vue components (for use in html)
Vue.component('example-component', require('./js/components/Example.vue').default)

// Vue init
const app = new Vue({
  data: () => ({
    component: false
  }),
  store,
  el: '#app'
})
