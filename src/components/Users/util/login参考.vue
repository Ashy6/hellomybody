<template>
  <div>
    <!-- 登录页 -->
    <div class="register_nav">
      <div>
        <div><img :src="imglogo" /></div>
        <div>欢迎登录</div>
      </div>
    </div>
    <div class="register_content">
      <div class="white">
        <div>
          <img :src="register" />
        </div>
        <Tabs type="card" class="Tabs">
          <TabPane label="账户登录">
            <Form
              ref="formPhoneLogin"
              :model="formPhoneLogin"
              :rules="ruleInline"
              style="width: 20rem; margin: 0 auto"
            >
              <FormItem prop="phone">
                <Input
                  type="text"
                  v-model="formPhoneLogin.phone"
                  placeholder="请输入手机号码"
                >
                  <Icon type="md-person" slot="prepend" size="18" />
                </Input>
              </FormItem>
              <FormItem prop="password" style="margin-top: 2rem">
                <Input
                  type="password"
                  v-model="formPhoneLogin.password"
                  placeholder="请输入登录密码"
                >
                  <Icon type="md-lock" slot="prepend" size="18" />
                </Input>
              </FormItem>
              <FormItem>
                <Button type="error" long @click="login('formPhoneLogin')"
                  >登录</Button
                >
              </FormItem>
            </Form>
            <div class="top">
              <Checkbox :checked.sync="single">下次自动登录</Checkbox>
              <div style="float: right">
                <a href="#">忘记密码？</a>
                <router-link to="/register" style="color: red"
                  >立即注册</router-link
                >
              </div>
              <br /><br />
              <p style="float: left">其他登录 :</p>
              <img
                style="width: 1.5rem; height: 1.5rem"
                src="./img/weixin.png"
              />
            </div>
          </TabPane>
          <TabPane label="短信快捷登录">
            <Form
              ref="formMsgLogin"
              :model="formMsgLogin"
              :rules="ruleInline"
              style="width: 20rem; margin: 0 auto"
            >
              <p>验证即登录，未注册将自动创建大麦网账号</p>
              <br />
              <FormItem prop="phone">
                <Input
                  type="text"
                  v-model="formMsgLogin.phone"
                  placeholder="请输入手机号码"
                >
                  <Icon type="md-person" slot="prepend" size="18" />
                </Input>
              </FormItem>
              <FormItem prop="vcode" style="margin-top: 2rem">
                <Input
                  type="text"
                  v-model="formMsgLogin.vcode"
                  placeholder="请输入动态密码"
                  style="width: 10rem"
                >
                  <Icon type="md-lock" slot="prepend" size="18" />
                </Input>
                <Button
                  :size="buttonSize"
                  type="default"
                  style="margin-top: -1.9rem; float: right"
                  @click="getCode"
                  >发送动态密码</Button
                >
              </FormItem>
              <FormItem>
                <Button
                  type="error"
                  long
                  @click="login('formMsgLogin')"
                  style="margin-top: 1rem"
                  >登录</Button
                >
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
    <Commonfoot />
  </div>
</template>
<script>
import validator from "validator";
import message from "@/utils/message";
import back from "@/utils/back";
import Commonfoot from "../footer/common";
import imglogo from "./img/logo.png";
import register from "./img/loginImg.jpg";
export default {
  components: { Commonfoot },
  data() {
    return {
      imglogo: imglogo,
      register: register,
      formPhoneLogin: {
        phone: "",
        password: "",
      },
      formMsgLogin: {
        phone: "",
        vcode: "",
      },
      ruleInline: {
        phone: [
          { required: true, message: "请输入手机号码！", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (!validator.isMobilePhone(value, "zh-CN")) {
                callback(new Error("请输入正确的手机号码"));
              }
              callback();
            },
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码！", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码不能小于6位！",
            trigger: "blur",
          },
        ],
        vcode: [{ required: true, message: "请填写验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 点击“获取验证码”按钮时提交请求获取验证码
    getCode() {
      if (!validator.isMobilePhone(this.formMsgLogin.phone || "", "zh-CN")) {
        return this.$Message.error("请输入正确的手机号");
      }
      this.$http
        .postUserCode(this.formMsgLogin.phone)
        .then((res) => {
          const { messageType, defMsg } = message(
            res,
            "验证码发送成功",
            "验证码发送失败"
          );
          this.$Message[messageType](res.msg || defMsg);
        })
        .catch((err) => console.log(err));
    },
    // 点击“账户登录”
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("恭喜您，登录成功!");
          this.$router.push("/");
          // this.$router.replace('/');
        } else {
          this.$Message.error("很遗憾，登录失败!");
        }
      });
    },
    // 点击“短信快捷登录”
    //  login(name) {
    //     this.$refs[name].validate((valid) => {
    //         if (valid) {
    //             this.$Message.success('恭喜您，登录成功!');
    //             this.$router.push('/');
    //         } else {
    //             this.$Message.error('很遗憾，登录失败!');
    //         }
    //     })
    // },
    login(name) {
      this.$refs[name].validate((valid) => {
        if (!valid) {
          return this.$Message.error("表单验证失败");
        }

        let loginUrl;
        let args;
        switch (name) {
          case "formPhoneLogin": {
            const { phone, password } = this.formPhoneLogin;
            loginUrl = "postUserLogin";
            args = [phone, password];
            break;
          }
          case "formMsgLogin": {
            const { phone, vcode } = this.formMsgLogin;
            loginUrl = "postUserLoginForMsg";
            args = [phone, vcode];
            break;
          }
          default: {
            throw new Error(`${name} is not the expected value`);
          }
        }
        this.$http[loginUrl](...args)
          .then((res) => {
            const { messageType, defMsg, success } = message(
              res,
              "登录成功",
              "登录失败"
            );
            this.$Message[messageType]({
              content: res.msg || defMsg,
              onClose: () => {
                if (success) back(this.$route);
              },
            });
          })
          .catch((err) => console.log(err));
      });
    },
  },
};
</script>
<style scoped>
.register_nav {
  width: 100%;
  height: 6rem;
  background-color: white;
}
.register_nav > div {
  width: 57rem;
  margin: 0 auto;
}
.register_nav > div div:nth-of-type(1) {
  border-right: 3px solid #f5f5f5;
  width: 13rem;
  height: 4rem;
  margin-top: 1rem;
  float: left;
}
.register_nav > div div:nth-of-type(1) img {
  width: 12rem;
  height: 4rem;
}
.register_nav div:nth-of-type(2) {
  line-height: 6rem;
  font-size: 1.4rem;
  font-weight: 500;
  position: relative;
  left: 2rem;
}
.register_content {
  width: 100%;
  height: 34rem;
  background-color: #f5f5f5;
}
.white {
  width: 57rem;
  height: 25rem;
  margin: 0 auto;
  position: relative;
  top: 4.5rem;
}
.white div:first-child img {
  width: 33rem;
  height: 25rem;
  float: left;
}
.Tabs {
  width: 22rem;
  height: 25rem;
  margin-left: 34rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.top {
  width: 20rem;
  margin: -1rem auto;
}
</style>