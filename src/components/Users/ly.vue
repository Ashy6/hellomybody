<template>
  <div>
    <h1>留言板</h1>
    <!-- 顶部导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" style="padding: 30px">
      <el-breadcrumb-item :to="{ path: '/hellou' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户社区</el-breadcrumb-item>
      <el-breadcrumb-item>留言板</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary" @click="addDialogVisible = true">
      提问/留言
    </el-button>
    <p></p>
    <div class="block">
      <!-- <el-table :data="questionList" border stripe> -->
      <el-timeline :data="questionList">
        <el-timeline-item border timestamp="asktime" placement="top">
          <el-card>
            <h4 prop="name"></h4>
            <h2 prop="title"></h2>
            <p prop="news"></p>
            <p><span prop="vote_up"></span><span prop="vote_down"></span></p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>留言标题</h4>
            <p>此处为留言内容</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
        <!-- 留言板 -->
      <el-timeline>
        <el-timeline-item v-for="item in questionList" :key="item.id" timestamp="2018/4/2" placement="top">
          <el-card>
            <!-- <h4 :index="it.title" v-for="it in item.title" :key="it.id">{{it.title}}</h4> -->
            <p>{{item.name}}在{{item.asktime}}的留言：</p>
            <h3>主题：{{item.title}} <h6>内容：{{item.news}}</h6></h3>
            <p><span>赞{{item.vote_up}}</span> <span>踩{{item.vote_down}}</span></p>
            <!-- 删除 -->
            <el-button
              content="删除用户"
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deleteUser(scope.row.id)"
            ></el-button>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <!-- </el-table> -->
      {{ questionList }}
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
        <!-- 主题 -->
        <el-form-item label="标题：" prop="title">
          <el-input v-model="addQuestion.title" style="width: 300px"></el-input>
        </el-form-item>
        <!-- 内容 -->
        <el-form-item label="问题：" prop="news">
          <el-input
            type="textarea"
            v-model="addQuestion.news"
            style=""
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dislog-footer">
        <el-button @click="addDialogVisible = false">取消</el-button>
        <el-button @click="addQuestions" type="primary">确定</el-button>
      </span>
    </el-dialog>
    <p>{{ addQuestion }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      console.log(res);
    },
    // 添加问题
    //监听问题   清零
    addDialogClosed() {
      this.$refs.addQuestionRef.resetFields();
    },
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
        console.log(this.addQuestion.name);
        const { data: res } = await this.$http.post(
          "mongodb/addQuestion",
          this.addQuestion
        );
        console.log(res);
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
  },
};
</script>

<style lang="scss" scoped>
</style>