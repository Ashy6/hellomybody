<template>
  <div class="box1 el-row">
    <div :md="4" class="body0"></div>
    <el-col :xs="24" :sm="24" :md="16">
      <div class="body1">
        <!-- 顶部导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/hellou' }"
            >首页</el-breadcrumb-item
          >
          <el-breadcrumb-item>健康工具</el-breadcrumb-item>
          <el-breadcrumb-item>食物卡路里计算</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="jk1">
          <h2>食物卡路里热量计算器</h2>
          <p>
            一般来说，成人每天至少需要1500大卡的能量来维持身体机能，这是因为即使你躺着不动，你的身体仍需能来保持体温，心肺功能和大脑运作。
          </p>
          <p>基础代谢消耗会因个体间身高、体重、年龄、性别的差异而有所不同。</p>
        </div>
        <el-container>
          <!-- 主体区域 -->
          <el-main>
            <!-- 用路由开始重定向导航栏 -->
            <!-- <router-view></router-view> -->
            <div class="yellow2">
              <el-row :gutter="2">
                <el-col :xs="24" :sm="24" :md="16">
                  <div class="a">
                    <iframe
                      id="api_iframe_51240"
                      name="api_iframe_51240"
                      src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://kaluli.bmcx.com/&api_width=98%&api_backgroundimage=3&api_navigation=no"
                      width="100%"
                      height="750"
                      scrolling="no"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <!-- <div>
                   // 食谱
                    <iframe
                      id="api_iframe_bmcx"
                      name="api_iframe_bmcx"
                      src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://shipu.bmcx.com/&api_width=98%&api_backgroundcolor=fdd000"
                      width="800"
                      height="800"
                      scrolling="no"
                      frameborder="0"
                    ></iframe>
                  </div> -->
                </el-col>
                <el-col :xs="24" :sm="24" :md="8">
                  <div class="kul">
                    <h3>使用方法<br /></h3>
                    <p>1.输入您的年龄以及体重千克数；</p>
                    <p>2.点击计算大致每天需要的热量。</p>
                    <p>3.选择实物量（可以重复选择）；</p>
                    <p>4.您也可以“重新计算”重置结果。</p>
                    <p><img src="../../../assets/image/kul1.gif" alt="" /></p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-main>
        </el-container>
      </div>
    </el-col>
    <el-col :md="2"><div class="body2"></div></el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getElementById: [],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.box1 {
  margin: -20px;
  background-color: #eef128;
}
/* 面包屑 */
.el-breadcrumb {
  font-size: 18px;
  margin-bottom: 15px;
  /* font-size: 17px; */
}
// 标语
.jk1 {
  padding: 20px;
}
.jk1 h2 {
  color: #303133;
}
.jk1 p {
  color: #606266;
  font-size: 13px;
}
.yellow2 {
  box-shadow: 20px 20px 20px -1px rgb(233, 24, 24),
    -100px -60px 20px -1px rgb(233, 24, 24);
  display: flex;
  margin: 0 auto;
}
.a {
  display: flex;
}
.body1 {
  margin: 0 auto;
  margin-top: 20px;
  padding: 15px;
}
.body0 {
  width: 15%;
  height: 10px;
  float: left;
}
.yellow2 .kul {
  width: 100%;
  height: 750px;
  display: inline-flex;
  flex-wrap: wrap; // 换行
  background-color: #6d6d6c;
  color: antiquewhite;
}
.yellow2 .kul img {
  width: 100%;
}
.yellow2 .kul h3 {
  padding: 10px;
  font-size: 30px;
  width: 100%;
}
.yellow2 .kul p {
  font-size: 20px;
  width: 100%;
}
</style>