import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'amfe-flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';  // 引入英文语言包

Vue.use(ElementUI, { locale });
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
