<template>
  <div class="box1 el-row">
    <!-- <el-row :gutter="10"> -->
      <div :md="4" class="body0"></div>
      <el-col :xs="24" :sm="22" :md="16">
        <div class="body1">
          <div>
            <!-- 顶部导航 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/hellou' }"
                >首页</el-breadcrumb-item
              >
              <el-breadcrumb-item>健康工具</el-breadcrumb-item>
              <el-breadcrumb-item>卡路里消耗计算器</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="jk1">
              <h2>运动卡路里消耗计算器</h2>
              <p>
                卡路里（简称卡，缩写为cal），由英文Calorie音译而来，其定义为将1克水在1大气压下提升1℃所需要的热量。
              </p>
              <p>
                卡路里（calorie）是能量单位，现在仍被广泛使用在营养计量和健身手册上。
              </p>
              <p>本计算器能方便快速的计算出您所消耗的卡路里值。</p>
            </div>
            <el-container>
              <!-- 主体区域 -->
              <el-main>
                <!-- 用路由开始重定向导航栏 -->
                <!-- <router-view></router-view> -->
                <div class="yellow2">
                  <el-row :gutter="1">
                    <el-col :xs="24" :sm="24" :md="16">
                      <div class="a">
                        <iframe
                          id="api_iframe_51240"
                          name="api_iframe_51240"
                          src="https://www.51240.com/apiiframe/?api_from=51240&api_url=https://kalulixiaohao.51240.com/&api_width=98%&api_backgroundcolor=FFFFFF&api_navigation=no"
                          width="100%"
                          height="750"
                          scrolling="no"
                          frameborder="0"
                        ></iframe>
                      </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="8">
                      <div class="kul">
                        <h3>使用方法<br /></h3>
                        <p>1.输入您的体重千克数；</p>
                        <p>2.填写对应的活动分钟；</p>
                        <p>3.点击计算每日消耗量。</p>
                        <p><img src="../../assets/image/kul1.gif" alt="" /></p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-main>
            </el-container>
          </div>
        </div>
      </el-col>
      <el-col :md="2"><div class="body2"></div></el-col>
    <!-- </el-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      getElementById: [],
    };
  },
  created() {
  },
  methods: {},
};
</script>

<style lang="less" scoped>
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
  color: #909399;
  font-size: 13px;
}
.box1 {
  margin: -20px;
  background-color: #fdd000;
}
.yellow2 {
  box-shadow: 20px 20px 20px -1px royalblue, -100px -60px 20px -1px royalblue;
  display: flex;
  margin: 0 auto;
}
.a {
  display: flex;
}
.body1 {
  // width: 80%;
  margin: 0 auto;
  // display: inline-flex;
  // display: block;
  margin-top: 20px;
  padding: 15px;
}
.body0 {
  width: 16%;
  height: 10px;
  // display: block;
  float: left;
  // border: 1px solid green;
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
  // text-align: center;
  // padding: 10px;
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