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
            <div class="card-body">
              <el-form-item label="">
                <el-checkbox-group v-model="form.type1">
                  <el-checkbox label="经常熬夜" name="type1">1</el-checkbox>
                  <el-checkbox label="经常跨时区差旅" name="type1"
                    >2</el-checkbox
                  >
                  <el-checkbox label="经常倒时差" name="type1">3</el-checkbox>
                  <el-checkbox label="以上均不符合" name="type1">4</el-checkbox>
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
                  <el-checkbox label="经常饮酒" name="type1"></el-checkbox>
                  <el-checkbox
                    label="吸烟或者受二手烟困扰"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="近半年进行极端减肥，如三餐苹果、过午不食"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="饮食不规律，一顿很少，一顿吃撑"
                    name="type1"
                  ></el-checkbox>
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
                  <el-checkbox
                    label="常吃薯条、炸鸡、烤鱼、香锅等高油食物"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="常吃蛋糕、奶茶、果汁饮料等甜食"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="常吃腊肉、培根等肉类加工食品"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="常吃泡面、汉堡等快餐"
                    name="type1"
                  ></el-checkbox>
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
                  <el-checkbox
                    label="几乎不吃坚果、橄榄油或者深海鱼"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="不爱喝水、如矿泉水或者凉白开"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="很少喝酸奶或者主动补充益生菌"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="很少吃肉蛋类、豆制品或奶类"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="很少吃新鲜水果蔬菜"
                    name="type1"
                  ></el-checkbox>
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
                  <p><el-radio label="几乎不运动"></el-radio></p>
                  <p>
                    <el-radio
                      label="有中强度的运动习惯，如跑步、快走等"
                    ></el-radio>
                  </p>
                  <p><el-radio label="偶尔运动，且运动强度大"></el-radio></p>
                  <p><el-radio label="运动规律，且运动强度大"></el-radio></p>
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
                  <el-checkbox
                    label="打喷嚏时习惯用手捂且不及时清洗"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="饭钱、便后不是每次都洗手"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="经常用手接触眼睛、鼻子或者嘴巴"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="洗手后经常直接用衣服擦干"
                    name="type1"
                  ></el-checkbox>
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
                  <p><el-radio label="完全不符合"></el-radio></p>
                  <p><el-radio label="不太符合"></el-radio></p>
                  <p><el-radio label="基本符合"></el-radio></p>
                  <p><el-radio label="完全符合"></el-radio></p>
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
                  <p><el-radio label="完全不符合"></el-radio></p>
                  <p><el-radio label="不太符合"></el-radio></p>
                  <p><el-radio label="基本符合"></el-radio></p>
                  <p><el-radio label="完全符合"></el-radio></p>
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
                  <p><el-radio label="完全不符合"></el-radio></p>
                  <p><el-radio label="不太符合"></el-radio></p>
                  <p><el-radio label="基本符合"></el-radio></p>
                  <p><el-radio label="完全符合"></el-radio></p>
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
                  <p><el-radio label="完全不符合"></el-radio></p>
                  <p><el-radio label="不太符合"></el-radio></p>
                  <p><el-radio label="基本符合"></el-radio></p>
                  <p><el-radio label="完全符合"></el-radio></p>
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
                  <p><el-radio label="完全不符合"></el-radio></p>
                  <p><el-radio label="不太符合"></el-radio></p>
                  <p><el-radio label="基本符合"></el-radio></p>
                  <p><el-radio label="完全符合"></el-radio></p>
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
                  <p><el-radio label="完全不符合"></el-radio></p>
                  <p><el-radio label="不太符合"></el-radio></p>
                  <p><el-radio label="基本符合"></el-radio></p>
                  <p><el-radio label="完全符合"></el-radio></p>
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
                  <el-checkbox
                    label="已确诊营养不良"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="处于重大慢性消耗性疾病，如肿瘤或者其术后"
                    name="type1"
                  ></el-checkbox>
                  <el-checkbox
                    label="肠癌、胃癌、乳腺癌等家族病史"
                    name="type1"
                  ></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <p></p>
              <p></p>
              <p></p>
              <p>以上均不符合（不选）</p>
            </div>
          </div>
        </div>

        <el-form-item>
          <el-button type="primary" @click="addIm()">立即提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type1: [],
        type2: [],
        type3: [],
        type4: [],
        type6: [],
        type13: [],
        resource5: "",
        resource7: "",
        resource8: "",
        resource9: "",
        resource10: "",
        resource11: "",
        resource12: "",
      },
    };
  },
  methods: {
    // 添加免疫力评测
    addIm() {
      this.$refs.form.validate(async (valid) => {
        // debugger
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