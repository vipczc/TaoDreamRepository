<template lang="html">
  <!-- 提现 -->
  <div class="withdrawSum">
    <el-dialog title="提现" v-model="withdrawSumDialog = sumValue" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
  <div class="cir" @click="monitorValue"><i class="el-icon-close" ></i></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="金额">
            <el-input v-model="formLabelAlign.sum" placeholder="提现金额大于10"></el-input>
            </el-form-item>

        </el-form>
        <div class="sum-box">
          <span>手续费用:10元</span>
          <span>到账金额:232</span>
          <span>开户银行:中国人民银行</span>
          <span>支行信息:22222333333</span>
          <span>银行卡号:一节2节街</span>
        </div>



  <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="monitorValue">提 交</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'left',
      formLabelAlign: {
        sum: '',
      },
      inputValue: 0,
      withdrawSumDialog: false
    }
  },
  props: {
    sumValue: Boolean
  },
  methods: {
    monitorValue() {
      this.withdrawSumDialog = false

      this.$emit('withdraw', this.withdrawSumDialog)
    }
  }
}
</script>

<style lang="css">
.sum-box{
  text-align:left;
}
.sum-box span{
  display: block;
  margin-top: 20px;
}
</style>
