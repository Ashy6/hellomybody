<template>
  <div class="box0">
    <!-- 顶部导航 -->
    <div class="container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/welcome' }">
          首页
        </el-breadcrumb-item>
        <el-breadcrumb-item>数据分析</el-breadcrumb-item>
        <el-breadcrumb-item>体重体脂分析</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="boxt container">
      <div class="left shadow-lg p-3 mb-5 bg-white rounded">
        <!-- 标题开始 -->
        <el-tooltip placement="bottom-start">
          <div slot="content" style="font-size: 16px">
            世卫计算方法：<br />男性：(身高cm－80)×70﹪=标准体重<br />
            女性：(身高cm－70)×60﹪= 标准体重<br />
            标准体重 正负(10﹪+-) 为正常体重<br />
            标准体重 正负10﹪~ 20﹪ 为体重过重或过轻<br />
            标准体重 正负20﹪以上 为肥胖或体重不足
          </div>
          <el-button plain style="border: 0px">
            <h1 style="display: inline-block">标准体重</h1>
            <i
              class="header-icon el-icon-chat-dot-square"
              style="font-size: 25px"
            ></i>
          </el-button>
        </el-tooltip>
        <h1 style="display: inline-block">与</h1>
        <el-tooltip placement="bottom-start">
          <div slot="content" style="font-size: 16px">
            体脂率是指人体内脂肪重量占人体总体重的比例，<br />
            又称作体脂百分数，它反映了人体内脂肪含量的多<br />
            少。 正常成年人的体脂率分别是：男15%~18%，<br />
            女性25%~28%。<br />
            计算体脂率时，应先计算BMI值<br />
            BMI=体重（千克）÷（身高 × 身高）（米）<br />
            体脂率的计算公式是：<br />
            1.2 × BMI+0.23 × 年龄-5.4-10.8 × 性别
          </div>
          <el-button plain style="border: 0px">
            <h1 style="display: inline-block">体脂率</h1>
            <i
              class="header-icon el-icon-chat-dot-square"
              style="font-size: 25px"
            ></i>
          </el-button>
        </el-tooltip>
        <!-- 标题结束 -->

        <!-- 表单区域 -->
        <el-form
          class="demo-ruleForm"
          label-width="80px"
          :rules="bodyRules"
          :model="body"
          ref="body"
        >
          <!-- 身高 -->
          <el-form-item label="身高" prop="stature">
            <el-input
              clearable
              placeholder="请输入身高(cm)"
              type="number"
              v-model="body.stature"
            ></el-input>
          </el-form-item>
          <!-- 体重 -->
          <el-form-item label="体重" prop="weight">
            <el-input
              clearable
              placeholder="请输入体重(kg)"
              type="number"
              v-model="body.weight"
            ></el-input>
          </el-form-item>
          <!-- 年龄 -->
          <el-form-item label="年龄" prop="personage">
            <el-input
              clearable
              placeholder="请输入年龄(岁)"
              type="number"
              v-model="body.personage"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <!-- 性别 -->
          <el-form-item label="性别" prop="personsex">
            <el-radio-group v-model="body.personsex" size="medium">
              <el-radio border label="1">男</el-radio>
              <el-radio border label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item class="btns">
            <el-button round @click="getWeight">体重分析</el-button>
            <el-button round @click="getBody">体脂分析</el-button>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="info" round plain @click="resetForm('body')"
              >重置输入
            </el-button>
            <el-button @click="addbody()">记录一下</el-button>
            <router-link
              style="text-decoration: none"
              :router="true"
              to="/personal_center"
            >
              <el-button
                class="pull-right"
                type="text"
                style="margin: 5px; font-size: 18px"
              >
                Go-> 『个人中心』
              </el-button>
            </router-link>
          </el-form-item>
          <!-- 按钮 -->
        </el-form>
        <!-- 因为要提交的表单是 userInfo 而不是 body
        所以这里做一个 假验证 -->
        <el-form ref="userInfoRef" :model="userInfo"> </el-form>
      </div>
      <div class="right shadow-lg p-3 mb-5 bg-white rounded">
        <h2>标准体重的计算：</h2>
        <h4>
          {{ body.stature ? "[ " + body.stature + " (cm)" : "[ 身高(cm)" }}－{{
            body.personsex ? 70 + body.personsex * 10 + " ]" : "性别常量 ]"
          }}
          ×
          {{
            body.personsex
              ? (0.6 + body.personsex * 0.1) * 100 + "%"
              : "性别影响值"
          }}
          =<span>
            {{
              body.stature && body.personsex
                ? (
                    ((body.stature - (70 + body.personsex * 10)) *
                      (0.6 + body.personsex * 0.1) *
                      100) /
                    100
                  ).toFixed(3) + " (kg)"
                : "标准体重(kg)"
            }}
          </span>
        </h4>
        <h2>BMI 值的计算：</h2>
        <h4>
          {{ body.weight ? body.weight + "(kg)" : "体重(kg)" }} ÷
          {{
            body.stature
              ? "[ " +
                (body.stature / 100).toFixed(2) +
                "(m)" +
                "×" +
                (body.stature / 100).toFixed(2) +
                "(m) ]"
              : "[ 身高(m) × 身高(m) ]"
          }}
          =
          <span>
            {{
              body.weight && body.stature
                ? (
                    body.weight /
                    ((body.stature / 100).toFixed(3) *
                      (body.stature / 100).toFixed(3))
                  ).toFixed(3)
                : "BMI"
            }}
          </span>
        </h4>
        <h2>体脂率的计算：</h2>
        <h4>
          {{
            body.weight && body.stature
              ? "[" +
                (
                  body.weight /
                  ((body.stature / 100) * (body.stature / 100))
                ).toFixed(3) +
                "(体脂) × 1.2 ]"
              : "(BMI值 × 1.2)"
          }}
          +
          {{
            body.personage
              ? "[" + body.personage + " (岁) × 0.23 ]"
              : "(年龄 × 0.23)"
          }}
          - 5.4 -
          {{
            body.personsex ? "(" + body.personsex + " × 10.8)" : "(性别 × 10.8)"
          }}
          =
          <span>
            {{
              body.weight && body.stature && body.personage && body.personsex
                ? (
                    1.2 *
                      (
                        body.weight /
                        ((body.stature / 100).toFixed(3) *
                          (body.stature / 100).toFixed(3))
                      ).toFixed(3) +
                    0.23 * body.personage -
                    5.4 -
                    10.8 * body.personsex
                  ).toFixed(3) + "%"
                : "体脂率"
            }}
          </span>
        </h4>
      </div>
    </div>
    <div class="three container">
      <div class="block shadow-lg p-3 mb-5 bg-white rounded">
        <!-- vertical 竖向 -->
        <el-slider
          v-model="value4"
          :format-tooltip="formatTooltip"
          :marks="marks"
        ></el-slider>
        <!-- 标准体重 -->
        <!-- <p>value5={{ value5 }}</p> -->
        <p>{{ body.news }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.userInfo.username = window.sessionStorage.getItem("user");
    // 打开界面实现查询用户信息功能
    this.getUserInfoMessage();
  },
  data() {
    return {
      userInfo: {
        username: "",
        sex: "",
        birthday: "",
        ages: "",
        height: "",
        weight: "",
        target: "",
        bmi: "",
        bfat: "",
        timesss: "",
      },
      body: {
        stature: "",
        weight: "",
        personage: "",
        personsex: "",
        // 结果
        bweight: "",
        news2: "",
        // 结果
        bmi: "",
        bfat: "",
        news: "",
      },
      // 滑块
      value4: 50,
      value: [31.5, 70],
      marks: {
        0: {
          style: {
            padding: "0px 0px 0px 150px",
            color: "blue",
          },
          label: this.$createElement(
            "strong",
            "滑动滑块找到您体重的位置"
          ),
        },
        35: {
          style: {
            color: "red",
          },
          label: this.$createElement("strong", "过瘦"),
        },
        40: {
          style: {
            color: "#F56C6C",
          },
          label: this.$createElement("strong", "偏瘦"),
        },
        45: {
          style: {
            color: "#E6A23C",
          },
          label: this.$createElement("strong", "微瘦"),
        },
        50: {
          style: {
            color: "#67C23A",
          },
          label: this.$createElement("strong", "标准"),
        },
        55: {
          style: {
            color: "#E6A23C",
          },
          label: this.$createElement("strong", "微胖"),
        },
        60: {
          style: {
            color: "#F56C6C",
          },
          label: this.$createElement("strong", "偏胖"),
        },
        65: {
          style: {
            color: "red",
          },
          label: this.$createElement("strong", "肥胖"),
        },
      },
      // 校验规则
      bodyRules: {
        stature: [
          { required: true, message: "身高不能为空", trigger: "blur" },
          {
            min: 2,
            max: 6,
            message: "长度在 2 到 6 个数字(包括小数点)",
            trigger: "blur",
          },
        ],
        weight: [
          { required: true, message: "体重不能为空", trigger: "blur" },
          {
            min: 2,
            max: 6,
            message: "长度在 2 到 6 个数字(包括小数点)",
            trigger: "blur",
          },
        ],
        personage: [
          { required: true, message: "年龄不能为空", trigger: "blur" },
          {
            min: 1,
            max: 3,
            message: "长度在 1 到 3 位数字",
            trigger: "blur",
          },
        ],
        personsex: [
          { required: true, message: "性别不能为空", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    value5: {
      get: function () {
        return (
          (this.body.weight *
            ((this.body.stature - (70 + this.body.personsex * 10)) *
              (0.6 + this.body.personsex * 0.1) *
              100)) /
          100 /
          100
        ).toFixed(3);
      },
      set: function (newValue) {
        this.value4 = this.body.weight;
      },
    },
    a: function () {
      return (
        ((this.body.stature - (70 + this.body.personsex * 10)) *
          (0.6 + this.body.personsex * 0.1) *
          100) /
        100 /
        50
      ).toFixed(3);
    },
  },
  watch: {
    "body.weight": function (newVal, oldVal) {
      // console.log(newVal, oldVal);
      // this.value4 = this.body.weight;
    },
  },
  methods: {
    // 查询用户信息
    async getUserInfoMessage() {
      let username = window.sessionStorage.getItem("user");
      const { data: res } = await this.$http.get(
        "findUserInfo?username=" + username
      );
      this.userInfo = res; // 将返回数据赋值  到 userInfo  用户数据封装
    },
    // 记录数据
    addbody() {
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
      this.userInfo.timesss =
        date.year + "-" + newmonth + "-" + day + " " + h + ":" + m + ":" + s;
      this.userInfo.height = this.body.stature;
      this.userInfo.weight = this.body.weight;
      // bmi值与体脂率，计算所得
      this.userInfo.bmi = (
        this.body.weight /
        ((this.body.stature / 100).toFixed(3) *
          (this.body.stature / 100).toFixed(3))
      ).toFixed(3);
      this.userInfo.bfat = (
        1.2 *
          (
            this.body.weight /
            ((this.body.stature / 100).toFixed(3) *
              (this.body.stature / 100).toFixed(3))
          ).toFixed(3) +
        0.23 * this.body.personage -
        5.4 -
        10.8 * this.body.personsex
      ).toFixed(3);
      this.$refs.body.validate(async (valid) => {
        // 验证
        if (!valid) return;
        // 提交结果
        const { data: res } = await this.$http.post(
          "addUserInfo",
          this.userInfo
        );
        console.log(this.userInfo);
        if (res != "success") {
          // console.log(that.form);
          console.log(res);
          return this.$message.error("添加失败！！");
        }
        this.$message.success("记录成功！！");
        // console.log("添加成功！！");
      });
    },
    // 滑块格式化值
    formatTooltip(val) {
      return this.a < 1 ? val : (this.a * val).toFixed(3);
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getWeight() {
      var news2,
        height = this.body.stature, //身高的值
        width = this.body.weight, //体重的值
        personsex = this.body.personsex,
        sex = 70 + personsex * 10,
        sex2 = 0.6 + personsex * 0.1,
        sum = parseFloat((height - sex) * sex2); //定义标准体重公式
      if (height > 120 && height < 300) {
        if (width <= sum + sum * 0.1 && width >= sum - sum * 0.1) {
          this.$notify({
            title: "正常",
            message:
              "您的标准体重为" +
              sum.toFixed(3) +
              "(kg),在" +
              (sum * 0.9).toFixed(3) +
              "(kg)~" +
              (sum * 1.1).toFixed(3) +
              "(kg)之间，" +
              "属于正常体重。请继续保持ヽ( ⌒ω⌒)人(=^‥^= )ﾉ！！！",
            type: "success",
            duration: 0, // 不会自动消失
          });
        } else if (width <= sum + sum * 0.2 && width >= sum + sum * 0.1) {
          this.$notify({
            title: "偏胖",
            message:
              "您的标准体重为" +
              sum.toFixed(3) +
              "(kg),在" +
              (sum * 1.1).toFixed(3) +
              "(kg)~" +
              (sum * 1.2).toFixed(3) +
              "(kg)之间，" +
              "属于偏胖(过重)。建议减少脂肪和油脂的摄入，并加强体育锻炼！！",
            type: "warning",
            duration: 0,
          });
        } else if (width >= sum - sum * 0.2 && width <= sum - sum * 0.1) {
          this.$notify({
            title: "偏瘦",
            message:
              "您的标准体重为" +
              sum.toFixed(3) +
              "(kg),在" +
              (sum * 0.8).toFixed(3) +
              "(kg)~" +
              (sum * 0.9).toFixed(3) +
              "(kg)之间，" +
              "属于偏瘦(过轻)。建议您注重饮食健康，太瘦并不是一种美 (  •̆ ᵕ •̆ )◞♡ ！",
            type: "warning",
            duration: 0,
          });
        } else if (width > sum + sum * 0.2) {
          this.$notify.error({
            title: "过重",
            message:
              "您的标准体重为" +
              sum.toFixed(3) +
              "(kg),超过" +
              (sum * 1.2).toFixed(3) +
              "(kg)，属于肥胖(超重)。亲，这边建议您注意减脂 (*≧▽≦)ﾉｼ)) ！",
            duration: 0,
          });
        } else if (width < sum - sum * 0.2) {
          this.$notify.error({
            title: "过瘦",
            message:
              "您的标准体重为" +
              sum.toFixed(3) +
              "(kg),远小于" +
              (sum * 0.8).toFixed(3) +
              "(kg)，体重严重不足，营养不良。" +
              "应当注意加强营养，如有不适，建议尽早就医。",
            duration: 0,
          });
        } else {
          this.$notify.info({
            title: "不正常",
            message: "您的输入有误",
          });
        }
      } else {
        this.$notify.info({
          title: "不正常",
          message: "您的输入有误",
        });
      }
      this.body.news2 = news2;
      this.body.bweight = sum.toFixed(3);
      // this.value4 = this.body.weight;
    },
    // 计算体脂
    getBody() {
      var bfat,
        news,
        personheight = this.body.stature / 100,
        personage = this.body.personage,
        personweight = this.body.weight,
        personSex = this.body.personsex,
        BMI = personweight / (personheight * personheight);
      var bfat = 1.2 * BMI + 0.23 * personage - 5.4 - 10.8 * personSex;
      bfat = bfat.toFixed(2);
      var minNum = 0.15 + 0.1 * (1 - personSex);
      var maxNum = 0.18 + 0.1 * (1 - personSex);
      if (bfat > maxNum * 100) {
        news =
          "根据您的体脂率，您的身材偏胖，建议您平时多注意运动，并减少脂肪的摄入";
      } else if (bfat < minNum * 100) {
        news =
          "根据您的体脂率，您的身材偏瘦，建议您适当增加脂肪与蛋白质的摄入，并积极进行体育锻炼";
      } else {
        news = "根据您的体脂率，您的身材挺合适,继续保持！";
      }
      // if (bfat > maxNum * 100) {
      //   alert( "根据您的体脂率为"+bfat+"，您的身材偏胖，建议您平时多注意运动，并减少脂肪的摄入");
      // } else if (bfat < minNum * 100) {
      //   // alert(bfat+"根据您的体脂率为");
      //   alert( "根据您的体脂率为"+bfat+"，您的身材偏瘦，建议您适当增加脂肪与蛋白质的摄入，并积极进行体育锻炼");
      // } else {
      //   alert( "根据您的体脂率为"+bfat+"，您的身材合适,继续保持！");
      // }
      this.body.bfat = bfat;
      this.body.bmi = BMI.toFixed(2);
      this.body.news = news;
    },
  },
};
</script>

<style lang="less" scoped>
/* 面包屑 */
.el-breadcrumb {
  font-size: 18px;
  margin-bottom: 15px;
}
.box0 {
  min-width: 800px;
}
.boxt {
  display: flex;
}
.left {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  // border: 1px dashed green;
  flex: 5;
  margin-right: 3px;
  // display: flex;
  .el-input {
    max-width: 300px;
    display: inline-block;
  }
  .btns {
    margin: 5px;
  }
}
.right {
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
  // border: 1px dashed red;
  flex: 4;
  // display: inline-block;
  h2 {
    margin: 50px 0px 0px 20px;
  }
  h4 {
    margin: 10px 0 0 30px;
    span {
      display: inline-block;
      color: #67c23a;
      font-size: 20px;
      // margin-top: 10px;
    }
  }
}
.three {
  // margin-top: 20px;
  font-size: 15px;
  p {
    padding-top: 20px;
    line-height: 30px;
  }
  .block {
    border-radius: 15px 55px;
  }
}
</style>