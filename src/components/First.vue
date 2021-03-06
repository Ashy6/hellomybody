<template>
  <div>
    <el-container class="home-container">
      <!-- 顶部导航栏 -->
      <el-header>
        <!-- <div class="line"></div> -->
        <div>
          <!--小屏幕导航按钮和logo-->
          <div class="navbar-header">
            <button
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div class="navbar-brand">
              <img src="../assets/img/hmb3.png" alt="" style="height: 60px" />
            </div>
            <p class="navbar-brand hello">
              <span>HelloBody</span>
            </p>
          </div>
          <div class="navbar-collapse collapse">
            <el-menu
              :default-active="activePath"
              class="el-menu-demo"
              mode="horizontal"
              background-color="Transparent"
              text-color="#fff"
              active-text-color="#409EFF"
              :router="true"
              :span="12"
            >
              <!-- default-active="/hello"   设定打开界面为hello -->
              <!-- el-menu-vertical-demo控制下拉 -->
              <!-- :router="true" 设定路由，让其能够根据页面进行跳转 -->
              <!-- > unique-opened   该属性方法控制侧边栏 展开时不自动关闭-->

              <el-menu-item>
                <!-- <template :to="{ path: '/hellou' }">首页</template> -->
                <router-link
                  style="text-decoration: none"
                  :to="{ path: '/hellou' }"
                  >首页</router-link
                >
              </el-menu-item>
              <!-- 一级菜单 -->
              <el-submenu
                :index="item.id + ''"
                v-for="item in menuList"
                :key="item.id"
              >
                <!--  v-for 编写循环 -->
                <!-- 从menuList中取出数据放入item中，，绑定唯一标识的key -->
                <template slot="title">
                  <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">{{
                    item.title
                  }}</el-col>
                </template>
                <!-- 二级菜单 -->
                <el-menu-item
                  :index="it.path"
                  v-for="it in item.sList"
                  :key="it.id"
                  @click="saveNavState(it.path)"
                  background-color="yellow"
                >
                  <!-- it.path 即字符串路径，读取数据库路径 -->
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span style="color: #fff">{{ it.title }}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
              <template>
                {{ currentTime }}
              </template>
              <el-menu-item
                :span="5"
                class="pull-right"
                style="margin-right: 60px"
              >
                <template slot="title">
                  <el-col :span="3">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        欢迎您{{ "，" + form.userName }}
                      </span>
                      <el-dropdown-menu slot="dropdown" background-color="fff">
                        <el-dropdown-item icon="el-icon-circle-plus-outline">
                          <router-link
                            style="text-decoration: none; color: #67c23a"
                            :router="true"
                            to="/myxx"
                          >
                            我的信息
                          </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">
                          <router-link
                            style="text-decoration: none; color: #e6a23c"
                            :router="true"
                            to="/myxg"
                          >
                            修改信息
                          </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">
                          <router-link
                            style="text-decoration: none; color: #909399"
                            :router="true"
                            to="/myjl"
                          >
                            我的足迹
                          </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">
                          <router-link
                            style="text-decoration: none; color: #000"
                            :router="true"
                            to="/ly"
                          >
                            留言板
                          </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check"
                          ><span @click="logout" style="color: #f56c6c">
                            退出登录</span
                          ></el-dropdown-item
                        >
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </template>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-header>
      <!-- 主体区域 -->
      <el-main style="width: 100%; margin: 0 auto">
        <!-- 用路由开始重定向导航栏 -->
        <router-view></router-view>
      </el-main>
      <!-- 底部区域 -->
      <el-footer class="foot">
        <div class="row">
          <div class="ashy col-xl-9 col-sm-12 col-xs-12">
            <el-row :gutter="10">
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <router-link :to="{ path: '/hellou' }">返回首页</router-link>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <a href="">项目介绍</a>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <a href="">项目大纲</a>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <a href="">项目进度</a>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <a href="">常用工具</a>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <router-link :to="{ path: '/mygj' }">我的工具</router-link>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <a href="">项目案例</a>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <a href="">项目案例</a>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <a href="">项目案例</a>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <a href="">项目案例</a>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <a href="">项目案例</a>
              </el-col>
              <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <a href="">项目案例</a>
              </el-col>
            </el-row>
            <!-- -----**************---------- -->
            <!-- <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">返回首页</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目介绍</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目大纲</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目进度</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目案例</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目案例</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目案例</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目案例</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目案例</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目案例</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目案例</a>
              </li>
              <li class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                <a href="">项目案例</a>
              </li> -->
            <div class="as">
              <p>
                Copyright @ 2020-2021 Ashy- 个人开发
                <a href="http://www.hellobody.online">www.hellobody.online</a>
              </p>
              <p>
                <a href="http://www.boohee.com/"
                  >健康网站分享--薄荷健康（愿世间的美好与你环环相扣）</a
                >
              </p>
              <p>
                <a href="https://www.hiyd.com/"
                  >健身视频网站--Hi运动（用简单的方法打造美）</a
                >
              </p>
              <p>
                <a href="https://www.gotokeep.com/"
                  >健身网站分享--Keep（自律使我自由）</a
                >
              </p>
            </div>
          </div>
          <div class="row col-xl-3 col-sm-12 col-xs-12 pull-right">
            <div class="git">
              <h3>项目开源</h3>
              <p>永远相信世间最美好的东西总是免费的，比如</p>
              <p>阳光、空气、雨水以及本项目：</p>
              <p>
                <a href="https://gitee.com/ashy66/hellomybody">
                  <img src="../assets/image/gitee.jpg" alt="" />
                </a>
                <a href="https://github.com/Ashy6/hmb">
                  <img src="../assets/image/github.jpg" alt="" />
                </a>
              </p>
            </div>
            <p>
              <span>
                <a href="https://gitee.com/ashy66/hellomybody">gitee </a>or
              </span>
              <span>
                <a href="https://github.com/Ashy6/hmb"> github</a>
              </span>
            </p>
          </div>
        </div>

        <div class="web">
          |<a target="_blank" href="http://www.jirou.com/"> 肌肉网</a> |<a
            target="_blank"
            href="http://www.fitnes.cn/"
          >
            我爱健身网</a
          >
          |<a target="_blank" href="http://qmjs.tiqiu.com/"> 全民健身</a> |<a
            target="_blank"
            href="http://www.caibb.com/"
          >
            网络购彩</a
          >
          |<a target="_blank" href="http://www.51fit.com.cn">51健身</a> |<a
            target="_blank"
            href="http://www.kukefit.com"
          >
            酷客健身</a
          >
          |<a href="http://www.kaluli.com/" target="_blank"> 卡路里运动营养</a>
          |<a href="http://www.znymqg.com/" target="_blank"> 羽毛球</a> |<a
            href="http://qmjs.tiqiu.com/"
            target="_blank"
          >
            全民健身</a
          >
          |<a href="http://www.lmjsport.cn/" target="_blank"> 家用跑步机</a> |<a
            href="http://www.cnlmj.com/"
            target="_blank"
          >
            健身房器材</a
          >
          |
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: Date.parse(new Date()), //定义一个定时器的变量
      currentTime: new Date(), // 获取当前时间
      // 菜单列表
      menuList: [],
      activePath: "/hellou", //配置默认路径
      form: {
        userName: "",
      },
    };
  },
  // 页面加载之后开始查询
  created() {
    // console.log(window);
    // 查询 MenuList
    this.getMenuList();
    // 存放到session中的当前路径，再从session中取出来path，然后动态修改activePath
    this.activePath = window.sessionStorage.getItem("activePath");
    this.form.userName = window.sessionStorage.getItem("user");
    // this.form.userName = JSON.parse(userName);
    // let userName = window.sessionStorage.getItem(JSON.parse("user"));
    // this.form.userName = window.sessionStorage.getItem(JSON.parse("user"));
    // console.log(this.form.userName)
    var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function () {
      var y = new Date().getFullYear(),
        m = new Date().getMonth() + 1,
        d = new Date().getDate(),
        h = new Date().getHours(),
        mi = new Date().getMinutes(),
        s = new Date().getSeconds();
      _this.currentTime = //修改数据date
        y +
        "-" +
        (m > 9 ? m : "0" + m) +
        "-" +
        (d > 9 ? d : "0" + d) +
        "  " +
        (h > 9 ? h : "0" + h) +
        " : " +
        (mi > 9 ? mi : "0" + mi) +
        " : " +
        (s > 9 ? s : "0" + s);
    }, 1000);
    // this.form.time = _this.currentTime;
    // console.log(_this.currentTime);
    //页面加载调用
    // window.onload = function () {
    //   //每1秒刷新时间
    //   setInterval("NowTime()", 1000);
    // };
    //过滤加0
    // appendZero(obj) {
    // if (obj < 10) {
    // return "0" + obj;
    // } else {
    // return obj;
    // }
    // },
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    // 安全退出
    logout() {
      // 清除session,回到首页   清除token
      window.sessionStorage.clear();
      window.localStorage.clear();
      // 导航到首页
      this.$router.push("/login");
    },
    // 获取导航菜单方法
    async getMenuList() {
      //访问路径 /usermenus   解析结果到data中res（返回结果）
      const { data: res } = await this.$http.get("usermenus"); //访问后台
      //console.log(res);
      if (res.flag != 666) {
        return this.$message.console.error("获取列表失败"); //访问失败
      } // 访问成功后的数据信息
      this.menuList = res.usermenus;
    },
    // 保存路径
    saveNavState(activePath) {
      // 将当前路径activePath传到saveNavState中，保存路径存放到session中
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
  },
};
</script>

