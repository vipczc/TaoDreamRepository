<template lang="html">
  <div id="conversionRecord">
    <!-- 兑换记录 -->
    <!-- 搜索 -->
  <search v-show="!loading"></search>
  <el-col :span="24" style="background-color:#fff" class="table-box">
  <el-table :data="tableData" :max-height="700" :stripe="true"style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
       <el-table-column type="selection" width="55">
      </el-table-column>
       <el-table-column prop="createTime" label="兑换日期">
       </el-table-column>
       <el-table-column  prop="taodouAmount" label="兑换淘豆">
       </el-table-column>
       <el-table-column prop="exchangeAmount" label="兑换获得金额">
       </el-table-column>
       <el-table-column prop="taodouBalance" label="剩余淘豆">
       </el-table-column>
     </el-table>

  </el-col>
  <el-col :span="24" >

    <el-col :span="12" :offset="6">
      <el-pagination
      v-show="!loading"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="Number(onCount)"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="result.totalElements">
      </el-pagination>
    </el-col>
  </el-col>
  </div>
  </template>

  <script>
import search from '../../searchModule/search.vue'
import {
  getItmeCon,
  getDataTable
} from '../../funWarehouse/warehouse.js'
import {
  clerkApi
} from '../../api/apiCode.js'
import basic from '../../../common.js'
export default {

  data() {
    return {
      result: {},
      onCount: 1, //
      tableData: [],
      allData: '',
      totalCount: 0, //分页数
      a: 0,
      b: 0,
      sum: 0,
      tableItemCount: 18,
      loading: true,
    }
  },
  components: {
    search
  },
  mounted() {
    //获取当前时间 老时间
    this.upDatafun()
  },
  watch: {
    'onCount': 'upDatafun'
  },
  methods: {
    getdata() {

    },
    //获取[{},{}*cont]*分页数的数组

    handleSizeChange(val) {

      // //console.log(this.getItmeCon(objData.data, 10));
      //console.log(`每页 ${val} 条`);

    },
    handleCurrentChange(val) {
      this.onCount = val;
    },
    upDatafun() {
      var timeStart = Date.parse(new Date());
      var timeEnd = timeStart
      timeStart = timeStart / 1000;
      timeStart = basic.basic.formatDate(timeStart)
      timeEnd = basic.basic.formatDate(timeEnd)

      let formData = new FormData()
      formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
      formData.append('taodouRecordTimeStart', timeStart)
      formData.append('taodouRecordTimeEnd', timeEnd)

      this.$http.post(clerkApi.taodouExchangeRecord, formData).then((objData) => { //淘豆流水接口
        //console.log(objData.data.RESULT);
        this.result = objData.data.RESULT //Object 所有数据
        //时间处理
        for (var i = 0; i < this.result.data.length; i++) {
          this.result.data[i].createTime = basic.basic.formatDate(this.result.data[i].createTime)
        }
        this.tableData = this.result.data

        this.loading = false
      }).catch((err) => {
        this.$message.error('服务器未响应! 请刷新重试...');
      })
    }


  }
}
</script>

<style lang="css">
</style>
