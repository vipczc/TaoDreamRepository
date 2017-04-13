<template lang="html">
  <!-- 消费记录 -->
  <div class="expenseRecord">
    <!-- 搜索 -->
    <search></search>
    <el-col :span="24" style="background-color:#fff" class="table-box">
      <el-table :data="tableData" style="width: 100%;height: 780px;" >
           <el-table-column type="selection" width="55">
          </el-table-column>
           <el-table-column prop="orderNumber" label="订单编号">
           </el-table-column>
           <el-table-column  prop="consumptionDate" label="消费日期">
           </el-table-column>
           <el-table-column prop="consumptionAmount" label="消费金额">
           </el-table-column>
           <el-table-column prop="consumptionName" label="消费者姓名">
           </el-table-column>
           <el-table-column label="操作">
                 <template scope="scope">
                   <el-button
                     size="small"
                     type="success"
                     @click="handleEdit(scope.$index, scope.row)">详情</el-button>
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
    this.$http.get('http://127.0.0.1:3000/BexpenseRecord').then((objData) => {
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

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
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
