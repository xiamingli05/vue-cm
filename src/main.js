import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/display.css';

//注册ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 引入router实例
import router from './router.js';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
