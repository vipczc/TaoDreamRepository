<template lang="html">
  <div class="relatedConsumptionRecord">
    <!-- 关联消费记录 -->
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
       <el-table-column prop="memberAccount" label="会员账号">
       </el-table-column>
       <el-table-column prop="memberName" label="会员姓名">
       </el-table-column>
       <el-table-column prop="consumptionAmount" label="消费金额">
       </el-table-column>
       <el-table-column prop="incentiveProportion" label="激励比例">
       </el-table-column>
       <el-table-column prop="address" label="地址">
       </el-table-column>
       <el-table-column label="操作">
             <template scope="scope">
               <el-button
                 size="small"
                 type="success"
                 @click="handleDetails(scope.$index, scope.row)">详情</el-button>
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
  </div>
  </template>

  <script>
import consumptionDetails from '../../dialog/consumptionDetails.vue'
import search from '../../searchModule/search.vue'
import {
  getItmeCon,
  getDataTable
} from '../../funWarehouse/warehouse.js'
export default {

  data() {
    this.$http.get('http://127.0.0.1:3000/CrelatedConsumptionRecord').then((objData) => {
      this.sum = objData.data.length
      this.allData = getDataTable(objData.data, 18)
      this.tableData = this.allData[0]
      this.totalCount = getItmeCon(objData.data, 18)
      console.log(this.tableData);
    }).catch((err) => {
      console.log(err);
    })
    return {
      consumptionDetails: {
        show: false,
        index: 0,
        typeShow: 0
      },
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
    search,
    consumptionDetails, //注册详情对话框组件
  },
  methods: {
    consumptionMessage(isb) {
      this.consumptionDetails.show = isb
    },
    handleDetails(index, row) {
      this.consumptionDetails.show = true //激活 对话框
      this.consumptionDetails.index = row.id //传入当前的数据ID
      this.consumptionDetails.typeShow = 1 //传入当前的显示信息类型 0 = 会员 1为咨询师 2为商铺
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
