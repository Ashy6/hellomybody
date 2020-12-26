<template>
  <div>
    <h3>健康工具模板</h3>

    <el-container>
      <!-- 主体区域 -->
      <el-main>
        <!-- 用路由开始重定向导航栏 -->
        <!-- <router-view></router-view> -->
        {{ getElementById }}
        <div style="magin:0 auto">
          <iframe
            id="api_iframe_51240"
            name="api_iframe_51240"
            src="https://www.51240.com/apiiframe/?api_from=51240&api_url=https://kalulixiaohao.51240.com/&api_width=98%&api_backgroundcolor=FFFFFF"
            width="800"
            height="750"
            scrolling="no"
            frameborder="0"
          ></iframe>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script type="text/javascript">
//接口生成：https://www.51240.com/api/
$(window).load() = document.getElementById("api_iframe_51240").src =
  "https://www.51240.com/apiiframe/?api_from=51240&api_url=https://kalulixiaohao.51240.com/&api_width=98%&api_backgroundcolor=FFFFFF";
console.log(document);
</script>
<script>
export default {
  data() {
    //       this.getElementById = document.getElementById("api_iframe_51240").src =
    //       "https://www.51240.com/apiiframe/?api_from=51240&api_url=https://kalulixiaohao.51240.com/&api_width=98%&api_backgroundcolor=FFFFFF";
    // console.log(document);
    return {
      getElementById: [],
    };
  },
  created() {
    // var dom = document.getElementById("api_iframe_51240"),
    //   dom =
    //     "https://www.51240.com/apiiframe/?api_from=51240&api_url=https://kalulixiaohao.51240.com/&api_width=98%&api_backgroundcolor=FFFFFF";
    // console.log(document);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>