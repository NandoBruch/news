import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes.js';

import './assets/content-tools/content-tools.min.js'
import './assets/content-tools/content-tools.min.css'


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ routes,  mode: 'history'});

Vue.http.options.root = 'http://localhost:3000';
Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
