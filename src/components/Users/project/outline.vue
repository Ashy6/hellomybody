<template>
  <div class="container">
    <h3></h3>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>项目大纲</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="shadow-lg p-3 mb-5 rounded">
      <p>HelloBody - 结构图</p>
      <div class="bkimg">
        <p>
          <img src="../../../assets/image/project.png" alt="" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/* 顶部样式 */
.el-breadcrumb {
  margin: 15px;
  font-size: 18px;
}
p {
  font-size: 40px;
}
.container {
  .bkimg {
    img {
      width: 100%;
      height: auto;
    }
    //   background-image: url(../../../assets/image/project.png);
  }
  background-color: #f7f7f7;
  opacity:0.95;
}
</style>