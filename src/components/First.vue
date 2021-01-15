<template>
  <div class="first">
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header>
        <div class="line"></div>
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
            <img src="../assets/img/hmb3.png" alt="" style="height: 60px" />
            <!-- <a href="" class="navbar-brand">HelloMybody</a> -->
          </div>
          <div class="navbar-collapse collapse">
            <el-menu
              :default-active="activePath"
              class="el-menu-demo"
              mode="horizontal"
              background-color="Transparent"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true"
              :span="10"
            >
              <!-- default-active="/hello"   设定打开界面为hello -->
              <!-- el-menu-vertical-demo控制下拉 -->
              <!-- :router="true" 设定路由，让其能够根据页面进行跳转 -->
              <!-- > unique-opened   该属性方法控制侧边栏 展开时不自动关闭-->

              <el-menu-item>
                <!-- <template :to="{ path: '/hellou' }">首页</template> -->
                <router-link
                  style="text-decoration: none"
                  :router="true"
                  to="/hellou"
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
                  <span>{{ item.title }}</span>
                </template>
                <!-- 二级菜单 -->
                <el-menu-item
                  :index="it.path"
                  v-for="it in item.sList"
                  :key="it.id"
                  @click="saveNavState(it.path)"
                >
                  <!-- it.path 即字符串路径，读取数据库路径 -->
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{ it.title }}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
              <!-- <el-menu-item :router="true" :to="{ path: '/kpwz' }"
                >健康科普</el-menu-item
              > -->
              <!-- <el-menu-item :to="{ path: '/jkgj' }">健康工具</el-menu-item> -->
              <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
              <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank"
              >订单管理</a>
            </el-menu-item> -->
              <el-menu-item
                :span="5"
                class="pull-right"
                style="margin-right: 60px"
              >
                <template>
                  {{ currentTime }}
                </template>
                <template slot="title">
                  <el-col :span="3" class="pull-right">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        欢迎您{{ "，" + form.userName
                        }}<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu
                        slot="dropdown"
                        background-color="Transparent"
                      >
                        <el-dropdown-item icon="el-icon-circle-plus-outline">
                          <router-link
                            style="text-decoration: none"
                            :router="true"
                            to="/myxx"
                          >
                            我的信息
                          </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">
                          <router-link
                            style="text-decoration: none"
                            :router="true"
                            to="/myxg"
                          >
                            修改信息
                          </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">
                          <router-link
                            style="text-decoration: none"
                            :router="true"
                            to="/myjl"
                          >
                            我的足迹
                          </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">
                          <router-link
                            style="text-decoration: none"
                            :router="true"
                            to="/ly"
                          >
                            留言板
                          </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check"
                          ><span @click="logout">
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
      <el-footer>
        <footer>
          <div class="container">
            <div class="Tel">
              <div class="row">
                <ul class="media-list">
                  <li class="media">
                    <a href="#">
                      <div class="media-up"></div>
                      <div class="media-body">尾部</div>
                    </a>
                  </li>
                  <li class="media">
                    <a href="#">
                      <div class="media-up"></div>
                      <div class="media-body">尾部</div>
                    </a>
                  </li>
                  <li class="media">
                    <a href="#">
                      <div class="media-up"></div>
                      <div class="media-body">尾部</div>
                    </a>
                  </li>
                  <li class="media">
                    <a href="#">
                      <div class="media-up"></div>
                      <div class="media-body">尾部</div>
                    </a>
                  </li>
                  <li class="media">
                    <a href="#">
                      <div class="media-up"></div>
                      <div class="media-body">尾部</div>
                    </a>
                  </li>
                  <li class="media">
                    <a href="#">
                      <div class="media-up"></div>
                      <div class="media-body">尾部</div>
                    </a>
                  </li>
                  <li class="pull-right">
                    <p>尾部</p>
                    <p>400-123-4567</p>
                    <p>在线客服</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="copyright">
              <ul>
                <li><a href="">尾部</a></li>
                <li><a href="">尾部</a></li>
                <li><a href="">尾部</a></li>
                <li><a href="">尾部</a></li>
                <li>
                  <a href=""><i class="iconfont">&#xe60a;</i>简体中文</a>
                </li>
              </ul>
              <!-- <p>
                C2018 ChenDa Telecom Equipment Co，Ltd.All rights
                rese粤CP备13003602号合字B220170010营业执照法律声明<img
                  src="../assets/image/ghs.png"
                  alt=""
                />粤公网安备44049102496009号
              </p> -->
            </div>
          </div>
          <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
        </footer>
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

