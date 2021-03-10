<template>
  <div class="container">
    <h3></h3>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>项目介绍</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="shadow-lg p-3 mb-5 bg-white rounded">
      <p>
        <i class="el-icon-loading"></i>正在 -
        <i class="el-icon-edit"></i> ..............
      </p>
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
.container {
  opacity: 0.95;
}
p {
  font-size: 40px;
}
</style>