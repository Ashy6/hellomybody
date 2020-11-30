<template>
  <div class="img1 note" :style ="note">
    <h1>=͟͟͞͞(꒪ᗜ꒪ ‧̣̥̇)卧━=͟͟͞͞(Ŏ◊Ŏ ‧̣̥̇)━擦!!!! --- 这个页面还在开发中 -- 敬请期待 -- (*≧▽≦)ﾉｼ))</h1>
    <div class="note1" :style="note">{{ data1 }}</div>
  </div>
</template>

<script>
export default {
  name: "productdetailspage",
  data() {
    return {
      note: {
        backgroundImage: "url(" + require("../assets/images/4041.jpg") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      data1: "",
      data2: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.note {
    width: 100%;
    height: 100%;
}
.note h1 {
    color: #fff;
    text-align: center;
    padding: 10px;
}
</style>