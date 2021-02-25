import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import First from '../components/First.vue'
import register from '../components/register.vue'
// import find404 from '../components/find404.vue'
//后台界面
import hello from '../components/Home/hello.vue'
import userlist from '../components/Home/userlist.vue'
import rights from '../components/Home/rights.vue'
import userinfo from '../components/Home/userinfo.vue'
import gjgl from '../components/Home/gjgl.vue'
import calories from '../components/Home/calories.vue'
import sjck from '../components/Home/sjck.vue'
import sjgl from '../components/Home/sjgl.vue'
import kfz from '../components/Home/kfz.vue'
import bbgx from '../components/Home/bbgx.vue'
//import axios from 'axios'
// 用户页面
import meals from '../components/Users/meals.vue'
import hellou from '../components/Users/hellou.vue'
import jkgj from '../components/Users/jkgj.vue'
import jkgj2 from '../components/Users/jkgj2.vue'
import g01 from '../components/Users/util/g01.vue'
import g02 from '../components/Users/util/g02.vue'
import mygj from '../components/Users/mygj.vue'
import myjl from '../components/Users/myjl.vue'
import cpsm from '../components/Users/cpsm.vue'
import cpjf from '../components/Users/cpjf.vue'
import cpcd from '../components/Users/cpcd.vue'
import cpmyl from '../components/Users/cpmyl.vue'
import fxjk from '../components/Users/fxjk.vue'
import kpwz from '../components/Users/kpwz.vue'
import a123 from '../components/Users/a123.vue'
import myxx from '../components/Users/myxx.vue'
import myxg from '../components/Users/myxg.vue'
import ly from '../components/Users/ly.vue'

//工具包组件
// import cp20103 from '../components/Users/util/cp20103.vue';
// import cp20104 from '../components/Users/util/cp20104.vue';
// import cp20105 from '../components/Users/util/cp20105.vue';
// import cp20106 from '../components/Users/util/cp20106.vue';

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
  // 后台页面
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
      { path: "/userinfo", component: userinfo, },
      { path: "/gjgl", component: gjgl, },
      { path: "/calories", component: calories, },
      { path: "/sjck", component: sjck, },
      { path: "/sjgl", component: sjgl, },
      { path: "/kfz", component: kfz, },
      { path: "/bbgx", component: bbgx, },
    ]
  },
  // 前台页面
  {
    path: "/first",  //转发
    component: First,  //引入系统首页组件
    redirect: "/hellou",    //起始页 hello 路由重定向，重定向到子页面
    children: [
      { path: "/hellou", component: hellou, },
      { path: "/meals", component: meals, },
      { path: "/jkgj", component: jkgj, },
      { path: "/jkgj2", component: jkgj2, },
      { path: "/g01", component: g01, },
      { path: "/g02", component: g02, },
      // { path: '/course/:name', component: () => import('../components/Users/jkgj.vue') },
      // { path: '/course/:name', component: () => import('../components/Users/util/g01.vue') },
      {
        path: "/mygj", component: mygj,
        children: [     // 三级路由 睡眠测评页面
          // { path: '/course/:name', component: () => import('../components/Users/util/g01.vue') },
          { path: '/course/:name', component: () => import('../components/Users/util/g02.vue') },
          // { path: '/course/:name', component: () => import('../components/Users/util/g03.vue') },
          // { path: '/course/:name', component: () => import('../components/Users/util/g04.vue') },
          // { path: '/course/:name', component: () => import('../components/Users/util/g05.vue') },
          // { path: '/course/:name', component: () => import('../components/Users/util/g06.vue') },
          // { path: '/course/:name', component: () => import('../components/Users/util/g07.vue') },
          // { path: "/cp20101", component: cp20101, },
          // { path: "/cp20102", component: cp20102, },
          // { path: "/cp20103", component: cp20103, },
          // { path: "/cp20104", component: cp20104, },
          // { path: "/cp20105", component: cp20105, },
          // { path: "/cp20106", component: cp20106, },
        ]
      },
      { path: "/myjl", component: myjl, },
      {
        path: "/cpsm",    // 睡眠测评页面
        component: cpsm,
      },
      { path: "/cpjf", component: cpjf, },
      { path: "/cpcd", component: cpcd, },
      { path: "/cpmyl", component: cpmyl, },
      { path: "/fxjk", component: fxjk, },
      { path: "/kpwz", component: kpwz, },
      { path: "/a123", component: a123, },
      // 个人
      { path: "/myxx", component: myxx, },
      { path: "/myxg", component: myxg, },
      { path: "/ly", component: ly, },
    ]
  },
  {
    path: "/register",  //转发
    component: register  //引入系统注册组件
  },
  // {
  //   // 404页面导航
  //   path: '*',
  //   // component: find404,
  //   component: () => import('../components/find404.vue')
  // }
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

// // 全局前置守卫
// router.beforeEach((to, from, next) => {

//   // 项目标题
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }

//   // 需要权限的路由跳转
//   if (to.meta.requireAuth) {
//     checkToken().then(() => {
//       next();
//     }).catch(() => {
//       // 转向登录页要求用户登录 并带上强制跳转的 query
//       next({ path: '/login?type=force' });
//       Authentication.removeToken();
//     });
//   } else {
//     next();
//   }
// });
export default router
