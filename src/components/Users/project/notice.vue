<template>
  <div class="container">
    <h3></h3>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>版本公告</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="shadow-lg p-3 mb-5 bg-white rounded">
      <p>当前版本为-内测版</p>
      <h2>即将上线：<span>用户信息 Echars 图文分析</span></h2>
      <h2>可能上线：<span>邮箱注册、修改密码验证</span></h2>
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
h2 {
    padding: 10px 30px;
}
</style>