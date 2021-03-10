<template>
  <div class="container">
    <!-- 顶部导航 -->
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/welcome' }">
          首页
        </el-breadcrumb-item>
        <el-breadcrumb-item>健康测评</el-breadcrumb-item>
        <el-breadcrumb-item>睡眠测试</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h2>本页面为睡眠测评页面，通过测试，你将得到一个得分（仅供参考）</h2>
    <el-tooltip placement="bottom-start">
      <div slot="content" style="font-size: 18px">
        “健康的体魄来自睡眠”。这是科学家们新近研究后提出的观点。<br />
        睡眠是生命的基本需要，是人类赖以生存的基本生活方式，是保持人体健康的基础，<br />
        如同空气、食物和水一样。人的身心疲劳主要是靠充分的睡眠来恢复。<br />
        如果长期睡眠不足而又想能使身体保持健康，能够进行正常的工作和生活这是不可思议的，<br />
        也是不可能的。所以规律而充足的睡眠是健康长寿的重要保证，<br />
        我们应该认识正常的睡眠规律，并遵循这种规律，才能保证良好的睡眠。
      </div>
      <el-button plain style="border: 0px; font-size: 18px">
        睡眠规律是什么？
      </el-button>
    </el-tooltip>
    <p>[本次测评预计用时：6分钟]</p>
    <el-form class="box1">
      <div class="card accordion" v-for="item in sleepForm" :key="item.id">
        <!-- bootstrap4.5下拉 -->
        <div>
          <h2 class="mb-0">
            <el-button
              class="btn btn-block text-left collapsed"
              type="text"
              data-toggle="collapse"
              :data-target="'#collapse' + item.id"
              :aria-expanded="false"
            >
              {{ item.question }}
            </el-button>
          </h2>
        </div>

        <div :id="'collapse' + item.id" class="collapse">
          <div class="card-body">
            <el-radio-group v-model="item.answer">
              <el-radio
                v-for="it in item.resource"
                :key="it.id"
                :label="it.value"
              >
                {{ it.name }}
              </el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
      <el-form-item>
        <p>
          <el-button class="btnAnswer" type="text" @click="getAnswers()">
            提交并查看分析报告
          </el-button>
        </p>
      </el-form-item>
    </el-form>
    <!-- 这里的 ref 验证只是为了欺骗后面
    this.$refs.formRef.validate() 提交时定的验证
    算是一个欺骗验证。 -->
    <el-form ref="formRef" :model="form" label-width="80px">
      <el-form-item class="btns"> </el-form-item>
    </el-form>
    <!-- *-**-*-- -->
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
          result.n13 ||
          result.n14 ||
          result.n15 ||
          result.n16 ||
          result.n17 ||
          result.n18 ||
          result.n19 ||
          result.n20 ||
          result.n21 ||
          result.n22 ||
          result.n23 ||
          result.n24 ||
          result.n25 ||
          result.n26 ||
          result.n27 ||
          result.n28 ||
          result.n29
            ? "影响因素:"
            : ""
        }}
      </h2>
      <p>
        {{ result.n1 }} {{ result.n2 }} {{ result.n3 }} {{ result.n4 }}
        {{ result.n5 }} {{ result.n6 }} {{ result.n7 }} {{ result.n8 }}
        {{ result.n9 }} {{ result.n10 }}{{ result.n11 }} {{ result.n12 }}
        {{ result.n13 }} {{ result.n14 }} {{ result.n15 }} {{ result.n16 }}
        {{ result.n17 }} {{ result.n18 }} {{ result.n19 }} {{ result.n20 }}
        {{ result.n21 }} {{ result.n22 }} {{ result.n23 }} {{ result.n24 }}
        {{ result.n25 }} {{ result.n26 }} {{ result.n27 }} {{ result.n28 }}
        {{ result.n29 }}
      </p>
      <h2>
        {{
          suggest.s1 ||
          suggest.s2 ||
          suggest.s3 ||
          suggest.s4 ||
          suggest.s5 ||
          suggest.s6 ||
          suggest.s7 ||
          suggest.s8 ||
          suggest.s9 ||
          suggest.s10 ||
          suggest.s11 ||
          suggest.s12 ||
          suggest.s13 ||
          suggest.s14 ||
          suggest.s15 ||
          suggest.s16 ||
          suggest.s17 ||
          suggest.s18 ||
          suggest.s19 ||
          suggest.s20 ||
          suggest.s21 ||
          suggest.s22 ||
          suggest.s23 ||
          suggest.s24 ||
          suggest.s25 ||
          suggest.s26 ||
          suggest.s27 ||
          suggest.s28 ||
          suggest.s29
            ? "建议:"
            : ""
        }}
      </h2>
      <p>
        {{ suggest.s1 }} {{ suggest.s2 }} {{ suggest.s3 }} {{ suggest.s4 }}
        {{ suggest.s5 }} {{ suggest.s6 }} {{ suggest.s7 }} {{ suggest.s8 }}
        {{ suggest.s9 }} {{ suggest.s10 }} {{ suggest.s11 }} {{ suggest.s12 }}
        {{ suggest.s13 }} {{ suggest.s14 }} {{ suggest.s15 }} {{ suggest.s16 }}
        {{ suggest.s17 }} {{ suggest.s18 }} {{ suggest.s19 }} {{ suggest.s20 }}
        {{ suggest.s21 }} {{ suggest.s22 }} {{ suggest.s23 }} {{ suggest.s24 }}
        {{ suggest.s25 }} {{ suggest.s26 }} {{ suggest.s27 }} {{ suggest.s28 }}
        {{ suggest.s29 }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sleepForm: [
        {
          id: 1,
          question: "1、我更接近于以下哪种情况？",
          resource: [
            { id: 1, name: "晚上起床，白天睡觉", value: "2" },
            { id: 2, name: "经常夜班、倒班", value: "3" },
            { id: 3, name: "经常国际航班，倒时差", value: "4" },
            { id: 4, name: "每天按时睡觉不熬夜", value: "0.1" },
          ],
          answer: "",
        },
        {
          id: 2,
          question: "2、我的入睡时间通常是？",
          resource: [
            { id: 1, name: "21~22点", value: "0.1" },
            { id: 2, name: "22~23点", value: "0.5" },
            { id: 3, name: "23~24点", value: "1.1" },
            { id: 4, name: "24点以后", value: "3" },
          ],
          answer: "",
        },
        {
          id: 3,
          question: "3、我的起床时间通常是？",
          resource: [
            { id: 1, name: "4~5点", value: "1" },
            { id: 2, name: "5~6点", value: "0.1" },
            { id: 3, name: "6~7点", value: "0.2" },
            { id: 4, name: "7~8点", value: "1.5" },
            { id: 5, name: "8点以后", value: "2" },
          ],
          answer: "",
        },
        {
          id: 4,
          question: "4、躺下后到入睡，我通常需要？",
          resource: [
            { id: 1, name: "0~15分钟", value: "0.1" },
            { id: 2, name: "15~30分钟", value: "0.5" },
            { id: 3, name: "30~45分钟", value: "1.5" },
            { id: 5, name: "45分钟以上", value: "3" },
          ],
          answer: "",
        },
        {
          id: 5,
          question: "5、我经常在梦中或者噩梦惊醒？",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 6,
          question: "6、入睡后，我经常多次行了且难以再次入睡",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 7,
          question: "7、我的起床时间比较固定",
          resource: [
            { id: 1, name: "完全不符合", value: "2" },
            { id: 2, name: "不太符合", value: "1.5" },
            { id: 3, name: "基本符合", value: "1" },
            { id: 4, name: "完全符合", value: "0.1" },
          ],
          answer: "",
        },
        {
          id: 8,
          question: "8、起床后，我仍然困倦、疲惫、甚至无法专注",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 9,
          question: "9、我需要医院处方药帮助入睡",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 10,
          question: "10、总的来说，我对我的睡眠情况",
          resource: [
            { id: 1, name: "满意", value: "0.1" },
            { id: 2, name: "基本满意", value: "0.2" },
            { id: 3, name: "不太满意", value: "0.3" },
            { id: 4, name: "非常不满意", value: "2" },
          ],
          answer: "",
        },
        {
          id: 11,
          question: "11、卧床后，我通常直接闭眼，酝酿睡意",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 12,
          question: "12、卧床半小时内，我会",
          resource: [
            { id: 1, name: "听音乐或者阅读诗歌散文", value: "0.1" },
            { id: 2, name: "工作或者学习", value: "0.2" },
            { id: 3, name: "思考生活", value: "0.4" },
            { id: 4, name: "怀疑人生", value: "0.5" },
            { id: 5, name: "辗转反侧", value: "0.6" },
            { id: 6, name: "其他", value: "0.3" },
          ],
          answer: "",
        },
        {
          id: 13,
          question: "13、我一般左侧卧或者俯卧入睡",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 14,
          question: "14、我经常摄入高脂肪食物或者甜食",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 15,
          question: "15、我经常睡前6小时内进食咖啡因的食物",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 16,
          question: "16、睡前连小时，我依旧觉得很撑",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 17,
          question: "17、我一周运动情况（30分钟以上，中强度）",
          resource: [
            { id: 1, name: "不运动", value: "2" },
            { id: 2, name: "小于2次", value: "1" },
            { id: 3, name: "2~4次", value: "0.3" },
            { id: 4, name: "大于4次", value: "0.2" },
          ],
          answer: "",
        },
        {
          id: 18,
          question: "18、我经常睡前两小时内运动",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 19,
          question: "19、运动后，肌肉酸痛明显影响睡眠",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 20,
          question: "20、就寝时间外，我会额外补充睡眠",
          resource: [
            { id: 1, name: "几乎不", value: "1" },
            { id: 2, name: "偶尔", value: "0.5" },
            { id: 3, name: "经常", value: "0.2" },
            { id: 4, name: "每天", value: "0.1" },
          ],
          answer: "",
        },
        {
          id: 21,
          question: "21、补充睡眠时长",
          resource: [
            { id: 1, name: "小于20分钟", value: "0.5" },
            { id: 2, name: "20~60分钟", value: "0.1" },
            { id: 3, name: "60~90分钟", value: "1" },
            { id: 4, name: "90分钟以上", value: "1.5" },
          ],
          answer: "",
        },
        {
          id: 22,
          question: "22、我通常在几点补充睡眠",
          resource: [
            { id: 1, name: "12-13点", value: "0.1" },
            { id: 2, name: "13~14点", value: "0.2" },
            { id: 3, name: "16-17点", value: "0.3" },
            { id: 4, name: "17-18点", value: "0.4" },
          ],
          answer: "",
        },
        {
          id: 23,
          question: "23、因为光线干扰，我难以入睡",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 24,
          question: "24、因为声音干扰，我难以入睡",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 25,
          question: "25、因为床、枕头被子等不适，我难以入睡",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 26,
          question: "26、近一个月，我身体状态不佳",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 27,
          question: "27、对未来，我感到压力很大、很焦虑",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 28,
          question: "28、入睡困难时，我感到烦躁，并硬逼自己入睡",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
        {
          id: 29,
          question: "29、出现睡眠障碍，第二天我会焦躁、紧张甚至影响生活工作",
          resource: [
            { id: 1, name: "完全不符合", value: "0.1" },
            { id: 2, name: "不太符合", value: "1" },
            { id: 3, name: "基本符合", value: "1.5" },
            { id: 4, name: "完全符合", value: "2" },
          ],
          answer: "",
        },
      ],
      form: {
        name: "",
        resource1: "",
        resource2: "",
        resource3: "",
        resource4: "",
        resource5: "",
        resource6: "",
        resource7: "",
        resource8: "",
        resource9: "",
        resource10: "",
        resource11: "",
        resource12: "",
        resource13: "",
        resource14: "",
        resource15: "",
        resource16: "",
        resource17: "",
        resource18: "",
        resource19: "",
        resource20: "",
        resource21: "",
        resource22: "",
        resource23: "",
        resource24: "",
        resource25: "",
        resource26: "",
        resource27: "",
        resource28: "",
        resource29: "",
        timesss: "",
        score: "",
        news: "",
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
        n14: "",
        n15: "",
        n16: "",
        n17: "",
        n18: "",
        n19: "",
        n20: "",
        n21: "",
        n22: "",
        n23: "",
        n24: "",
        n25: "",
        n26: "",
        n27: "",
        n28: "",
        n29: "",
      },
      suggest: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: "",
        s8: "",
        s9: "",
        s10: "",
        s11: "",
        s12: "",
        s13: "",
        s14: "",
        s15: "",
        s16: "",
        s17: "",
        s18: "",
        s19: "",
        s20: "",
        s21: "",
        s22: "",
        s23: "",
        s24: "",
        s25: "",
        s26: "",
        s27: "",
        s28: "",
        s29: "",
      },
    };
  },
  methods: {
    // 添加睡眠评测
    getAnswers() {
      let answers = this.sleepForm.map((item) => item.answer);
      let sum = answers.reduce((total, val) => total + parseFloat(val), 0);
      let [
        r1,
        r2,
        r3,
        r4,
        r5,
        r6,
        r7,
        r8,
        r9,
        r10,
        r11,
        r12,
        r13,
        r14,
        r15,
        r16,
        r17,
        r18,
        r19,
        r20,
        r21,
        r22,
        r23,
        r24,
        r25,
        r26,
        r27,
        r28,
        r29,
      ] = answers;
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
        n14 = "",
        n15 = "",
        n16 = "",
        n17 = "",
        n18 = "",
        n19 = "",
        n20 = "",
        n21 = "",
        n22 = "",
        n23 = "",
        n24 = "",
        n25 = "",
        n26 = "",
        n27 = "",
        n28 = "",
        n29 = "",
        s1 = "",
        s2 = "",
        s3 = "",
        s4 = "",
        s5 = "",
        s6 = "",
        s7 = "",
        s8 = "",
        s9 = "",
        s10 = "",
        s11 = "",
        s12 = "",
        s13 = "",
        s14 = "",
        s15 = "",
        s16 = "",
        s17 = "",
        s18 = "",
        s19 = "",
        s20 = "",
        s21 = "",
        s22 = "",
        s23 = "",
        s24 = "",
        s25 = "",
        s26 = "",
        s27 = "",
        s28 = "",
        s29 = "",
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
        ss13 = "",
        ss14 = "",
        ss15 = "",
        ss16 = "",
        ss17 = "",
        ss18 = "",
        ss19 = "",
        ss20 = "",
        ss21 = "",
        ss22 = "",
        ss23 = "",
        ss24 = "",
        ss25 = "",
        ss26 = "",
        ss27 = "",
        ss28 = "",
        ss29 = "";
      // 1
      if (r1 == 0.1) {
        n1 = "";
      } else if (r1 == 4) {
        n1 = "出差";
        s1 = "减少出差 ";
      } else if (r1 == 3) {
        n1 = "睡眠不足";
        s1 = "注意补充睡眠";
      } else if (r1 == 2) {
        n1 = "作息问题";
        s1 = "尽量白天工作 ";
      } else {
        ss1 = "第1题 ";
      }
      // 2
      if (r2 == 0.1 || r2 == 0.5) {
        n2 = "";
        s2 = "最佳的作息是21-22时，请继续保持 ";
      } else if (r2 == 1.1) {
        n2 = "晚睡";
        s2 = "建议在22:30前休息 ";
      } else if (r2 == 3) {
        n2 = "晚睡";
        s2 = "睡觉的时间太晚了 ";
      } else {
        ss2 = "第2题 ";
      }
      // 3
      if (r3 == 0.1 || r2 == 1) {
        n3 = "早起";
        s3 = "早起但是也要保持一天的精神状态呀 ";
      } else if (r3 == 0.2) {
        n3 = "起床时间段良好";
        s3 = "起床时间合适请继续保持 ";
      } else if (r3 == 1.5) {
        n3 = "起床时间段良好";
        s3 = "注意补充睡眠";
      } else if (r3 == 2) {
        n3 = "起床时间有点晚";
        s3 = "睡懒觉可不是好习惯哦！ ";
      } else if (r3 > 0.01) {
        if (r2 - r3 == 2) {
          n3 = "睡眠不足";
          s3 = "睡眠不到5小时，严重不足，注意休息哦！ ";
        } else if (r2 - r3 == 2.9) {
          n3 = "睡眠不足";
          s3 = "您的睡眠时间不足，注意休息哦 ";
        } else if (r2 - r3 == 0.1) {
          n3 = "睡眠不足";
          s3 = "睡眠只有5小时左右，注意补充休息！ ";
        } else if (r3 - r2 == 1 || r3 - r2 == 0.9 || r3 - r2 == 0) {
          n3 = "睡眠充足";
          s3 = "睡眠充足，您每天都是精神满满的一天！ ";
        }
      } else {
        ss3 = "第3题 ";
      }
      // 4
      if (r4 == 3) {
        n4 = "睡不着";
        s4 =
          "精神紧张、兴奋、抑郁、恐惧、焦虑、烦闷等精神因素常可引起失眠，工作和学习压力过重、环境改变、噪音、光和空气污染等社会环境因素是另一重要原因，到户外活动，保持乐观的心态对待生活，合理安排工作时间，保证充足的睡眠，避免太大的思想压力，注意劳逸结合，睡前可以多用温水泡脚，喝杯牛奶等途径促进睡眠";
      } else if (r4 == 0.1 || r4 == 0.5) {
        n4 = "";
        s4 = "";
      } else if (r4 == 1.5) {
        n4 = "睡不着";
        s4 = "放宽心态 ";
      } else {
        ss4 = "第4题 ";
      }
      // 5
      if (r5 == 0.1 || r5 == 1) {
        n5 = "";
      } else if (r5 == 1.5) {
        n5 = "做噩梦";
        s5 = "可能是由于近期精神心理压力过大而导致的";
      } else if (r5 == 2) {
        n5 = "压力过大或者过度疲劳";
        s5 =
          "做噩梦一定要注意调理自己的心情，缓解心理压力。还要注意养成规律作息的好习惯，保证充足的睡眠。 ";
      } else {
        ss5 = "第5题 ";
      }
      // 6
      if (r6 == 0.1 || r6 == 1) {
        n6 = "";
        s6 = "";
      } else if (r6 == 1.5 || r6 == 2) {
        n6 = "难以再次入睡";
        s6 = "可能由于压力过大或者白天休息过于充分 ";
      } else {
        ss6 = "第6题 ";
      }
      // 7
      if (r7 == 0.1) {
        n7 = "固定起床这个作息良好";
      } else if (r7 == 1) {
        s7 = "坚持规律起床有助于长寿 ";
      } else if (r7 == 1.5) {
        n7 = "起床问题";
        s7 = "注意补充睡眠 ";
      } else if (r7 == 2) {
        n7 = "作息不太好";
        s7 = "要养成固定起床的规律生活习惯啊 ";
      } else {
        ss7 = "第7题 ";
      }
      // 8
      if (r8 == 0.1 || r8 == 1) {
        n8 = "";
        s8 = "";
      } else if (r8 == 1.5 || r8 == 2) {
        n8 = "气血不足";
        s8 = "注意补充睡眠";
      } else {
        ss8 = "第8题 ";
      }
      // 9
      if (r9 == 0.1 || r9 == 1) {
        n9 = "";
        s9 = "";
      } else if (r9 == 1.5 || r9 == 2) {
        n9 = "作息问题";
        s9 = "可能是缺乏vb+钙+蛋白质造成的，建议吃一套营养品 ";
      } else {
        ss9 = "第9题 ";
      }
      // 10
      if (r10 == 0.1 || r10 == 0.2 || r10 == 0.3 || r10 == 2) {
        n10 = "";
        s10 = "";
      } else {
        ss10 = "第10题 ";
      }
      // 11
      if (r11 == 0.1 || r11 == 1 || r11 == 1.5 || r11 == 2) {
        n10 = "";
        s10 = "";
      } else {
        ss11 = "第11题 ";
      }
      //12
      if (r12 == 0.1) {
        n12 = "听音乐";
        s12 = "忙碌的一天随着音乐结束 ";
      } else if (r12 == 0.2) {
        n12 = "工作学习";
        s12 = "每天忙碌于工作学习的人都会过的很充实 ";
      } else if (r12 == 0.4) {
        n12 = "思考生活";
        s12 = "注意把握白天的时光，不要在晚上消磨，加油 ";
      } else if (r12 == 0.5) {
        n12 = "怀疑人生";
        s12 = "年轻人不要怀疑人生，为来很美好啊 ";
      } else if (r12 == 0.6) {
        n12 = "睡不着";
        s12 = "可能是有压力，睡觉前建议放空自己 ";
      } else if (r12 == 0.3) {
        n12 = "";
        s12 = "";
      } else {
        ss12 = "第12题 ";
      }
      //13
      if (r13 == 0.1) {
        n13 = "";
      } else if (r13 == 1) {
        n13 = "";
        s13 = "";
      } else if (r13 == 1.5) {
        n13 = "睡姿不足";
        s13 = "要注意调整哦 ";
      } else if (r13 == 2) {
        n13 = "睡姿问题";
        s13 = "建议注意睡姿，不好的睡姿将影响一晚上的睡眠质量 ";
      } else {
        ss13 = "第13题 ";
      }
      //14
      if (r14 == 0.1) {
        n14 = "";
      } else if (r14 == 1) {
        n14 = "";
        s14 = "";
      } else if (r14 == 1.5 || r14 == 2) {
        n14 = "饮食问题";
        s14 =
          "习惯高脂肪饮食可能会导致睡眠品质低,甚至可能会患有轻度至中度睡眠窒息症 ";
      } else {
        ss14 = "第14题 ";
      }
      //15
      if (r15 == 0.1) {
        n15 = "";
      } else if (r15 == 1) {
        n15 = "";
        s15 = "";
      } else if (r15 == 1.5 || r15 == 2) {
        n15 = "睡前咖啡";
        s15 = "咖啡因增加警觉度，会导致睡眠困难 ";
      } else {
        ss15 = "第15题 ";
      }
      //16
      if (r16 == 0.1) {
        n16 = "";
      } else if (r16 == 1) {
        n16 = "";
        s16 = "";
      } else if (r16 == 1.5 || r16 == 2) {
        n16 = "睡前暴食";
        s16 =
          "睡前吃的太多不仅仅会导致肥胖，而且会导致内脏压力过大以及各种身体疾病 ";
      } else {
        ss16 = "第16题 ";
      }
      //17
      if (r17 == 2) {
        n17 = "运动问题";
        s17 = "运动量太少也会影响睡眠质量 ";
      } else if (r17 == 1) {
        n17 = "运动次数较少";
        s17 = "每周尽量保持3次以上的规律运动，有助于睡眠质量 ";
      } else if (r17 == 0.3) {
        n17 = "";
        s17 = "";
      } else if (r17 == 0.2) {
        n17 = "";
        s17 = "";
      } else {
        ss17 = "第17题 ";
      }
      //18
      if (r18 == 0.1) {
        n18 = "";
      } else if (r18 == 1) {
        n18 = "睡前习惯";
        s18 =
          "睡前做一些休闲运动是有益的，但是不适合剧烈运动。适当运动有助改善睡眠 ";
      } else if (r18 == 1.5) {
        n18 = "睡前习惯";
        s18 =
          "睡前做一些休闲运动是有益的，但是不适合剧烈运动。适当运动有助改善睡眠 ";
      } else if (r18 == 2) {
        n18 = "睡前习惯";
        s18 =
          "睡前做一些休闲运动是有益的，但是不适合剧烈运动。适当运动有助改善睡眠 ";
      } else {
        ss18 = "第18题 ";
      }
      //19
      if (r19 == 0.1) {
        n19 = "";
      } else if (r19 == 1) {
        n19 = "";
        s19 = "";
      } else if (r19 == 1.5) {
        n19 = "睡前运动";
        s19 = "睡前两小时做有氧运动可能会给身体造成不良的影响 ";
      } else if (r19 == 2) {
        n19 = "作息问题";
        s19 = "睡前两小时做有氧运动可能会给身体造成不良的影响，要注意调整 ";
      } else {
        ss19 = "第19题 ";
      }
      //20
      if (r20 == 1) {
        n20 = "额外作息";
        s20 = "尽量要养成一个午休的好习惯，这样有助于应对下午的工作或学习 ";
      } else if (r20 == 0.5) {
        n20 = "";
        s20 = "";
      } else if (r20 == 0.2) {
        n20 = "";
        s20 = "";
      } else if (r20 == 0.1) {
        n20 = "";
        s20 = "";
      } else {
        ss20 = "第20题 ";
      }
      //21
      if (r21 == 0.1) {
        n21 = "午休过短";
        s21 = "午休是必不可少的大餐bai。不要求过长的时间，一般为20~40分钟 ";
      } else if (r21 == 0.5) {
        n21 = "";
      } else if (r21 == 1) {
        n21 = "睡眠不足";
        s21 =
          "不超过1小时为宜，时间长了进入深度睡眠，醒来可能会感到不适应，每个人要根据自己的情况调整 ";
      } else if (r21 == 1.5) {
        n21 = "作息问题";
        s21 =
          "可以让你睡足一个完整的睡眠周期，覆盖浅睡眠和深睡眠，有益于身体的修复 ";
      } else {
        ss21 = "第21题 ";
      }
      //22
      if (r22 == 0.1) {
        n22 = "";
      } else if (r22 == 0.2) {
        n22 = "";
        s22 = "";
      } else if (r22 == 0.3) {
        n22 = "";
        s22 = "";
      } else if (r22 == 0.4) {
        n22 = "";
        s22 = "";
      } else {
        ss22 = "第22题 ";
      }
      //23
      if (r23 == 0.1) {
        n23 = "";
      } else if (r23 == 1) {
        n23 = "";
        s23 = "";
      } else if (r23 == 1.5 || r23 == 2) {
        n23 = "光污染影响休息";
        s23 = "避免光源干扰，可以考虑眼罩等辅助工具 ";
      } else {
        ss23 = "第23题 ";
      }
      //24
      if (r24 == 0.1) {
        n24 = "";
      } else if (r24 == 1) {
        n24 = "";
        s24 = "";
      } else if (r24 == 1.5 || r24 == 2) {
        n24 = "噪音干扰";
        s24 = "避免噪音干扰，可以考虑耳塞等工具帮助休息 ";
      } else {
        ss24 = "第24题 ";
      }
      //25
      if (r25 == 0.1) {
        n25 = "";
      } else if (r25 == 1) {
        n25 = "";
        s25 = "";
      } else if (r25 == 1.5 || r25 == 2) {
        n25 = "床铺原因";
        s25 = "那就换个舒服的被褥吧 ";
      } else {
        ss25 = "第25题 ";
      }
      //26
      if (r26 == 0.1) {
        n26 = "";
      } else if (r26 == 1) {
        n26 = "";
        s26 = "";
      } else if (r26 == 1.5) {
        n26 = "";
        s26 = "";
      } else if (r26 == 2) {
        n26 = "";
        s26 = "";
      } else {
        ss26 = "第26题 ";
      }
      //27
      if (r27 == 0.1) {
        n27 = "";
      } else if (r27 == 1) {
        n27 = "";
        s27 = "";
      } else if (r27 == 1.5 || r27 == 2) {
        n27 = "压力过大";
        s27 = "焦虑的原因就是想得太多做的太少，让自己忙起来 ";
      } else {
        ss27 = "第27题 ";
      }
      //28
      if (r28 == 0.1) {
        n28 = "";
      } else if (r28 == 1) {
        n28 = "";
        s28 = "";
      } else if (r28 == 1.5) {
        n28 = "";
        s28 = "";
      } else if (r28 == 2) {
        n28 = "";
        s28 = "";
      } else {
        ss28 = "第28题 ";
      }
      //29
      if (r29 == 0.1) {
        n29 = "";
      } else if (r29 == 1) {
        n29 = "";
        s29 = "";
      } else if (r29 == 1.5) {
        n29 = "";
        s29 = "要注意休息，不能影响第二天的工作学习 ";
      } else if (r29 == 2) {
        n29 = "严重睡眠问题";
        s29 = "注意调整自己的睡眠状态，如果经常这样就要考虑咨询医师或心理医生 ";
      } else {
        ss29 = "第29题 ";
      }

      // 做题判断
      if (sum > 1) {
        // 赋值
        this.form.resource1 = r1;
        this.form.resource2 = r2;
        this.form.resource3 = r3;
        this.form.resource4 = r4;
        this.form.resource5 = r5;
        this.form.resource6 = r6;
        this.form.resource7 = r7;
        this.form.resource8 = r8;
        this.form.resource9 = r9;
        this.form.resource10 = r10;
        this.form.resource11 = r11;
        this.form.resource12 = r12;
        this.form.resource13 = r13;
        this.form.resource14 = r14;
        this.form.resource15 = r15;
        this.form.resource16 = r16;
        this.form.resource17 = r17;
        this.form.resource18 = r18;
        this.form.resource19 = r19;
        this.form.resource20 = r20;
        this.form.resource21 = r21;
        this.form.resource22 = r22;
        this.form.resource23 = r23;
        this.form.resource24 = r24;
        this.form.resource25 = r25;
        this.form.resource26 = r26;
        this.form.resource27 = r27;
        this.form.resource28 = r28;
        this.form.resource29 = r29;
        this.form.score = 100 - sum;
        // console.log("得分为=" +this.form.score);
        this.form.name = window.sessionStorage.getItem("user");
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
        // 后端请求
        this.$refs.formRef.validate(async (valid) => {
          // 验证
          if (!valid) return;
          // 提交结果
          const { data: res } = await this.$http.post("addSleep", this.form);
          // console.log(this.form);
          if (res != "success") {
            return this.$message.error("添加失败！！");
          }
          // this.$message.success("添加成功！！");
        });
        // 页面显示
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
        this.result.n14 = n14;
        this.result.n15 = n15;
        this.result.n16 = n16;
        this.result.n17 = n17;
        this.result.n18 = n18;
        this.result.n19 = n19;
        this.result.n20 = n20;
        this.result.n21 = n21;
        this.result.n22 = n22;
        this.result.n23 = n23;
        this.result.n24 = n24;
        this.result.n25 = n25;
        this.result.n26 = n26;
        this.result.n27 = n27;
        this.result.n28 = n28;
        this.result.n29 = n29;
        // suggest:
        this.suggest.s1 = s1;
        this.suggest.s2 = s2;
        this.suggest.s3 = s3;
        this.suggest.s4 = s4;
        this.suggest.s5 = s5;
        this.suggest.s6 = s6;
        this.suggest.s7 = s7;
        this.suggest.s8 = s8;
        this.suggest.s9 = s9;
        this.suggest.s10 = s10;
        this.suggest.s11 = s11;
        this.suggest.s12 = s12;
        this.suggest.s13 = s13;
        this.suggest.s14 = s14;
        this.suggest.s15 = s15;
        this.suggest.s16 = s16;
        this.suggest.s17 = s17;
        this.suggest.s18 = s18;
        this.suggest.s19 = s19;
        this.suggest.s20 = s20;
        this.suggest.s21 = s21;
        this.suggest.s22 = s22;
        this.suggest.s23 = s23;
        this.suggest.s24 = s24;
        this.suggest.s25 = s25;
        this.suggest.s26 = s26;
        this.suggest.s27 = s27;
        this.suggest.s28 = s28;
        this.suggest.s29 = s29;
        // 分析结果
        if (this.form.score >= 84) {
          this.$alert(
            "<strong>您的睡眠质量测试（结果仅供参考）得分为：<br /></strong>" +
              `<p style="font-size:40px;color:#67C23A">${this.form.score}</p>` +
              "<p> <br /><i>感谢使用,请继续保持。</i></p>",
            "您的睡眠质量很棒：",
            {
              dangerouslyUseHTMLString: true,
            }
          );
        } else if (this.form.score < 84 && this.form.score > 70) {
          this.$alert(
            "<strong>您的睡眠质量测试（结果仅供参考）得分为：<br /></strong>" +
              `<p style="font-size:40px;color:#E6A23C">${this.form.score}</p>` +
              "<p> <br /><i>感谢使用请注意改善。</i></p>",
            "您的睡眠质量一般：",
            {
              dangerouslyUseHTMLString: true,
            }
          );
        } else {
          this.$alert(
            "<strong>您的睡眠质量测试（结果仅供参考）得分为：<br /></strong>" +
              `<p style="font-size:40px;color:#F56C6C">${this.form.score}</p>` +
              "<p> <br /><i>感谢使用请注意调整。</i></p>",
            "您的睡眠质量较差：",
            {
              dangerouslyUseHTMLString: true,
            }
          );
        }
      } else {
        if ((r1 = 0)) {
          news = "r1";
        }
        this.$notify({
          title: "提示",
          message:
            "请先完成所有选项再进行结果分析！！" +
            "未完成的题：" +
            `${ss1 + ss2}` +
            `${ss3}` +
            `${ss4}` +
            `${ss5}` +
            `${ss6}` +
            `${ss7}` +
            `${ss8}` +
            `${ss9}` +
            `${ss10}` +
            `${ss11}` +
            `${ss12}` +
            `${ss13}` +
            `${ss14}` +
            `${ss15}` +
            `${ss16}` +
            `${ss17}` +
            `${ss18}` +
            `${ss19}` +
            `${ss20}` +
            `${ss21}` +
            `${ss22}` +
            `${ss23}` +
            `${ss24}` +
            `${ss25}` +
            `${ss26}` +
            `${ss27}` +
            `${ss28}` +
            `${ss29}`,
          type: "warning",
          center: true,
          offset: 200,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
/* 面包屑 */
.el-breadcrumb {
  font-size: 18px;
  margin-bottom: 15px;
}
.box1 {
  margin-top: 30px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
  .card {
    font-size: 25px;
    .btn {
      // background-color: aliceblue;
      font-size: 18px;
    }
    .btn:hover {
      color: tomato;
    }
  }
  .btnAnswer {
    font-size: 26px;
  }
  .btnAnswer:hover {
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