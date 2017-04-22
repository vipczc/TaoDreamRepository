<template lang="html">
  <!-- 提现 -->
  <div class="withdrawSum">
    <el-dialog title="提现" v-model="withdrawSumDialog.show = sumValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%">
  <div class="cir" @click="monitorValueOver"><i class="el-icon-close" ></i></div>
          <el-form  label-width="80px" :model="formLabelAlign">
            <div class="dialog-list-box">
              <el-col :span="20">
                <el-form-item label="金额:" :labelPosition="labelPosition">
                <el-input v-model="formLabelAlign.sum" placeholder="提现金额大于10" @change="sumChange"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item :label="getDataResource.withdrawSum">
                  ￥
                </el-form-item>
              </el-col>
              <div class="box-left">
                <div class="sum-box">
                  <el-form-item label="手续费用:">
                  <span>{{ getDataResource.handlingFee}}元</span>
                  </el-form-item>
                  <el-form-item label="到账金额:">
                  <span>{{ getDataResource.arrivalAmount}}元</span>
                  </el-form-item>
                  <el-form-item label="开户银行:">
                  <span>{{ getDataResource.bankAccount}}</span>
                  </el-form-item>
                  <el-form-item label="支行信息:">
                  <span>{{ getDataResource.branchInformation}}</span>
                  </el-form-item>
                  <el-form-item label="银行卡号:">
                  <span>{{ getDataResource.bankCard}}</span>
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
import {
  userApi,
  businessAPi,
  clerkApi
} from '../api/apiCode.js'
export default {
  data() {
    this.offDown = true
    return {
      offDown: true, //关闭按钮
      labelPosition: 'left',
      getDataResource: {
        handlingFee: '', //手续费用
        arrivalAmount: 0, //到账金额
        bankAccount: '', //开户银行
        branchInformation: '', //支行信息
        bankCard: '', //银行卡号
        withdrawSum: '' //余额

      },
      formLabelAlign: {
        sum: '',
      },
      inputValue: 0,
      withdrawSumDialog: {
        show: false,
        upData: false
      }
    }
  },
  props: {
    sumValue: Object
  },
  watch: {
    'withdrawSumDialog.show': 'disposeHTTP'
  },
  methods: {
    disposeHTTP() {
      if (this.sumValue.userType == 1) { //判断用户 会员
        if (!this.withdrawSumDialog.show == false) { //控制数据获取
          //userApi.bankInfoDialog //提现窗口信息
          this.$http.post(userApi.bankInfoDialog).then((objData) => {
            console.log(objData.data);
            if (objData.data.ERRORCODE == 0) { //成功
              this.getDataResource.branchInformation = objData.data.RESULT.bankName //	支行名称
              this.getDataResource.bankAccount = objData.data.RESULT.branchName //	银行名称
              this.getDataResource.bankCard = objData.data.RESULT.cardNumber //	银行卡号
              this.getDataResource.handlingFee = objData.data.RESULT.withDrawFee //手续费(元)
              //缺省 昨日获得淘豆
            }
          }).catch((err) => {
            console.log(err);
          })
          this.getDataResource.withdrawSum = String(this.sumValue.withdrawSum) //余额
        }

      } else if (this.sumValue.userType == 2) { //商铺
        //提现信息
        if (!this.withdrawSumDialog.show == false) { //控制数据获取
          //userApi.bankInfoDialog //提现窗口信息
          this.$http.post(businessAPi.index).then((objData) => {

            if (objData.data.ERRORCODE == 0) { //成功
              this.getDataResource.branchInformation = objData.data.RESULT.branchName //	支行名称
              this.getDataResource.bankAccount = objData.data.RESULT.bankName //	银行名称
              this.getDataResource.bankCard = objData.data.RESULT.cardNumber //	银行卡号
              this.getDataResource.handlingFee = 10 //手续费(元)
              this.getDataResource.withdrawSum = String(objData.data.RESULT.balance) //余额
              //缺省 昨日获得淘豆
            }
          }).catch((err) => {
            console.log(err);
          })

        }
      } else if (this.sumValue.userType == 3) { //咨询师
        if (!this.withdrawSumDialog.show == false) { //控制数据获取
          //userApi.bankInfoDialog //提现窗口信息
          this.$http.post(businessAPi.index).then((objData) => {

            if (objData.data.ERRORCODE == 0) { //成功
              this.getDataResource.branchInformation = objData.data.RESULT.branchName //	支行名称
              this.getDataResource.bankAccount = objData.data.RESULT.bankName //	银行名称
              this.getDataResource.bankCard = objData.data.RESULT.cardNumber //	银行卡号
              this.getDataResource.handlingFee = objData.data.RESULT.withDrawFee //手续费(元)
              this.getDataResource.withdrawSum = String(objData.data.RESULT.laveQuota) //余额
              //缺省 昨日获得淘豆
            }
          }).catch((err) => {
            console.log(err);
          })

        }
      }


    },
    sumChange() { //计算 提现实际金额
      if (this.formLabelAlign.sum > 10) { //金额 大于10
        this.getDataResource.arrivalAmount = this.formLabelAlign.sum - this.getDataResource.handlingFee
      } else { //小于 == 0
        this.getDataResource.arrivalAmount = 0
      }

    },
    monitorValueOver() {
      this.withdrawSumDialog.show = false
      this.$emit('withdraw', this.withdrawSumDialog)
    },
    monitorValue() {
      //提交提现请求 成功后进行关闭

      // let url = '/taodream-consumer/memberWithDraw/withdrawals'
      // this.$http.post(url, {
      //   withdrawAmount: this.getDataResource.arrivalAmount
      // }).then((objectData) => {
      //   console.log('提现成功');
      //   console.log(objectData);
      //   isb = true
      // }).catch((error) => {
      //   console.log(error);
      // })

      if (this.sumValue.userType == 1) { //会员

      } else if (this.sumValue.userType == 2) { //商家
        let formData = new FormData()
        formData.append('money', this.formLabelAlign.sum)

        this.$http.post(businessAPi.takeCash, formData).then((objData) => {
          console.log(objData.data);
          if (objData.data.RESULT == 'ok') {

            //判断 是否 提现成功
            this.withdrawSumDialog.show = false
            this.withdrawSumDialog.upData = !this.withdrawSumDialog.upData
            this.$emit('withdraw', this.withdrawSumDialog)
            this.scuess()

          }

        }).catch((err) => {
          console.log('访问错误1');
        })
      } else if (this.sumValue.userType == 3) { //咨询师

      }




    },

    scuess() {
      this.$notify.success({
        title: '提现成功',
        message: '成功后再24小时内到账请注意查收',
        offset: 150
      });
    }

  },
  beforeDestroy() {
    //路由改变替换整体 销毁调用
    console.log('销毁中');
  }
}
</script>

<style lang="css">
.sum-box{
  text-align:left;
}
.sum-box span{
  /*display: block;*/
  margin-top: 20px;
}
.el-notification{
  right: 800px !important;
}

</style>