<style lang="less">
.home-container {
  height: 100%;
}
.el-header {
  /* background-color: "Transparent"; */
  // color: rgb(156, 13, 13);
  text-align: center;
  background-color: #202023;
  // background-color: "Transparent";
  line-height: 60px;
  /* display: flex; */
  justify-content: space-between;
  z-index: 99;
  text-decoration: none;
}
/*导航栏开始*/
.navbar-header {
  background-color: "Transparent";
  // background-color: #ebeef5;
  z-index: 10;
  // border: 1px solid yellow;
  // background-color: yellow;
}
.navbar-header .hello {
  font-size: 25px;
  font-weight: bold;
  color: #409eff;
}
.el-menu-demo {
  // 时间
  font-family: "Microsoft YaHei", sans-serif;
  color: aliceblue;
  text-align: right;
  font-size: 16px;
}
.navbar-default .navbar-brand > img {
  height: 60px;
  margin-top: -10px;
}

.navbar-toggle {
  // 导航按钮
  margin-top: 17px;
  border: 1px solid #409eff;
  // background-color: #00b3ff;
}
// .navbar-toggle .icon-bar {
//   background-color: #00b3ff;
// }

.navbar-toggle .icon-bar {
  background-color: #409eff;
}
/*导航栏结束*/
/* 下拉菜单 -- 用户功能 -- 用户栏 */
.el-dropdown-link {
  // 欢迎
  cursor: pointer;
  color: #ffffff;
  font-size: 18px;
  line-height: 60px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #1e63c5;
  font-size: 14px;
  margin-bottom: 20px;
}
/* 下拉结束 */
/*---------------------分割线------------------------*/
/* .el-main 正文*/
.el-main {
  // background-color: #d9d9d9;
  background-image: url(../assets/image/innovation.png);
  min-height: 570px;
  margin-bottom: 20px;
}
/*尾部开始*/

