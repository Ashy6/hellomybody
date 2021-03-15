<template>
  <div>
    <div class="home-container">
      <!-- 顶部导航栏 -->
      <el-header class="navbar-fixed-top">
        <div>
          <!--小屏幕导航按钮和logo-->
          <div class="navbar-header hidden-sm-and-up">
            <button
              class="navbar-toggle"
              @click="isCollapse == true ? open() : close()"
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
          <div class="top-dropdown container">
            <el-menu
              :default-active="activePath"
              class="el-menu-demo hidden-sm-and-down"
              mode="horizontal"
              background-color="#202023"
              text-color="#fff"
              active-text-color="#409EFF"
              :router="true"
              :span="12"
            >
              <el-menu-item>
                <img src="../assets/img/hmb3.png" alt="" style="height: 60px" />
                <router-link
                  style="text-decoration: none; margin-left: 30px"
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
                <template slot="title"
                  ><el-col :span="6">{{ item.title }}</el-col>
                </template>
                <!-- 二级菜单 -->
                <el-menu-item
                  :index="it.path"
                  v-for="it in item.sList"
                  :key="it.id"
                  @click="saveNavState(it.path)"
                  style="min-width: 200px"
                >
                  <!-- it.path 即字符串路径，读取数据库路径 -->
                  <template slot="title">
                    <!-- <i class="el-icon-location"></i> -->
                    <span style="color: #fff" center>{{ it.title }}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
              <el-menu-item class="pull-right">
                <!-- 未登录时显示“登录”“注册” -->
                <template>
                  <span
                    @click="loginDialogFormVisible = true"
                    v-loading.fullscreen.lock="fullscreenLoading"
                  >
                    {{ form.userName ? "" : "登录" }}
                  </span>
                </template>
                <template>
                  <span @click="registerDialogFormVisible = true">
                    {{ form.userName ? "" : "注册" }}
                  </span>
                </template>
                <template slot="" class="logAdReg">
                  <el-dropdown>
                    <!-- 登录后显示欢迎+下拉 -->
                    <span class="el-dropdown-link">
                      {{ form.userName ? "欢迎您，" + form.userName : "" }}
                      <!-- {{ form.userName ? helloTime + form.userName : "" }} -->
                    </span>
                    <el-dropdown-menu slot="dropdown" style="">
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
                </template>
              </el-menu-item>
            </el-menu>
          </div>
          <!-- </div> -->
        </div>
        <!-- 侧边菜单 -->
        <el-menu
          class="left-dropdown el-menu-vertical-demo"
          :collapse="isCollapse"
          style="margin-left: -100px"
          unique-opened
          background-color="#67C23A"
          text-color="#fff"
          active-text-color="#909399"
        >
          <el-submenu index="1">
            <template slot="title">
              <span slot="title">健康工具</span>
            </template>
            <!-- <el-menu-item-group> -->
            <!-- <span slot="title">健康工具</span> -->
            <el-menu-item index="1-1" style="width: 100px">
              <router-link
                style="text-decoration: none; color: #fff"
                :router="form.userName ? true : false"
                to="/calories_dissipation"
              >
                <span>运动卡路里消耗</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link
                style="text-decoration: none; color: #fff"
                :router="form.userName ? true : false"
                to="/calories_food"
              >
                <span>食物卡路里计算</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link
                style="text-decoration: none; color: #fff"
                :router="form.userName ? true : false"
                to="/calories_find"
              >
                <span>食品卡路里查询</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link
                style="text-decoration: none; color: #fff"
                :router="form.userName ? true : false"
                to="/my_tool"
              >
                <span>我的工具</span>
              </router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span slot="title">健康测评</span>
            </template>
            <!-- </el-menu-item-group> -->
            <!-- <el-menu-item-group title="健康测评"> -->
            <el-menu-item index="2-1">
              <router-link
                style="text-decoration: none; color: #fff"
                :router="form.userName ? true : false"
                to="/Immunity_test"
              >
                <span>免疫力测试</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link
                style="text-decoration: none; color: #fff"
                :router="form.userName ? true : false"
                to="/sleep_test"
              >
                <span>睡眠测试</span>
              </router-link>
            </el-menu-item>
            <!-- </el-menu-item-group> -->
            <!-- <el-menu-item-group title="数据分析"> -->
            <!-- </el-menu-item-group> -->
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span slot="title">数据分析</span>
            </template>
            <el-menu-item index="2-1">
              <router-link
                style="text-decoration: none; color: #fff"
                :router="form.userName ? true : false"
                to="/fat_analysis"
              >
                <span>体重体脂分析</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link
                style="text-decoration: none; color: #fff"
                :router="form.userName ? true : false"
                to="/health_standard"
              >
                <span>健康标准</span>
              </router-link>
            </el-menu-item>
          </el-submenu>
          <!-- 登录注册 -->
          <el-menu-item index="4" :hidden="form.userName ? true : false">
            <span
              style="padding-left: 50px"
              slot="title"
              @click="loginDialogFormVisible = true"
              v-loading.fullscreen.lock="fullscreenLoading"
            >
              {{ form.userName ? "" : "登录" }}
            </span>
            <span slot="title" @click="registerDialogFormVisible = true">
              {{ form.userName ? "" : "注册" }}
            </span>
          </el-menu-item>
          <el-submenu index="5" :hidden="form.userName ? false : true">
            <template slot="title">
              <span slot="title">
                <!-- 欢迎您{{ "，" + form.userName }} -->
                {{ form.userName ? "欢迎" + form.userName : "个人中心" }}
              </span>
            </template>
            <el-menu-item index="5-1">
              <router-link
                style="text-decoration: none; color: #fff"
                :router="form.userName ? true : false"
                to="/personal_center"
              >
                <span>个人中心</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="5-2">
              <span @click="logout">退出登录</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>

      <!-- 主体区域 -->
      <el-main class="main">
        <!-- 用路由开始重定向导航栏 -->
        <router-view></router-view>
      </el-main>
      <!-- 登录表单 -->
      <el-dialog
        :fullscreen="true"
        title="用户登录"
        center
        :visible.sync="loginDialogFormVisible"
      >
        <!-- 表单区域 -->
        <el-form
          ref="loginFormRef"
          :rules="loginRules"
          :model="loginForm"
          class="login_form"
          label-width="55px"
          style="max-width: 450px; margin: 0 auto; margin-top: 30px"
        >
          <!-- 用户名 -->
          <el-form-item style="text-align: center" label="账号" prop="username">
            <el-input
              v-model="loginForm.username"
              prefix-icon="iconfont icon-denglu1"
              clearable
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="loginForm.password"
              prefix-icon="iconfont icon-mima1"
              type="password"
              show-password
              clearable
            ></el-input>
          </el-form-item>
          <!-- 按钮 -->
          <!-- <el-form-item class="btns">
          </el-form-item> -->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button
            placeholder=""
            class="restButton"
            type="primary"
            plain
            @click="login()"
          >
            登 录
          </el-button>
          <el-button
            class="restButton"
            type="info"
            plain
            @click="resetLoginForm()"
          >
            重 置
          </el-button>
          <el-button class="restButton" @click="loginDialogFormVisible = false">
            取 消
          </el-button>
        </div>
      </el-dialog>
      <!-- 注册表单 -->
      <el-dialog
        :fullscreen="true"
        title="用户注册"
        :visible.sync="registerDialogFormVisible"
        width="45%"
        @close="addDialogClosed"
        center
      >
        <el-form
          :model="addForm"
          :rules="addFormRules"
          ref="addFormRef"
          label-width="80px"
        >
          <!-- 用户名 -->
          <el-form-item label="用户名" prop="username">
            <el-input
              placeholder="可以是汉字/字符/数字"
              clearable
              v-model="addForm.username"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item label="密码" prop="password">
            <el-input
              clearable
              type="password"
              show-password
              v-model="addForm.password"
              autocomplete="off"
              placeholder="密码强度建议不要太弱"
            >
            </el-input>
            <!-- autocomplete="off" off浏览器将不提示记住密码-->
          </el-form-item>
          <!-- 确认 密码 -->
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="addForm.checkPass"
              autocomplete="off"
              show-password
              clearable
              placeholder="请再次输入密码"
            ></el-input>
          </el-form-item>
          <!-- 邮箱 -->
          <el-form-item label="邮箱" prop="email">
            <el-input
              placeholder="请输入邮箱"
              clearable
              v-model="addForm.email"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dislog-footer">
          <el-button class="restButton" @click="addUser" type="primary"
            >确 定</el-button
          >
          <el-button
            class="restButton"
            @click="registerDialogFormVisible = false"
          >
            取 消
          </el-button>
        </span>
      </el-dialog>
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
          <el-button class="restButton" @click="centerDialogVisible = false"
            >取 消</el-button
          >
          <el-button
            class="restButton"
            type="primary"
            @click="centerDialogVisible = false"
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
        <p style="font-size: 40px; text-align: center">内测版</p>
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
          <el-button class="restButton" @click="centerDialogVisible2 = false"
            >取 消</el-button
          >
          <el-button
            class="restButton"
            type="primary"
            @click="centerDialogVisible2 = false"
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
                      class="restButton"
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
                      class="restButton"
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
                  <el-button class="restButton" type="text" @click="bohe()">
                    健康网站分享--薄荷健康（愿世间的美好与你环环相扣）
                  </el-button>
                </h6>
                <h6>
                  <el-button
                    class="restButton"
                    type="text"
                    @click="hiyundong()"
                  >
                    健身视频网站--Hi运动（用简单的方法打造美）
                  </el-button>
                </h6>
                <h6>
                  <el-button class="restButton" type="text" @click="keep()">
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
                  <el-button class="restButton" type="text" @click="gitee()">
                    <img src="../assets/image/gitee.jpg" alt="" /><br />Gitee
                  </el-button>
                  <el-button class="restButton" type="text" @click="github()">
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
        <el-button class="restButton" type="text" @click="jirou()"
          >肌肉网
        </el-button>
        |
        <el-button class="restButton" type="text" @click="fitnes()"
          >我爱健身网
        </el-button>
        |
        <el-button class="restButton" type="text" @click="tiqiu()"
          >全民健身
        </el-button>
        |
        <el-button class="restButton" type="text" @click="fit()"
          >51健身
        </el-button>
        |
        <el-button class="restButton" type="text" @click="kukefit()"
          >酷客健身
        </el-button>
        ||
        <el-button class="restButton" type="text" @click="hellobody()">
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
    // 注册规则
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.addForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      fullscreenLoading: false, // 登录加载过程
      centerDialogVisible: false, // 项目介绍
      centerDialogVisible2: false, //版本公告
      loginDialogFormVisible: false, //登录表单
      registerDialogFormVisible: false, //  对话框状态
      isCollapse: true,
      // 属性 表单数据
      loginForm: {
        username: "",
        password: "",
      },
      // userList: [],
      //注册   属性
      addForm: {
        username: "",
        password: "",
        checkPass: "",
        email: "",
        timesss: "",
      },
      // 表单验证 --注册
      addFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 12,
            message: "长度在 2 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [
          { required: true, message: "不能为空", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { min: 4, max: 20, message: "请正确输入邮箱地址", trigger: "blur" },
        ],
      },
      // 校验规则，验证对象 --登录
      loginRules: {
        // 校验用户名
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }, //非空字集
          {
            min: 2,
            max: 12,
            message: "长度在 2 到 12 个字符",
            trigger: "blur",
          }, //长度验证
        ],
        // 校验密码
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
      timer: Date.parse(new Date()), //定义一个定时器的变量
      currentTime: new Date(), // 获取当前时间
      helloTime: "",
      // 菜单列表
      menuList: [],
      activePath: "/welcome", //配置默认路径
      form: {
        userName: "",
      },
    };
  },
  // 页面加载之后开始查询
  created() {
    // console.log(window);
    // 查询 MenuList
    // this.activePath = window.sessionStorage.setItem("/first", activePath);
    this.saveNavState();
    this.getMenuList();
    // 存放到session中的当前路径，再从session中取出来path，然后动态修改activePath
    this.activePath = window.sessionStorage.getItem("activePath");
    this.form.userName = window.sessionStorage.getItem("user");
    // this.form.userName = JSON.parse(userName);
    // let userName = window.sessionStorage.getItem(JSON.parse("user"));
    // this.form.userName = window.sessionStorage.getItem(JSON.parse("user"));
    // console.log(this.form.userName)
    var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    // this.timer = setInterval(function () {
    //   var y = new Date().getFullYear(),
    //     m = new Date().getMonth() + 1,
    //     d = new Date().getDate(),
    //     h = new Date().getHours(),
    //     mi = new Date().getMinutes(),
    //     s = new Date().getSeconds();
    //   _this.currentTime = //修改数据date
    //     y +
    //     "-" +
    //     (m > 9 ? m : "0" + m) +
    //     "-" +
    //     (d > 9 ? d : "0" + d) +
    //     "  " +
    //     (h > 9 ? h : "0" + h) +
    //     " : " +
    //     (mi > 9 ? mi : "0" + mi) +
    //     " : " +
    //     (s > 9 ? s : "0" + s);
    // }, 1000);
    this.timer = setInterval(function () {
      var mi = new Date().getMinutes(),
        h = new Date().getHours();
      // 1、早上：6：30---8：00
      if (6 <= h < 8 && 30 <= mi < 60) {
        this.helloTime = "早上好，";
      } else if (8 <= h < 11 && 0 <= mi < 30) {
        this.helloTime = "上午好，";
      } else if (11 <= h < 14 && 30 <= mi < 60) {
        this.helloTime = "中午好，";
      } else if (14 <= h < 17 && 0 <= mi < 30) {
        this.helloTime = "下午好，";
      } else if (17 <= h < 24 && 30 <= mi < 60) {
        this.helloTime = "晚上好，";
      } else if (0 <= h < 6 && 0 <= mi < 30) {
        this.helloTime = "晚上好，";
      } else {
        this.helloTime = "你好，";
      }
    }, 3000);
    // this.form.time = _this.currentTime;
    // console.log(_this.currentTime);
    //页面加载调用
    // window.onload = function () {
    //   //每1秒刷新时间
    //   setInterval("NowTime()", 1000);
    // };
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    // 登录
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        // 登录成功则跳转
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.loginForm); //await 解析信息
        // console.log(res.user);
        if (res.flag == "ok") {
          if (res.user.role == "管理员") {
            this.$message.success("欢迎你，管理员"); //信息提示
            this.$router.push({ path: "/home" }); //页面路由跳转后台
            window.sessionStorage.setItem("user", res.user.username);
            window.sessionStorage.setItem("role", res.user.role);
          } else if (res.user.role == "超级管理员") {
            this.$message.success("欢迎你，超级管理员"); //信息提示
            this.$router.push({ path: "/home" }); //页面路由跳转
            window.sessionStorage.setItem("user", res.user.username);
            window.sessionStorage.setItem("role", res.user.role);
          } else {
            // this.fullscreenLoading = true;
            // setTimeout(() => {
            //   this.fullscreenLoading = false;
            // }, 2000);
            const loading = this.$loading({
              lock: true,
              text: "正在登录中 ... .. .",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)",
            });
            setTimeout(() => {
              loading.close();
            }, 1500);
            this.$router.push({ path: "/first" }); //页面路由跳转
            window.sessionStorage.setItem("user", res.user.username);
            window.sessionStorage.setItem("role", res.user.role);
            this.saveNavState();
            setTimeout(() => {
              location.reload(); // 刷新界面
              this.$message.success("登录成功！");
            }, 1000);
          }
        } else {
          this.$message.error("手机号（用户名）或者密码错误，请重新输入！");
        }
      });
      this.form.userName = window.sessionStorage.getItem("user");
      this.loginDialogFormVisible = false;
    },
    // 安全退出
    logout() {
      // 清除session,回到首页   清除token
      window.sessionStorage.clear();
      window.localStorage.clear();
      this.$message.error("已退出！"); //信息提示
      // 导航到首页
      this.$router.push("/first");
      setTimeout(() => {
        location.reload(); // 刷新界面
      }, 800);
    },
    // 用户注册
    addUser() {
      //获取当前时间
      const nowDate = new Date();
      const date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate(),
        hour: nowDate.getHours(),
        minute: nowDate.getMinutes(),
        second: nowDate.getSeconds(),
      };
      const newmonth = date.month > 9 ? date.month : "0" + date.month;
      const day = date.date > 9 ? date.date : "0" + date.date;
      const h = date.hour > 9 ? date.hour : "0" + date.hour;
      const m = date.minute > 9 ? date.minute : "0" + date.minute;
      const s = date.second > 9 ? date.second : "0" + date.second;
      // 在表单添加时间
      this.addForm.timesss =
        date.year + "-" + newmonth + "-" + day + " " + h + ":" + m + ":" + s;
      this.$refs.addFormRef.validate(async (valid) => {
        // console.log(valid);
        // 验证
        if (!valid) return;
        // 提交结果
        const { data: res } = await this.$http.post("addUser", this.addForm);
        const { data: ss } = await this.$http.post(
          "addUserInfoName",
          this.addForm
        );
        if (res.flag == "no") {
          this.$message.error("该用户名已经被注册！");
        } else {
          if (res != "success") {
            return this.$message.error("注册失败！！");
          }
          this.$message.success("注册成功！！");
          this.registerDialogFormVisible = false;
        }
      });
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
    // 导航菜单开关
    open() {
      this.isCollapse = false;
    },
    close() {
      this.isCollapse = true;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 保存路径
    saveNavState(activePath) {
      // 将当前路径activePath传到saveNavState中，保存路径存放到session中
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
    //将表单中的内容重置
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 清空表单，关闭窗口
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    // 取消所有按钮选中后对焦的状态
    resetForm() {
      this.$refs.customerQueryForm.resetFields();
      // 移除鼠标button不失焦处理
      document.getElementById("resetButton").blur();
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
.navbar-default .navbar-brand > img {
  height: 60px;
  margin-top: -10px;
}
.top-dropdown {
  width: 120%;
}
// 导航菜单
.el-menu-demo {
  font-family: "Microsoft YaHei", sans-serif;
  color: aliceblue;
  text-align: right;
  font-size: 16px;
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
/*导航栏结束*/
/* 下拉菜单 -- 用户功能 -- 用户栏 */
// hellobody文字
.navbar-header .hello {
  font-size: 23px;
  font-weight: bold;
  color: #409eff;
}
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
// 侧边导航
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 200px;
}
.left-dropdown {
  // z-index: 20;
  // float: left;
  .el-submenu {
    span {
      padding-left: 50px;
      line-height: 20px;
    }
    // margin-left: 50px;
    // margin-right: -50px;
    .el-menu-item {
      span {
        font-size: 10px;
      }
      width: 100px;
      margin-right: 50px;
    }
    .el-menu-item:hover {
      background-color: springgreen;
    }
  }
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