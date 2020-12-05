<template>
  <div>
    <h3>测评免疫力模板</h3>
    <!-- 折叠列表 -->
    <div class="accordion" id="accordionExample">
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
            <p>经常熬夜</p>
            <p>经常跨时区差旅</p>
            <p>经常倒时差</p>
            <p>以上均不符合（选次上不可选）</p>
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
            <p>经常饮酒</p>
            <p>吸烟或者受二手烟困扰</p>
            <p>近半年进行极端减肥，如三餐苹果、过午不食</p>
            <p>饮食不规律，一顿很少，一顿吃撑</p>
            <p>以上均不符合（选次上不可选）</p>
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
            <p>常吃薯条、炸鸡、烤鱼、香锅等高油食物</p>
            <p>常吃蛋糕、奶茶、果汁饮料等甜食</p>
            <p>常吃腊肉、培根等肉类加工食品</p>
            <p>常吃泡面、汉堡等快餐</p>
            <p>以上均不符合（选次上不可选）</p>
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
            <p>几乎不吃坚果、橄榄油或者深海鱼</p>
            <p>不爱喝水、如矿泉水或者凉白开</p>
            <p>很少喝酸奶或者主动补充益生菌</p>
            <p>很少吃新鲜水果蔬菜</p>
            <p>很少吃肉蛋类、豆制品或奶类</p>
            <p>以上均不符合（选次上不可选）</p>
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
            <p>几乎不运动</p>
            <p>有中强度的运动习惯，如跑步、快走等</p>
            <p>偶尔运动，且运动强度大</p>
            <p>运动规律，且运动强度大</p>
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
            <p>打喷嚏时习惯用手捂且不及时清洗</p>
            <p>饭钱、便后不是每次都洗手</p>
            <p>经常用手接触眼睛、鼻子或者嘴巴</p>
            <p>洗手后经常直接用衣服擦干</p>
            <p>以上均不符合（选次上不可选）</p>
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
            <p>完全不符合</p>
            <p>不太符合</p>
            <p>基本符合</p>
            <p>完全符合</p>
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
            <p>完全不符合</p>
            <p>不太符合</p>
            <p>基本符合</p>
            <p>完全符合</p>
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
            <p>完全不符合</p>
            <p>不太符合</p>
            <p>基本符合</p>
            <p>完全符合</p>
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
            <p>完全不符合</p>
            <p>不太符合</p>
            <p>基本符合</p>
            <p>完全符合</p>
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
            <p>完全不符合</p>
            <p>不太符合</p>
            <p>基本符合</p>
            <p>完全符合</p>
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
            <p>完全不符合</p>
            <p>不太符合</p>
            <p>基本符合</p>
            <p>完全符合</p>
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
            <p>已确诊营养不良</p>
            <p>处于重大慢性消耗性疾病，如肿瘤或者其术后</p>
            <p>肠癌、胃癌、乳腺癌等家族病史</p>
            <p>以上均不符合（选次上不可选）</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>