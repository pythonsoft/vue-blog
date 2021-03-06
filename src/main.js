// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
  `
})
