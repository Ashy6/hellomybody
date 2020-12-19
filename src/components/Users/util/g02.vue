<template>
  <div>
    <h3>标准体重</h3>
    <h4>
      世卫计算方法：<br />
      男性：(身高cm－80)×70﹪=标准体重<br />
      女性：(身高cm－70)×60﹪=标准体重<br />
      标准体重正负10﹪为正常体重<br />
      标准体重正负10﹪~ 20﹪为体重过重或过轻<br />
      标准体重正负20﹪以上为肥胖或体重不足
    </h4>
    <!-- 表单区域 -->
    <el-form class="login_form" label-width="80px">
      <!-- 用户名 -->
      <el-input
        placeholder="请输入身高(cm)"
        type="stature"
        v-model="body.stature"
      ></el-input
      ><br />
      <el-input
        placeholder="请输入体重(kg)"
        type="weight"
        v-model="body.weight"
      ></el-input>
      <el-form-item label="您的性别">
        <el-radio-group v-model="body.personsex" size="medium">
          <el-radio border label="1">男</el-radio>
          <el-radio border label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item class="btns">
        <button @click="getWeight">计算标准体重</button></el-form-item
      >
      <el-input
        placeholder="标准体重"
        type="bweight"
        v-model="body.bweight"
        disabled
      ></el-input>
      <p>身高： {{ body.stature }}</p>
      <p>体重： {{ body.weight }}</p>
      <p>性别： {{ body.personsex }}</p>
      <p>标准体重： {{ body.bweight }}</p>
      <!-- <p>根据您的体脂率，您的身材{{ body.news2 }}</p> -->
      <!-- 按钮 -->
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: {
        stature: "",
        weight: "",
        personsex: "",
        // 结果
        bweight: "",
        news2: "",
      },
    };
  },
  created() {
    // this.body.stature = JSON.parse(this.body.stature)
    // this.form.bd = JSON.stringify(this.body.stature)
  },
  methods: {
    getWeight() {
      var news2,
        height = this.body.stature, //身高的值
        width = this.body.weight, //体重的值
        personsex = this.body.personsex,
        sex = 70 + personsex * 10,
        sex2 = 0.6 + personsex * 0.1,
        sum = parseFloat((height - sex) * sex2); //定义标准体重公式
      if (height > 120 && height < 300) {
        if (width <= sum + sum * 0.1 && width >= sum - sum * 0.1) {
          alert(
            "您的标准体重为" +
              sum.toFixed(3) +
              "(kg),在" +
              (sum * 0.9).toFixed(3) +
              "(kg)~" +
              (sum * 1.1).toFixed(3) +
              "(kg)之间，" +
              "属于正常体重。请继续保持ヽ( ⌒ω⌒)人(=^‥^= )ﾉ！！！"
          );
        } else if (width <= sum + sum * 0.2 && width >= sum + sum * 0.1) {
          alert(
            "您的标准体重为" +
              sum.toFixed(3) +
              "(kg),在" +
              (sum * 1.1).toFixed(3) +
              "(kg)~" +
              (sum * 1.2).toFixed(3) +
              "(kg)之间，" +
              "属于偏胖(过重)。建议减少脂肪和油脂的摄入，并加强体育锻炼！！"
          );
        } else if (width >= sum - sum * 0.2 && width <= sum - sum * 0.1) {
          alert(
            "您的标准体重为" +
              sum.toFixed(3) +
              "(kg),在" +
              (sum * 0.8).toFixed(3) +
              "(kg)~" +
              (sum * 0.9).toFixed(3) +
              "(kg)之间，" +
              "属于偏瘦(过轻)。建议您注重饮食健康，太瘦并不是一种美 (  •̆ ᵕ •̆ )◞♡ ！"
          );
        } else if (width > sum + sum * 0.2) {
          alert(
            "您的标准体重为" +
              sum.toFixed(3) +
              "(kg),超过" +
              (sum * 1.2).toFixed(3) +
              "(kg)，属于肥胖(超重)。亲，这边建议您注意减脂 (*≧▽≦)ﾉｼ)) ！"
          );
        } else if (width < sum - sum * 0.2) {
          alert(
            "您的标准体重为" +
              sum.toFixed(3) +
              "(kg),远小于" +
              (sum * 0.8).toFixed(3) +
              "(kg)，体重严重不足。" +
              "应当注意加强营养，如有不适，建议尽早就医。"
          );
        } else {
          alert("您的输入有误");
        }
      } else {
        alert("您的输入有误，请重新输入");
      }
      this.body.news2 = news2;
      this.body.bweight = sum.toFixed(3);
    },
  },
};
</script>

<style lang="less" scoped>
</style>