import Vue from 'vue';
import Router from 'vue-router';
import PdawSelectGav from './components/pdaw-select-gav/pdaw-select-gav';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{ path: '/groupId/:groupId', component: PdawSelectGav }],
});
