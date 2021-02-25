import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 添加全局样式 css 到js中
import './assets/css/global.css'
//引入阿里矢量图标库iconfont
import './assets/font/iconfont.css'

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

// 引入bootstrap4
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// 安装BootstrapVue
Vue.use(BootstrapVue)
// 可选地安装BootstrapVue图标插件组件
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './custom.scss'
//导入axios 实现跨域请求
import axios from 'axios'
// 挂载全局使用axios
Vue.prototype.$http = axios
// 设置访问根路径
// axios.defaults.baseURL = "http://39.107.244.76:9000"
axios.defaults.baseURL = "http://localhost:9000"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
