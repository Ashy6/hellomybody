<template>
  <div>
    <div class="container">
      <!-- 顶部导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的信息</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>修改信息</el-breadcrumb-item> -->
      </el-breadcrumb>
      <h3></h3>
      <!-- 查看我的信息       基本数据 -->
      <el-button type="primary" @click="dialog = true" size="mini"
        >单击完善我的基本信息</el-button
      >
      <!-- 我的信息 -->
      <el-drawer
        :visible.sync="dialog"
        :with-header="false"
        direction="ltr"
        custom-class="demo-drawer"
        ref="drawer"
        size="400px"
      >
        <p style="padding: 30px">
          <span style="font-size: 18px">填写您的基本资料：</span>
        </p>
        <div class="demo-drawer__content">
          <el-form
            :model="userInfo"
            :rules="rules"
            ref="userInfo"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              style="width: 61.8%"
              label="账户/名称:"
              prop="username"
              disabled
            >
              <el-input
                v-model="userInfo.username"
                placeholder="用户名/账户/电话"
                disabled
              ></el-input>
            </el-form-item>
            <el-form-item label="您的性别:" prop="sex">
              <el-select
                style="width: 38.8%"
                v-model="userInfo.sex"
                placeholder="请选择您的性别"
              >
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
              </el-select>
            </el-form-item>
            <!-- 生日 -->
            <el-form-item label="生日:" required>
              <el-col :span="10">
                <el-form-item prop="birthday">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="userInfo.birthday"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <!-- 年龄结果 -->
            <el-form-item style="width: 81.8%" label="年龄:" prop="ages">
              <el-input
                placeholder="选择您的出生年月日后自动获得"
                type="ages"
                v-model="userInfo.ages"
                autocomplete="off"
                disabled
              ></el-input>
            </el-form-item>
            <!-- 身高 -->
            <el-form-item
              style="width: 61.8%"
              label="身高:"
              prop="height"
              :rules="[
                { required: true, message: '身高不能为空' },
                { type: 'number', message: '身高必须为数字值' },
              ]"
            >
              <el-input
                placeholder="例如：175"
                type="height"
                v-model="userInfo.height"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="体重:"
              style="width: 61.8%"
              prop="weight"
              :rules="[
                { required: true, message: '体重不能为空' },
                { type: 'number', message: '体重必须为数字值' },
              ]"
            >
              <el-input
                placeholder="例如：70"
                type="weight"
                v-model="userInfo.weight"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="目标体重:"
              style="width: 61.8%"
              prop="target"
              :rules="[
                { required: true, message: '目标体重不能为空' },
                { type: 'number', message: '目标体重必须为数字值' },
              ]"
            >
              <el-input
                placeholder="例如：75"
                type="target"
                v-model="userInfo.target"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item>
              <el-button type="primary" @click="submitForm('userInfo')">{{
                loading ? "提交中..." : "更新"
              }}</el-button>
              <el-button @click="resetForm('userInfo')">重置</el-button>
              <el-button @click="cancelForm">取 消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-drawer>
      <!-- 修改用户信息区域 -->
      <el-dialog
        title="修改用户"
        :visible.sync="editDialogVisible"
        width="50%"
        @close="editDialogClosed"
      >
        <el-form
          :model="editForm"
          :rules="editFormRules"
          ref="editFormRef"
          label-width="70px"
        >
          <!-- 用户名 -->
          <el-form-item label="用户名" prop="username">
            <el-input v-model="editForm.username" disabled></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item label="密码" prop="password">
            <el-input v-model="editForm.password" clearable></el-input>
          </el-form-item>
          <!-- 邮箱 -->
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="editForm.email" clearable></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dislog-footer">
          邮箱验证功能未来将会上线，敬请期待
          <el-button
            style="margin-left: 30px"
            @click="editDialogVisible = false"
            >取消</el-button
          >
          <el-button @click="editUserInfo" type="primary">确定</el-button>
        </span>
      </el-dialog>
      <div>
        <!-- 正文 -->
        <el-row :gutter="10">
          <el-col :xs="24" :sm="8" :xl="8">
            <div
              class="shadow-lg p-3 mb-5 bg-white rounded"
              style="background-color: pink; border: 1px solid red"
            >
              <el-row class="demo-avatar demo-basic">
                <el-col :span="24">
                  <div class="demo-type">
                    <div>
                      <p>
                        <el-avatar
                          style="
                            height: 150px;
                            width: 150px;
                            border: 1px dashed red;
                          "
                          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        ></el-avatar>
                        <br />{{ userInfo.username }}
                      </p>
                      <div style="border: 1px dashed red"></div>
                      <div>
                        <h5>
                          <el-button
                            @click="a == 1 ? hide() : show()"
                            style="color: black"
                            type="text"
                            >个人信息<i class="el-icon-view"></i
                          ></el-button>
                        </h5>
                      </div>
                      <div style="border: 1px dashed red"></div>
                      <div>
                        <p style="line-height: 14px; font-size: 14px">
                          邮箱：<span>{{
                            editForm.email ? editForm.email : "*****"
                          }}</span>
                        </p>
                        <p style="line-height: 14px; font-size: 14px">
                          密码：<span>{{
                            editForm.password ? editForm.password : "*****"
                          }}</span>
                        </p>
                        <p style="line-height: 14px; font-size: 14px">
                          生日：<span>{{
                            editForm.email ? userInfo.birthday : "*****"
                          }}</span>
                        </p>
                        <div style="border: 1px dashed red"></div>
                        <p>
                          <!-- 修改 -->
                          <el-button
                            type="primary"
                            icon="el-icon-edit"
                            size="mini"
                            @click="showEditDialog()"
                          >
                            修改账号
                          </el-button>
                          <!-- 删除 -->
                          <el-button
                            content="删除用户"
                            type="danger"
                            icon="el-icon-delete"
                            size="mini"
                            @click="deleteUser()"
                          >
                            注销账户
                          </el-button>
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :xs="24" :sm="16" :xl="16">
            <div
              class="shadow-lg p-3 mb-5 bg-white rounded"
              style="height: 200px"
            >
              <el-row :gutter="3">
                <el-col :xs="4" :sm="4"> </el-col>
                <el-col :xs="20" :sm="20">
                  <div></div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    {{ userInfo }}
  </div>
