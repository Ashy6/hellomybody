<template>
  <div class="first">
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header>
        <div class="line"></div>
        <div>
                    <!--小屏幕导航按钮和logo-->
                    <!-- <div class="navbar-header">
                        <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        </button>
                        <a href="" class="navbar-brand"><img src="../assets/img/hmb3.png" alt="" /></a>
                        <a href="" class="navbar-brand">HelloMybody</a>
                    </div> -->
                    <div class="navbar-collapse collapse">
          <el-menu
            :default-active="activePath"
            class="el-menu-demo"
            mode="horizontal"
            background-color="Transparent"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <!-- default-active="/hello"   设定打开界面为hello -->
            <!-- el-menu-vertical-demo控制下拉 -->
            <!-- :router="true" 设定路由，让其能够根据页面进行跳转 -->
            <!-- > unique-opened   该属性方法控制侧边栏 展开时不自动关闭-->
            
            <el-menu-item :to="{ path: '/hellou' }">首页</el-menu-item>
            <!-- 一级菜单 -->
            <el-submenu
              :index="item.id + ''"
              v-for="item in menuList"
              :key="item.id">
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
            <!-- <el-menu-item :router="true" :to="{ path: '/jkkp' }">健康科普</el-menu-item> -->
            <!-- <el-menu-item :to="{ path: '/jkgj' }">健康工具</el-menu-item> -->
            <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
            <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank"
              >订单管理</a>
            </el-menu-item> -->
        <el-button type="info" @click="logout">退出登录</el-button>
          </el-menu>
          </div>
        </div>
        <!-- 按钮退出 click方法 -->
        <div></div>
      </el-header>
      <!-- 主体区域 -->
      <el-main style="width:80%; margin:0 auto;">
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
                      <div class="media-up">
                        <img
                          src="../assets/image/Cgbj0VthLJiAMbGmAAAOTQY17So137.png"
                          class="img-responsive"
                          alt="Responsive image"
                        />
                      </div>
                      <div class="media-body">全场顺丰包邮</div>
                    </a>
                  </li>
                  <li class="media">
                    <a href="#">
                      <div class="media-up">
                        <img
                          src="../assets/image/Cgbj0VthLD6AHWNVAAAHnU-N-dQ054.png"
                          class="img-responsive"
                          alt="Responsive image"
                        />
                      </div>
                      <div class="media-body">100+城市次日送达</div>
                    </a>
                  </li>
                  <li class="media">
                    <a href="#">
                      <div class="media-up">
                        <img
                          src="../assets/image/Cgbj0VthLGiAPvqxAAAIxQPg9a0798.png"
                          class="img-responsive"
                          alt="Responsive image"
                        />
                      </div>
                      <div class="media-body">7天无理由退货</div>
                    </a>
                  </li>
                  <li class="media">
                    <a href="#">
                      <div class="media-up">
                        <img
                          src="../assets/image/Cgbj0VthLFuAUtd0AAALmPd8Wgw009.png"
                          class="img-responsive"
                          alt="Responsive image"
                        />
                      </div>
                      <div class="media-body">15天换货保障</div>
                    </a>
                  </li>
                  <li class="media">
                    <a href="#">
                      <div class="media-up">
                        <img
                          src="../assets/image/Cgbj0FthLHaATnUUAAAJC3dC3Bk024.png"
                          class="img-responsive"
                          alt="Responsive image"
                        />
                      </div>
                      <div class="media-body">15天换货保障</div>
                    </a>
                  </li>
                  <li class="media">
                    <a href="#">
                      <div class="media-up">
                        <img
                          src="../assets/image/Cgbj0FthLGGAB79EAAAFUWqaNBI042.png"
                          class="img-responsive"
                          alt="Responsive image"
                        />
                      </div>
                      <div class="media-body">上门快修</div>
                    </a>
                  </li>
                  <li class="pull-right">
                    <p>周一至周日7：30-24：00</p>
                    <p>400-123-4567</p>
                    <p>在线客服</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="copyright">
              <ul>
                <li><a href="">了解成大</a></li>
                <li><a href="">加入我们</a></li>
                <li><a href="">联系我们</a></li>
                <li><a href="">成大首页</a></li>
                <li><a href="">天猫旗舰店</a></li>
                <li><a href="">线上授权名单公示</a></li>
                <li><a href="">出版物经营许可证</a></li>
                <li>
                  <a href=""><i class="iconfont">&#xe60a;</i>简体中文</a>
                </li>
              </ul>
              <p>
                C2018 ChenDa Telecom Equipment Co，Ltd.All rights
                rese粤CP备13003602号合字B220170010营业执照法律声明<img
                  src="../assets/image/ghs.png"
                  alt=""
                />粤公网安备44049102496009号
              </p>
            </div>
          </div>
        </footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 菜单列表
      menuList: [],
      activePath: "/hello", //配置默认路径
    };
  },
  // 页面加载之后开始查询
  created() {
    // 查询 MenuList
    this.getMenuList();
    // 存放到session中的当前路径，再从session中取出来path，然后动态修改activePath
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    // 安全退出
    logout() {
      // 清除session,回到首页
      window.sessionStorage.clear();
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
/* 头部尾部 */
.el-header,
.el-footer {
  background-color:#409EFF;
  color: #333;
  text-align: center;
  line-height: 60px;
}
/*导航栏开始*/
.navbar-default {
  background-color: #f7f8f8;
  border: none; 
  line-height: 180px;
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
  background-color: rgb(189, 215, 233);
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #00b3ff;
}
/*导航栏结束*/
/* 中间 */
.body1 {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 860px;
}

/*尾部开始*/
footer {
  margin-top: 50px;
  background: #fff;
  color: black;
  clear: both;
}
footer .container ul li {
  display: inline-block;
  font-size: 12px;
  width: 110px;
}
footer .container .Tel ul li {
  width: 150px;
  height: 68px;
}
footer .container .Tel ul li:last-child {
  width: 170px;
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
  padding-left: 14px;
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
  padding-left: 50px;
}
footer .container ul li a {
  color: black;
  text-decoration: none;
}
footer .container .copyright {
  margin-top: 50px;
  margin-left: 40px;
}

/*尾部结束*/
</style>