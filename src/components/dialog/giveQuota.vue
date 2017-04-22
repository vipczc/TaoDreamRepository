<template lang="html">
  <!-- 额度赠送 -->
  <div class="giveQuota">
    <el-dialog title="赠送" v-model="giveQuotaDialog = giveValue" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
    <div class="cir" @click="giveQuotaValue"><i class="el-icon-close" ></i></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formGiveQuota">
            <el-form-item label="会员账号:">
            <el-input v-model="formGiveQuota.id" placeholder="请输入会员账号"></el-input>
            </el-form-item>
            <el-form-item label="会员姓名:">
            <el-input v-model="formGiveQuota.name" placeholder="请输入会员名称"></el-input>
            </el-form-item>
            <el-form-item label="赠送额度:">
            <el-input v-model="formGiveQuota.giveName" placeholder="请输入金额(元)"></el-input>
            </el-form-item>

        </el-form>

    <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="giveQuotaValue">提 交</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'left',
      giveQuotaDialog: false,
      formGiveQuota: {
        id: '', //会员账号
        name: '', //会员姓名
        giveName: '' //赠送姓名
      }
    }

  },
  props: {
    giveValue: Boolean
  },
  methods: {
    giveQuotaValue() {
      this.giveQuotaDialog = false

      this.$emit('give', this.giveQuotaDialog)
    }
  }
}
</script>

<style lang="css">
</style>
