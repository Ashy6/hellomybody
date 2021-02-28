<template>
  <div class="box1 el-row">
    <div :sm="2" :md="4.5" class="body0"></div>
    <el-col :xs="24" :sm="20" :md="15">
      <div class="body1">
        <!-- 顶部导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/hellou' }">
            首页
          </el-breadcrumb-item>
          <el-breadcrumb-item>健康工具</el-breadcrumb-item>
          <el-breadcrumb-item>我的工具</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="jk1">
          <h2>健康医疗类 Api 工具分享</h2>
        </div>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-document"
                style="font-size: 35px"
              ></i>
              <h1>-- 食物营养成分查看 --</h1>
            </template>
            <div>
              <p>健康的身体离不开健康的营养搭配！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://yingyang.bmcx.com/&api_width=98%&api_backgroundimage=3&api_navigation=no"
                width="100%"
                height="760"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-document-delete"
                style="font-size: 35px"
              ></i>
              <h1>-- 食物相宜相克 --</h1>
            </template>
            <div>
              <p>你可以在这里--，知道哪些食物是不能乱搭配的！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://xiangyixiangke.bmcx.com/&api_width=98%&api_backgroundimage=3&api_navigation=no"
                width="100%"
                height="760"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i class="header-icon el-icon-dish" style="font-size: 35px"></i>
              <h1>-- 食谱大全 --</h1>
            </template>
            <div>
              <p>你可以在这里--，选择你喜欢的食材，并且做出美味佳肴！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://shipu.bmcx.com/&api_width=98%&api_backgroundimage=1&api_navigation=no"
                width="100%"
                height="415"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i class="header-icon el-icon-burger" style="font-size: 35px"></i>
              <h1>-- 粥谱大全 --</h1>
            </template>
            <div>
              <p>总有一碗适合你的好粥！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://zhoupu.bmcx.com/&api_width=98%&api_backgroundimage=2&api_navigation=no"
                width="100%"
                height="480"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-first-aid-kit"
                style="font-size: 35px"
              ></i>
              <h1>-- 药品查询 --</h1>
            </template>
            <div>
              <p>药品的药性，成分，使用说明都在这里！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://yaopin.bmcx.com/&api_width=98%&api_backgroundimage=4&api_navigation=no"
                width="100%"
                height="820"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-odometer"
                style="font-size: 35px"
              ></i>
              <h1>-- 中草药 --</h1>
            </template>
            <div>
              <p>上万种中草药在线查询！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://zhongcaoyao.bmcx.com/&api_width=98%&api_backgroundcolor=FFFFFF"
                width="100%"
                height="475"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-postcard"
                style="font-size: 35px"
              ></i>
              <h1>-- 民间偏方 --</h1>
            </template>
            <div>
              <p>收集了各种食疗，土方精选！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://pianfang.bmcx.com/&api_width=98%&api_backgroundcolor=FFFFFF&api_navigation=no"
                width="100%"
                height="550"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-ice-drink"
                style="font-size: 35px"
              ></i>
              <h1>-- 喝水计算器 --</h1>
            </template>
            <div>
              <p>多喝水对身体有好处，但过量却会导致水中毒，来计算一下您每天需要多少水吧！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://heshui.bmcx.com/&api_width=98%&api_backgroundimage=2&api_navigation=no"
                width="100%"
                height="890"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-service"
                style="font-size: 35px"
              ></i>
              <h1>-- 疾病自我诊断 --</h1>
            </template>
            <div>
              <p>这里 ，有 5620 种常见病，你可以根据自己的病因来为自己看病 ！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://jibing.bmcx.com/&api_width=98%&api_backgroundimage=2&api_navigation=no"
                width="100%"
                height="750"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-magic-stick"
                style="font-size: 35px"
              ></i>
              <h1>-- 周公解梦 --</h1>
            </template>
            <div>
              <p>日有所思夜有所梦，梦也许代表着一些含义！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://jiemeng.bmcx.com/&api_width=98%&api_backgroundimage=2&api_navigation=no"
                width="100%"
                height="650"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i class="header-icon el-icon-files" style="font-size: 35px"></i>
              <h1>-- 体重测试 --</h1>
            </template>
            <div>
              <p>权威的体重、体脂计算！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://tizhongceshi.bmcx.com/&api_width=98%&api_backgroundimage=2&api_navigation=no"
                width="100%"
                height="650"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i class="header-icon el-icon-view" style="font-size: 35px"></i>
              <h1>-- 眼保健操 --</h1>
            </template>
            <div>
              <p>爱自己的眼睛！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://yanbaojiancao.bmcx.com/&api_width=98%&api_backgroundimage=2&api_navigation=no"
                width="100%"
                height="650"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-data-analysis"
                style="font-size: 35px"
              ></i>
              <h1>-- 色盲、色弱测试 --</h1>
            </template>
            <div>
              <p>通过36道题来检测自己的视力情况！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://semangseruo.bmcx.com/&api_width=98%&api_backgroundimage=2&api_navigation=no"
                width="100%"
                height="650"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-notebook-2"
                style="font-size: 35px"
              ></i>
              <h1>-- 生理健康 --</h1>
            </template>
            <div>
              <p>关爱自己！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://huaiyunjisuanqi.bmcx.com/&api_width=100%&api_backgroundimage=2&api_navigation=no"
                width="100%"
                height="650"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <i
                class="header-icon el-icon-connection"
                style="font-size: 35px"
              ></i>
              <h1>-- IQ测试 --</h1>
            </template>
            <div>
              <p>该功能需要flash支持！</p>
            </div>
            <div class="shadow2 container">
              <iframe
                id="api_iframe_bmcx"
                name="api_iframe_bmcx"
                src="https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://iq.bmcx.com/&api_width=98%&api_backgroundimage=2&api_navigation=no"
                width="100%"
                height="650"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </el-collapse-item>
        </el-collapse>
        <p>这里收集了一些常用的健康工具API，感谢便民查询网(www.bmcx.com)</p>
      </div>
    </el-col>
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
  background-color: #d4d4d4;
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
.shadow2 {
  box-shadow: 20px 20px 10px -10px rgb(46, 45, 45),
    0px -60px 70px -10px rgb(87, 243, 15);
  display: flex;
  // margin: 0px -20px 0px -20px;
  // padding-left: -40px;
  text-align: center;
  border: 3px dashed yellowgreen;
  width: 95%;
}
.el-collapse {
  // border-radius: 15px;
  
  box-shadow: 2px 2px 5px -1px rgb(224, 8, 8),
  -2px -2px 5px -1px rgb(219, 106, 106);
}
.el-collapse-item {
  padding: 0 5px;
}
.body1 {
  margin: 20px 0px 50px 0px;
  // margin-top: 20px;
  padding: 15px;
  background-color: #DCDFE6;
  border-radius: 35px;
  box-shadow: 5px 5px 5px -1px rgb(19, 11, 11);
  
}
.body0 {
  width: 18%;
  height: 10px;
  float: left;
}
</style>