<template lang="html">
  <div class="incentiveDetails">
    <!-- 激励明细对话框 -->
    <el-dialog title="激励明细" v-model="incentiveDetailsDialog.show = incentiveValue.show" size="small" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%" >
    <div class="cir" @click="incentiveDetailsValue"><i class="el-icon-close" ></i></div>

    <div class="dialog-list-box">

      <div class="box-left">
      <p>已激励总淘豆: {{ incentiveValue.objectData.outEncourageAmount }}</p>

      </div>
      <div class="box-right">
        <p>未激励总淘豆:{{ incentiveValue.objectData.waitEncourageAmount }}</p>
      </div>
    </div>
    <el-table :data="tableData"style="width: 100%" max-height="400">
    <el-table-column prop="encourageDate"     label="激励日期">
    </el-table-column>
    <el-table-column prop="consumerEncourage"     label="激励淘豆">
    </el-table-column>
    <el-table-column prop="status"  label="发放状态">
    </el-table-column>
</el-table>
<!-- 分页 -->
<div class="page-box">
  <el-pagination


  @current-change="handleCurrentChange"
    :current-page="Number(onCount)"
    :page-size="10"
    layout="total, prev, pager, next"
    :total="result.totalElements">
  </el-pagination>
</div>
    <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="incentiveDetailsValue">关 闭</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  businessAPi,
  clerkApi,
  userApi,
} from '../api/apiCode.js'
import common from '../../common.js'
export default {
  data() {
    return {

      loading: true,
      result: {},
      onCount: 1,
      tableData: [],
      incentiveDetailsDialog: {
        show: false,

      },

    }
  },
  props: {
    incentiveValue: Object
  },
  watch: {
    'onCount': 'upDataFun',
    'incentiveDetailsDialog.show': 'upDataFun'
  },
  methods: {
    incentiveDetailsValue() { //userId
      this.incentiveDetailsDialog.show = false
      this.$emit('incentive', this.incentiveDetailsDialog)
    },
    handleCurrentChange(val) {
      // this.onCount = val;

      this.onCount = val;


    },
    upDataFun() {
      if (!this.incentiveValue.show == false) { //控制数据获取
        let formData = new FormData()
        formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
        formData.append('consumerOrderId', this.incentiveValue.userId)
        this.$http.post(userApi.encourageDetail, formData).then((objData) => {
          console.log(objData.data.RESULT);
          this.result = objData.data.RESULT //Object 所有数据
          for (var i = 0; i < this.result.data.length; i++) {
            this.result.data[i].encourageDate = common.basic.formatDate(this.result.data[i].encourageDate)
            this.result.data[i].status = this.result.data[i].status == 0 ? '未发放' : '已发放'
          }
          this.tableData = this.result.data
          this.loading = false
        }).catch((err) => {
          console.log(err);
        })
      }
    }
  }
}
</script>

<style lang="css">
 .incentiveDetails .el-notification{
 right: 800px !important;
}
</style>
