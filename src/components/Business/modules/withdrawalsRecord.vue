<template lang="html">
  <!-- 提现记录 -->
  <div class="withdrawalsRecord">
    <!-- 搜索 -->
    <search></search>
    <el-col :span="24" style="background-color:#fff" class="table-box">
      <el-table :data="tableData" style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
           <el-table-column type="selection" width="55">
          </el-table-column>
           <el-table-column prop="createTime" label="提现日期">
           </el-table-column>
           <el-table-column  prop="withdrawAmount" label="提现金额">
           </el-table-column>
           <el-table-column prop="fee" label="手续费">
           </el-table-column>
           <el-table-column prop="arrivedAmount" label="到账金额">
           </el-table-column>
           <el-table-column prop="branchName" label="收款银行">
           </el-table-column>
           <el-table-column prop="remark" label="打款备注">
           </el-table-column>
           <el-table-column prop="statusName" label="状态">
           </el-table-column>

         </el-table>

    </el-col>
    <el-col :span="24" >
        <!-- <el-col :span="12">
          <span>共{{ sum }}项</span>
        </el-col> -->
        <el-col :span="12" :offset="6">
          <el-pagination
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
  businessAPi
} from '../../api/apiCode.js'
import basic from '../../../common.js'
export default {

  data() {

    return {
      result: {},
      onCount: 1,
      loading: true,
      tableData: [{
        conversionDate: '', //兑换日期
        conversionTaodou: '', //兑换淘豆
        conversionAmountReceived: '', //兑换获得金额
        surplusTaodou: '' //剩余淘豆
      }],
      allData: '',
      totalCount: 0, //分页数
      a: 0,
      b: 0,
      sum: 0,
      tableItemCount: 18
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

      // console.log(this.getItmeCon(objData.data, 10));
      console.log(`每页 ${val} 条`);

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
      console.log(formData);
      formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
      formData.append('withdrawTimeStart', timeStart)
      formData.append('withdrawTimeEnd', timeEnd)

      this.$http.post(businessAPi.withdrawRecord, formData).then((objData) => {
        console.log(objData.data.RESULT);
        this.result = objData.data.RESULT //Object 所有数据
        //时间处理
        for (var i = 0; i < this.result.data.length; i++) {
          this.result.data[i].createTime = basic.basic.formatDate(this.result.data[i].createTime)
        }
        this.tableData = this.result.data

        this.loading = false
      }).catch((err) => {
        console.log(err);
      })
    }


  }
}
</script>


<style lang="css">

</style>