</template>

<script>
export default {
  created() {
    this.userInfo.username = window.sessionStorage.getItem("user");
    // 打开界面实现查询用户信息功能
    // if (this.userInfo.birthday == null) {
    //   this.userInfo.birthday = "2000-01-01";
    // }
    this.getUserInfo();
    // 获取用户列表
    this.getUserList();
  },
  computed: {
    // 标注返回值  否则watch会导致data定义数据时，类型消失
    greeting() {
      return this.greet() + "!";
    },
  },
  data() {
    return {
      a: "",
      // 右开双抽屉
      // drawer: false,
      // innerDrawer: false,
      // 左抽屉
      table: false,
      loading: false,
      dialog: false,
      formLabelWidth: "80px",
      timer: null,
      //侧边用户基本信息表单
      userInfo: {
        username: "",
        sex: "",
        birthday: "",
        ages: "",
        height: "",
        weight: "",
        target: "",
        timesss: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 12,
            message: "长度在 2 到 12 个字符",
            trigger: "blur",
          },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        birthday: [
          {
            // type: "date",  //该问题会导致日期报错 dateObject.getTime is not a function
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
      },
      // 修改用户信息
      editForm: {},
      //显示隐藏对话框
      editDialogVisible: false,
      // 表单验证    修改
      editFormRules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { min: 4, max: 20, message: "请正确输入邮箱地址", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 显示影藏密码
    async show(username) {
      // 进行一次查询操作
      this.a = "1";
      var username = window.sessionStorage.getItem("user");
      const { data: res } = await this.$http.get(
        "getUpdateUser?username=" + username
      );
      this.editForm = res; // 封装editForm{}
      console.log("执行了show方法");
    },
    hide() {
      this.a = "2";
      this.editForm.email = "";
      this.editForm.password = "";
      console.log("执行了hide方法");
    },
    // 右边抽屉的方法
    handleClose(done) {
      this.$confirm("还有未保存的工作哦确定关闭吗？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 侧边抽屉 时间方法
    handleClose(done) {
      if (this.loading) {
        return;
      }
    },
    //取消
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    // 侧边抽屉 -- 添加用户信息的方法 --  表单的方法
    submitForm(formName) {
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
      this.userInfo.timesss =
        date.year + "-" + newmonth + "-" + day + " " + h + ":" + m + ":" + s;
      this.$refs[formName].validate(async (valid) => {
        if (valid) return;
        const { data: res } = await this.$http.post(
          "addUserInfo",
          this.userInfo
        );
        if (this.loading) {
          return;
        }
        this.$confirm("确定更新您的基本信息吗？")
          .then((_) => {
            this.loading = true;
            this.timer = setTimeout(() => {
              // done();
              // 动画关闭需要一定的时间
              setTimeout(() => {
                this.loading = false;
                this.dialog = false;
                if (res != "success") {
                  return this.$message.error("更新失败！！");
                }
                this.$message.success("更新成功！！");
                // this.dialog = false;
                this.getUserInfo();
              }, 400);
            }, 2000);
          })
          .catch((_) => {});
      });
    },
    // 重置
    resetForm(formName) {
      // this.$refs[formName].resetFields();
      // this.userInfo.birthday = "2000-01-01";
      this.userInfo.height = "";
      this.userInfo.weight = "";
      this.userInfo.target = "";
    },
    //将表单中的内容重置
    // resetuserInfo() {
    //   this.$refs.userInfoRef.resetFields();
    // },
    // 查询用户
    async getUserList() {
      const { data: res } = await this.$http.get("allUser", {
        params: this.queryInfo,
      });
      this.userList = res.data; // 将返回数据赋值  到 userList  用户数据封装
      this.number = res.numbers; // 总个数
    },
    // 查询用户信息
    async getUserInfo() {
      let username = window.sessionStorage.getItem("user");
      const { data: res } = await this.$http.get(
        "findUserInfo?username=" + username
      );
      this.userInfo = res; // 将返回数据赋值  到 userInfo  用户数据封装
      // console.log(res);
    },
    // 修改用户
    async showEditDialog(username) {
      var username = window.sessionStorage.getItem("user");
      this.editDialogVisible = true; //开启编辑对话框
      const { data: res } = await this.$http.get(
        "getUpdateUser?username=" + username
      );
      this.editForm = res; //查询的信息填入edit中      编辑的 新值
    },
    // 关闭窗口
    editDialogClosed() {
      this.$refs.editFormRef.resetFields(); //重置信息
    },
    // 确认修改
    editUserInfo() {
      this.$refs.editFormRef.validate(async (valid) => {
        if (!valid) return;
        //发起修改请求
        const { data: res } = await this.$http.put("editUser", this.editForm);
        if (res != "success") {
          return this.$message.error("操作失败！");
        }
        this.$message.success("修改成功！");
        this.editDialogVisible = false; //关闭编辑对话框
        this.getUserList(); //调用userlist 加载用户列表
      });
    },
    // 删除用户
    async deleteUser() {
      // this.$alert("小主要三思啊 (  ･᷄ὢ･᷅) ！", "警告", {
      //   confirmButtonText: "确定",
      //   type: "error",
      // });
      const confirmResult = await this.$confirm(
        "小主，注销账户是不可逆操作！可以取消吗(´-﹏-`；) ？",
        "住手 ！",
        {
          confirmButtonText: "不，再见！٩(⊙o⊙*)و",
          cancelButtonText: "取消 (*• . •*)",
          type: "error",
        }
      ).catch((err) => err);
      // 取消删除
      if (confirmResult != "confirm") {
        return this.$message.info("已取消！");
      }
      //  else {
      //   this.$alert("小主要三思啊 (  ･᷄ὢ･᷅) ！", "警告", {
      //     confirmButtonText: "确定",
      //     type: "error",
      //   });
      // }
      // let username = this.userInfo.username;
      let username = window.sessionStorage.getItem("user");
      // console.log(username);
      //删除的方法
      const { data: res } = await this.$http.delete(
        "deleteUsername?username=" + username
      );
      if (res != "success") {
        return this.$message.error("删除失败！");
      }
      this.$message.success("青山不改，绿水长流，咱们有缘再见！");
      // 清除session,回到首页   清除token
      window.sessionStorage.clear();
      window.localStorage.clear();
      // 导航到首页
      this.$router.push("/login");
    },
    // deleteUsername() {
    //   // 删除信息封装到result中   提示信息
    //   this.$confirm("用户注销后不可恢复！", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   }).catch((err) => err);
    //   // 取消删除
    //   if (confirmResult != "confirm") {
    //     return this.$message.info("已取消！");
    //   }
    //   // this.$confirm("小主要三思啊 (  ･᷄ὢ･᷅) ！", "警告", {
    //   //   confirmButtonText: "确定",
    //   //   cancelButtonText: "取消",
    //   //   type: "error",
    //   // }).catch((err) => err);
    //   // //*2
    //   // if (confirmResult != "confirm") {
    //   //   return this.$message.info("已取消！");
    //   // }
    //   // this.$confirm(
    //   //   "既然我们终将不能在一起，那也许防守也是一种解脱  ~ ~",
    //   //   "那好吧",
    //   //   {
    //   //     confirmButtonText: "再见 (*• . •*)",
    //   //     cancelButtonText: "不要！！",
    //   //     type: "error",
    //   //   }
    //   // ).catch((err) => err);
    //   this.deleteUser();
    // },
  },
  watch: {
    "userInfo.birthday": {
      handler(newVal, oldVal) {
        // console.log(newVal,oldVal)
        var ages,
          // newVal = this.userInfo.birthday,
          date1Arr = newVal.split("-"),
          birthYear = date1Arr[0],
          birthMonth = date1Arr[1],
          birthDay = date1Arr[2],
          d = new Date(),
          nowYear = d.getFullYear(),
          nowMonth = d.getMonth() + 1,
          nowDay = d.getDate();
        if (nowYear == birthYear) {
          ages = 0; //同年 则为0周岁
        } else {
          var ageDiff = nowYear - birthYear; //年之差
          if (ageDiff > 0) {
            if (nowMonth == birthMonth) {
              var dayDiff = nowDay - birthDay; //日之差
              if (dayDiff < 0) {
                ages = ageDiff - 1;
              } else {
                ages = ageDiff;
              }
            } else {
              var monthDiff = nowMonth - birthMonth; //月之差
              if (monthDiff < 0) {
                ages = ageDiff - 1;
              } else {
                ages = ageDiff;
              }
            }
          } else {
            ages = -1; //返回-1 表示出生日期输入错误 晚于今天
            if (ages == -1) {
              return this.$message.error("年龄输入有误！");
            }
          }
        }
        // document.write(ages);
        this.userInfo.ages = ages;
        // console.log(ages);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
div > el-card > el-table > el-table-column {
  height: 40px;
  line-height: 40px;
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
</style>