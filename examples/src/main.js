// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import zview from '../../src/index.js';
// 完整引用
Vue.use(zview);
// 独立引用
// const { test } = zview;
// Vue.component(test.name, test);

// 导入组件
// import YuanUI from '../../package/index';

Vue.config.productionTip = false;
// 注册组件
// Vue.use(YuanUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
