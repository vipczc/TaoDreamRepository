<template lang="html">
  <!-- 淘豆兑换 -->
  <div class="tdrecordSum">
    <el-dialog title="提现" v-model="tdrecordSumDialog = tdValue" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
    <div class="cir" @click="tdrecordSumValue"><i class="el-icon-close" ></i></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formTDrecordSum">
            <div class="dialog-list-box">
              <el-form-item label="兑换淘豆:">
              <el-input v-model="getDataResource.TDMoney = formTDrecordSum.tdCount" placeholder="请输入淘豆个数"></el-input>
              </el-form-item>

              <el-form-item label="淘豆金额:">
                <span>{{ getDataResource.TDMoney }}</span><span>元</span>
              </el-form-item>
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
        TDMoney: 0 //淘豆金额
      },
      labelPosition: 'left',
      tdrecordSumDialog: false,
      formTDrecordSum: {
        tdCount: '', //淘豆数量

      }
    }

  },
  props: {
    tdValue: Boolean
  },
  methods: {
    tdrecordSumValue() {
      this.tdrecordSumDialog = false

      this.$emit('td', this.tdrecordSumDialog)
    }
  }
}
</script>

<style lang="css">
</style>
