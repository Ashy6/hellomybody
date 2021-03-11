<template>
  <div>
    <div class="home-container">
      <!-- 顶部导航栏 -->
      <el-header class="navbar-fixed-top">
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
                  :to="{ path: '/welcome' }"
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
                            to="/personal_center"
                          >
                            个人中心
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
      <el-main class="main">
        <!-- 用路由开始重定向导航栏 -->
        <router-view></router-view>
      </el-main>
      <!-- 项目介绍 -->
      <el-dialog
        icon="el-icon-document"
        title="README.md"
        :visible.sync="centerDialogVisible"
        width="500px"
        center
      >
        <p style="font-size: 35px">
          <i class="el-icon-loading"></i>正在 -
          <i class="el-icon-edit"></i> ..............
        </p>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- 版本公告 -->
      <el-dialog
        title="当前版本"
        :visible.sync="centerDialogVisible2"
        width="500px"
        center
      >
        <p style="font-size: 40px">内测版</p>
        <h2 style="text-aline: center; padding: 10px 30px">
          即将上线： 用户信息 <span style="color: #b03a5b">ECharts</span>
          图文分析
        </h2>
        <h2 style="text-aline: center; padding: 10px 30px">
          版本预告： 用户信息 头像上传
        </h2>
        <h2 style="text-aline: center; padding: 10px 30px">
          版本预告：<span> 邮箱 注册、修改密码验证</span>
        </h2>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible2 = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- 底部区域 -->
      <div class="foot">
        <div class="container">
          <div class="left-top">
            <div class="ashy col-xl-9 col-sm-12 col-xs-12">
              <!-- 左布局 -->
              <el-row :gutter="10">
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <router-link :to="{ path: '/welcome' }"
                      >返回首页</router-link
                    >
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <el-button
                      @click="centerDialogVisible = true"
                      type="text"
                      style="margin: 0px; padding: 0px"
                    >
                      项目介绍
                    </el-button>
                    <!-- <router-link :to="{ path: '/introduce' }"
                      >项目介绍</router-link
                    > -->
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <router-link :to="{ path: '/outline' }"
                      >项目大纲</router-link
                    >
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <el-button
                      @click="centerDialogVisible2 = true"
                      type="text"
                      style="margin: 0px; padding: 0px"
                    >
                      版本公告
                    </el-button>
                    <!-- <router-link :to="{ path: '/notice' }"
                      >版本公告</router-link
                    > -->
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <router-link :to="{ path: '/calories_find' }"
                      >卡路里查询</router-link
                    >
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <router-link :to="{ path: '/leave_message' }"
                      >留言板</router-link
                    >
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <router-link :to="{ path: '/my_tool' }"
                      >我的工具</router-link
                    >
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <router-link :to="{ path: '/fat_analysis' }"
                      >体脂计算</router-link
                    >
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <router-link :to="{ path: '/health_standard' }"
                      >健康标准</router-link
                    >
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <router-link :to="{ path: '/personal_center' }"
                      >个人中心</router-link
                    >
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <router-link :to="{ path: '/Immunity_test' }"
                      >免疫力测试</router-link
                    >
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="4">
                  <div class="as1">
                    <router-link :to="{ path: '/sleep_test' }"
                      >睡眠测试</router-link
                    >
                  </div>
                </el-col>
              </el-row>
              <!-- 左侧链接 -->
              <div class="as">
                <h6>
                  <el-button type="text" @click="bohe()">
                    健康网站分享--薄荷健康（愿世间的美好与你环环相扣）
                  </el-button>
                </h6>
                <h6>
                  <el-button type="text" @click="hiyundong()">
                    健身视频网站--Hi运动（用简单的方法打造美）
                  </el-button>
                </h6>
                <h6>
                  <el-button type="text" @click="keep()">
                    健身APP分享--Keep（自律使我自由）
                  </el-button>
                </h6>
              </div>
            </div>
            <!-- 右侧 -->
            <div class="ashy2 col-xl-3 col-sm-12 col-xs-12 pull-right">
              <div>
                <h3>项目开源</h3>
                <p>
                  永远相信世间最美好的东西总是免费的，比如<br />
                  阳光、空气、雨水以及本项目：
                </p>
                <div class="git">
                  <el-button type="text" @click="gitee()">
                    <img src="../assets/image/gitee.jpg" alt="" /><br />Gitee
                  </el-button>
                  <el-button type="text" @click="github()">
                    <img src="../assets/image/github.jpg" alt="" /><br />Github
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部链接 -->
      <div class="web">
        |
        <el-button type="text" @click="jirou()">肌肉网 </el-button>
        |
        <el-button type="text" @click="fitnes()">我爱健身网 </el-button>
        |
        <el-button type="text" @click="tiqiu()">全民健身 </el-button>
        |
        <el-button type="text" @click="fit()">51健身 </el-button>
        |
        <el-button type="text" @click="kukefit()">酷客健身 </el-button>
        ||
        <el-button type="text" @click="hellobody()">
          Copyright @ 2020-2021 Ashy- 个人开发
        </el-button>
        ||
      </div>
    </div>
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
      centerDialogVisible: false,
      centerDialogVisible2: false,
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
    async bohe() {
      const confirmResult = await this.$confirm(
        "您即将前往外部网站，是否继续？" + "http://www.boohee.com/",
        "网页跳转提示：",
        {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "info",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("http://www.boohee.com/");
    },
    async hiyundong() {
      const confirmResult = await this.$confirm(
        "您即将前往外部网站，是否继续？" + "https://www.hiyd.com/",
        "网页跳转提示：",
        {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "info",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("https://www.hiyd.com/");
    },
    async keep() {
      const confirmResult = await this.$confirm(
        "您即将前往外部网站，是否继续？" + "https://www.gotokeep.com/",
        "网页跳转提示：",
        {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "info",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("https://www.gotokeep.com/");
    },
    async hellobody() {
      const confirmResult = await this.$confirm(
        "域名已注册，即将部署：" + "www.hellobody.online",
        "感谢您的认可",
        {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "success",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("http://www.hellobody.online");
    },
    async gitee() {
      const confirmResult = await this.$confirm(
        "首先感谢您的认可，代码拙劣之处在所难免，还望多多指教，万分感谢！" +
          "项目的说明文档以及设计思路即将会补全；如果您有好的建议与想法，真心希望您肯告诉我" +
          "https://gitee.com/ashy66/hellomybody",
        "有任何问题欢迎讨论！",
        {
          confirmButtonText: "继续，还望大佬给个star！",
          cancelButtonText: "取消，(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀) ",
          type: "success",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("https://gitee.com/ashy66/hellomybody");
    },
    async github() {
      const confirmResult = await this.$confirm(
        "目前还是个测试版本，项目是基于码云托管代码的，GayHub上目前只有文件。" +
          "https://github.com/Ashy6/hmb",
        "感谢认可！",
        {
          confirmButtonText: "继续，还望大佬给个star！",
          cancelButtonText: "取消，(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀) ",
          type: "success",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("https://github.com/Ashy6/hmb");
    },
    async jirou() {
      const confirmResult = await this.$confirm(
        "您即将前往外部网站，是否继续？" + "http://www.jirou.com/",
        "网页跳转提示：",
        {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "info",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("http://www.jirou.com/");
    },
    async fitnes() {
      const confirmResult = await this.$confirm(
        "您即将前往外部网站，是否继续？" + "http://www.fitnes.cn/",
        "网页跳转提示：",
        {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "info",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("http://www.fitnes.cn/");
    },
    async tiqiu() {
      const confirmResult = await this.$confirm(
        "您即将前往外部网站，是否继续？" + "http://qmjs.tiqiu.com/",
        "网页跳转提示：",
        {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "info",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("http://qmjs.tiqiu.com/");
    },
    async fit() {
      const confirmResult = await this.$confirm(
        "您即将前往外部网站，是否继续？" + "http://www.51fit.com.cn",
        "网页跳转提示：",
        {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "info",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("http://www.51fit.com.cn");
    },
    async kukefit() {
      const confirmResult = await this.$confirm(
        "您即将前往外部网站，是否继续？" + "http://www.kukefit.com",
        "网页跳转提示：",
        {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "info",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("http://www.kukefit.com");
    },
    async tiqiu() {
      const confirmResult = await this.$confirm(
        "您即将前往外部网站，是否继续？" + "http://qmjs.tiqiu.com/",
        "网页跳转提示：",
        {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "info",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.success("已取消！");
      }
      this.$message.success("已完成！");
      return window.open("http://qmjs.tiqiu.com/");
    },
  },
};
</script>

<style lang="less">
// @media screen and  (max-width: 699px) {
// }
.home-container {
  height: 100%;
  // width: 100%;
}
.el-header {
  background-color: "#202023";
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
.navigation {
  background-color: #202023;
  margin: 0 -20px;
  line-height: 60px;
  // 小的
  .packet {
    border: 1px solid green;
    // width: 100%;
    // position: absolute;
    // top: 0px;
    // left: 0px;
    // z-index: 1;
  }
}
// hellobody文字
.navbar-header .hello {
  font-size: 23px;
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
.navbar-toggle .icon-bar {
  background-color: #00b3ff;
}

// .navbar-toggle .icon-bar {
//   background-color: #409eff;
// }
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
.main {
  width: 100%;
  margin: 0 auto;
  // padding-top: 60px;
  margin-top: 60px;
  // background-color: #d9d9d9;
  background-image: url(../assets/image/innovation.png);
  min-height: 680px;
  // margin-bottom: 20px;
  // 全局p
  p {
    text-align: center;
    margin: 0 auto;
    padding-top: 10px;
  }
  /* 面包屑 */
  .el-breadcrumb {
    font-size: 18px;
    // margin-bottom: 15px;
    background-color: lemonchiffon;
    // padding: 15px;
    display: inline-block;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    cursor: pointer;
    padding: 10px 20px;
    border: 1px solid #018dc4;
    -webkit-border-radius: 3px 29px;
    border-radius: 3px 29px;
    font: normal 16px / normal "Times New Roman", Times, serif;
    color: rgba(255, 255, 255, 0.9);
    -o-text-overflow: clip;
    text-overflow: clip;
    // background: #0199d9;
    -webkit-box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
    // text-shadow: -1px -1px 0 rgba(15,73,168,0.66) ;
    -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
    -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
    -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
    transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
  }
}
/*尾部开始*/
.foot {
  margin-top: -20px;
  padding-top: 30px;
  background-color: #f7f8f8;
  .left-top {
    .ashy {
      div {
        .as1 {
          text-align: center;
          // height: 20px;
          // width: 80px;
          .el-button {
            color: #666;
            font-size: 14px;
            text-align: center;
            // margin: 20px 0;
            line-height: 28px;
            // border:1px solid orchid;
          }
          .el-button:hover {
            color: #409eff;
            font-size: 14.2px;
          }
        }
        a {
          line-height: 30px;
          color: #666;
          font-size: 14px;
          margin: 20px 0;
        }
        a:hover {
          text-decoration: none;
          color: #409eff;
          font-size: 14.2px;
        }
      }
      .as {
        margin: 15px 0;
        text-align: center;
        h6 {
          padding: 0 auto;
          .el-button {
            color: #666;
            line-height: 10px;
            padding: 0 auto;
          }
          .el-button:hover {
            color: #409eff;
          }
        }
      }
    }
    .ashy2 {
      text-align: center;
      margin-top: 20px;
      .git {
        // border: 1px solid rebeccapurple;
        margin: 0 auto;
        padding: 0 auto;
        .el-button {
          padding: 0 auto;
          margin: 0 auto;
          color: #666;
        }
        .el-button:hover {
          color: #409eff;
        }
        img {
          // border: 1px solid rebeccapurple;
          height: 40px;
        }
      }
    }
  }
}
/*尾部结束*/
.web {
  display: block;
  width: 100%;
  text-align: center;
  background-color: #202023;
  line-height: 50px;
  justify-content: space-between;
  // z-index: 999;
  text-decoration: none;
  margin-bottom: -30px;
  color: #666;
  .el-button {
    padding: 0 auto;
    margin: 0 auto;
    color: #666;
  }
  .el-button:hover {
    color: #409eff;
  }
}
</style>