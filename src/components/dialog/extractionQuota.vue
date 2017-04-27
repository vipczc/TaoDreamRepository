<template lang="html">
  <!-- 提额 -->
  <div class="extractionQuota">



    <el-dialog title="提额" v-model="extractionQuotaDialog.show = quotaValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
  <div class="cir" @click="extractionValueOver"><i class="el-icon-close i-top" ></i></div>
      <el-row>
          <el-form :label-position="labelPosition" label-width="80px" :model="formExtractionQuota">
            <el-form-item label="新增产品销售合同编号:">
            <el-input v-model="formExtractionQuota.quota" placeholder="请输入合同编号"></el-input>
            </el-form-item>
            <el-col :span="24">
              <el-form-item label="申请消费额度:">
              <el-input v-model="formExtractionQuota.serial" placeholder="请输入金额 单位(元)"></el-input>
              </el-form-item>
            </el-col>
            <!-- <el-col :span="3" :offset='1'>
              <el-form-item :label="String(quotaValue.surplusLimitSum+'￥')">

              </el-form-item>
            </el-col> -->


        </el-form>
        <el-col :span="24">
          <div class="sum-box">
            <p>申请消费额度流程:</p>

            <ul>
              <li>&#12288致电淘梦者俱乐部客服热线申请提高消费额度  （单位：元），我们将根据您以往的消费情况，和近期需要采购商品的清单，帮您进行额度申请备案;</li>
              <li>&#12288在线填写额度申请书； 然后需向我们提供相关证明（如您之前未提供过的房产、车辆、银行储蓄证明等），市场部会根据您的新增资料进行核准。 额度调整，2-7个工作日进行在线审核，具体以审核结果为准，预祝您提额成功！</li>
            </ul>
          </div>
        </el-col>



</el-row>
  <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="extractionValue">提 交</el-button>
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
      labelPosition: 'left',
      extractionQuotaDialog: {
        show: false,
        upData: true
      },
      formExtractionQuota: {
        serial: '', //合同编号
        quota: '' //申请消费额度
      }
    }
  },
  props: {
    quotaValue: Object
  },
  methods: {

    extractionValue() {
      if (this.quotaValue.userType == 1) { //判断用户 会员
        if (!this.extractionQuotaDialog.show == false) { //控制请求
          let formData = new FormData()
          formData.append('orderNo', this.formExtractionQuota.quota) //	申请额度
          formData.append('quotaAmount', this.formExtractionQuota.serial) //应打款
          this.$http.post(userApi.raiseQuato, formData).then((objData) => {
            console.log(objData.data.RESULT);
            if (objData.data.ERRORCODE == 0) { //成功

              this.extractionQuotaDialog.show = false
              this.extractionQuotaDialog.upData = !this.extractionQuotaDialog.upData //更新数据
              this.$emit('extraction', this.extractionQuotaDialog)

              this.scuess(1)

            } else {
              this.scuess(objData.data.RESULT)
            }
          }).catch((err) => {
            console.log(err);
          })

        }
      } else if (this.quotaValue.userType == 2) { //商铺

        if (!this.extractionQuotaDialog.show == false) { //控制数据获取
          let formData = new FormData()
          formData.append('quota', this.formExtractionQuota.quota) //	申请额度
          formData.append('oughtQuota', this.formExtractionQuota.serial) //应打款
          this.$http.post(businessAPi.quotaUpgrade, formData).then((objData) => {
            console.log(objData.data.RESULT);
            if (objData.data.ERRORCODE == 0) { //成功

              this.extractionQuotaDialog.show = false
              this.extractionQuotaDialog.upData = !this.extractionQuotaDialog.upData //更新数据
              this.$emit('extraction', this.extractionQuotaDialog)

              this.scuess(1)

            } else {
              this.scuess(objData.data.RESULT)
            }
          }).catch((err) => {
            console.log(err);
          })

        }
      }

    },
    extractionValueOver() {
      this.extractionQuotaDialog.show = false

      this.$emit('extraction', this.extractionQuotaDialog)
    },
    scuess(result) {
      this.$notify.success({
        title: result == 1 ? '提额申请成功' : this.error(result),
        message: result == 1 ? '成功后我们的客服将再24小时审核 有问题我们会跟您取得联系!' : '',
        offset: 150
      });
    },
    error(result) {
      this.$notify.error({
        title: '错误',
        message: 'result'
      });
    }
  }
}
</script>

<style lang="css">
.extractionQuota .el-notification{
 right: 800px !important;
}
</style>