<style>
.home-container {
  height: 100%;
}
/* 头部尾部 */
.el-header {
  /* background-color: "Transparent"; */
  color: rgb(156, 13, 13);
  text-align: center;
  background-color: #409eff;
  line-height: 52px;
  /* display: flex; */
  justify-content: space-between;
}
/* .el-main { */
/* justify-content: space-between; 
  margin-left: -2%; */
/* } */
.el-footer {
  background-color: #409eff;
  /* background-color:"Transparent"; */
  color: #333;
  text-align: center;
  line-height: 60px;
}
/*导航栏开始*/
.navbar-header {
  /* background-color: "Transparent"; */
  background-color: #409eff;
}
.navbar-default {
  /* background-color: #f7f8f8; */
  /* background-color: "Transparent"; */
  border: none;
  line-height: 60px;
  /* box-shadow: 0px 2px 8px 0px rgba(50,50,50,0.25);*/
}
.navbar-default .navbar-brand {
  font-size: 30px;
  font-weight: bold;
  color: #73c6c9;
  height: 70px;
  line-height: 35px;
}
.navbar-default .navbar-brand > img {
  height: 65px;
  margin-top: -10px;
}
.navbar-nav > li > a {
  font-size: 15px;
  font-weight: bold;
  color: #666;
  height: 70px;
  line-height: 35px;
}
.erweima .container-fluid {
  width: 100%;
}
.navbar-nav .navbar-form .form-group input {
  margin-top: 6px;
  border-radius: 18px;
} /*
.navbar-nav .navbar-form .form-group>button{
    background-color: white;
    margin-bottom: 1px;
    border-radius:18px;
}*/
.navbar-toggle {
  margin-top: 17px;
}
.navbar-default .navbar-toggle:hover {
  border-color: #808080;
  /* border-color: yellow; */
  /* background-color: rgb(189, 215, 233); */
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #f7f30b;
}
/*导航栏结束*/
/* 下拉菜单 -- 用户功能 */
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
/* 下拉结束 */
/* 中间 */
.body1 {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 860px;
}

/*尾部开始*/
footer {
  margin-top: 60px;
  /* margin-left: -20px; */
  background: rgb(162, 202, 135);
  width: 100%;
  color: black;
  clear: both;
}
footer .container ul li {
  display: inline-block;
  font-size: 12px;
  width: 150px;
}
footer .container .Tel ul li {
  width: 120px;
  height: 38px;
}
footer .container .Tel ul li:last-child {
  width: 180px;
}
footer .container .Tel ul li:last-child p:first-child {
  color: #8c8c8c;
  font-size: 13px;
}
footer .container .Tel ul li:last-child p:nth-of-type(2) {
  color: #0daaea;
  font-size: 25px;
}
footer .container .Tel ul li:last-child p:last-child {
  width: 88px;
  height: 30px;
  background-color: #0daaea;
  line-height: 30px;
  padding-left: 6px;
  font-size: 16px;
  color: #fff;
  border-radius: 20px;
}
footer .container .Tel ul li img {
  width: 50px;
  height: 39px;
  margin-left: 50px;
}
footer .container .Tel .media-body {
  padding-left: 10px;
}
footer .container ul li a {
  color: black;
  text-decoration: none;
}
footer .container .copyright {
  margin-top: 20px;
  margin-left: 20px;
}

/*尾部结束*/
</style>