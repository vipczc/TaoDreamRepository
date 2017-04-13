<template lang="html">
  <div class="incentiveDetails">
    <!-- 激励明细对话框 -->
    <el-dialog title="激励明细" v-model="incentiveDetailsDialog = incentiveValue.show" size="small" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%" >
    <div class="cir" @click="incentiveDetailsValue"><i class="el-icon-close" ></i></div>

    <div class="dialog-list-box">

      <div class="box-left">
      <p>已激励总淘豆:</p>
      </div>
      <div class="box-right">
        <p>未激励总淘豆:</p>
      </div>
    </div>
    <el-table :data="tableData"style="width: 100%" max-height="400">
    <el-table-column prop="date"     label="激励日期">
    </el-table-column>
    <el-table-column prop="name"     label="激励淘豆">
    </el-table-column>
    <el-table-column prop="address"  label="发放状态">
    </el-table-column>
</el-table>
<!-- 分页 -->
<div class="page-box">
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
    <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="incentiveDetailsValue">提 交</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      incentiveDetailsDialog: false,

    }
  },
  props: {
    incentiveValue: Object
  },
  methods: {
    incentiveDetailsValue() {
      this.incentiveDetailsDialog = false
      this.$emit('incentive', this.incentiveDetailsDialog)
    }
  }
}
</script>

<style lang="css">
</style>
