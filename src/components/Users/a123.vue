<template>
  <div>
    <h3>生日转换年龄模板</h3>

    <!-- 表单区域 -->
    <el-form class="login_form" label-width="80px">
      <!-- 用户名 -->
      <!-- <el-input
        placeholder="例如：18"
        type="birthDay"
        v-model="numberValidateForm.birthDay"
        autocomplete="off"
        v-on:keydown.enter="getAge"
      ></el-input> -->
      <el-date-picker
        type="date"
        placeholder="选择日期"
        v-model="numberValidateForm.birthDay"
        v-on:keydown.enter="getAge"
        value-format="yyyy-MM-dd"
        style="width: 30%"
      ></el-date-picker>
      <el-form-item class="btns">
        <button @click="getAge" v-on:keydown.enter="getAge()">查看年龄</button></el-form-item>
      <el-input
        placeholder="例如：18"
        type="ages"
        v-model="numberValidateForm.ages"
        style="width: 30%"
        disabled
        autocomplete="off"
      ></el-input>
      <p>生日： {{ numberValidateForm.birthDay }}</p>
      <p>年龄： {{ numberValidateForm.ages }}</p>
      <!-- 按钮 -->
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      numberValidateForm: {
        birthDay: "",
        ages: "",
      },
    };
  },
  created() {
    // this.numberValidateForm.birthDay = JSON.parse(this.numberValidateForm.birthDay)
    // this.form.bd = JSON.stringify(this.numberValidateForm.birthDay)
  },
  methods: {
    // js方法实现通过出生日期获取周岁年龄
    // /**
    // * @param birthDay：指的是出生日期，格式为"1990-01-01"
    // */
    // new Vue {
    //     el:'#app',
    //     data:{birthDay:'' , ages:''}

    // }
    getAge() {
      var ages,
        date1 = this.numberValidateForm.birthDay,
        date1Arr = date1.split("-"),
        birthYear = date1Arr[0],
        birthMonth = date1Arr[1],
        birthDay = date1Arr[2],
        d = new Date(),
        nowYear = d.getFullYear(),
        nowMonth = d.getMonth() + 1,
        nowDay = d.getDate();
      if (nowYear == birthYear) {
        ages = 0; //同年 则为0周岁
      } else {
        var ageDiff = nowYear - birthYear; //年之差
        if (ageDiff > 0) {
          if (nowMonth == birthMonth) {
            var dayDiff = nowDay - birthDay; //日之差
            if (dayDiff < 0) {
              ages = ageDiff - 1;
            } else {
              ages = ageDiff;
            }
          } else {
            var monthDiff = nowMonth - birthMonth; //月之差
            if (monthDiff < 0) {
              ages = ageDiff - 1;
            } else {
              ages = ageDiff;
            }
          }
        } else {
          ages = -1; //返回-1 表示出生日期输入错误 晚于今天
          // return this.$message.error("年龄输入有误！");
          if (ages == -1) {
            return this.$message.error("年龄输入有误！");
          }
        }
      }
      // console.log(ages);
      // document.write(ages);
      this.numberValidateForm.ages = ages;
    },
  },
};
</script>

<style lang="less" scoped>
</style>