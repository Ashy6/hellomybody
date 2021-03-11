<template>
  <div class="box">
    <!--导航开始-->
    
    <!--导航结束-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type1: [],
        // q3: "",
        resource5: "",
        menuList: [],
      },
    };
  },
  created() {},
};
</script>

<style scoped>
.box {
  margin: -20px;
}
.navbar-default {
  background-color: #f7f8f8;
  border: none; /*
    box-shadow: 0px 2px 8px 0px rgba(50,50,50,0.25);*/
}
.navbar-default .navbar-brand {
  font-size: 30px;
  font-weight: bold;
  color: #73c6c9;
  height: 70px;
  line-height: 35px;
}
.navbar-default .navbar-brand > img {
  height: 65px;
  margin-top: -10px;
}
.navbar-nav > li > a {
  font-size: 15px;
  font-weight: bold;
  color: #666;
  height: 70px;
  line-height: 35px;
}
.erweima .container-fluid {
  width: 100%;
}
.navbar-nav .navbar-form .form-group input {
  margin-top: 6px;
  border-radius: 18px;
} /*
.navbar-nav .navbar-form .form-group>button{
    background-color: white;
    margin-bottom: 1px;
    border-radius:18px;
}*/
.navbar-toggle {
  margin-top: 17px;
}
.navbar-default .navbar-toggle:hover {
  border-color: #808080;
  background-color: rgb(189, 215, 233);
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #00b3ff;
}
</style>