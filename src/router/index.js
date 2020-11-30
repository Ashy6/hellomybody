import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import First from '../components/First.vue'
import register from '../components/register.vue'
import find404 from '../components/find404.vue'
//后台界面
import calories from '../components/Home/calories.vue'
import hello from '../components/Home/hello.vue'
import rights from '../components/Home/rights.vue'
import tznl from '../components/Home/tznl.vue'
import userlist from '../components/Home/userlist.vue'
//import axios from 'axios'
// 用户页面
import meals from '../components/Users/meals.vue'
import hellou from '../components/Users/hellou.vue'
import myxx from '../components/Users/myxx.vue'
import myxg from '../components/Users/myxg.vue'
import mygj from '../components/Users/mygj.vue'
import myjl from '../components/Users/myjl.vue'
import cpsm from '../components/Users/cpsm.vue'
import cpjf from '../components/Users/cpjf.vue'
import cpcd from '../components/Users/cpcd.vue'
import cpmyl from '../components/Users/cpmyl.vue'
import fxjk from '../components/Users/fxjk.vue'
import kpwz from '../components/Users/kpwz.vue'

//睡眠测评组件
import cp20101 from '../components/Users/cpsm/cp20101.vue';
import cp20102 from '../components/Users/cpsm/cp20102.vue';
import cp20103 from '../components/Users/cpsm/cp20103.vue';
import cp20104 from '../components/Users/cpsm/cp20104.vue';
import cp20105 from '../components/Users/cpsm/cp20105.vue';
import cp20106 from '../components/Users/cpsm/cp20106.vue';



// 配置路由
Vue.use(VueRouter)

const routes = [
  {
    path: "/", //访问路径
    redirect: "/login"  //重定向
  },
  {
    path: "/login",  //转发
    component: Login  //引入系统登录组件
  },
  {
    path: "/home",  //转发
    // 用户懒加载
    // component: () => import(/* webpackChunkName: "home" */ '../components/Users/hello.vue')
    component: Home, //引入系统 后台主页 组件
    redirect: "/hello",    //起始页 hello 路由重定向，重定向到子页面
    children: [
      { path: "/hello", component: hello, },
      { path: "/user", component: userlist, },
      { path: "/rights", component: rights, },
      { path: "/tznl", component: tznl, },
      { path: "/calories", component: calories, },
    ]
  },
  {
    path: "/first",  //转发
    component: First,  //引入系统首页组件
    redirect: "/hellou",    //起始页 hello 路由重定向，重定向到子页面
    children: [
      { path: "/hellou", component: hellou, },
      { path: "/meals", component: meals, },
      { path: "/myxx", component: myxx, },
      { path: "/myxg", component: myxg, },
      { path: "/mygj", component: mygj, },
      { path: "/myjl", component: myjl, },
      {
        path: "/cpsm",    // 睡眠测评页面
        component: cpsm,
        children: [     // 三级路由 睡眠测评页面
          { path: "/cp20101", component: cp20101, },
          { path: "/cp20102", component: cp20102, },
          { path: "/cp20103", component: cp20103, },
          { path: "/cp20104", component: cp20104, },
          { path: "/cp20105", component: cp20105, },
          { path: "/cp20106", component: cp20106, },
        ]
      },
      { path: "/cpjf", component: cpjf, },
      { path: "/cpcd", component: cpcd, },
      { path: "/cpmyl", component: cpmyl, },
      { path: "/fxjk", component: fxjk, },
      { path: "/kpwz", component: kpwz, },
    ]
  },
  {
    path: "/register",  //转发
    component: register  //引入系统注册组件
  },
  {
    // 404页面导航
    path: '*',
    component: find404,
    // component: () => import('../components/find404.vue')
  }
]
// 挂载router
const router = new VueRouter({
  routes
})
// 路由导航守卫出现问题的时候使用
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

// //挂载路由导航守卫
// router.beforeEach((to,form,next) => {     //3个方法  你 要往那里去 从哪里来 要去干什么
//   //next （url）  重定向到url中， 没有则继续访问 to的路径
//   if(to.path === '/login') return next();   //只允许访问网站首页 
//   // 获取user
//   const userFlag = window.sessionStorage.getItem("user");
//   //有值，则完成登录，进入首页  无值返回登录页 
//   if(!userFlag) return next('/login');
//   next();
// })

// 路由守卫 
router.beforeEach((to, from, next) => {

  let flag = sessionStorage.getItem('user')

  if (to.meta.requireAuth == true) { // 需要登录权限进入的路由
    if (!flag) {                   // 获取不到登录信息
      next({
        path: '/login'
      })
    } else {                       // 获取到登录信息，进行下一步
      return next();
    }
  } else {                           // 不需要登录权限的路由直接进行下一步
    return next();
  }
})
export default router
