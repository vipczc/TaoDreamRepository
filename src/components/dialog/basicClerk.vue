<template lang="html">
  <div class="basicClerk">
    <!-- 对话框 基本信息咨询师 -->
    <el-dialog title="修改密码" v-model="basicClerkDialog = basicClerkValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%">
  <div class="cir" @click="onBasicClerk"><i class="el-icon-close" ></i></div>
          <el-form label-width="80px" :model="formBasicClerk">
            <div class="dialog-list-box">
              <div class="box-left">
                <el-form-item label="账号:">
                <span>{{ formBasicClerk.accountNumber }}</span>
                </el-form-item>
              </div>
              <div class="box-right">
                <el-form-item label="密码:">
                <span>{{ formBasicClerk.oldPassWord }}</span>
                </el-form-item>
              </div>

              <el-form-item label="验证码:">
              <el-input v-model="formBasicClerk.verificationCode" placeholder="请输入验证码"><el-button  slot="append" type="primary" :disabled="isgetverify" @click="sendAuthCode">{{ textb }}</el-button></el-input>
              </el-form-item>
              <el-form-item label="新的密码:">
              <el-input v-model="formBasicClerk.newPassWord" placeholder="请输入新的密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码:">
              <el-input v-model="formBasicClerk.okPassWord" placeholder="请输入确认密码"></el-input>
              </el-form-item>
            </div>


        </el-form>
  <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="onBasicClerk">提 交</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      } else {
        console.log('不发送请求');
      }
    },
    onBasicClerk() {
      this.basicClerkDialog = false
      this.$emit('clerkBasic', this.basicClerkDialog)
    }
  }
}
</script>

<style lang="css">

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
