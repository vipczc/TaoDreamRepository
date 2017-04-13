<template lang="html">
  <div class="TDRecord">
    <!-- 淘豆流水 -->
    <!-- 搜索 -->
    <search></search>
    <el-col :span="24" style="background-color:#fff" class="table-box">
    <el-table :data="tableData" style="width: 100%;height: 780px;" >
       <el-table-column type="selection" width="55">
      </el-table-column>
       <el-table-column prop="operationDate" label="操作日期">
       </el-table-column>
       <el-table-column  prop="type" label="类型">
       </el-table-column>
       <el-table-column prop="income" label="收入">
       </el-table-column>
       <el-table-column prop="TDbalance" label="淘豆余额">
       </el-table-column>
       <el-table-column prop="clerkAccount" label="咨询师账号">
       </el-table-column>
       <el-table-column prop="clerkName" label="咨询师名称">
       </el-table-column>
       <el-table-column prop="orderNumber" label="订单编号">
       </el-table-column>
     </el-table>

    </el-col>
    <el-col :span="24" >
    <el-col :span="12">
      <span>共{{ sum }}项</span>
    </el-col>
    <el-col :span="12" :offset="0">

      <div class="block">
    <span class="demonstration"></span>
    <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"

    layout=" prev, pager, next"
    :total="totalCount">
    </el-pagination>
    <!-- :page-size="10" sizes, -->
    </div>
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
export default {

  data() {
    this.$http.get('http://127.0.0.1:3000/CTDRecord').then((objData) => {
      this.sum = objData.data.length
      this.allData = getDataTable(objData.data, 18)
      this.tableData = this.allData[0]
      this.totalCount = getItmeCon(objData.data, 18)
      console.log(this.tableData);
    }).catch((err) => {
      console.log(err);
    })
    return {
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
  methods: {
    getdata() {

    },
    //获取[{},{}*cont]*分页数的数组

    handleSizeChange(val) {

      // console.log(this.getItmeCon(objData.data, 10));
      console.log(`每页 ${val} 条`);

    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log('aaa' + this.allData[val - 1].length < this.tableItemCount);
      this.a = val * this.allData[val - 1].length - this.allData[val - 1].length
      this.b = val * this.allData[val - 1].length
      this.tableData = this.allData[val - 1];


    }


  }
}
</script>

<style lang="css">
</style>
