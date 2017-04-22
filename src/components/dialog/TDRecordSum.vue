<template lang="html">
  <!-- 淘豆兑换 -->
  <div class="tdrecordSum">
    <el-dialog title="兑换" v-model="tdrecordSumDialog.show = tdValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
    <div class="cir" @click="tdrecordSumValueOver()"><i class="el-icon-close" ></i></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formTDrecordSum">
            <div class="dialog-list-box">
              <el-col :span="20">
                <el-form-item label="兑换淘豆:">
                <el-input v-model="getDataResource.TDMoney = formTDrecordSum.tdCount" placeholder="请输入淘豆个数"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="3" :offset="1">
                <el-form-item :label="String(tdValue.TDSumDialog)">
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

    <el-button type="primary" @click="tdrecordSumValue()">提 交</el-button>
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
    return {

      getDataResource: {
        TDSum: '0', //淘豆余额
        TDMoney: '0' //淘豆金额
      },
      labelPosition: 'left',
      tdrecordSumDialog: {
        show: false,
        upData: false
      },
      formTDrecordSum: {
        tdCount: '', //淘豆数量

      }
    }

  },
  // watch: {
  //   'tdrecordSumDialog': 'disposeHTTP'
  // },
  props: {
    tdValue: Object
  },
  methods: {
    // disposeHTTP() {
    //   console.log('获取' + this.tdValue.TDSumDialog); //获取
    //   this.getDataResource.TDSum = String(this.tdValue.TDSumDialog)
    // },
    tdrecordSumValueOver() {
      this.tdrecordSumDialog = false

      this.$emit('td', this.tdrecordSumDialog)
    },
    tdrecordSumValue() { //提交
      if (this.tdValue.userType == 1) { //会员
        let formData = new FormData()
        formData.append('taodouAmount', this.getDataResource.TDMoney)

        this.$http.post(userApi.exchangeTaodou, formData).then((objData) => {


          if (objData.data.ERRORCODE == 0) {
            this.tdrecordSumDialog.show = false
            this.tdrecordSumDialog.upData = !this.tdrecordSumDialog.upData
            this.$emit('td', this.tdrecordSumDialog)
            this.scuess(objData.data.RESULT)
          } else {
            this.errorScuess(objData.data.RESULT)
          }

        }).catch((err) => {
          console.log('访问错误2' + err);
        })
      } else if (this.tdValue.userType == 2) { //商家

        let formData = new FormData()
        formData.append('taodouAmount', this.getDataResource.TDMoney)

        this.$http.post(businessAPi.exchangeTaodou, formData).then((objData) => {


          //判断 是否 提现成功
          this.tdrecordSumDialog.show = false
          this.tdrecordSumDialog.upData = !this.tdrecordSumDialog.upData
          this.$emit('td', this.tdrecordSumDialog)
          this.scuess(objData.data.RESULT)

        }).catch((err) => {
          console.log('访问错误1' + err);
        })
      } else if (this.tdValue.userType == 3) { //咨询师

        let formData = new FormData()
        formData.append('taodouAmount', this.getDataResource.TDMoney)

        this.$http.post(clerkApi.exchangeTaodou, formData).then((objData) => {
          console.log(objData.data);
          //判断 是否 提现成功
          this.tdrecordSumDialog.show = false
          this.tdrecordSumDialog.upData = !this.tdrecordSumDialog.upData
          this.$emit('td', this.tdrecordSumDialog)
          this.scuess(objData.data.RESULT)

        }).catch((err) => {
          console.log('访问错误2' + err);
        })


      }

    },
    scuess(result) {
      this.$notify.success({
        title: result == '余额不足' ? "余额不足" : result == 'ok' ? "兑换成功" : '失败',
        message: '成功后再24小时内到账请注意查收',
        offset: 150
      });
    },
    errorScuess() {
      this.$notify.error({
        title: result == '余额不足' ? "余额不足" : result == 'ok' ? "兑换成功" : result,
        message: '这是一条错误的提示消息',
        offset: 150
      });
    }
  }

}
</script>

<style lang="css">
</style>
