<template>
  <div style="background-color: pink">
    <div class="container" style="border: 2px solid red">
      <!-- 顶部导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button
        @click="drawer = true"
        type="primary"
        style="margin-left: 16px"
      >
        记录我的基本资料
      </el-button>
      <!-- 1层内容开始 -->
      <el-drawer title="健康记录" :visible.sync="drawer" size="380px">
        <p style="padding: 30px">
          <span style="font-size: 18px">记录您的基本资料：</span>
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
              style="width: 310px"
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
                style="width: 150px"
                v-model="userInfo.sex"
                placeholder="请选择您的性别"
              >
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
            <!-- 生日 -->
            <el-form-item label="出生日期:" required>
              <el-col :span="10">
                <el-form-item prop="birthday">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="userInfo.birthday"
                    value-format="yyyy-MM-dd"
                    style="width: 210px"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <!-- 年龄结果 -->
            <el-form-item style="width: 310px" label="年龄(岁):" prop="ages">
              <el-input
                placeholder="选择您的生日后自动获得"
                type="ages"
                v-model="userInfo.ages"
                autocomplete="off"
                disabled
              ></el-input>
            </el-form-item>
            <!-- 身高 -->
            <el-form-item
              style="width: 310px"
              label="身高(cm):"
              prop="height"
              :rules="[
                { required: true, message: '身高不能为空' },
                {
                  min: 2,
                  max: 5,
                  message: '身高应是2~5个字符（包括小数点）！',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                placeholder="例如：175"
                type="number"
                v-model="userInfo.height"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="体重(kg):"
              style="width: 310px"
              prop="weight"
              :rules="[
                { required: true, message: '体重不能为空' },
                {
                  min: 2,
                  max: 5,
                  message: '体重应是2~5个字符（包括小数点）！',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                placeholder="例如：70"
                type="number"
                v-model="userInfo.weight"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="目标体重:"
              style="width: 310px"
              prop="target"
              :rules="[
                { required: true, message: '目标体重不能为空' },
                {
                  min: 2,
                  max: 5,
                  message: '请输入合适的目标体重！',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                placeholder="例如：75"
                type="number"
                v-model="userInfo.target"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-form label-width="30px" class="demo-ruleForm">
            <el-form-item>
              <el-button type="primary" @click="addUserInfo">{{
                loading ? "提交中..." : "更 新"
              }}</el-button>
              <el-button @click="resetForm('userInfo')">重 置</el-button>
              <el-button @click="cancelForm">取 消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 1层内容结束 -->
        <div>
          <el-button
            @click="openUserHWList"
            style="margin-left: 30px; width: 240px"
          >
            查看我记录的身高体重
          </el-button>
          <!-- 2层内容开始 -->
          <el-drawer
            class="drawer2"
            title="记录每一刻更加优秀的自己 !"
            :append-to-body="true"
            :before-close="handleClose"
            :visible.sync="innerDrawer"
            direction="rtl"
            size="375px"
          >
            <el-button style="margin-left: 25px" @click="resetDateFilter">
              重置日期设置
            </el-button>
            <el-button style="margin-left: 25px" @click="clearFilter">
              重置所有设置
            </el-button>
            <el-table :data="UserHWList" ref="filterTable">
              <el-table-column
                property="timesss"
                label="日期"
                width="155"
                sortable
              >
                <!-- column-key="timesss"
                :filters="[
                  { text: '2021-09-01 00:00:00', value: '2021-12-31 00:00:00' },
                  { text: '2021-07-02 00:00:00', value: '2021-07-31 00:00:00' },
                  { text: '2021-05-01 00:00:00', value: '2021-06-30 00:00:00' },
                  { text: '2021-03-01 00:00:00', value: '2021-04-30 00:00:00' },
                ]"
                :filter-method="filterHandler" -->
              </el-table-column>
              <el-table-column
                property="height"
                label="身高(cm)"
                width="105"
                sortable
              ></el-table-column>
              <el-table-column
                property="weight"
                label="体重(kg)"
                sortable
              ></el-table-column>
            </el-table>
            <!-- size-change每页最大变化数 
                current-change当前变化数 
                layout功能组件 
                page-size="queryInfo.number" 当前页码
                total 获取的总数据  -->
            <!-- <div>
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="queryInfo.pageNum"
                :page-size="queryInfo.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="number"
              >
              </el-pagination>
            </div> -->
            <!-- 2层底部按钮 -->
            <el-form label-width="50px" class="demo-ruleForm">
              <!-- <el-form-item>
              <el-button @click="cancelForm2">关 闭</el-button>
              </el-form-item> -->
              <p>只显示最新10条数据</p>
            </el-form>
          </el-drawer>
          <!-- 2层内容结束 -->
        </div>
      </el-drawer>
      {{ UserHWList }}
    </div>
    <div class="container">
      <!-- 主页面显示开始 -->

      <!-- 用户身体数据 -->
      <div>
        <h4>更专业的信息录入：</h4>
        <el-steps :active="active" align-center direction="vertical">
          <el-step title="姓名" description="此处请核实您的账号是否正确">
            舒服舒服1
          </el-step>
          <el-step
            title="肺活量"
            description="男性为3500～4000毫升，女性为2500～3500毫升"
          >
            2
          </el-step>
          <el-step
            title="体温"
            description="正常：36℃～37℃，低热37.4~38℃；中热38.1~39℃；高热39.1~41℃"
          >
            3
          </el-step>
          <el-step title="血压" description="正常血压值是120/80毫米汞柱">
            5
          </el-step>
          <el-step
            title="血脂"
            description="总胆固醇：3.1～5.2mmol/L，甘油三酯：1.7mmol/L以内"
          >
            6
          </el-step>
          <el-step
            title="血糖"
            description="正常血糖值：3.9~6.1毫摩尔/升，超越7.0毫摩尔/升称为高血糖"
          >
            7
          </el-step>
          <el-step title="视力值" description="检查距离为5米,正常视力为1.0-1.5">
            4
          </el-step>
          <el-step
            title="臀围"
            description="臀围大，表明下身肌肉发达，对人的健康有益"
          >
            4
          </el-step>
          <el-step title="胸围" description="统计字段">4</el-step>
          <el-step
            title="腰围"
            description="腰臀比（WHR）是指腰围和臀围的比值，是判定中心性肥胖的重要指标"
          >
            4
          </el-step>
          <el-step title="牙齿数量" description="这将有助于分析您的健康状况">
            4
          </el-step>
          <el-step
            title="步速"
            description="正常步速：0.8--0.9米/秒，该数据将来可用于预测寿命"
          >
            4
          </el-step>
          <el-step
            title="握力指数"
            description="握力体重指数=握力(Kg)÷体重(Kg)×100，一般大于50"
            >4</el-step
          >
          <el-step title="心率" description="正常心率：60-80次/分">4</el-step>
        </el-steps>
        <el-button style="margin-top: 12px" @click="next">下一步</el-button>
      </div>
      <!-- 主页面显示结束 -->
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.userInfo.username = window.sessionStorage.getItem("user");
    // 打开界面实现查询用户信息功能
    this.getUserInfo();
    this.getUserHWList();
  },
  computed: {
    // 标注返回值  否则watch会导致data定义数据时，类型消失
    greeting() {
      return this.greet() + "!";
    },
  },
  data() {
    return {
      // 步骤条
      active: 0,
      //查询信息封装的实体
      queryInfo: {
        query: "", //  查询信息  模糊查询的内容
        pageNum: 1, //  当前页
        pageSize: 10, //  每页最大数
      },
      UserHWList: [],
      number: 0, //  初始的最大值为 0
      // 主内容
      // 右侧双开抽屉
      drawer: false,
      innerDrawer: false,
      loading: false,
      // 侧边用户基本信息表单
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
      //  用户的表单验证规则
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
    // 查询用户信息
    async getUserInfo() {
      let username = this.userInfo.username;
      const { data: res } = await this.$http.get(
        "findUserInfo?username=" + username
      );
      this.userInfo = res; // 将返回数据赋值  到 userInfo  用户数据封装
      // console.log(res);
    },
    // 查询用户身高体重历史信息
    async getUserHWList() {
      let username = this.userInfo.username;
      const { data: res } = await this.$http.get(
        "findHWInfo?username=" + username
      );
      this.UserHWList = res.data;
      this.number = res.numbers;
      console.log(res);
    },
    // 分页功能
    //  使用getUserList方法获取最大页数
    handleSizeChange(newSize) {
      this.queryInfo.pageSize = newSize;
      this.getUserHWList();
    },
    // 当前页数
    handleCurrentChange(newNum) {
      this.queryInfo.pageNum = newNum;
      this.getUserHWList();
    },
    // 关闭
    handleClose(done) {
      //   this.$confirm("还有未保存的工作哦确定关闭吗？")
      //     .then((_) => {
      //       done();
      //     })
      //     .catch((_) => {});
      this.innerDrawer = false;
    },
    // 一级取消
    cancelForm() {
      this.loading = false;
      this.drawer = false;
      clearTimeout(this.timer);
    },
    // 二级打开
    openUserHWList() {
      this.innerDrawer = true;
      this.getUserHWList();
    },
    // 二级取消
    // cancelForm2() {
    //   this.innerDrawer = false;
    // },
    // 侧边抽屉 -- 添加用户信息的方法 --  表单的方法
    // submitForm(formName) {
    addUserInfo() {
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
      this.$refs.userInfo.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.put(
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
                this.drawer = false;
                if (res != "success") {
                  return this.$message.error("更新失败！！");
                }
                this.$message.success("更新成功！ 感谢您的使用！");
                // this.dialog = false;
                this.getUserInfo();
              }, 400);
            }, 1200);
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
    // 日期选择的方法
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    // 日期与过滤器
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("timesss");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    // formatter(row, column) {
    //   return row.address;
    // },
    filterTag(value, row) {
      return row.timesss === value;
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
/* 顶部样式 */
.el-breadcrumb {
  margin-bottom: 15px;
  font-size: 18px;
}
</style>