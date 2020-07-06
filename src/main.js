import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueTypedJs from 'vue-typed-js'
import AOS from 'aos'
import "aos/dist/aos.css";
Vue.use(VueTypedJs)

/*



    Fade animations:
        fade
        fade-up
        fade-down
        fade-left
        fade-right
        fade-up-right
        fade-up-left
        fade-down-right
        fade-down-left

    Flip animations:
        flip-up
        flip-down
        flip-left
        flip-right

    Slide animations:
        slide-up
        slide-down
        slide-left
        slide-right

    Zoom animations:
        zoom-in
        zoom-in-up
        zoom-in-down
        zoom-in-left
        zoom-in-right
        zoom-out
        zoom-out-up
        zoom-out-down
        zoom-out-left
        zoom-out-right


 */ 



Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init()
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
