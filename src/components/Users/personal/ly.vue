<template>
  <div>
    <div class="container">
      <div class="boxly">
        <!-- 顶部导航 -->
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          style="padding-top: 30px"
        >
          <el-breadcrumb-item :to="{ path: '/welcome' }"
            >首页</el-breadcrumb-item
          >
          <el-breadcrumb-item>留言板</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="block">
        <el-button type="primary" @click="addDialogVisible = true">
          提问/留言
        </el-button>
        <span align="center" style="font-size: 16px; display:block">
          感谢您的使用，如果您有什么问题想法建议或者意见都可以在此处留言
        </span>

        <!-- {{ questionList }} -->
        <!-- <table></table> -->
        <!-- 留言板 -->
        <div class="liuyan">
          <div class="radio">
            排序：
            <el-radio-group v-model="reverse">
              <el-radio :label="true">正序</el-radio>
              <el-radio :label="false">倒序</el-radio>
            </el-radio-group>
          </div>
          <el-timeline
            :reverse="reverse"
            prop="asktime"
            column-key="asktime"
            sortable
          >
            <!-- v-infinite-scroll="load" -->
            <el-timeline-item
              v-for="item in questionList"
              :key="item.id"
              :timestamp="item.asktime"
              placement="top"
              class="infinite-list"
              style="overflow: auto"
              :filter-method="filterTag"
              filter-placement="bottom-end"
              prop="title"
            >
              <el-card class="cards infinite-list-item">
                <!-- <h4 :index="it.title" v-for="it in item.title" :key="it.id">{{it.title}}</h4> -->
                <h4>
                  来自 <span>{{ item.name }}</span> 的留言：
                  <span class="pull-right"></span>
                </h4>
                <p class="title">
                  内容：<span class="pull-right">分类：{{ item.title }}</span>
                </p>
                <el-input
                  type="textarea"
                  disabled
                  v-model="item.news"
                ></el-input>
                <h5>
                  <!-- 删除 -->
                  <el-button
                    content="删除用户"
                    type="danger"
                    icon="el-icon-delete"
                    size="mini"
                    @click="deleteUser()"
                  ></el-button>
                  <p class="vote_up">
                    获得 <span>{{ item.vote_up }}</span> 赞
                  </p>
                  <p class="vote_down">
                    被 <span>{{ item.vote_down }}</span> 踩
                  </p>
                </h5>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2077-13-14 00:00:00" placement="top">
              <el-card class="cards infinite-list-item">
                <h4>
                  来自 <span> 开发者 </span> 的留言：
                  <span class="pull-right"></span>
                </h4>
                <p class="title">
                  内容：<span class="pull-right">分类：置顶消息</span>
                </p>
                <h1 type="textarea" align="center">
                  富强、民主、文明、和谐、自由、平等、公正、法治，爱国、敬业、诚信、友善
                </h1>
                <h5>
                  <el-button
                    type="success"
                    icon="el-icon-loading"
                    size="mini"
                    @click="hhh()"
                  ></el-button>
                  <p class="vote_up">获得 <span>9999+</span> 赞</p>
                  <p class="vote_down">被 <span>0</span> 踩</p>
                </h5>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
      <!-- 新增问题区域 -->
      <el-dialog
        title="添加问题"
        :visible.sync="addDialogVisible"
        width="50%"
        @close="addDialogClosed"
      >
        <el-form
          :model="addQuestion"
          :rules="addQuestionRules"
          ref="addQuestionRef"
          label-width="70px"
        >
          <!-- 用户名 -->
          <el-form-item label="用户：" prop="name">
            <el-input
              v-model="addQuestion.name"
              disabled
              style="width: 300px"
            ></el-input>
          </el-form-item>
          <!-- 分类 -->
          <!-- <el-form-item label="分类：" prop="title">
            <el-input
              v-model="addQuestion.title"
              style="width: 300px"
            ></el-input>
          </el-form-item> -->
          <!-- 下拉选择框 -->
          <el-form-item prop="title">
            <el-select
              label="分类："
              prop="title"
              v-model="addQuestion.title"
              placeholder="请选择"
            >
              <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label"
              >
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-option-group>
            </el-select>
          </el-form-item>
          <!-- 内容 -->
          <el-form-item label="内容：" prop="news">
            <el-input type="textarea" v-model="addQuestion.news"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dislog-footer">
          <el-button @click="addDialogVisible = false">取消</el-button>
          <el-button @click="addQuestions" type="primary">确定</el-button>
        </span>
      </el-dialog>
      <!-- <p>{{ addQuestion }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      options: [
        {
          label: "提问或者留言",
          options: [
            {
              value: "Question",
              label: "提问",
            },
            {
              value: "Leave word",
              label: "留言",
            },
          ],
        },
        {
          label: "技术类建议或留言",
          options: [
            {
              value: "框架",
              label: "vue.js",
            },
            {
              value: "后台",
              label: "Springboot",
            },
            {
              value: "数据库",
              label: "MySQL+MongoDB",
            },
          ],
        },
      ],
      // value: "",
      question: {
        name: "",
        title: "",
        news: "",
        asktime: "",
        vote_up: "",
        vote_down: "",
      },
      questionList: [],
      number: "",
      //添加   属性
      addDialogVisible: false, //  对话框状态
      addQuestion: {
        name: "",
        title: "",
        news: "",
        asktime: "",
        vote_up: "0",
        vote_down: "0",
      },
      // 表单验证     添加问题
      addQuestionRules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          {
            min: 2,
            max: 12,
            message: "长度在 2 到 12 个字符",
            trigger: "blur",
          },
        ],
        news: [
          { required: true, message: "请输入您的问题", trigger: "blur" },
          {
            min: 3,
            max: 128,
            message: "长度在 3 到 128 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.getQuestionList();
    this.addQuestion.name = window.sessionStorage.getItem("user");
  },
  methods: {
    filterTag(value, row) {
      return row.title === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    // 查询问题
    async getQuestionList() {
      // 调用post请求
      // 将整个的请求 信息  传到 res 上
      //访问路径 /Question   解析结果到data中res（返回结果）
      const { data: res } = await this.$http.get("mongodb/listQ", {
        // params: this.questionInfo,
      });
      this.questionList = res; // 将返回数据赋值  到 userList  问题数据封装
      // console.log(questionInfo);
      // this.number = res.numbers; // 总个数
      // console.log(res);
    },
    // 添加问题
    addQuestions() {
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
      this.addQuestion.asktime =
        date.year + "-" + newmonth + "-" + day + " " + h + ":" + m + ":" + s;
      //用户名
      // this.addQuestion.name = window.sessionStorage.getItem("user");
      // 发送表单添加请求
      this.$refs.addQuestionRef.validate(async (valid) => {
        // console.log(valid);
        // 验证
        if (!valid) return;
        // 提交结果
        // let params = {}
        // params.name = this.addQuestion.name
        // params.title = this.addQuestion.title
        // params.news = this.addQuestion.news
        // params.asktime = this.addQuestion.asktime
        // console.log(this.addQuestion.name);
        const { data: res } = await this.$http.post(
          "mongodb/addQuestion",
          this.addQuestion
        );
        // console.log(res);
        // console.log(this.addQuestion);
        // console.log(JSON.stringify(this.addQuestion));
        // console.log(JSON.parse(JSON.stringify(this.addQuestion)));
        if (res != "success") {
          return this.$message.error("留言失败！！");
        }
        this.$message.success("留言成功！！");
        this.addDialogVisible = false;
        this.getQuestionList();
      });
    },
    //监听问题   清零
    addDialogClosed() {
      this.$refs.addQuestionRef.resetFields();
    },
    // 删除，假删除
    deleteUser() {
      if (window.sessionStorage.getItem("role") == "管理员") {
        this.$message.success("这个功能以后再写！");
      } else {
        this.$notify({
          title: "权限不足",
          message: "删除失败！" + "请联系管理员升级权限后再进行操作。",
          type: "error",
          center: true,
          offset: 200,
        });
      }
    },
    hhh() {
      this.$notify({
        title: "欢迎使用",
        message: "小可爱，您有任何建议都可以留言，，，，",
        type: "success",
        center: true,
        offset: 200,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.block,
.boxly {
  background-color: lemonchiffon;
  padding: 15px;
  opacity: 0.98;
  border-radius: 5px;
}
/* 面包屑 */
.el-breadcrumb {
  font-size: 18px;
  margin-bottom: 15px;
}
.liuyan {
  padding-top: 20px;
}
.cards {
  h4 {
    color: #808080;
    display: inline-block;
    span {
      color: blue;
    }
  }
  .title {
    text-align: left;
  }
  p {
    font-size: 14px;
    color: cadetblue;
    // text-align: center;
  }
  .el-input {
    // width: 90%;
    min-width: 160px;
  }
  h5 {
    p {
      display: inline-block;
    }
    .vote_up {
      padding: 0px 30px;
      span {
        color: lawngreen;
        font-size: 15px;
      }
    }
    .vote_down {
      display: inline-block;
      span {
        color: chocolate;
      }
    }
  }
}
</style>