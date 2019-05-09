import Vue from 'vue';
import Router from 'vue-router';
import PdawSelectGav from './components/pdaw-select-gav/pdaw-select-gav';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: PdawSelectGav,
    },
    {
      path: '/groupId/:groupId',
      component: PdawSelectGav,
    },
    {
      path: '/groupId/:groupId/artifactId/:artifactId',
      component: PdawSelectGav,
    },
    {
      path: '/groupId/:groupId/artifactId/:artifactId/version/:version',
      component: PdawSelectGav,
    },
  ],
});
