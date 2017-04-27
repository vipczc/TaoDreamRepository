<template lang="html">
  <!-- 额度赠送 -->
  <div class="giveQuota">
    <el-dialog title="赠送" v-model="giveQuotaDialog.show = giveValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
    <div class="cir" @click="giveQuotaValueOver"><i class="el-icon-close i-top" ></i></div>
        <el-col :span="20">

        </el-col>
        <el-col :span="4">

        </el-col>
          <el-form :label-position="labelPosition" label-width="80px" :model="formGiveQuota" :rules="rulesGiveQuota" ref="formGiveQuota">
            <el-form-item label="会员账号:" prop="id">
            <el-input v-model="formGiveQuota.id" placeholder="请输入会员账号/手机号" :disabled="disInput" @blur="getTrueName"></el-input>
            </el-form-item>
            <el-form-item label="会员姓名:">
            {{ name }}
            </el-form-item>
            <el-col :span="20">
              <el-form-item label="赠送额度:" prop="giveName">
              <el-input v-model="formGiveQuota.giveName" placeholder="请输入金额(元)" :disabled="disInput"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="1">
              <el-form-item :label="String(giveValue.expenseLimitSum+'￥')">

              </el-form-item>
            </el-col>


        </el-form>

    <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="giveQuotaValue('formGiveQuota')" :disabled="disInput" :loading="disInput">提 交</el-button>

    </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  userApi
} from '../api/apiCode.js'
export default {
  data() {

    var checkNum = (rule, value, callback) => {
      if (!/^1[34578]\d{9}$/.test(value)) {
        callback(new Error('请输入正确的手机号码'));
      }
      callback();
    }
    var checkNum2 = (rule, value, callback) => {
      if (!/^[1-9]\d*$/.test(value)) {
        callback(new Error('请输入非零正整数'));
      }
      if (value > this.giveValue.expenseLimitSum) {

        callback(new Error('大于当前消费额度'));
      }
      callback();
    }
    return {
      disInput: false,
      isbUserIf: false, //是否获取到用户信息
      rulesGiveQuota: {
        id: [{
          validator: checkNum,
          trigger: 'blur'
        }],
        giveName: [{
          validator: checkNum2,
          trigger: 'blur'
        }]
      },
      name: '',
      labelPosition: 'left',
      giveQuotaDialog: {
        show: false,
        upData: true,
      },
      formGiveQuota: {
        id: '', //会员账号
        name: '', //会员姓名
        giveName: '' //赠送姓名
      },

      tmdID: 0,
    }

  },
  props: {
    giveValue: Object
  },
  methods: {
    getTrueName() {
      let formData = new FormData()
      formData.append('mobile', this.formGiveQuota.id) //受赠者id
      this.$http.post(userApi.selectMemberByMobile, formData).then((objData) => {

        if (objData.data.ERRORCODE == 0) {
          this.name = objData.data.RESULT.trueName
          this.tmdID = objData.data.RESULT.id

        } else {
          this.name = '未找到该用户！'
        }

      }).catch((err) => {
        console.log('访问接口失败' + err);
      })
    },
    giveQuota() {

    },
    giveQuotaValueOver() {

      this.giveQuotaDialog.show = false
      this.$emit('give', this.giveQuotaDialog)
    },
    giveQuotaValue(formName) {

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.disInput = true

          this.submitForm() //提交提现请求
        } else {
          console.log('error submit!!');
          return false;
        }
      });


    },
    submitForm() {

      let formData = new FormData()
      formData.append('receiptMemberId', this.tmdID) //受赠者id
      formData.append('quotaAmount', this.formGiveQuota.giveName) //赠送额度

      this.$http.post(userApi.giveQuato, formData).then((objData) => {


        if (objData.data.ERRORCODE == 0) {
          this.disInput = false
          this.giveQuotaDialog.show = false
          this.giveQuotaDialog.upData = !this.giveQuotaDialog.upData
          this.$emit('give', this.giveQuotaDialog)
          this.scuess()
        } else {
          this.errorScuess()

        }

      }).catch((err) => {
        this.errorScuess()
      })
    },
    //失去焦点获取用户信息

    scuess() {
      this.formGiveQuota.id = ''
      this.formGiveQuota.giveName = ''
      this.$notify.success({
        title: '赠送成功',
        message: '成功后再24小时内到账请注意查收',
        offset: 150
      });
    },
    errorScuess() {
      this.giveQuotaDialog.show = false
      this.giveQuotaDialog.upData = !this.giveQuotaDialog.upData
      this.$emit('give', this.giveQuotaDialog)
      this.disInput = false
      this.formGiveQuota.giveName = ''
      this.formGiveQuota.id = ''
      this.$notify.error({
        title: '操作',
        message: '赠送失败',
        offset: 150
      });
    }
  }
}
</script>

<style lang="css">
.giveQuota .el-notification{
 right: 800px !important;
}
</style>
