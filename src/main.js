import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 完整引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//Vue.use(Element, { size: 'small', zIndex: 3000 });
//import $ form 'jquery'
//import'bootstrap/js/bootstrap.min.js'
//import'bootstrap/css/bootstrap.min.css'


// 引入element ui
import './plugins/element.js'
// 添加全局样式 css 到js中
import './assets/css/global.css'
//引入阿里矢量图标库iconfont
import './assets/font/iconfont.css'
//导入axios 实现跨域请求
import axios from 'axios'
// 挂载全局使用axios
Vue.prototype.$http = axios
// 设置访问根路径
axios.defaults.baseURL = "http://localhost:9000"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
