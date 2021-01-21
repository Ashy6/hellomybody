<template>
  <div>
    <h3>我的信息模板</h3>
    <!-- 查看我的信息       基本数据 -->
    <el-button type="text" @click="dialog = true">单击完善我的信息</el-button>
    <el-drawer
      :visible.sync="dialog"
      :with-header="false"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
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
                  style="width: 94%"
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

    <!-- 用户身体数据 -->
    <div>
      <h4>更专业的信息录入：</h4>
      <el-steps :active="active" align-center direction="vertical">
        <el-step title="姓名" description="此处请核实您的账号是否正确"
          >舒服舒服1</el-step
        >
        <el-step
          title="肺活量"
          description="男性为3500～4000毫升，女性为2500～3500毫升"
          >2</el-step
        >
        <el-step
          title="体温"
          description="正常：36℃～37℃，低热37.4~38℃；中热38.1~39℃；高热39.1~41℃"
          >3</el-step
        >
        <el-step title="血压" description="正常血压值是120/80毫米汞柱"
          >5</el-step
        >
        <el-step
          title="血脂"
          description="总胆固醇：3.1～5.2mmol/L，甘油三酯：1.7mmol/L以内"
          >6</el-step
        >
        <el-step
          title="血糖"
          description="正常血糖值：3.9~6.1毫摩尔/升，超越7.0毫摩尔/升称为高血糖"
          >7</el-step
        >
        <el-step title="视力值" description="检查距离为5米,正常视力为1.0-1.5"
          >4</el-step
        >
        <el-step
          title="臀围"
          description="臀围大，表明下身肌肉发达，对人的健康有益"
          >4</el-step
        >
        <el-step title="胸围" description="统计字段">4</el-step>
        <el-step
          title="腰围"
          description="腰臀比（WHR）是指腰围和臀围的比值，是判定中心性肥胖的重要指标"
          >4</el-step
        >
        <el-step title="牙齿数量" description="这将有助于分析您的健康状况"
          >4</el-step
        >
        <el-step
          title="步速"
          description="正常步速：0.8--0.9米/秒，该数据将来可用于预测寿命"
          >4</el-step
        >
        <el-step
          title="握力指数"
          description="握力体重指数=握力(Kg)÷体重(Kg)×100，一般大于50"
          >4</el-step
        >
        <el-step title="心率" description="正常心率：60-80次/分">4</el-step>
      </el-steps>
      <el-button style="margin-top: 12px" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.userInfo.username = window.sessionStorage.getItem("user");
    // 打开界面实现查询用户信息功能
    this.getUserInfo();
  },
  computed: {
    // 标注返回值  否则watch会导致data定义数据时，类型消失
    greeting() {
      return this.greet() + "!";
    },
  },
  data() {
    return {
      active: 0,
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
    };
  },
  methods: {
    // 步骤数量实现的方法
    next() {
      if (this.active++ > 12) this.active = 0;
    },
    // 侧边抽屉
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
      this.$refs[formName].resetFields();
    },
//将表单中的内容重置
    // resetuserInfo() {
    //   this.$refs.userInfoRef.resetFields();
    // },    // 查询用户信息
    async getUserInfo() {
      let username = this.userInfo.username;
      const { data: res } = await this.$http.get(
        "findUserInfo?username=" + username
      );
      this.userInfo = res; // 将返回数据赋值  到 userInfo  用户数据封装
      // console.log(res);
    },
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
</style>