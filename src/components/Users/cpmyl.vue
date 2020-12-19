<template>
  <div>
    <h3>测评免疫力模板</h3>
    <!-- 折叠列表 -->
    <div class="accordion" id="accordionExample">
      <el-form ref="form" :model="form" label-width="10px">
        <div class="card">
          <div class="card-header" id="heading01">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse01"
                aria-expanded="true"
                aria-controls="collapse01"
              >
                问题#1.以下符合我日常情况的有（可多选）？
              </button>
            </h2>
          </div>
          <div
            id="collapse01"
            class="collapse"
            aria-labelledby="heading01"
            data-parent="#accordionExample"
          >
            <!-- 每一项占分3.57分 -->
            <div class="card-body">
              <el-form-item label="">
                <el-checkbox-group v-model="form.type1">
                  <el-checkbox label="1.3" name="type1">经常熬夜</el-checkbox>
                  <el-checkbox label="2.1" name="type1"
                    >经常跨时区差旅</el-checkbox
                  >
                  <el-checkbox label="2.2" name="type1">经常倒时差</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <p>以上均不符合（不选）</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading02">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse02"
                aria-expanded="false"
                aria-controls="collapse02"
              >
                问题#2.以下符合我情况的有（可多选）？
              </button>
            </h2>
          </div>
          <div
            id="collapse02"
            class="collapse"
            aria-labelledby="heading02"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-checkbox-group v-model="form.type2">
                  <el-checkbox label="1.8" name="type2">经常饮酒</el-checkbox>
                  <el-checkbox label="2.6" name="type2"
                    >吸烟或者受二手烟困扰</el-checkbox
                  >
                  <el-checkbox label="2.2" name="type2"
                    >近半年进行极端减肥，如三餐苹果、过午不食</el-checkbox
                  >
                  <el-checkbox label="1.2" name="type2"
                    >饮食不规律，一顿很少，一顿吃撑</el-checkbox
                  >
                </el-checkbox-group>
              </el-form-item>
              <p>以上均不符合（不选）</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading03">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse03"
                aria-expanded="false"
                aria-controls="collapse03"
              >
                问题#3.以下符合我饮食情况的有（可多选）？
              </button>
            </h2>
          </div>
          <div
            id="collapse03"
            class="collapse"
            aria-labelledby="heading03"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-checkbox-group v-model="form.type3">
                  <el-checkbox label="1.1" name="type3"
                    >常吃薯条、炸鸡、烤鱼、香锅等高油食物</el-checkbox
                  >
                  <el-checkbox label="0.5" name="type3"
                    >常吃蛋糕、奶茶、果汁饮料等甜食</el-checkbox
                  >
                  <el-checkbox label="0.6" name="type3"
                    >常吃腊肉、培根等肉类加工食品</el-checkbox
                  >
                  <el-checkbox label="0.9" name="type3"
                    >常吃泡面、汉堡等快餐</el-checkbox
                  >
                </el-checkbox-group>
              </el-form-item>
              <p>以上均不符合（不选）</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading04">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse04"
                aria-expanded="false"
                aria-controls="collapse04"
              >
                问题#4.以下符合我饮食喜好的有（可多选）
              </button>
            </h2>
          </div>
          <div
            id="collapse04"
            class="collapse"
            aria-labelledby="heading04"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-checkbox-group v-model="form.type4">
                  <el-checkbox label="0.6" name="type4"
                    >几乎不吃坚果、橄榄油或者深海鱼</el-checkbox
                  >
                  <el-checkbox label="1.5" name="type4"
                    >不爱喝水、如矿泉水或者凉白开</el-checkbox
                  >
                  <el-checkbox label="0.5" name="type4"
                    >很少喝酸奶或者主动补充益生菌</el-checkbox
                  >
                  <el-checkbox label="2.5" name="type4"
                    >很少吃肉蛋类、豆制品或奶类</el-checkbox
                  >
                  <el-checkbox label="2.6" name="type4"
                    >很少吃新鲜水果蔬菜</el-checkbox
                  >
                </el-checkbox-group>
              </el-form-item>
              <p>以上均不符合（不选）</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading05">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse05"
                aria-expanded="false"
                aria-controls="collapse05"
              >
                问题#5.我的运动情况更接近于？
              </button>
            </h2>
          </div>
          <div
            id="collapse05"
            class="collapse"
            aria-labelledby="heading05"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-radio-group v-model="form.resource5">
                  <p><el-radio label="1.6">几乎不运动</el-radio></p>
                  <p>
                    <el-radio label="0"
                      >有中强度的运动习惯，如跑步、快走等</el-radio
                    >
                  </p>
                  <p><el-radio label="-1">偶尔运动，且运动强度大</el-radio></p>
                  <p>
                    <el-radio label="-1.5">运动规律，且运动强度大</el-radio>
                  </p>
                </el-radio-group>
              </el-form-item>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading06">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse06"
                aria-expanded="false"
                aria-controls="collapse06"
              >
                问题#6.一下符合我卫生习惯的有（可多选）？
              </button>
            </h2>
          </div>
          <div
            id="collapse06"
            class="collapse"
            aria-labelledby="heading06"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-checkbox-group v-model="form.type6">
                  <el-checkbox label="2" name="type6"
                    >打喷嚏时习惯用手捂且不及时清洗</el-checkbox
                  >
                  <el-checkbox label="1" name="type6"
                    >饭钱、便后不是每次都洗手</el-checkbox
                  >
                  <el-checkbox label="1.5" name="type6"
                    >经常用手接触眼睛、鼻子或者嘴巴</el-checkbox
                  >
                  <el-checkbox label="0.6" name="type6"
                    >洗手后经常直接用衣服擦干</el-checkbox
                  >
                </el-checkbox-group>
              </el-form-item>
              <p>以上均不符合（不选）</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading07">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse07"
                aria-expanded="false"
                aria-controls="collapse07"
              >
                问题#7.我经常不在医生指导下服用抗生素
              </button>
            </h2>
          </div>
          <div
            id="collapse07"
            class="collapse"
            aria-labelledby="heading07"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-radio-group v-model="form.resource7">
                  <p><el-radio label="0.1">完全不符合</el-radio></p>
                  <p><el-radio label="1">不太符合</el-radio></p>
                  <p><el-radio label="2">基本符合</el-radio></p>
                  <p><el-radio label="3">完全符合</el-radio></p>
                </el-radio-group>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading08">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse08"
                aria-expanded="false"
                aria-controls="collapse08"
              >
                问题#8.我常常感到情绪低落，对周围事物毫无兴趣
              </button>
            </h2>
          </div>
          <div
            id="collapse08"
            class="collapse"
            aria-labelledby="heading08"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-radio-group v-model="form.resource8">
                  <p><el-radio label="0.2">完全不符合</el-radio></p>
                  <p><el-radio label="1.1">不太符合</el-radio></p>
                  <p><el-radio label="1.2">基本符合</el-radio></p>
                  <p><el-radio label="1.5">完全符合</el-radio></p>
                </el-radio-group>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading09">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse09"
                aria-expanded="false"
                aria-controls="collapse09"
              >
                问题#9.我常常感到疲劳
              </button>
            </h2>
          </div>
          <div
            id="collapse09"
            class="collapse"
            aria-labelledby="heading09"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-radio-group v-model="form.resource9">
                  <p><el-radio label="0.2">完全不符合</el-radio></p>
                  <p><el-radio label="0.6">不太符合</el-radio></p>
                  <p><el-radio label="0.9">基本符合</el-radio></p>
                  <p><el-radio label="1.3">完全符合</el-radio></p>
                </el-radio-group>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading10">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse10"
                aria-expanded="false"
                aria-controls="collapse10"
              >
                问题#10.压力大时，容易上火或嘴角起泡
              </button>
            </h2>
          </div>
          <div
            id="collapse10"
            class="collapse"
            aria-labelledby="heading10"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-radio-group v-model="form.resource10">
                  <p><el-radio label="0.1">完全不符合</el-radio></p>
                  <p><el-radio label="0.5">不太符合</el-radio></p>
                  <p><el-radio label="0.8">基本符合</el-radio></p>
                  <p><el-radio label="1.2">完全符合</el-radio></p>
                </el-radio-group>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading11">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse11"
                aria-expanded="false"
                aria-controls="collapse11"
              >
                问题#11.换季容易感冒，且次数逐年增多
              </button>
            </h2>
          </div>
          <div
            id="collapse11"
            class="collapse"
            aria-labelledby="heading11"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-radio-group v-model="form.resource11">
                  <p><el-radio label="0">完全不符合</el-radio></p>
                  <p><el-radio label="0.6">不太符合</el-radio></p>
                  <p><el-radio label="2.3">基本符合</el-radio></p>
                  <p><el-radio label="3.2">完全符合</el-radio></p>
                </el-radio-group>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading12">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse12"
                aria-expanded="false"
                aria-controls="collapse12"
              >
                问题#12.小伤口愈合，需要两周以上
              </button>
            </h2>
          </div>
          <div
            id="collapse12"
            class="collapse"
            aria-labelledby="heading12"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-radio-group v-model="form.resource12">
                  <p><el-radio label="0.2">完全不符合</el-radio></p>
                  <p><el-radio label="1">不太符合</el-radio></p>
                  <p><el-radio label="2">基本符合</el-radio></p>
                  <p><el-radio label="3.5">完全符合</el-radio></p>
                </el-radio-group>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading13">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse13"
                aria-expanded="false"
                aria-controls="collapse13"
              >
                问题#13.我当前存在以下情况（可多选）
              </button>
            </h2>
          </div>
          <div
            id="collapse13"
            class="collapse"
            aria-labelledby="heading13"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <el-form-item label="">
                <el-checkbox-group v-model="form.type13">
                  <el-checkbox label="6" name="type13"
                    >已确诊营养不良</el-checkbox
                  >
                  <el-checkbox label="5.2" name="type13"
                    >处于重大慢性消耗性疾病，如肿瘤或者其术后</el-checkbox
                  >
                  <el-checkbox label="3.3" name="type13"
                    >肠癌、胃癌、乳腺癌等家族病史</el-checkbox
                  >
                </el-checkbox-group>
              </el-form-item>
              <p>以上均不符合（不选）</p>
            </div>
          </div>
        </div>

        <el-form-item>
          <el-button type="primary" @click="addIm()">立即提交</el-button>
          <el-button type="primary" @click="addIms()">立即计算</el-button>
        </el-form-item>
      </el-form>
    </div>
    <p>
      {{ form }}
    </p>
    <!-- <p>{{timer}}</p>
    <p>{{currentTime}}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        type1: [],
        type2: [],
        type3: [],
        type4: [],
        type6: [],
        type13: [],
        resource5: "0",
        resource7: "0",
        resource8: "0",
        resource9: "0",
        resource10: "0",
        resource11: "0",
        resource12: "0",
        timesss: "",
        score: "",
      },
    };
  },
  created() {},
  methods: {
    // 添加免疫力评测
    addIm() {
      //获取当前时间
      const nowDate = new Date();
      const date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate(),
        hour: nowDate.getHours(),
        minute: nowDate.getMinutes(),
        second: nowDate.getSeconds(),
      };
      const newmonth = date.month > 9 ? date.month : "0" + date.month;
      const day = date.date > 9 ? date.date : "0" + date.date;
      const h = date.hour > 9 ? date.hour : "0" + date.hour;
      const m = date.minute > 9 ? date.minute : "0" + date.minute;
      const s = date.second > 9 ? date.second : "0" + date.second;
      // 在表单添加时间
      this.form.timesss =
        date.year + "-" + newmonth + "-" + day + " " + h + ":" + m + ":" + s;
      // 得分功能
      // 转为字符串再解析
      let score,
      t1 = JSON.parse(JSON.stringify(this.form.type1)),
      t2 = JSON.parse(JSON.stringify(this.form.type2)),
      t3 = JSON.parse(JSON.stringify(this.form.type3)),
      t4 = JSON.parse(JSON.stringify(this.form.type4)),
      t6 = JSON.parse(JSON.stringify(this.form.type6)),
      t13 = JSON.parse(JSON.stringify(this.form.type13));
      // 解析
      let r5 = JSON.parse(this.form.resource5),
        r7 = JSON.parse(this.form.resource7),
        r8 = JSON.parse(this.form.resource8),
        r9 = JSON.parse(this.form.resource9),
        r10 = JSON.parse(this.form.resource10),
        r11 = JSON.parse(this.form.resource11),
        r12 = JSON.parse(this.form.resource12);
      // 多个数组合并为一个数组
      var array = [...t1, ...t2, ...t3, ...t4, ...t6, ...t13];
      console.log(array);
      let he = array.reduce((total, val) => total + parseFloat(val), 0);
      let he2 = r5 + r7 + r8 + r9 + r10 + r11 + r12;
      // 表单中添加得分
      this.form.score = (98.5 - he - he2).toFixed(3);
      // 向后端发送  表单数据
      this.$refs.form.validate(async (valid) => {
        // debugger
        console.log(this.form);
        console.log(valid);
        // 验证
        if (!valid) return;
        // 提交结果
        this.form.name = window.sessionStorage.getItem("user");
        // console.log(res.user);
        // that.form = JSON.stringify(that.form);JSON.parse()
        // const { data: res } = await this.$http.post("addIm", JSON.stringify(that.form));
        const { data: res } = await this.$http.post("addIm", this.form);
        if (res != "success") {
          // console.log(that.form);
          console.log(res);
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