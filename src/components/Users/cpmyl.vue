<template>
  <div class="container">
    <!-- 顶部导航 -->
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hellou' }">
          首页
        </el-breadcrumb-item>
        <el-breadcrumb-item>健康测评</el-breadcrumb-item>
        <el-breadcrumb-item>免疫力测试</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h2>本页面为免疫力测评页面，通过测试，你将得到一个得分（仅供参考）</h2>
    <el-tooltip placement="bottom-start">
      <div slot="content" style="font-size: 18px">
        免疫力低下的身体易于被感染或患癌症，免疫力超常也会产生对身体有害的结果，<br />
        如引发过敏反应、自身免疫疾病等。各种原因使免疫系统不能正常发挥保护作用，<br />
        在此情况下，极易招致细菌、病毒、真菌等感染。
        表现就是容易生病，因经常患病，加重了机体的消耗，<br />
        所以一般有体质虚弱、营养不良、精神萎靡、疲乏无力、食欲降低、睡眠障碍等表现。<br />
        生病、打针、吃药，便成了家常便饭，每次生病都要很长时间才能恢复，而且常常反复发作。
        长此以往会导致身体和智力发育不良，还易诱发重大疾病，<br />
        当免疫力低下时应多补充一些含锌、硒和蛋白质高的食物，<br />
        当人体免疫功能失调，或者免疫系统不健全时，下列问题就会反复发作：<br />
        感冒反复发作、扁桃体炎反复发作、哮喘反复发作、支气管炎反复发作、<br />
        肺炎反复发作、腹泻反复发作，所以千万不可小视。
      </div>
      <el-button plain style="border: 0px; font-size: 18px">
        免疫力低下
      </el-button>
    </el-tooltip>
    <p>[本次测评预计用时：6分钟]</p>
    <!-- 折叠列表 -->
    <div class="accordion" id="accordionExample">
      <el-form ref="form" :model="form" label-width="10px">
        <div class="card">
          <div class="card-header" id="heading01">
            <h2 class="mb-0">
              <button
                class="btn btn-block text-left collapsed"
                type="text"
                data-toggle="collapse"
                data-target="#collapse01"
                aria-expanded="false"
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
                class="btn btn-block text-left collapsed"
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
                class="btn btn-block text-left collapsed"
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
                class="btn btn-block text-left collapsed"
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
                  <el-checkbox label="3.5" name="type4"
                    >不爱喝水、如矿泉水或者凉白开</el-checkbox
                  >
                  <el-checkbox label="0.5" name="type4"
                    >很少喝酸奶或者主动补充益生菌</el-checkbox
                  >
                  <el-checkbox label="2.5" name="type4"
                    >很少吃肉蛋类、豆制品或奶类</el-checkbox
                  >
                  <el-checkbox label="2.8" name="type4"
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
                class="btn btn-block text-left collapsed"
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
                    <el-radio label="0.1"
                      >有低强度的运动习惯，如跑步、快走等</el-radio
                    >
                  </p>
                  <p>
                    <el-radio label="-1">偶尔运动，且运动强度适中</el-radio>
                  </p>
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
                class="btn btn-block text-left collapsed"
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
                  <el-checkbox label="2.1" name="type6"
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
              <h6>以上均不符合（不选）</h6>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading07">
            <h2 class="mb-0">
              <button
                class="btn btn-block text-left collapsed"
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
                class="btn btn-block text-left collapsed"
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
                class="btn btn-block text-left collapsed"
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
                class="btn btn-block text-left collapsed"
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
                class="btn btn-block text-left collapsed"
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
                  <p><el-radio label="0.1">完全不符合</el-radio></p>
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
                class="btn btn-block text-left collapsed"
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
                class="btn btn-block text-left collapsed"
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
          <p>
            <el-button class="btnsuggest" type="text" @click="addIm()">
              提交并查看分析报告
            </el-button>
          </p>
        </el-form-item>
      </el-form>
    </div>
    <div class="resultSuggest">
      <!-- <el-table style="width: 100%" :data="tableData" >
        <el-table-column prop="date"  width="180" label="日期">
        </el-table-column>
        <el-table-column prop="name"  width="180" label="姓名">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table> -->
      <!-- <h2>
        {{ form.score > 1 ? "免疫力测试分析报告" : "" }}
      </h2> -->
      <h2>
        {{
          result.n1 ||
          result.n2 ||
          result.n3 ||
          result.n4 ||
          result.n5 ||
          result.n6 ||
          result.n7 ||
          result.n8 ||
          result.n9 ||
          result.n10 ||
          result.n11 ||
          result.n12 ||
          result.n13
            ? "影响因素:"
            : ""
        }}
      </h2>
      <p>
        {{ result.n1 }} {{ result.n2 }} {{ result.n3 }} {{ result.n4 }}
        {{ result.n5 }} {{ result.n6 }} {{ result.n7 }} {{ result.n8 }}
        {{ result.n9 }} {{ result.n10 }} {{ result.n11 }} {{ result.n12 }}
        {{ result.n13 }}
      </p>
      <h2>
        {{
          suggest.ss1 ||
          suggest.ss2 ||
          suggest.ss3 ||
          suggest.ss4 ||
          suggest.ss5 ||
          suggest.ss6 ||
          suggest.ss7 ||
          suggest.ss8 ||
          suggest.ss9 ||
          suggest.ss10 ||
          suggest.ss11 ||
          suggest.ss12 ||
          suggest.ss13
            ? "建议:"
            : ""
        }}
      </h2>
      <p>
        {{ suggest.ss1 }} {{ suggest.ss2 }} {{ suggest.ss3 }} {{ suggest.ss4 }}
        {{ suggest.ss5 }} {{ suggest.ss6 }} {{ suggest.ss7 }} {{ suggest.ss8 }}
        {{ suggest.ss9 }} {{ suggest.ss10 }} {{ suggest.ss11 }}
        {{ suggest.ss12 }} {{ suggest.ss13 }}
      </p>
    </div>
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
      result: {
        n1: "",
        n2: "",
        n3: "",
        n4: "",
        n5: "",
        n6: "",
        n7: "",
        n8: "",
        n9: "",
        n10: "",
        n11: "",
        n12: "",
        n13: "",
      },
      suggest: {
        ss1: "",
        ss2: "",
        ss3: "",
        ss4: "",
        ss5: "",
        ss6: "",
        ss7: "",
        ss8: "",
        ss9: "",
        ss10: "",
        ss11: "",
        ss12: "",
        ss13: "",
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
      var r5 = JSON.parse(this.form.resource5),
        r7 = JSON.parse(this.form.resource7),
        r8 = JSON.parse(this.form.resource8),
        r9 = JSON.parse(this.form.resource9),
        r10 = JSON.parse(this.form.resource10),
        r11 = JSON.parse(this.form.resource11),
        r12 = JSON.parse(this.form.resource12);
      // 多个数组合并为一个数组
      var array = [...t1, ...t2, ...t3, ...t4, ...t6, ...t13];
      let he = array.reduce((total, val) => total + parseFloat(val), 0);
      let he2 = r5 + r7 + r8 + r9 + r10 + r11 + r12;
      // 表单中添加得分
      this.form.score = (98.5 - he - he2).toFixed(1);
      // 向后端发送  表单数据
      this.$refs.form.validate(async (valid) => {
        // 验证
        if (!valid) return;
        // 提交结果
        this.form.name = window.sessionStorage.getItem("user");
        const { data: res } = await this.$http.post("addIm", this.form);
        if (res != "success") {
          // console.log(that.form);
          console.log(res);
          return this.$message.error("添加失败！！");
        }
        // this.$message.success("添加成功！！");
        console.log("添加成功！！");
      });
      // 利用数组求和的方法进行运算结果值，以便于分析数据
      var r1 = [...t1].reduce((total, val) => total + parseFloat(val), 0),
        r2 = [...t2].reduce((total, val) => total + parseFloat(val), 0),
        r3 = [...t3].reduce((total, val) => total + parseFloat(val), 0),
        r4 = [...t4].reduce((total, val) => total + parseFloat(val), 0),
        r6 = [...t6].reduce((total, val) => total + parseFloat(val), 0),
        r13 = [...t13].reduce((total, val) => total + parseFloat(val), 0);
      var n1 = "",
        n2 = "",
        n3 = "",
        n4 = "",
        n5 = "",
        n6 = "",
        n7 = "",
        n8 = "",
        n9 = "",
        n10 = "",
        n11 = "",
        n12 = "",
        n13 = "",
        ss1 = "",
        ss2 = "",
        ss3 = "",
        ss4 = "",
        ss5 = "",
        ss6 = "",
        ss7 = "",
        ss8 = "",
        ss9 = "",
        ss10 = "",
        ss11 = "",
        ss12 = "",
        ss13 = "";
      // 1
      if (r1 === 1.3) {
        n1 = "睡眠不规律";
        ss1 = "建议您改掉熬夜的坏习惯；";
      } else if (r1 === 2.1 || r1 === 2.2) {
        n1 = "出差";
        ss1 = "减少出差；";
      } else if (r1 === 3.4 || r1 === 3.5) {
        n1 = "睡眠不足且经常出差；";
        ss1 = "减少出差";
      } else if (r1 > 4) {
        n1 = "经常出差";
        ss1 = "减少不必要的出差；";
      } //2
      if (r2 === 1.8) {
        n2 = "经常喝酒";
      } else if (r2 === 2.6) {
        n2 = "吸烟或者二手烟影响";
        ss2 = "减少吸烟或二手烟的影响；";
      } else if (r2 === 1.2 || r2 === 2.2 || r2 === 3.4) {
        n2 = "饮食不规律";
        ss2 = "合理规划饮食；";
      } else if (r2 === 4.4) {
        n2 = "烟酒因素";
        ss2 = "减少烟酒对身体的伤害；";
      } else if (r2 === 6.6 || r2 === 7.8) {
        n2 = "烟酒以及饮食习惯";
        ss2 = "规律饮食，减少吸烟喝酒；";
      } else if (r2 === 6) {
        n2 = "吸烟以及极端减肥";
        ss2 = "规律饮食，改掉坏的生活习惯；";
      } else if (r2 === 5.6) {
        n2 = "常常吸烟喝酒，饥饱择食";
        ss2 = "规律饮食，改掉坏的生活习惯；";
      } else if (r2 === 5.2) {
        n2 = "喝酒以及不规律饮食";
        ss2 = "健康饮食，改掉坏的生活习惯；";
      } //3
      if (r3 === 1.1 || r3 === 0.6 || r3 === 0.9 || r3 === 0.5) {
        n3 = "常常食用加工食品";
        ss3 = "注意健康饮食；";
      } else if (r3 > 1.1 && r3 <= 2) {
        n3 = "经常食用加工食品";
        ss3 = "健康饮食，改掉坏的生活习惯；";
      } else if (r3 > 2) {
        n3 = "总是食用高热量加工食品";
        ss3 = "减少高热量食品的食用；";
      }
      //4
      if (r4 === 0.6) {
        n4 = "不吃坚果";
        ss4 = "适当吃一点坚果或深海鱼橄榄油；";
      } else if (r4 === 3.5) {
        n4 = "很少喝水";
        ss4 = "多喝水，有益于身体健康；";
      } else if (r4 === 0.5) {
        n4 = "不喜欢喝酸奶等益生菌类";
        ss4 = "适当补充益生菌，改善身体菌群落；";
      } else if (r4 === 2.5) {
        n4 = "不喜欢吃肉、蛋白质类";
        ss4 = "多多摄入蛋白质；";
      } else if (r4 === 2.8) {
        n4 = "很少吃新鲜水果蔬菜";
        ss4 = "多吃新鲜蔬菜和水果；";
      } else if (r4 === 5.3) {
        n4 = "很少吃肉和新鲜水果蔬菜";
        ss4 = "改掉挑食坏习惯；";
      } else if (r4 === 1.1) {
        n4 = "很少吃坚果和酸奶";
        ss4 = "适当补充硬核食物和益生菌；";
      } else if (r4 >= 3.6) {
        n4 = "不健康的饮食习惯";
        ss4 = "改掉挑食坏习惯；";
      }
      //5
      if (r5 === 1.6) {
        n5 = "不运动";
        ss5 = "加强体育锻炼；";
      } else if (r5 === 0.1) {
        n5 = "运动不多";
        ss5 = "适当加强运动量；";
      }
      //6
      if (r6 >= 1.6) {
        n6 = "卫生习惯较差";
        ss6 = "注意培养讲究卫生，勤洗手；";
      } else if (r6 === 0.6 || r6 === 1.5 || r6 === 1) {
        n6 = "卫生习惯一般";
        ss6 = "勤洗手；";
      }
      //7
      if (r7 > 1.5) {
        n7 = "抗生素类药物";
        ss7 = "服用抗生素请咨询医师；";
      }
      //8
      if (r8 > 1.1) {
        n8 = "心情不好";
        ss8 = "找点能够令你开心的事做，心情愉悦有助于提高免疫力；";
      }
      //9
      if (r9 > 0.7) {
        n9 = "劳累";
        ss9 = "劳累会导致免疫力下降，注意多休息；";
      }
      //10
      if (r10 > 0.6) {
        n10 = "压力过大";
        ss10 = "压力太大会导致免疫力下降，适当放松；";
      }
      //11
      if (r11 > 1) {
        n11 = "季节性感冒";
        ss11 = "季节性感冒可能是过敏性鼻炎，还请咨询医师；";
      }
      //12
      if (r12 > 1) {
        n12 = "弱体质";
        ss12 = "加强体育锻炼；";
      }
      //13
      if (r13 === 3.3) {
        n13 = "遗传";
        ss13 = "加强运动量。；";
      } else if (r13 === 5.2) {
        n13 = "疾病导致的";
        ss13 = "适度进行康复训练。";
      } else if (r13 === 6) {
        n13 = "营养不良";
        ss13 = "改善伙食，补充营养。";
      } else {
        ss13 =
          "健康规律的生活习惯。合理膳食营养均衡。积极参加体育训练。提高身体体质。";
      }
      this.result.n1 = n1;
      this.result.n2 = n2;
      this.result.n3 = n3;
      this.result.n4 = n4;
      this.result.n5 = n5;
      this.result.n6 = n6;
      this.result.n7 = n7;
      this.result.n8 = n8;
      this.result.n9 = n9;
      this.result.n10 = n10;
      this.result.n11 = n11;
      this.result.n12 = n12;
      this.result.n13 = n13;
      this.suggest.ss1 = ss1;
      this.suggest.ss2 = ss2;
      this.suggest.ss3 = ss3;
      this.suggest.ss4 = ss4;
      this.suggest.ss5 = ss5;
      this.suggest.ss6 = ss6;
      this.suggest.ss7 = ss7;
      this.suggest.ss8 = ss8;
      this.suggest.ss9 = ss9;
      this.suggest.ss10 = ss10;
      this.suggest.ss11 = ss11;
      this.suggest.ss12 = ss12;
      this.suggest.ss13 = ss13;
      // 分析结果
      if (this.form.score >= 84) {
        this.$alert(
          "<strong>您的免疫力测试（结果仅供参考）得分为：<br /></strong>" +
            `<p style="font-size:40px;color:#67C23A">${this.form.score}</p>` +
            "<p> <br /><i>感谢使用,请继续保持。</i></p>",
          "您的免疫力很棒：",
          {
            dangerouslyUseHTMLString: true,
          }
        );
      } else if (this.form.score < 84 && this.form.score > 70) {
        this.$alert(
          "<strong>您的免疫力测试（结果仅供参考）得分为：<br /></strong>" +
            `<p style="font-size:40px;color:#E6A23C">${this.form.score}</p>` +
            "<p> <br /><i>感谢使用请注意改善。</i></p>",
          "您的免疫力一般：",
          {
            dangerouslyUseHTMLString: true,
          }
        );
      } else {
        this.$alert(
          "<strong>您的免疫力测试（结果仅供参考）得分为：<br /></strong>" +
            `<p style="font-size:40px;color:#F56C6C">${this.form.score}</p>` +
            "<p> <br /><i>感谢使用请注意调整。</i></p>",
          "您的免疫力较差：",
          {
            dangerouslyUseHTMLString: true,
          }
        );
      }
    },
    // 结果分析
    // suggestIms() {
    //   if (this.form.score > 1) {
    //     // 分析结果
    //   } else {
    //     this.$notify({
    //       title: "错误提示",
    //       message: "请先提交再进行结果分析！！！",
    //       type: "warning",
    //       center: true,
    //       offset: 200,
    //     });
    //   }
    // },
  },
};
</script>

<style lang="less" scoped>
/* 面包屑 */
.el-breadcrumb {
  font-size: 18px;
  margin-bottom: 15px;
}
.accordion {
  margin-top: 30px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
  .card {
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 5px;
    .card-header h2 {
      .btn {
        font-size: 18px;
        border: 0px;
        padding: 5px;
        color: #000;
      }
      .btn:hover {
        color: palevioletred;
        text-decoration: none;
      }
    }
    p {
      font-size: 16px;
      text-align: left;
      padding: 0 15px;
      display: inline-block;
    }
  }
  .btnsuggest {
    font-size: 26px;
  }
  .btnsuggest:hover {
    color: springgreen;
  }
}
.resultSuggest {
  margin: 15px;
  h2 {
    font-size: 22px;
    color: #303133;
  }
  p {
    margin-top: -10px;
    font-size: 16px;
    clear: #909399;
    text-align: left;
    margin-left: 15px;
  }
}
</style>