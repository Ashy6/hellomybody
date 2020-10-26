<template>
  <div class="login_container">
    <!-- 登录块 -->
    <div class="login_box">
      <!-- login -->
      <div class="avatar_box">
        <img src="../assets/img/login_run.jpg" />
      </div>

      <!-- 表单区域 -->
      <el-form
        ref="loginFormRef"
        :rules="loginRules"
        :model="loginForm"
        class="login_form"
        label-width="80px"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-denglu1"
            clearable
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-mima1"
            type="password"
            show-password
            clearable
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" round plain @click="login()"
            >登录</el-button
          >
          <el-button type="primary" round plain @click="register()"
            >注册
            <!-- <router-link :to="{ path: 'src/components/Users/register.vue'}" >注册</router-link> -->
            <!-- <router-link tag='span' to="#" @click.native="handleEditPassword">
                            <span class="a-inner"> 注册</span>
                        </router-link> -->
          </el-button>
          <el-button type="info" round plain @click="resetLoginForm()"
            >重置</el-button
          >
          <!--  @click实现调用方法 -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// 绑定数据
export default {
  data() {
    return {
      // 属性 表单数据
      loginForm: {
        username: "admin",
        password: "115115115",
      },
      // 校验规则，验证对象
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
      input: "",
    };
  },
  //实现方法
  methods: {
    //将表单中的内容重置
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    //验证登录
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        //async 解析信息的方法
        // console.log(valid);
        // 登录成功则跳转
        if (!valid) return;
        // 解析信息，定义 res返回数据
        const { data: res } = await this.$http.post("login", this.loginForm); //await 解析信息
        if (res.flag == "ok") {
          this.$message.success("登录成功！"); //信息提示
          this.$router.push({ path: "/home" }); //页面路由跳转
          //console.log(res.user);
          // 存储user对象  用户登录存储
          window.sessionStorage.setItem("user", res.user); //set方法，在index.js  中 get 出系统数据库的user
        } else {
          this.$message.error("手机号（用户名）或者密码错误，请重新输入！");
        }
      });
    },
    //路由转发 注册界面
    register() {
      // 导航到注册
      this.$router.push("/register");
    },
  },
};
</script>
// 书写样式  
// 引入依赖，让样式符合less语法
<style lang="less" scoped>
.login_container {
  background-color: #f6f6f6;
  height: 100%;
}
.login_box {
  width: 400px;
  height: 300px;
  border-radius: 3px;
  position: absolute;
  left: 43%;
  top: 20%;
  transform: translate(-50%, -50%);
  .avatar_box {
    width: 600px;
    height: 480px;
    img {
      width: 430px;
      height: 430px;
      padding-left: 30px;
    }
  }
}
.login_form {
  display: inline-block;
  position: absolute;
  width: 100%;
  padding-right: 15px;
}
.btns {
  display: flex;
  justify-self: start;
  padding-left: 40px;
}
</style>