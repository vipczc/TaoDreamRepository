
    <template lang="html">
      <!-- 额度流水 -->
      <div class="limitRecord">
        <!-- 搜索 -->
        <search></search>
        <el-col :span="24" style="background-color:#fff" class="table-box">
          <el-table :data="tableData" style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
               <el-table-column type="selection" width="55">
              </el-table-column>
               <!-- <el-table-column prop="limitOrder" label="额度订单">
               </el-table-column> -->
               <el-table-column  prop="giveDate" label="赠送日期">
               </el-table-column>
               <el-table-column prop="enterpriseAccount" label="企业账号">
               </el-table-column>
               <el-table-column prop="enterpriseName" label="企业名称">
               </el-table-column>
               <el-table-column prop="quotaType" label="额度类型">
               </el-table-column>
               <el-table-column prop="state" label="状态">
               </el-table-column>
               <el-table-column prop="quota" label="额度">
               </el-table-column>
               <el-table-column prop="remainingAmount" label="剩余额度">
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
    this.$http.get('http://127.0.0.1:3000/BlimitRecord').then((objData) => {
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
