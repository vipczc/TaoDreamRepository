<template lang="html">
  <div class="basicClerk">
    <!-- 对话框 基本信息咨询师 -->
    <el-dialog title="修改密码" v-model="basicClerkDialog = basicClerkValue" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%">
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
              <el-input v-model="formBasicClerk.verificationCode" placeholder="请输入验证码"><el-button  slot="append">发送验证码</el-button></el-input>
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
    basicClerkValue: Boolean
  },
  methods: {
    onBasicClerk() {
      this.basicClerkDialog = false
      this.$emit('clerkBasic', this.basicClerkDialog)
    }
  }
}
</script>

<style lang="css">
</style>
