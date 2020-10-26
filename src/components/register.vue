<template>
    <div class="body">
        1531512.1135
        <el-container>
            <!-- 头部 -->
            <el-header>
                <h3>注册界面</h3>
            </el-header>
            <!-- 主体 -->
            <el-main>Main
                <el-card>
                    <el-steps :active="active" finish-status="success">
                        <el-step title="步骤1" description="基本资料的录入"></el-step>
                        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
                    </el-steps>
                <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
                </el-card>
            </el-main>
            <!-- 底部 -->
            <el-footer>Footer</el-footer>
        </el-container>
    
    </div>
    

</template>

<script>
  export default {
    //   步骤条
    data() {
      return {
        active: 0
      };
    },

    methods: {
        // 步骤条
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style lang="less" scoped>
.body{
    width: 80%;
    margin: 0 auto;
    border:1px solid red;
}

</style>