<template>
  <div>
    <h3>mianyili cp模板</h3>

    <!-- 表单区域 -->
    <el-form class="login_form" label-width="80px">
      <!-- 用户名 -->
      <!-- <el-input
        placeholder="例如：18"
        type="strBirthday"
        v-model="numberValidateForm.strBirthday"
        autocomplete="off"
        v-on:keydown.enter="getAge"
      ></el-input> -->
      <el-date-picker
        type="date"
        placeholder="选择日期"
        v-model="numberValidateForm.strBirthday"
        v-on:keydown.enter="getAge"
        style="width: 83%"
      ></el-date-picker>
      <el-input
        placeholder="例如：18"
        type="returnAge"
        v-model="numberValidateForm.returnAge"
        disabled
        autocomplete="off"
        >123</el-input
      >
      <p>生日： {{ numberValidateForm.strBirthday }}</p>
      <p>年龄： {{ numberValidateForm.returnAge }}</p>
      <!-- 按钮 -->
      <el-form-item class="btns"> </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      numberValidateForm: {
        strBirthday: "",
        returnAge: "",
      },
    };
  },
  methods: {
    // js方法实现通过出生日期获取周岁年龄
    // /**
    // * @param strBirthday：指的是出生日期，格式为"1990-01-01"
    // */
    // new Vue {
    //     el:'#app',
    //     data:{strBirthday:'' , returnAge:''}

    // }
    getAge(strBirthday) {
      console.log(strBirthday);
      var returnAge,
        strBirthdayArr = strBirthday.split("-"),
        birthYear = strBirthdayArr[0],
        birthMonth = strBirthdayArr[1],
        birthDay = strBirthdayArr[2],
        d = new Date(),
        nowYear = d.getFullYear(),
        nowMonth = d.getMonth() + 1,
        nowDay = d.getDate();
      if (nowYear == birthYear) {
        debugger;
        returnAge = 0; //同年 则为0周岁
      } else {
        var ageDiff = nowYear - birthYear; //年之差
        if (ageDiff > 0) {
          if (nowMonth == birthMonth) {
            var dayDiff = nowDay - birthDay; //日之差
            if (dayDiff < 0) {
              returnAge = ageDiff - 1;
            } else {
              returnAge = ageDiff;
            }
          } else {
            var monthDiff = nowMonth - birthMonth; //月之差
            if (monthDiff < 0) {
              returnAge = ageDiff - 1;
            } else {
              returnAge = ageDiff;
            }
          }
        } else {
          returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
        }
      }
      return returnAge; //返回周岁年龄
      console.log(returnAge);
      this.returnAge.push(this.returnAge);
    },
  },
};
</script>

<style lang="less" scoped>
</style>