footer.el-footer .row {
  display: block;
  width: 100%;
  /* height: 280px; */
  background-color: #f7f8f8;
}
footer.el-footer {
  height: 500px;
  padding: unset;
}

.el-footer {
  display: inline-block;
  margin-top: -20px;
  // padding-top: 15px;
  /* margin-top: 250px;自己调试 */
  /* background-color: #409eff; */
  background-color: #f7f8f8;
  /* background-color:"Transparent"; */
  color: #333;
  /* text-align: center; */
}
.el-footer div .el-col {
  text-align: center;
  margin: 0 auto;
  padding: 0;
  line-height: 40px;
  display: block;
  font-size: 15px;
}
.el-footer div a {
  color: #666;
}
.el-footer div a:hover {
  color: #00b3ff;
  text-decoration: none;
}
.el-footer div .as {
  padding: unset;
  // text-align: center;
  // line-height: 30px;
}
.el-footer .ashy {
  // margin-right: 20px;
  padding: unset;
}
.el-footer div img {
  height: 60px;
  padding-right: 5px;
}
.el-footer .git {
  margin-top: 25px;
}
.el-footer div div h3,
p {
  text-align: center;
  margin: 0 auto;
  padding-top: 15px;
}
.el-footer div .lianjie {
  margin: auto;
}
.el-footer div .lianjie span {
  font-size: 15px;
  text-align: center;
}
/*尾部结束*/
.web {
  display: block;
  // margin: -20px;
  width: 100%;
  text-align: center;
  background-color: #202023;
  // background-color: "Transparent";
  line-height: 60px;
  /* display: flex; */
  justify-content: space-between;
  z-index: 999;
  text-decoration: none;
}
</style>