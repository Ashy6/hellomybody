<template>
  <div class="bfat">
    <h3>身高质量指数计算：</h3>

    <!-- 表单区域 -->
    <el-form class="login_form" label-width="80px">
      <!-- 用户名 -->
      <el-input
        placeholder="请输入身高米数"
        type="stature"
        v-model="bodyFat.stature"
      ></el-input
      ><br />
      <el-input
        placeholder="请输入体重(kg)"
        type="weight"
        v-model="bodyFat.weight"
      ></el-input
      ><br />
      <el-input
        placeholder="请输入年龄"
        type="weight"
        v-model="bodyFat.personage"
      ></el-input>
      <el-form-item label="您的性别">
        <el-radio-group v-model="bodyFat.personsex" size="medium">
          <el-radio border label="1">男</el-radio>
          <el-radio border label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item class="btns">
        <button @click="getBodyFat">计算体脂率</button></el-form-item
      >
      <el-input
        placeholder="体脂"
        type="bfat"
        v-model="bodyFat.bfat"
        disabled
      ></el-input>
      <p>
        体脂率是指人体内脂肪重量占人体总体重的比例，又称作体制百分数，它反映了人体内
        脂肪含量的多少， 正常成年人的体脂率分别是：男15%~18%，女性25% ~28%。
      </p>
      <p>
        计算体脂率时，应先计算BMI值<br />
        BMI=体重（千克）÷（身高 x 身高）（米）<br />
        体脂率的计算公式是：1.2 x BMI+0.23 x 年龄-5.4-10.8 x 性别
      </p>
      <p>身高： {{ bodyFat.stature }}</p>
      <p>体重： {{ bodyFat.weight }}</p>
      <p>年龄： {{ bodyFat.personage }}</p>
      <p>性别： {{ bodyFat.personsex }}</p>
      <p>BMI： {{ bodyFat.bmi }}</p>
      <p>体脂率： {{ bodyFat.bfat }}</p>
      <p>根据您的体脂率，您的身材{{ bodyFat.news }}</p>
      <!-- 按钮 -->
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodyFat: {
        stature: "",
        weight: "",
        personage: "",
        personsex: "",
        bmi: "",
        bfat: "",
        news: "",
      },
    };
  },
  created() {
    // this.bodyFat.stature = JSON.parse(this.bodyFat.stature)
    // this.form.bd = JSON.stringify(this.bodyFat.stature)
  },
  methods: {
    getBodyFat() {
      var bfat,
        news,
        personheight = this.bodyFat.stature / 100,
        personage = this.bodyFat.personage,
        personweight = this.bodyFat.weight,
        personSex = this.bodyFat.personsex,
        BMI = personweight / (personheight * personheight);
      console.log(BMI);
      console.log(personheight);
      var bfat = 1.2 * BMI + 0.23 * personage - 5.4 - 10.8 * personSex;
      bfat = bfat.toFixed(2);
      var minNum = 0.15 + 0.1 * (1 - personSex);
      var maxNum = 0.18 + 0.1 * (1 - personSex);
      console.log(minNum);
      console.log(maxNum);
      if (bfat > maxNum * 100) {
        news = "偏胖，建议您平时多注意运动，并减少脂肪的摄入";
      } else if (bfat < minNum * 100) {
        news = "偏瘦，建议您适当增加脂肪与蛋白质的摄入，并积极进行体育锻炼";
      } else {
        news = "合适,继续保持！";
      }
      this.bodyFat.bfat = bfat;
      this.bodyFat.bmi = BMI;
      this.bodyFat.news = news;
    },
  },
};
</script>

<style lang="less" scoped>
.bfat {
  width: 30%;
}
</style>