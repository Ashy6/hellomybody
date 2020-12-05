<template>
  <div>
    <h3>ce ping shuimian模板</h3>
    <!-- 折叠列表 -->
    <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="heading01">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse01" aria-expanded="true" aria-controls="collapse01">
          问题#1.我更接近于一下哪种情况？
        </button>
      </h2>
    </div>
    <div id="collapse01" class="collapse show" aria-labelledby="heading01" data-parent="#accordionExample">
      <div class="card-body">
        <p>晚上睡觉，白天起床</p>
        <p>经常夜班、倒班</p>
        <p>经常国际航班，倒时差</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading02">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse02" aria-expanded="false" aria-controls="collapse02">
          问题#2.我的入睡时间通常是？
        </button>
      </h2>
    </div>
    <div id="collapse02" class="collapse" aria-labelledby="heading02" data-parent="#accordionExample">
      <div class="card-body">
        时间选择器      
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading03">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse03" aria-expanded="false" aria-controls="collapse03">
          问题#3.我的起床时间通常是？
        </button>
      </h2>
    </div>
    <div id="collapse03" class="collapse" aria-labelledby="heading03" data-parent="#accordionExample">
      <div class="card-body">
        时间选择
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading04">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse04" aria-expanded="false" aria-controls="collapse04">
          问题#4.躺下后到入睡，我通常需要？
        </button>
      </h2>
    </div>
    <div id="collapse04" class="collapse" aria-labelledby="heading04" data-parent="#accordionExample">
      <div class="card-body">
        <p>0~15分钟</p>
        <p>15~30分钟</p>
        <p>30~45分钟</p>
        <p>45分钟以上</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading05">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse05" aria-expanded="false" aria-controls="collapse05">
          问题#5.我经常在梦中或者噩梦惊醒？
        </button>
      </h2>
    </div>
    <div id="collapse05" class="collapse" aria-labelledby="heading05" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading06">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse06" aria-expanded="false" aria-controls="collapse06">
          问题#6.入睡后，我经常多次行了且难以再次入睡
        </button>
      </h2>
    </div>
    <div id="collapse06" class="collapse" aria-labelledby="heading06" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading07">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse07" aria-expanded="false" aria-controls="collapse07">
          问题#7.我的起床时间比较固定
        </button>
      </h2>
    </div>
    <div id="collapse07" class="collapse" aria-labelledby="heading07" data-parent="#accordionExample">
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
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse08" aria-expanded="false" aria-controls="collapse08">
          问题#8.起床后，我仍然困倦、疲惫、甚至无法专注
        </button>
      </h2>
    </div>
    <div id="collapse08" class="collapse" aria-labelledby="heading08" data-parent="#accordionExample">
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
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse09" aria-expanded="false" aria-controls="collapse09">
          问题#9.我需要医院处方药帮助入睡
        </button>
      </h2>
    </div>
    <div id="collapse09" class="collapse" aria-labelledby="heading09" data-parent="#accordionExample">
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
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
          问题#10.总的来说，我对我的睡眠情况
        </button>
      </h2>
    </div>
    <div id="collapse10" class="collapse" aria-labelledby="heading10" data-parent="#accordionExample">
      <div class="card-body">
        <p>满意</p>
        <p>基本满意</p>
        <p>不太满意</p>
        <p>非常不满意</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading11">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
          问题#11.卧床后，我通常直接闭眼，酝酿睡意
        </button>
      </h2>
    </div>
    <div id="collapse11" class="collapse" aria-labelledby="heading11" data-parent="#accordionExample">
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
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
          问题#12.卧床半小时内，我会
        </button>
      </h2>
    </div>
    <div id="collapse12" class="collapse" aria-labelledby="heading12" data-parent="#accordionExample">
      <div class="card-body">
        <p>听音乐或者阅读诗歌散文</p>
        <p>刷手机，浏览感兴趣的内容</p>
        <p>工作或者学习</p>
        <p>思考生活</p>
        <p>怀疑人生</p>
        <p>其他</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading13">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
          问题#13.我一般左侧卧或者俯卧入睡
        </button>
      </h2>
    </div>
    <div id="collapse13" class="collapse" aria-labelledby="heading13" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading14">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
          问题#14.我经常摄入高脂肪食物或者甜食
        </button>
      </h2>
    </div>
    <div id="collapse14" class="collapse" aria-labelledby="heading14" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading15">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
          问题#15.我经常睡前6小时内进食咖啡因的食物
        </button>
      </h2>
    </div>
    <div id="collapse15" class="collapse" aria-labelledby="heading15" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading16">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
          问题#16.睡前连小时，我依旧觉得很撑
        </button>
      </h2>
    </div>
    <div id="collapse16" class="collapse" aria-labelledby="heading16" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading17">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
          问题#17.我一周运动情况（30分钟以上，中强度）
        </button>
      </h2>
    </div>
    <div id="collapse17" class="collapse" aria-labelledby="heading17" data-parent="#accordionExample">
      <div class="card-body">
        <p>不运动</p>
        <p>小于2次</p>
        <p>2~4次</p>
        <p>大于4次</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading18">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
          问题#18.我经常睡前两小时内运动
        </button>
      </h2>
    </div>
    <div id="collapse18" class="collapse" aria-labelledby="heading18" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading19">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
          问题#19.运动后，肌肉酸痛明显影响睡眠
        </button>
      </h2>
    </div>
    <div id="collapse19" class="collapse" aria-labelledby="heading19" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading20">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
          问题#20.就寝时间外，我会额外补充睡眠
        </button>
      </h2>
    </div>
    <div id="collapse20" class="collapse" aria-labelledby="heading20" data-parent="#accordionExample">
      <div class="card-body">
        <p>几乎不</p>
        <p>偶尔</p>
        <p>经常</p>
        <p>每天</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading21">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
          问题#21.补充睡眠时长
        </button>
      </h2>
    </div>
    <div id="collapse21" class="collapse" aria-labelledby="heading21" data-parent="#accordionExample">
      <div class="card-body">
        <p>小于20分钟</p>
        <p>20~60分钟</p>
        <p>60~90分钟</p>
        <p>90分钟以上</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading22">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
          问题#22.我通常在几点补充睡眠
        </button>
      </h2>
    </div>
    <div id="collapse22" class="collapse" aria-labelledby="heading22" data-parent="#accordionExample">
      <div class="card-body">
        时间选择
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading23">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse23" aria-expanded="false" aria-controls="collapse23">
          问题#23.因为光线干扰，我难以入睡
        </button>
      </h2>
    </div>
    <div id="collapse23" class="collapse" aria-labelledby="heading23" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading24">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse24" aria-expanded="false" aria-controls="collapse24">
          问题#24.因为声音干扰，我难以入睡
        </button>
      </h2>
    </div>
    <div id="collapse24" class="collapse" aria-labelledby="heading24" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading25">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
          问题#25.因为床、枕头被子等不适，我难以入睡
        </button>
      </h2>
    </div>
    <div id="collapse25" class="collapse" aria-labelledby="heading25" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading26">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
          问题#26.近一个月，我身体状态不佳
        </button>
      </h2>
    </div>
    <div id="collapse26" class="collapse" aria-labelledby="heading26" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading27">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse27" aria-expanded="false" aria-controls="collapse27">
          问题#27.对未来，我感到压力很大、很焦虑
        </button>
      </h2>
    </div>
    <div id="collapse27" class="collapse" aria-labelledby="heading27" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading28">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse28" aria-expanded="false" aria-controls="collapse28">
          问题#28.入睡困难时，我感到烦躁，并硬逼自己入睡
        </button>
      </h2>
    </div>
    <div id="collapse28" class="collapse" aria-labelledby="heading28" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="heading29">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse29" aria-expanded="false" aria-controls="collapse29">
          问题#29.出现睡眠障碍，第二天我会焦躁、紧张甚至影响生活工作
        </button>
      </h2>
    </div>
    <div id="collapse29" class="collapse" aria-labelledby="heading29" data-parent="#accordionExample">
      <div class="card-body">
        <p>完全不符合</p>
        <p>不太符合</p>
        <p>基本符合</p>
        <p>完全符合</p>
      </div>
    </div>
  </div>
</div>


    
    <div>
      <div>
        <!-- <router-link :to="`/course/${c.name}`">
          {{ c.name }} - {{ c.price | currency("￥") }}
        </router-link> -->
      </div>
    </div>

    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 菜单列表
      menuList: [],
      activePath: "/hellou", //配置默认路径
    };
  },

};
</script>

<style lang="less" scoped>
</style>