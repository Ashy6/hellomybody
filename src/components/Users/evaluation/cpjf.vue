<template>
  <div>
    <h3>jianfei cp模板</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <!-- <el-form-item label="活动时间">
        
          <el-time-picker
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%"
          ></el-time-picker>
      </el-form-item> -->

      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type1">
          <el-checkbox label="美食/餐厅线上活动" name="type1"></el-checkbox>
          <el-checkbox label="地推活动" name="type1"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type1"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource5">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addIm">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
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
      },
    };
  },
  methods: {
    // 添加免疫力评测
    addIm() {
      this.$refs.form.validate(async (valid) => {
        // debugger
        console.log(this.form);
        console.log(valid);
        // 验证
        if (!valid) return;
        // 提交结果
        const { data: res } = await this.$http.post("addIm", this.form);
        if (res != "success") {
          console.log(this.form);
          return this.$message.error("添加失败！！");
        }
        this.$message.success("添加成功！！");
        console.log("添加成功！！");
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>