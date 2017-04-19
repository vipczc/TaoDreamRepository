<template lang="html">
  <!-- 淘豆兑换 -->
  <div class="tdrecordSum">
    <el-dialog title="兑换" v-model="tdrecordSumDialog = tdValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
    <div class="cir" @click="tdrecordSumValue"><i class="el-icon-close" ></i></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formTDrecordSum">
            <div class="dialog-list-box">
              <el-col :span="20">
                <el-form-item label="兑换淘豆:">
                <el-input v-model="getDataResource.TDMoney = formTDrecordSum.tdCount" placeholder="请输入淘豆个数"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="3" :offset="1">
                <el-form-item :label="getDataResource.TDSum">
                ￥
                </el-form-item>
              </el-col>
              <div class="box-left">
                <div class="sum-box">
                  <el-form-item label="淘豆金额:">
                    <span>{{ getDataResource.TDMoney }}元</span>
                  </el-form-item>
                  </div>
                  </div>

            </div>
        </el-form>


    <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="tdrecordSumValue">提 交</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {

      getDataResource: {
        TDSum: '0', //淘豆余额
        TDMoney: 0 //淘豆金额
      },
      labelPosition: 'left',
      tdrecordSumDialog: false,
      formTDrecordSum: {
        tdCount: '', //淘豆数量

      }
    }

  },
  watch: {
    'tdrecordSumDialog': 'disposeHTTP'
  },
  props: {
    tdValue: Object
  },
  methods: {
    disposeHTTP() {
      if (this.tdValue.userType == 1) { //判断用户 会员
        if (!this.tdrecordSumDialog == false) { //控制数据获取
          // let url = "/taodream-consumer" + '/memberWithDraw/selectBankInfo' //提现信息
          // this.$http.post(url).then((objData) => {
          //   console.log(objData.data);
          //   if (objData.data.ERRORCODE == 0) { //成功
          //     this.getDataResource.branchInformation = objData.data.RESULT.bankName //	支行名称
          //     this.getDataResource.bankAccount = objData.data.RESULT.branchName //	银行名称
          //     this.getDataResource.bankCard = objData.data.RESULT.cardNumber //	银行卡号
          //     this.getDataResource.handlingFee = objData.data.RESULT.withDrawFee //手续费(元)
          //     //缺省 昨日获得淘豆
          //   }
          // }).catch((err) => {
          //   console.log(err);
          // })
          this.getDataResource.TDSum = String(this.tdValue.TDSum) //余额
        }

      } else if (this.tdValue.userType == 2) {
        // let url = "/taodream-consumer" + '/memberWithDraw/selectBankInfo' //提现信息
      }
    },
    tdrecordSumValue() {
      this.tdrecordSumDialog = false

      this.$emit('td', this.tdrecordSumDialog)
    }
  }
}
</script>

<style lang="css">
</style>
