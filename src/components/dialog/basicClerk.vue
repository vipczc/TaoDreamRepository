<template lang="html">
  <div class="basicClerk">
    <!-- 对话框 基本信息咨询师 -->
    <el-dialog title="修改密码" v-model="basicClerkDialog = basicClerkValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%">
  <div class="cir" @click="onBasicClerkOver"><i class="el-icon-close i-top" ></i></div>
          <el-form label-width="80px" :model="formBasicClerk" :rules="rulesBasicClerk" ref="formBasicClerk">
            <div class="dialog-list-box">
              <div class="box-left">
                <el-form-item label="账号:">
                <span>{{ basicClerkValue.mobile }}</span>
                </el-form-item>
              </div>
              <div class="box-right">
                <el-form-item label="密码:">
                <span>{{ basicClerkValue.pwd }}</span>
                </el-form-item>
              </div>

              <el-form-item label="验证码:" prop="verificationCode">
              <el-input :disabled="disInput" v-model="formBasicClerk.verificationCode"  placeholder="请输入验证码"><el-button  slot="append" type="primary" :disabled="isgetverify" @click="sendAuthCode">{{ textb }}</el-button></el-input>
              </el-form-item>
              <el-form-item label="新的密码:" prop="newPassWord">
              <el-input :disabled="disInput" v-model="formBasicClerk.newPassWord" type="password" placeholder="请输入新的密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码:" prop="okPassWord">
              <el-input :disabled="disInput" v-model="formBasicClerk.okPassWord" type="password" placeholder="请输入确认密码"></el-input>
              </el-form-item>
            </div>


        </el-form>
  <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="onBasicClerk('formBasicClerk')">提 交</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import {
  userApi,
  clerkApi,
  businessAPi
} from '../api/apiCode.js'
export default {
  data() {

    var checkPass = (rule, value, callback) => {
      if (!/^[a-zA-Z0-9]{6,18}$/.test(value)) {
        callback(new Error('请输入格式正确的密码6-18位可由字符数字字母组成!'));
      }
      callback();
    }
    var checkStr = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error('请输入正确的字符,英文或数字'));
      }

      callback();
    }

    var checkStrTwo = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error('请输入正确的字符,英文或数字'));
      }
      if (value !== this.formBasicClerk.newPassWord) {
        callback(new Error('两次输入密码不一致!'));
      }

      callback();
    }

    return {
      disInput: false,
      rulesBasicClerk: {
        verificationCode: [{
          validator: checkStr,
          trigger: 'blur'
        }],
        newPassWord: [{
          validator: checkPass,
          trigger: 'blur'
        }],
        okPassWord: [{
          validator: checkStrTwo,
          trigger: 'blur'
        }]
      },
      con: 0,
      isgetverify: false,
      textb: '发送验证码',
      formBasicClerk: {
        accountNumber: '15602365669', //账号
        verificationCode: '', //验证码
        oldPassWord: '123456', //旧密码
        newPassWord: '', //新密码
        okPassWord: '' //确认密码
      },
      basicClerkDialog: false
    }
  },
  props: {
    basicClerkValue: Object
  },
  methods: {
    sendAuthCode() {

      if (this.isgetverify == false) {
        var si = setInterval(() => {
          this.textb = '已发送(' + this.con + ')s'
          this.con++
            if (this.con >= 62) {
              console.log(this.con);
              this.textb = '获取验证码'
              this.con = 0
              this.isgetverify = false
              window.clearInterval(si)
            }
        }, 1000)
        this.isgetverify = true
        console.log('发送请求');
        this.codeVerification()
      } else {
        console.log('不发送请求');
      }
    },
    onBasicClerkOver() {

      //1000为1秒钟
      this.basicClerkDialog = false
      this.$emit('clerkBasic', this.basicClerkDialog)
    },
    onBasicClerk(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {


          this.disInput = true
          this.submitForm() //提交 请求


        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
    codeVerification() {
      this.$http.post(clerkApi.sendCode).then((objData) => { //淘豆兑换
        console.log(objData.data.RESULT == 'ok');

      }).catch((err) => {
        console.log(err);
      })
    },
    submitForm() {
      let formData = new FormData()
      formData.append('checkCode', this.formBasicClerk.verificationCode) //姓名
      formData.append('mobile', this.basicClerkValue.mobile) //电话
      formData.append('password', this.formBasicClerk.newPassWord) //电话
      formData.append('confirmPassword', this.formBasicClerk.okPassWord) //电话
      this.$http.post(clerkApi.updatePassword, formData).then((objData) => { //淘豆兑换
        if (objData.data.RESULT == 'ok') {
          this.messageOK() //成功

          setTimeout(() => {
            window.location = '/'
          }, 1500);

          // this.basicClerkDialog = false
          // this.$emit('clerkBasic', this.basicClerkDialog)
        }
        this.disInput = false
      }).catch((err) => {
        console.log(err);
      })
    },

    messageOK() {
      this.$message({
        message: '恭喜你，密码修改成功! 正在跳转登录页面请稍后....',
        type: 'success'
      });
    }
  }
}
</script>

<style lang="css" >

.basicClerk .el-input-group__append .el-button{
  font-size: inherit;
    color: #fff;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #20a0ff;
    border: 1px solid #20a0ff;
}
 .basicClerk .el-notification{
  right: 800px !important;
}
</style>
