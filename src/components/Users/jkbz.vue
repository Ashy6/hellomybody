<template>
  <div class="box0">
    <div class="box1 container">
      <!-- 顶部导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hellou' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据分析</el-breadcrumb-item>
        <el-breadcrumb-item>健康标准</el-breadcrumb-item>
      </el-breadcrumb>

      <!-- 1层内容开始 -->
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
            <!-- size-change每页最大变化数 
                current-change当前变化数 
                layout功能组件 
                page-size="queryInfo.number" 当前页码
                total 获取的总数据  -->
            <!-- <div>
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="queryInfo.pageNum"
                :page-size="queryInfo.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="number"
              >
              </el-pagination>
            </div> -->
            <!-- 2层底部按钮 -->
            <el-form label-width="50px" class="demo-ruleForm">
              <!-- <el-form-item>
              <el-button @click="cancelForm2">关 闭</el-button>
              </el-form-item> -->
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
            <el-button @click="addUserBody()">记录一下</el-button>
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
            <el-button @click="addUserBody()">记录一下</el-button>
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
          to="/myxx"
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
.box0 {
  // background-color: #fff;
}
.box1 {
}
.box2 {
  margin-bottom: 10px;
  background-color: #fff;
  opacity: 0.95;
}
</style>