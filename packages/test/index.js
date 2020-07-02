// 为组件提供 install 方法，供组件对外按需引入
import test from './src/test';

test.install = (Vue) => {
  Vue.component(test.name, test);
};
export default test;
