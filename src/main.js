import Vue from 'vue'
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify'
import App from "@/App";
import routers from "@/routers";
import VueCookies from "vue-cookies";
import './registerServiceWorker';

Vue.use(VueRouter);
Vue.use(VueCookies);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: routers
});

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')





