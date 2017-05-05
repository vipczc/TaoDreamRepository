<template lang="html">
  <!-- 淘豆兑换 -->
  <div class="tdrecordSum">
    <el-dialog title="兑换" v-model="tdrecordSumDialog.show = tdValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
    <div class="cir" @click="tdrecordSumValueOver()"><i class="el-icon-close i-top" ></i></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formTDrecordSum" :rules="rulesTDMoney" ref="formTDrecordSum">
            <div class="dialog-list-box">
              <el-col :span="20">
                <el-form-item label="兑换淘豆:" prop="tdCount">
                <el-input v-model.number="formTDrecordSum.tdCount" placeholder="请输入淘豆个数" @change="sumChange" :disabled="disInput"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2" :offset="2">
                <el-form-item :label="String(tdValue.TDSumDialog+' 个')">

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

    <el-button type="primary" @click="tdrecordSumValue('formTDrecordSum')" :disabled="disInput" :loading="disInput">提 交</el-button>
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
    var checkNum = (rule, value, callback) => {
      if (!/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(value)) {
        callback(new Error('请输入正确的淘豆数量,最多2位小数'));
      }
      if (Number(value) > Number(this.tdValue.TDSumDialog)) {

        callback(new Error('大于当前淘豆余额'));
      }
      callback();
    }
    return {
      disInput: false,
      rulesTDMoney: {
        tdCount: [{
          validator: checkNum,
          trigger: 'blur'
        }]
      }, //提示变量
      getDataResource: {
        TDSum: '0', //淘豆余额
        TDMoney: '0' //淘豆金额
      },
      labelPosition: 'left',
      tdrecordSumDialog: {
        show: false,
        upData: true
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
      this.tdrecordSumDialog.show = false

      this.$emit('td', this.tdrecordSumDialog)
    },
    tdrecordSumValue(formName) { //提交

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.disInput = true
          this.submitForm() //提交请求
        } else {
          console.log('error submit!!');
          return false;
        }
      });



    },
    sumChange() {
      if (Number(this.formTDrecordSum.tdCount)) {
        this.getDataResource.TDMoney = this.formTDrecordSum.tdCount
      }

    },

    submitForm() {
      if (this.tdValue.userType == 1) { //会员
        let formData = new FormData()
        console.log(this.getDataResource.TDMoney);
        formData.append('taodouAmount', this.getDataResource.TDMoney)

        this.$http.post(userApi.exchangeTaodou, formData).then((objData) => {


          if (objData.data.ERRORCODE == 0) {
            this.disInput = false
            this.tdrecordSumDialog.show = false
            this.tdrecordSumDialog.upData = !this.tdrecordSumDialog.upData
            this.$emit('td', this.tdrecordSumDialog)
            this.scuess(objData.data.RESULT)
          } else {
            this.errorScuess(objData.data.RESULT)
          }

        }).catch((err) => {
          this.errorScuess()
        })
      } else if (this.tdValue.userType == 2) { //商家

        let formData = new FormData()
        formData.append('taodouAmount', this.getDataResource.TDMoney)

        this.$http.post(businessAPi.exchangeTaodou, formData).then((objData) => {


          //判断 是否 提现成功
          this.disInput = false
          this.tdrecordSumDialog.show = false
          this.tdrecordSumDialog.upData = !this.tdrecordSumDialog.upData
          this.$emit('td', this.tdrecordSumDialog)
          this.scuess(objData.data.RESULT)

        }).catch((err) => {
          this.errorScuess(objData.data.RESULT)
        })
      } else if (this.tdValue.userType == 3) { //咨询师

        let formData = new FormData()
        formData.append('taodouAmount', this.getDataResource.TDMoney)

        this.$http.post(clerkApi.exchangeTaodou, formData).then((objData) => {
          console.log(objData.data);
          //判断 是否 提现成功
          if (objData.data.RESULT == 'ok') {
            this.disInput = false
            this.tdrecordSumDialog.show = false
            this.tdrecordSumDialog.upData = !this.tdrecordSumDialog.upData
            this.$emit('td', this.tdrecordSumDialog)
            this.scuess(objData.data.RESULT)
          } else {
            this.errorScuess(objData.data.RESULT)
          }


        }).catch((err) => {
          this.errorScuess(objData.data.RESULT)
        })

      }

    },
    scuess(result) {
      this.formTDrecordSum.tdCount = ''
      this.$notify.success({
        title: "兑换成功!",
        message: '成功到账请注意查收',
        offset: 150
      });
    },
    errorScuess(reqs) {
      this.disInput = false
      this.tdrecordSumDialog.show = false
      this.tdrecordSumDialog.upData = !this.tdrecordSumDialog.upData
      this.$emit('td', this.tdrecordSumDialog)
      this.formTDrecordSum.tdCount = ''
      this.$notify.error({
        title: '操作',
        message: reqs + ' 兑换失败!',
        offset: 150
      });
    }
  }

}
</script>

<style lang="css">

.tdrecordSum .el-notification{
 right: 800px !important;
}
</style>
