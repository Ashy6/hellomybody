<template>
  <!-- 引入container布局 -->
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
        <div>
            <img src="../assets/img/HMB.jpg" alt class="logo_img" />
            <span>后台管理平台</span>
        </div>
        <div></div>
        <!-- 按钮退出 click方法 -->
        <el-button type="info" @click="logout">退出后台</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
            <el-menu
                default-active="activePath"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :router="true" 
                >
                <!-- default-active="/hello"   设定打开界面为hello -->
                <!-- :router="true" 设定路由，让其能够根据页面进行跳转 -->
                <!-- > unique-opened   该属性方法控制侧边栏 展开时不自动关闭-->
                <!-- 一级菜单 -->
                <el-submenu :index="item.id+''" 
                v-for="item in menuList" 
                :key="item.id">  <!--  v-for 编写循环 -->
                <!-- 从menuList中取出数据放入item中，，绑定唯一标识的key -->
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>{{item.title}}</span>
                    </template>
                    <!-- 二级菜单 -->
                    <el-menu-item :index="it.path" 
                    v-for="it in item.sList" 
                    :key="it.id" 
                    @click="saveNavState(it.path)">
                      <!-- it.path 即字符串路径，读取数据库路径 -->
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{it.title}}</span>
                      </template>
                    </el-menu-item>
                </el-submenu>
<!--                 
                <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">数据分析</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">人员管理</span>
                </el-menu-item>
                <el-menu-item index="5" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item> -->
            </el-menu>
        </el-aside>
      <!-- 主体内容 -->
      <el-main>
        <!-- 用路由开始重定向导航栏 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
    data(){
        return{
            // 菜单列表
            menuList:[],
            activePath:"/hello",    //配置默认路径
        }
    },
    // 页面加载之后开始查询
    created(){
        // 查询 MenuList
        this.getMenuList();
        // 存放到session中的当前路径，再从session中取出来path，然后动态修改activePath
        this.activePath = window.sessionStorage.getItem('activePath');
    },
    methods: {
      // 安全退出
        logout() {
            // 清除session,回到首页
            window.sessionStorage.clear();
            // 导航到首页
            this.$router.push("/First");
        },
        // 获取导航菜单方法
        async getMenuList(){  
            //访问路径 /menus   解析结果到data中res（返回结果）
            const{data:res} =await this.$http.get("menus");    //访问后台
            //console.log(res);   //控制台
            if(res.flag != 200){
              return this.$message.console.error("获取列表失败");  //访问失败
            };                     // 访问成功后的数据信息
            this.menuList = res.menus; 
        },
        // 保存路径
        saveNavState(activePath){
          // 将当前路径activePath传到saveNavState中，保存路径存放到session中
          window.sessionStorage.setItem('activePath',activePath);
          this.activePath = activePath;
        }
    },
};
</script>

<style lang='less' scoped>
.home-container {
  height: 100%;
}
/* 头部样式 */
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between; //左右贴边
  padding-left: 5px;
  color: #fff;
  font-size: 20px;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
  span {
    padding: 30px;
  }
}
/* 侧边栏 */
.el-aside {
  background-color: #333744;
  .el-menu{
    border-right: none; 
  }
}
/* 主体样式 */
.el-main {
  background-color: #eaedf1;
}
img {
  height: 50px;
}
</style>
