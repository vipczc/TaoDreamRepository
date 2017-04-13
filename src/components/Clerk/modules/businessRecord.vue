<template lang="html">
  <div class="businessRecord">
    <!-- 业务记录 -->
    <!-- 搜索 -->
  <search></search>
  <el-col :span="24" style="background-color:#fff" class="table-box">
  <el-table :data="tableData" style="width: 100%;height: 780px;" >
       <el-table-column type="selection" width="55">
      </el-table-column>
       <el-table-column prop="operationDate" label="操作日期">
       </el-table-column>
       <el-table-column  prop="name" label="姓名">
       </el-table-column>
       <el-table-column prop="contactNumber" label="联系电话">
       </el-table-column>
       <el-table-column prop="IDNumber" label="身份证号">
       </el-table-column>
       <el-table-column prop="occupationType" label="职业类型">
       </el-table-column>
       <el-table-column prop="DateOfBirth" label="出生年月">
       </el-table-column>
       <el-table-column prop="address" label="地址">
       </el-table-column>
       <el-table-column prop="state" label="状态">
       </el-table-column>
       <el-table-column label="操作">
             <template scope="scope">
               <el-button
                 size="small"
                 type="info"
                 @click="handleFollowUp(scope.$index, scope.row)">跟进</el-button>
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
    <followUp :followValue="followUpDialog" v-on:follow="followMessage"></followUp>
  </div>
  </template>

  <script>
import search from '../../searchModule/search.vue'
import followUp from '../../dialog/followUp.vue'
import {
  getItmeCon,
  getDataTable
} from '../../funWarehouse/warehouse.js'
export default {

  data() {
    this.$http.get('http://127.0.0.1:3000/CbusinessRecord').then((objData) => {
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
      followUpDialog: {
        show: false
      },
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
    followUp
  },
  methods: {
    handleFollowUp() {
      this.followUpDialog.show = true
    },
    followMessage(isb) {
      this.followUpDialog.show = isb
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
