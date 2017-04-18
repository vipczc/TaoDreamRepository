<template lang="html">
  <!-- 消费记录 -->
  <div class="expenseRecord">
    <!-- 搜索 -->
    <search></search>
    <el-col :span="24" style="background-color:#fff" class="table-box">
      <el-table :data="tableData" style="width: 100%;height: 780px;"max-height="800" v-loading.body="loading" element-loading-text="加载中">
           <el-table-column type="selection" width="55">
          </el-table-column>
           <el-table-column prop="orderNumber" label="订单编号">
           </el-table-column>
           <el-table-column  prop="consumptionDate" label="消费日期">
           </el-table-column>
           <el-table-column prop="consumptionAmount" label="消费金额">
           </el-table-column>
           <el-table-column prop="incentiveProportion" label="激励比例">
           </el-table-column>
           <el-table-column prop="startDate" label="激励开始日期">
           </el-table-column>
           <el-table-column prop="incentiveEndDate" label="激励结束日期">
           </el-table-column>
           <el-table-column label="操作">
                 <template scope="scope">
                   <el-button
                     size="small"
                     type="success"
                     @click="handleDetails(scope.$index, scope.row)">详情</el-button>
                   <el-button
                     size="small"
                     type="info"
                     @click="handleIncentiveDetails(scope.$index, scope.row)">激励明细</el-button>
                 </template>
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
    <consumptionDetails :consumptionValue="consumptionDetails" v-on:consumption="consumptionMessage"></consumptionDetails>
    <incentiveDetails :incentiveValue="incentiveDetails" v-on:incentive="incentiveMessage"></incentiveDetails>
      </div>
    </template>

    <script>
import search from '../../searchModule/search.vue'
import incentiveDetails from '../../dialog/incentiveDetails.vue'
import consumptionDetails from '../../dialog/consumptionDetails.vue'

import {
  getItmeCon,
  getDataTable
} from '../../funWarehouse/warehouse.js'
export default {

  data() {
    this.$http.get('http://127.0.0.1:3000/UexpenseRecord').then((objData) => {
      this.sum = objData.data.length
      this.allData = getDataTable(objData.data, 18)
      this.tableData = this.allData[0]
      this.totalCount = getItmeCon(objData.data, 18)
      this.loading = false
    }).catch((err) => {
      console.log(err);
    })
    return {
      loading: true,
      consumptionDetails: {
        show: false,
        index: 0,
        typeShow: 0
      },

      incentiveDetails: {
        show: false,
        index: 0,
        typeShow: 0
      },
      tableData: [{

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
    search,
    consumptionDetails, //注册详情对话框组件
    incentiveDetails //激励明细对话框
  },
  methods: {
    incentiveMessage(isb) {
      this.incentiveDetails.show = isb
    },
    consumptionMessage(isb) {
      this.consumptionDetails.show = isb
    },
    handleDetails(index, row) {
      this.consumptionDetails.show = true //激活 对话框
      this.consumptionDetails.index = row.id //传入当前的数据ID
      this.consumptionDetails.typeShow = 0 //传入当前的显示信息类型 0 = user中的 1为咨询师 2为商铺
      console.log(index, row);
    },
    handleIncentiveDetails(index, row) {
      this.incentiveDetails.show = true //激活 对话框
      this.incentiveDetails.index = row.id //传入当前的数据ID

      console.log(index, row);
    },
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
