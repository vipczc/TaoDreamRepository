<template lang="html">
  <!-- 提现 -->
  <div class="withdrawSum">
    <el-dialog title="提现" v-model="withdrawSumDialog = sumValue" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%">
  <div class="cir" @click="monitorValue"><i class="el-icon-close" ></i></div>
          <el-form  label-width="80px" :model="formLabelAlign">
            <div class="dialog-list-box">
              <el-form-item label="金额:" :labelPosition="labelPosition">
              <el-input v-model="formLabelAlign.sum" placeholder="提现金额大于10" @change="sumChange"></el-input>
              </el-form-item>
              <div class="box-left">
                <div class="sum-box">
                  <el-form-item label="手续费用:">
                  <span>{{ getDataResource.handlingFee }}</span>
                  </el-form-item>
                  <el-form-item label="到账金额:">
                  <span>{{ getDataResource.arrivalAmount }}</span>
                  </el-form-item>
                  <el-form-item label="开户银行:">
                  <span>{{ getDataResource.bankAccount }}</span>
                  </el-form-item>
                  <el-form-item label="支行信息:">
                  <span>{{ getDataResource.branchInformation }}</span>
                  </el-form-item>
                  <el-form-item label="银行卡号:">
                  <span>{{ getDataResource.bankCard }}</span>
                  </el-form-item>

                </div>
              </div>
              <div class="box-right">

              </div>
            </div>

        </el-form>



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
      getDataResource: {
        handlingFee: '', //手续费用
        arrivalAmount: '', //到账金额
        bankAccount: '', //开户银行
        branchInformation: '', //支行信息
        bankCard: '', //银行卡号
      },
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
    sumChange() {
      console.log('123');
    },
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
