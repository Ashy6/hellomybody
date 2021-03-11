<template>
  <div class="box0">
    <div class="box1 container">
      <!-- 顶部导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据分析</el-breadcrumb-item>
        <el-breadcrumb-item>健康标准</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 介绍信息 -->
      <el-dialog
        title="肺活量"
        :visible.sync="Dialogvital"
        width="500px"
        center
      >
        <h4 style="font-size: 16px">
          肺活量（vital
          capacity，VC）是指一次尽力吸气后，再尽力呼出的气体总量。肺活量=潮气量+补吸气量+补呼气量。
        </h4>
        <h4>
          肺活量因性别和年龄而异，男性明显高于女性。在20岁前，肺活量随着年龄增长而逐渐增大，20岁后增加量就不明显了。成年男子的肺活量约3500～4000毫升，成年女子约2500～3000毫升。肺活量主要取决于胸腔壁的扩张与收缩的宽舒程度。肺活量随年龄的增长而下降，每10年下降9%～27%，但长期坚持体育锻炼的人，其肺活量仍能保持正常。
        </h4>
        <h4>
          体育锻炼可以明显提高肺活量，譬如可以经常性的做一些扩胸、振臂等徒手操练习，坚持耐久跑、游泳、踢足球、打篮球、折返跑等，像中长跑运动员和游泳运动员的肺活量可达6000毫升以上。
        </h4>
        <span slot="footer" class="dialog-footer">
          <h6>内容来源：百度百科</h6>
        </span>
      </el-dialog>
      <el-dialog
        title="视力对比表"
        :visible.sync="Dialogvision"
        width="280px"
        center
      >
        <el-table :data="visionTable">
          <el-table-column
            width="110"
            property="china"
            label="中国视力表 (五分视力表)"
            align="center"
          ></el-table-column>
          <el-table-column
            width="110"
            property="world"
            label="国际视力表 (小数视力表)"
            align="center"
          ></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
          <h6>内容来源：百度百科</h6>
        </span>
      </el-dialog>
      <el-dialog
        title="体 温"
        :visible.sync="Dialogtemperature"
        width="350px"
        center
      >
        <p style="font-size: 16px">1.体温测量</p>
        <h4>
          （1）口腔温度<br />
          将体温计放置在患者舌下，闭嘴约3分钟后取出，正常范围为36.3℃～37.2℃；<br />
          （2）直肠温度<br />
          测量方法是将体温计消毒后涂上润滑油，然后插入肛门，三分钟后取出，其正常值比口腔温度约高0.3℃～0.5℃；<br />
          （3）腋窝温度<br />
          因测量方便卫生，是目前最常使用的测温方法，其测量方法是将体温计夹于腋窝，五分钟后读取数值，正常范围为36.1℃～37℃，比口腔温度约低0.2℃～0.4℃。
        </h4>
        <p style="font-size: 16px">2.发热</p>
        <h4>
          低热：37.4℃～38℃；<br />中等度热：38.1℃～39℃；<br />高热：39.1℃～41℃；<br />超高热：41℃以上。
        </h4>
        <span slot="footer" class="dialog-footer">
          <h6>内容来源：百度百科</h6>
        </span>
      </el-dialog>
      <el-dialog title="心 率" :visible.sync="Dialogheart" width="600px" center>
        <h4>
          心率是指正常人安静状态下每分钟心跳的次数，也叫安静心率。<br />一般为60～100次/分，可因年龄、性别或其他生理因素产生个体差异。<br />一般来说，年龄越小，心率越快，老年人心跳比年轻人慢，女性的心率比同龄男性快，这些都是正常的生理现象。<br />安静状态下，成人正常心率为60～100次/分钟，理想心率应为55～70次/分钟（运动员的心率较普通成人偏慢，一般为50次/分钟左右）。
        </h4>
        <span slot="footer" class="dialog-footer">
          <h6>内容来源：百度百科</h6>
        </span>
      </el-dialog>
      <el-dialog
        title="步 速"
        :visible.sync="Dialoglegspeed"
        width="500px"
        center
      >
        <p style="font-size: 16px">
          顾名思义是行步的速度。<br />正常成年人的步速一般的是1.5m/s，即5.4km/h
        </p>
        <h3>步速与寿命</h3>
        <h4>
          来自美国匹兹堡大学的Stephanie
          Studenski带领的一个研究小组对1986年到2000年间的34485名65岁或以上老人的数据进行了长时间的调查，并对这些老年人的步速进行长达数年的跟踪记录，旨在揭示老年人步速与寿命之间的关联。所有记录均遵循两个原则：1.研究所测量的是日常步行速度；2.测量从站立状态开始。<br />
          数据显示，研究对象的平均寿命为73.5岁，平均步速则为0.92米/秒。而在研究进行期间，有17528名老人去世。在75岁-84岁男性组内，那些步速最快的人（超过1.4米/秒）能继续生活10年的概率达到了50%;而那些步速最慢的人,0.4米/秒,只有15%的人还能继续活10年。同年龄组女性也是步速快者更；步速最快的女性能继续生活10年的概率达到了50%，步速最慢的女性35%能继续活上10年。<br />
          在大多数年龄段中，寿命为预期寿命中值的老年人，其步速约为0.8米/秒。而在性别与年龄一致的前提下，步行速度越快，其预期寿命越长。步速达1米/秒以上的老年人，其预期寿命会比只考虑年龄与性别时的预期要长。在多个年龄组别中，老年人的步速与剩余寿命均成正比关系，而且年龄越小，其预期剩余寿命的绝对值越大。
        </h4>
        <h3>为什么步速能预测寿命呢？</h3>
        <h4>
          这是由于步行需要消耗大量的身体能量，并对肢体动作进行有效的控制，同时还需要包括心肺系统、循环系统、神经系统以及肌肉骨骼系统在内的多个器官系统的支持与配合。<br />
          而步行速度慢一方面反映出老人的身体系统已经受损，另一方面也表明他/她步行时需要耗费较多的能量，所以步速能对老人的寿命起到预示的作用。<br />
          对医生来说，通过步速来评估一个人身体整体状况，是一种方便和花费少的方法，比如可以确定病人采取有利于延年益寿的预防措施后，如节食或锻炼，情况是否有改善。或者，相应的，对于那些接受各种辅助治疗和药物治疗的健康状况较差的病人，这项检测可以确定疗效是否理想。
        </h4>
        <span slot="footer" class="dialog-footer">
          <h6>内容来源：百度百科</h6>
        </span>
      </el-dialog>
      <!-- 1层内容开始 -->
      <!-- 项目介绍 -->
      <el-drawer title="健康记录" :visible.sync="drawer" size="380px">
        <p style="padding: 30px">
          <span style="font-size: 18px">记录您的基本资料：</span>
        </p>
        <div class="demo-drawer__content">
          <el-form
            :model="userInfo"
            :rules="rules"
            ref="userInfo"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              style="width: 310px"
              label="账户/名称:"
              prop="username"
              disabled
            >
              <el-input
                v-model="userInfo.username"
                placeholder="用户名/账户/电话"
                disabled
              ></el-input>
            </el-form-item>
            <el-form-item label="您的性别:" prop="sex">
              <el-select
                style="width: 150px"
                v-model="userInfo.sex"
                placeholder="请选择您的性别"
              >
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
            <!-- 生日 -->
            <el-form-item label="出生日期:" required>
              <el-col :span="10">
                <el-form-item prop="birthday">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="userInfo.birthday"
                    value-format="yyyy-MM-dd"
                    style="width: 210px"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <!-- 年龄结果 -->
            <el-form-item style="width: 310px" label="年龄(岁):" prop="ages">
              <el-input
                placeholder="选择您的生日后自动获得"
                type="ages"
                v-model="userInfo.ages"
                autocomplete="off"
                disabled
              ></el-input>
            </el-form-item>
            <!-- 身高 -->
            <el-form-item
              style="width: 310px"
              label="身高(cm):"
              prop="height"
              :rules="[
                { required: true, message: '身高不能为空' },
                {
                  min: 2,
                  max: 5,
                  message: '身高应是2~5个字符（包括小数点）！',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                placeholder="例如：175"
                type="number"
                v-model="userInfo.height"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="体重(kg):"
              style="width: 310px"
              prop="weight"
              :rules="[
                { required: true, message: '体重不能为空' },
                {
                  min: 2,
                  max: 5,
                  message: '体重应是2~5个字符（包括小数点）！',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                placeholder="例如：70"
                type="number"
                v-model="userInfo.weight"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="目标体重:"
              style="width: 310px"
              prop="target"
              :rules="[
                { required: true, message: '目标体重不能为空' },
                {
                  min: 2,
                  max: 5,
                  message: '请输入合适的目标体重！',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                placeholder="例如：75"
                type="number"
                v-model="userInfo.target"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-form label-width="30px" class="demo-ruleForm">
            <el-form-item>
              <el-button type="primary" @click="addUserInfo">{{
                loading ? "提交中..." : "更 新"
              }}</el-button>
              <el-button @click="resetForm('userInfo')">重 置</el-button>
              <el-button @click="cancelForm">取 消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 1层内容结束 -->
        <div>
          <el-button
            @click="openUserHWList"
            style="margin-left: 30px; width: 240px"
          >
            查看我记录的身高体重
          </el-button>
          <!-- 2层内容开始 -->
          <el-drawer
            class="drawer2"
            title="记录每一刻更加优秀的自己 !"
            :append-to-body="true"
            :before-close="handleClose"
            :visible.sync="innerDrawer"
            direction="rtl"
            size="375px"
          >
            <el-button style="margin-left: 25px" @click="resetDateFilter">
              重置日期设置
            </el-button>
            <el-button style="margin-left: 25px" @click="clearFilter">
              重置所有设置
            </el-button>
            <el-table :data="UserHWList" ref="filterTable">
              <el-table-column
                property="timesss"
                label="日期"
                width="155"
                sortable
              >
                <!-- column-key="timesss"
                :filters="[
                  { text: '2021-09-01 00:00:00', value: '2021-12-31 00:00:00' },
                  { text: '2021-07-02 00:00:00', value: '2021-07-31 00:00:00' },
                  { text: '2021-05-01 00:00:00', value: '2021-06-30 00:00:00' },
                  { text: '2021-03-01 00:00:00', value: '2021-04-30 00:00:00' },
                ]"
                :filter-method="filterHandler" -->
              </el-table-column>
              <el-table-column
                property="height"
                label="身高(cm)"
                width="105"
                sortable
              ></el-table-column>
              <el-table-column
                property="weight"
                label="体重(kg)"
                sortable
              ></el-table-column>
            </el-table>
            <!-- 2层底部按钮 -->
            <el-form label-width="50px" class="demo-ruleForm">
              <p>只显示最新10条数据</p>
            </el-form>
          </el-drawer>
          <!-- 2层内容结束 -->
        </div>
      </el-drawer>
      <!-- {{ UserHWList }} -->
    </div>
    <div class="box2 container">
      <!-- 主页面显示开始 -->
      <div style="display: block">
        <h3 style="display: inline-block">显示位置：</h3>
        <el-radio-group v-model="tabPosition" style="margin: 10px">
          <el-radio-button label="left">Left</el-radio-button>
          <el-radio-button label="top">Top</el-radio-button>
          <el-radio-button label="right">Right</el-radio-button>
        </el-radio-group>
      </div>

      <!-- ubody begin -->
      <el-tabs :tab-position="tabPosition" style="margin-top: 10px">
        <el-tab-pane label="介绍">
          介绍
          <p>
            该界面主要为您提供一些身体指标的数据参考，您也可以记录您的数据，并且在
            『个人中心』中，可以找到这些数据。
          </p>
          <p>伴随着您一起成长 ヾ(≧∪≦*)ノ〃 ！</p>
          <p>您可以在这里：</p>
          <p>1. 记录您的每一次记录，系统会帮助你找到这些记录</p>
          <p>
            2.
            您不必在本系统中输入您的真实身份信息，开发者的初衷只是为了帮助您存储这些数据。
          </p>
          <p>3. 前往 『个人中心』--『健康记录』可以找到并删除错误的数据</p>
        </el-tab-pane>
        <el-tab-pane label="健康">
          ———— ———— ———— ———— ————
          <div style="padding: 20px">
            <el-form
              ref="addUserBodyRef"
              :inline="true"
              :model="UserBody"
              class="demo-form-inline"
            >
              <h5>
                肺活量：男性一般为3500～4000毫升，女性一般为2500～3500毫升
              </h5>
              <h5>视力值：检查距离为5米,正常视力为1.0-1.5</h5>
              <el-form-item label="肺活量">
                <el-input
                  v-model="UserBody.vital"
                  placeholder="肺活量"
                ></el-input>
              </el-form-item>
              <el-form-item label="视力值">
                <el-input
                  v-model="UserBody.vision"
                  placeholder="视力值"
                ></el-input>
              </el-form-item>
              <br />
              <h5>
                体温：正常：36℃～37℃，低热37.4~38℃；中热38.1~39℃；高热39.1~41℃
              </h5>
              <h5>
                心率：正常心率：60-80次/分
                （身体极度平静或者剧烈运动短时间超出范围也正常）
              </h5>
              <h5>步速：正常步速：0.8--0.9米/秒，该数据将来可用于预测寿命</h5>
              <el-form-item label="体 温">
                <el-input
                  v-model="UserBody.temperature"
                  placeholder="体 温"
                ></el-input>
              </el-form-item>
              <el-form-item label="心 率">
                <el-input
                  v-model="UserBody.heart"
                  placeholder="心 率"
                ></el-input>
              </el-form-item>
              <el-form-item label="步 速">
                <el-input
                  v-model="UserBody.legspeed"
                  placeholder="步 速"
                ></el-input>
              </el-form-item>
              <!-- <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item> -->
            </el-form>
            <el-button @click="Dialogvital = true" style="margin: 10px">
              肺活量
            </el-button>
            <el-button @click="Dialogvision = true" style="margin: 10px">
              视力值
            </el-button>
            <el-button @click="Dialogtemperature = true" style="margin: 10px">
              体 温
            </el-button>
            <el-button @click="Dialogheart = true" style="margin: 10px">
              心 率
            </el-button>
            <el-button @click="Dialoglegspeed = true" style="margin: 10px">
              步 速
            </el-button>
            <el-button style="margin: 10px" @click="addUserBody()"
              >记录一下</el-button
            >
          </div>
        </el-tab-pane>
        <el-tab-pane label="三血">
          ———— ———— ————

          <div style="padding: 20px">
            <el-form :inline="true" :model="UserBody" class="demo-form-inline">
              <h5>血压：正常血压值是120/80毫米汞柱</h5>
              <h5>血脂：总胆固醇：3.1～5.2mmol/L，甘油三酯：1.7mmol/L以内</h5>
              <h5>
                血糖：正常血糖值：3.9~6.1毫摩尔/升，超越7.0毫摩尔/升称为高血糖
              </h5>
              <el-form-item label="血 压">
                <el-input
                  v-model="UserBody.pblood"
                  placeholder="血 压"
                ></el-input>
              </el-form-item>
              <el-form-item label="血 脂">
                <el-input
                  v-model="UserBody.fblood"
                  placeholder="血 脂"
                ></el-input>
              </el-form-item>
              <el-form-item label="血 糖">
                <el-input
                  v-model="UserBody.gblood"
                  placeholder="血 糖"
                ></el-input>
              </el-form-item>
            </el-form>
            <el-popover placement="right" width="350" trigger="click">
              <h3>高血压：</h3>
              <h4>
                高血压是指循环系统内血压高于正常而言，通常指体循环动脉血压增高，是一种常见的临床综合症。通常是以低于140/90毫米汞柱为正常，而大于等于140/90毫米汞柱为高血压。因它是在不知不觉中发生，故称“悄悄的杀手”。
              </h4>
              <h3>高血脂：</h3>
              <h4>
                高血脂是指血中胆固醇或甘油三酯过高或高密度脂蛋白胆固醇过低，现代医学称之为血脂异常。它是导致动脉粥样硬化的主要因素，是心脑血管病发生发展的危险因素。它发病隐匿，大多没有临床症状，故称为“隐形杀手”。
              </h4>
              <h3>高血糖：</h3>
              <h4>
                高血糖是机体血液中葡萄糖含量高于正常值。是机体内一个独立存在的病理改变，病变部位在血液，病变性质是血糖代谢紊乱。高血糖的临床表现，可以有显性的症状，如口干渴、饮水多、尿多、消瘦；可以是隐性的症状，无明显主观不适。
              </h4>
              <p>内容来源：百度百科</p>
              <el-button slot="reference">“三高”是什么</el-button>
            </el-popover>
            <el-popover placement="right" width="350" trigger="click">
              <h4>
                1.减少食盐多吃健康食品。适当的减少钠盐的摄入可以减少体内的水钠潴留,有助于降低血压。日常中，要注意减少隐性盐的摄入，如腌制食品、腊味、酱油、海产品、火锅蘸料、快餐等都是重盐的食品。多吃芹菜等蔬菜帮助降三高。
              </h4>
              <h4>
                2.营养均衡。过分节制饮食只会导致机体的营养失衡。寒热搭配、荤素搭配、总量控制才是正确的饮食方式。避免肥胖、控制体重是预防高血压的关键。
              </h4>
              <h4>
                3.戒烟限酒。吸烟、喝酒可使降压药的疗效降低,需加大用药剂量。长期吸烟的患者远期预后差。长期过量饮酒是高血压、心血管病发生的危险因素。
              </h4>
              <el-button slot="reference">调理方法</el-button>
            </el-popover>
            <el-button style="margin: 10px" @click="addUserBody()"
              >记录一下</el-button
            >
          </div>
        </el-tab-pane>
        <el-tab-pane label="三围">
          ———— ———— ————
          <div style="padding: 20px">
            <el-form :inline="true" :model="UserBody" class="demo-form-inline">
              <h5>
                胸围 = 身高x0.51（如：身高160cm的标准胸围=160cmX0.51=81.6cm）
              </h5>
              <h5>
                腰围 = 身高X0.34（如：身高160cm的标准腰围=160cmX0.34-54.4cm）
              </h5>
              <h5>
                臀围 = 身高x0.542（如：身高160cm的标准臀围=160cmX0.542=86.72cm）
              </h5>
              <h6>
                腰臀比（WHR）是指腰围和臀围的比值，是判定中心性肥胖的重要指标
              </h6>
              <el-form-item label="胸 围">
                <el-input
                  v-model="UserBody.chest"
                  placeholder="胸 围"
                ></el-input>
              </el-form-item>
              <el-form-item label="腰 围">
                <el-input
                  v-model="UserBody.waistline"
                  placeholder="腰 围"
                ></el-input>
              </el-form-item>
              <el-form-item label="臀 围">
                <el-input
                  v-model="UserBody.hipline"
                  placeholder="臀 围"
                ></el-input>
              </el-form-item>
            </el-form>
            <div>
              <!-- 文字内容 -->
              <el-popover placement="right" width="350" trigger="click">
                <div>
                  <h2>测量三围的方法与注意事项</h2>
                  <el-tooltip placement="bottom-start">
                    <div slot="content" style="font-size: 16px">
                      先将衣服脱去，较轻松地站着（但是要笔直），双脚并拢，脸向正前方，微微抬起下颚。<br />
                      将皮尺水平地圈在胸围（突出点）上，由松慢慢收紧。量时应用手将乳房轻轻托起，就<br />
                      好像穿着胸衣一样。这时可以轻松地测得自己的实际胸围与胸下；而胸线（乳房底部所<br />
                      呈现的线条）也可方便地测得。
                    </div>
                    <el-button type="text" plain style="border: 0px">
                      <h3 style="display: inline-block">测量胸围</h3>
                      <i
                        class="header-icon el-icon-chat-dot-square"
                        style="font-size: 20px"
                      ></i>
                    </el-button>
                  </el-tooltip>
                  <el-tooltip placement="bottom-start">
                    <div slot="content" style="font-size: 16px">
                      腰围是你觉得腰部最细的地方。<br />
                      臀围是量臀部最突出的地方，但是注意量的时候要对着镜子，<br />
                      这样可以知道自己臀部的形状，对内裤的挑选会很有帮助。
                    </div>
                    <el-button type="text" plain style="border: 0px">
                      <h3 style="display: inline-block">测量腰围与臀围</h3>
                      <i
                        class="header-icon el-icon-chat-dot-square"
                        style="font-size: 20px"
                      ></i>
                    </el-button>
                  </el-tooltip>
                  <br />
                  <el-tooltip placement="bottom-start">
                    <div slot="content" style="font-size: 16px">
                      胸围与臀围应该三个月测量一次，作为购买内衣裤的标准，毕竟“人是善变的”。<br />
                      胸围：胸围反映胸廓的大小和胸部肌肉与乳房的发育情况，是身体发育状况的重要指标。<br />
                      测量时，<br />
                      1.
                      身体直立，两臂自然下垂。皮尺前面放在乳头上缘，皮尺后面置于肩胛骨下角处。<br />
                      2.
                      先测安静时的胸围，再测深吸气时的胸围，最后测深呼气时的胸围。<br />
                      3.
                      深吸气与深呼气时的胸围差为呼吸差，可反映呼吸器官的功能。<br />
                      一般成人呼吸差为6~8厘米，经常参加锻炼者的呼吸差可达10厘米以上。<br />
                      4.
                      测量未成年女性胸围时，应将皮尺水平放在肩胛骨下角，前方放在乳峰上。<br />
                      5. 测量时注意提醒被测者不要耸肩，呼气时不要弯腰。<br />
                      腰围：腰的围度反映腰腹部肌肉的发育情况。测量时，身体直立，两臂自然下垂，不要<br />
                      收腹，呼吸保持平稳，皮尺水平放在髋骨上、肋骨下最窄的部位（腰最细的部位）。<br />
                      臀围：臂围反映髋部骨骼和肌肉的发育情况。测量时，两腿并拢直立，两臂自然下垂，<br />
                      皮尺水平放在前面的耻骨联合和背后臂大肌最凸处。<br />
                      为了确保准确性，测量“三围”时，一是要在横切面上，二是要在锻炼前进行。<br />
                      同时要注意每次测量的时间和部位相同，测量时不要把皮尺拉得太紧或太松，力求仔细、准确。
                    </div>
                    <el-button type="text" plain style="border: 0px">
                      <h3 style="display: inline-block">注意事项</h3>
                      <i
                        class="header-icon el-icon-chat-dot-square"
                        style="font-size: 20px"
                      ></i>
                    </el-button>
                  </el-tooltip>
                  <h4>
                    当今世界，据统计，亚洲女性的标准三围（胸、腰、臀）分别是84厘米、62厘米和86厘米。<br /><br />
                    评定美胸的标准：<br />
                    1.半球型、圆锥型的乳房是属于外形较理想的。<br />
                    2.乳房微微向上挺，厚约8-10厘米。<br />
                    3.乳晕大小不超过1元硬币，颜色红润粉嫩，与乳房皮肤有明显的分界线，婚后色素沉着为褐色。<br />
                    4.乳头应突出，不内陷，大小为乳晕直径的1/3。<br /><br />
                    评定纤腰的标准：<br />
                    1.腰身宽与窄都无所谓，但必须和整个身材配合适宜。中国传统审美崇尚细腰，唐代大诗人白居易有“杨柳小蛮腰”一说，后人以“杨柳腰”或“小蛮腰”来形容纤细柔美的腰身。
                    2.腰身一定要轻盈灵活，走动时才能摇典生姿，具有曲线玲珑之美。
                    3.腰部线条紧致，皮肤不松弛，不能有一捏一大把的赘肉。<br /><br />
                    评定美臀的标准：<br />
                    1.臀部要有一点儿上翘，前凸后翘，是评定美的重要条件。<br />
                    2.整个臀部的大小要均衡，必须与身体比例配合，不是大就好，太小当然也不合格。<br />
                    3.臀部必须紧实浑圆，走起路来不可晃动得太厉害。<br />
                    4.皮肤白皙、细腻、有弹性，不能没有脂肪，但却恰到好处。<br /><br />
                    美丽的身体人人都有，只是巧妙之处各有不同，所以所谓的标准身材并不是只强调高与瘦。<br />
                  </h4>
                  <p>内容来源：百度文库</p>
                </div>
                <el-button slot="reference">OPEN ME</el-button>
              </el-popover>
              <el-button style="margin: 10px" @click="addUserBody()"
                >记录一下</el-button
              >
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="其他">
          ———— ————
          <div style="padding: 20px">
            <el-form :inline="true" :model="UserBody" class="demo-form-inline">
              <h5>牙齿数量：这将有助于分析您的健康状况</h5>
              <h5>握力指数：握力体重指数=握力(Kg)÷体重(Kg)×100，一般大于50</h5>
              <el-form-item label="牙齿数量">
                <el-input
                  v-model="UserBody.tooth"
                  placeholder="牙齿数量"
                ></el-input>
              </el-form-item>
              <el-form-item label="握力指数">
                <el-input v-model="UserBody.grip" placeholder="123"></el-input>
              </el-form-item>
            </el-form>
            <el-button @click="addUserBody()">记录一下</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
      <!-- ubody over -->
      <div>
        <el-button
          @click="drawer = true"
          class="pull-right"
          type="text"
          style="margin: 20px; font-size: 18px"
        >
          每日一记 -> 身高体重
        </el-button>
        <!-- <el-button
          class="pull-right"
          type="text"
          style="margin: 20px; font-size: 18px"
        >
          从我的信息中获取（查询我的数据）
        </el-button> -->
        <router-link
          style="text-decoration: none; color: #909399"
          :router="true"
          to="/personal_center"
        >
          <el-button
            class="pull-right"
            type="text"
            style="margin: 20px; font-size: 18px"
          >
            Go-> 『个人中心』
          </el-button>
        </router-link>
      </div>
      <!-- Echars 开始 -->
      <!-- <div style="width: 100%; height: 400px"></div> -->
      <!-- Echars 结束 -->

      <!-- 主页面显示结束 -->
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.userInfo.username = window.sessionStorage.getItem("user");
    this.UserBody.username = window.sessionStorage.getItem("user");
    // 打开界面实现查询用户信息功能
    this.getUserInfo();
    this.getUserHWList();
  },
  computed: {
    // 标注返回值  否则watch会导致data定义数据时，类型消失
    greeting() {
      return this.greet() + "!";
    },
  },
  data() {
    return {
      // 弹框
      Dialogvital: false,
      Dialogvision: false,
      Dialogtemperature: false,
      Dialogheart: false,
      Dialoglegspeed: false,
      // 视力表
      visionTable: [
        { china: "3.0", world: "0.01" },
        { china: "3.1", world: "0.012" },
        { china: "3.2", world: "0.015" },
        { china: "3.3", world: "0.02" },
        { china: "3.4", world: "0.025" },
        { china: "3.5", world: "0.03" },
        { china: "3.6", world: "0.04" },
        { china: "3.7", world: "0.05" },
        { china: "3.8", world: "0.06" },
        { china: "3.9", world: "0.08" },
        { china: "4.0", world: "0.1" },
        { china: "4.1", world: "0.12" },
        { china: "4.2", world: "0.15" },
        { china: "4.3", world: "0.2" },
        { china: "4.4", world: "0.25" },
        { china: "4.5", world: "0.3" },
        { china: "4.6", world: "0.4" },
        { china: "4.7", world: "0.5" },
        { china: "4.8", world: "0.6" },
        { china: "4.9", world: "0.8" },
        { china: "5.0", world: "1.0" },
        { china: "5.1", world: "1.2" },
        { china: "5.2", world: "1.5" },
        { china: "5.3", world: "2.0" },
      ],
      // tab步骤条
      tabPosition: "left",
      // 身体表单
      UserBody: {
        username: "",
        vital: "",
        temperature: "",
        pblood: "",
        fblood: "",
        gblood: "",
        vision: "",
        hipline: "",
        chest: "",
        waistline: "",
        tooth: "",
        legspeed: "",
        grip: "",
        heart: "",
        times: "",
      },
      // 步骤条
      active: 0,
      //查询信息封装的实体
      queryInfo: {
        query: "", //  查询信息  模糊查询的内容
        pageNum: 1, //  当前页
        pageSize: 10, //  每页最大数
      },
      UserHWList: [],
      number: 0, //  初始的最大值为 0
      // 主内容
      // 右侧双开抽屉
      drawer: false,
      innerDrawer: false,
      loading: false,
      // 侧边用户基本信息表单
      userInfo: {
        username: "",
        sex: "",
        birthday: "",
        ages: "",
        height: "",
        weight: "",
        target: "",
        bmi: "",
        bfat: "",
        timesss: "",
      },
      //  用户的表单验证规则
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 12,
            message: "长度在 2 到 12 个字符",
            trigger: "blur",
          },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        birthday: [
          {
            // type: "date",  //该问题会导致日期报错 dateObject.getTime is not a function
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    // 添加用户数据
    addUserBody() {
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
      this.UserBody.times =
        date.year + "-" + newmonth + "-" + day + " " + h + ":" + m + ":" + s;
      this.$refs.addUserBodyRef.validate(async (valid) => {
        // 验证
        if (!valid) return;
        // 提交结果
        const { data: ui } = await this.$http.post(
          "addUserBody",
          this.UserBody
        );
        if (ui != "success") {
          // console.log(that.form);
          console.log(ui);
          return this.$message.error("添加失败！！");
        }
        // this.$message.success("添加成功！！");
        console.log("添加成功！！");
      });
    },
    // 查询用户信息
    async getUserInfo() {
      let username = this.userInfo.username;
      const { data: res } = await this.$http.get(
        "findUserInfo?username=" + username
      );
      this.userInfo = res; // 将返回数据赋值  到 userInfo  用户数据封装
      // console.log(res);
    },
    // 查询用户身高体重历史信息
    async getUserHWList() {
      let username = this.userInfo.username;
      const { data: res } = await this.$http.get(
        "findHWInfo?username=" + username
      );
      this.UserHWList = res.data;
      this.number = res.numbers;
      // console.log(res);
    },
    // 分页功能
    handleSizeChange(newSize) {
      this.queryInfo.pageSize = newSize;
      this.getUserHWList();
    },
    // 当前页数
    handleCurrentChange(newNum) {
      this.queryInfo.pageNum = newNum;
      this.getUserHWList();
    },
    // 关闭
    handleClose(done) {
      //   this.$confirm("还有未保存的工作哦确定关闭吗？")
      //     .then((_) => {
      //       done();
      //     })
      //     .catch((_) => {});
      this.innerDrawer = false;
    },
    // 一级取消
    cancelForm() {
      this.loading = false;
      this.drawer = false;
      clearTimeout(this.timer);
    },
    // 二级打开
    openUserHWList() {
      this.innerDrawer = true;
      this.getUserHWList();
    },
    // 二级取消
    // cancelForm2() {
    //   this.innerDrawer = false;
    // },
    // 侧边抽屉 -- 添加用户信息的方法 --  表单的方法
    // submitForm(formName) {
    addUserInfo() {
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
      this.userInfo.timesss =
        date.year + "-" + newmonth + "-" + day + " " + h + ":" + m + ":" + s;
      this.$refs.userInfo.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.put(
          "addUserInfo",
          this.userInfo
        );
        if (this.loading) {
          return;
        }
        this.$confirm("确定更新您的基本信息吗？")
          .then((_) => {
            this.loading = true;
            this.timer = setTimeout(() => {
              // done();
              // 动画关闭需要一定的时间
              setTimeout(() => {
                this.loading = false;
                this.drawer = false;
                if (res != "success") {
                  return this.$message.error("更新失败！！");
                }
                this.$message.success("更新成功！ 感谢您的使用！");
                // this.dialog = false;
                this.getUserInfo();
              }, 400);
            }, 1200);
          })
          .catch((_) => {});
      });
    },
    // 重置
    resetForm(formName) {
      // this.$refs[formName].resetFields();
      // this.userInfo.birthday = "2000-01-01";
      this.userInfo.height = "";
      this.userInfo.weight = "";
      this.userInfo.target = "";
    },
    // 日期选择的方法
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    // 日期与过滤器
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("timesss");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    filterTag(value, row) {
      return row.timesss === value;
    },
  },
  watch: {
    "userInfo.birthday": {
      handler(newVal, oldVal) {
        // console.log(newVal,oldVal)
        var ages,
          // newVal = this.userInfo.birthday,
          date1Arr = newVal.split("-"),
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
            if (ages == -1) {
              return this.$message.error("年龄输入有误！");
            }
          }
        }
        // document.write(ages);
        this.userInfo.ages = ages;
        // console.log(ages);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
/* 顶部样式 */
.el-breadcrumb {
  margin: 15px;
  font-size: 18px;
}
// .box0 {
//   // background-color: #fff;
// }
// .box1 {
// }
.box2 {
  margin-bottom: 10px;
  background-color: #fff;
  opacity: 0.95;
}
</style>