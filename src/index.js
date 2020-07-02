import test from '../packages/test';

// eslint-disable-next-line func-names
const install = function (Vue) {
  if (install.installed) return;

  Vue.component(test.name, test);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  test,
};
