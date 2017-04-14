<template lang="html">
  <!-- 提取额度 -->
  <div class="extractionQuota">
    <el-dialog title="提额" v-model="extractionQuotaDialog = quotaValue" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
  <div class="cir" @click="extractionValue"><i class="el-icon-close" ></i></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formExtractionQuota">
            <el-form-item label="新增产品销售合同编号:">
            <el-input v-model="formExtractionQuota.serial" placeholder="合同编号"></el-input>
            </el-form-item>
            <el-form-item label="申请消费额度:">
            <el-input v-model="formExtractionQuota.quota" placeholder="金额 单位(元)"></el-input>
            </el-form-item>

        </el-form>
        <div class="sum-box">
          <span>申请消费额度流程:</span>

        </div>



  <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="extractionValue">提 交</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'left',
      extractionQuotaDialog: false,
      formExtractionQuota: {
        serial: '', //合同编号
        quota: '' //申请消费额度
      }
    }
  },
  props: {
    quotaValue: Boolean
  },
  methods: {
    extractionValue() {
      this.extractionQuotaDialog = false

      this.$emit('extraction', this.extractionQuotaDialog)
    }
  }
}
</script>

<style lang="css">

</style>
