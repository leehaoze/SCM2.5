import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Cookie from 'js-cookie'
import VueChart from 'vue-chartjs'


import Login from './components/login/login'
import HomePage from './components/home/home'
import AppCenter from './components/appCenter/appCenter'
import DocumentCenter from './components/documentCenter/documentCenter'
require('es6-promise').polyfill();


var axios = require('axios');
Vue.prototype.$http = axios.create({
  baseURL: 'http://123.207.49.64:8080/SCM'
  // baseURL: 'http://127.0.0.1:8080'
  // baseURL: 'http://cnshah0mrosql01:8080/SCM'
});

// import 'vuetify/dist/vuetify.min.css'

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueChart);

const routes = [
  {path: "/login", name: 'login', component: Login},
  {path: "/", name:'HomePage', component:HomePage},
  {path: '/AppCenter', component: AppCenter},
  {path: '/DocumentCenter', component: DocumentCenter}
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  console.log(Cookie.get('user'));
  if (!Cookie.get('user') && to.name !== 'login') {
    next({name: 'login'});
  } else if (Cookie.get('user') && to.name === 'login') {
    next({name: 'HomePage'});
  }
  else
    next();
});

router.afterEach((to) => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});
