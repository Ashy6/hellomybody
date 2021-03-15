<template>
  <div class="box">
    <div class="lb">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        img-width="1920"
        img-height="1080"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../../assets/images/shuimianceshi.jpg"
      ></b-carousel-slide> -->
        <!-- Slides with custom text -->
        <!-- <b-carousel-slide img-src="../../assets/images/yangsheng.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide> -->

        <!-- Slides with image only -->
        <!-- <b-carousel-slide img-src="../../assets/images/jiankang.jpg"></b-carousel-slide> -->

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <!-- 睡眠测试 -->
            <img
              @click="tosleep"
              class="d-block img-fluid w-100"
              width="100%"
              height="100%"
              src="../../assets/images/shuimianceshi.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="100%"
              height="100%"
              src="../../assets/images/yundong.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="100%"
              height="100%"
              src="../../assets/images/yundong2.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="100%"
              height="100%"
              src="../../assets/images/fapang.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              @click="tomyl"
              class="d-block img-fluid w-100"
              width="100%"
              height="100%"
              src="../../assets/images/jiankang.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="100%"
              height="100%"
              src="../../assets/images/yangsheng.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
      </b-carousel>
    </div>
    <div class="box1">
      <div class="box11">
        <div class="box111">
          <p><img src="../../assets/image/wz-hellomybody.jpg" alt="" /></p>
          <p><span>寄语</span></p>
          <p>记录，只是信息</p>
          <p>记忆，令人着迷</p>
          <p>记录，只是数字</p>
          <p>记忆，令人惊讶</p>
          <p>从第一次使用就成为习惯，</p>
          <p>
            训练计划针对不同人群、各种器械和阶段健身目标组合编排，适用最广泛的健身场景
          </p>
          <p>从了解自身开始</p>
          <p>到培养一个好的习惯，成就健康生活的自己</p>
          <p>将前所未有的激情，传达给所有人</p>
          <p>网站会继续升级维护，我们一起</p>
          <p>共同成长</p>
        </div>
        <div class="box112">
          <p>
            <router-link :to="{ path: '/calories_dissipation' }"
              >卡路里消耗计算器</router-link
            >
          </p>
          <p class="pull-right">
            <router-link :to="{ path: '/calories_food' }"
              >食物卡路里计算器</router-link
            >
          </p>
          <p class="pull-right">
            <router-link :to="{ path: '/calories_find' }"
              >食物卡路里查询</router-link
            >
          </p>
          <p class="pull-right">
            <router-link :to="{ path: '/fat_analysis' }"
              >体脂计算器</router-link
            >
          </p>
        </div>
      </div>
      <!-- <div class="box12"></div> -->
    </div>
    <div class="box2">
      <div class="box21"></div>
      <div class="box22"></div>
    </div>

    <div class="box3"></div>

    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    // 轮播图的方法
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    // 跳转睡眠测试
    tosleep() {
      this.$router.push({ path: "/sleep_test" });
    },
    tomyl() {
      this.$router.push({ path: "/Immunity_test" });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  margin: -20px;
}
.b-carousel {
  // margin-top: -6%;
  width: 100%;
}
.lb {
  // margin: -20px;
  display: inline-block;
}
/*
盒模型开始
*/
div {
  height: 100%;
}
.box1 {
  display: flex;
  background-color: #11a6dd;
  width: 100%;
  margin-top: -5px;
  // box-sizing: border-box;
  // position: relative;
  // height: width/3 px;
}
.box1 .box11 {
  flex: 1;
  background-color: #1abcef;
  padding-bottom: 25%;
  height: 0;
  margin: 6%;
  display: inline-block;
  border-radius: 30px;
}
.box1 .box11 .box111 {
  display: inline-block;
  background-color: #fff;
  padding-bottom: 18.2%;
  // height: 250px;
  width: 80%;
  // font-size: 55px;
  // font-weight: 650;
  margin: 10%;
  z-index: 10;
  p {
    // padding: 20px;
    font-family: sans-serif;
    font-size: 15px;
    display: block;
    // margin-bottom: 15px;
    // line-height: 15px;
    background-color: #fff;
    // border-radius: 30px;
    padding-bottom: 15px;
    line-height: 15px;
    font-weight: 900;
  }
  img {
    display: block;
    width: 45%;
  }
  span {
    font-size: 25px;
    font-weight: 800;
  }
}
.box1 .box11 .box112 {
  padding-top: 20px;
  display: flex;
  // margin-top: -150px;
  height: 30px;
  // border: 1px solid red;
  p {
    font-size: 20px;
    color: #fff;
  }
  a {
    text-decoration-color: springgreen;
  }
}
// 盒子2
.box2 {
  display: flex;
  width: 100%;
}
.box2 .box21 {
  flex: 1;
  width: 50%;
  background-color: #fdd000;
  height: 320px;
  z-index: -2;
}
.box2 .box22 {
  flex: 1;
  width: 50%;
  background-color: #95c62a;
  height: 320px;
  z-index: -2;
}
// 盒子3
.box3 {
  display: flex;
  background-color: #fff3bf;
  width: 100%;
  height: 450px;
  z-index: -2;
}
/*
盒模型结束
*/
</style>