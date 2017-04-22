    <template lang="html">
      <!-- 兑换记录 -->
      <div class="conversionRecord">
        <!-- 搜索 -->
    <search></search>
    <el-col :span="24" style="background-color:#fff" class="table-box">
      <el-table :data="tableData" style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
           <el-table-column type="selection" width="55">
          </el-table-column>
           <el-table-column prop="conversionDate" label="兑换日期">
           </el-table-column>
           <el-table-column  prop="conversionTaodou" label="兑换淘豆">
           </el-table-column>
           <el-table-column prop="conversionAmountReceived" label="兑换获得金额">
           </el-table-column>
           <el-table-column prop="surplusTaodou" label="剩余淘豆">
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
import {
  userApi
} from '../../api/apiCode.js'
export default {

  data() {
    this.$http.post(userApi.taodoulistRecord, {
      startDate: '2017-02-02',
      endDate: '2017-02-03',
    }).then((objData) => {
      this.tableData.mobile = objData.data.RESULT.mobile //联系电话
      this.tableData.trueName = objData.data.RESULT.trueName //姓名

      this.tableData.exchangeRate = objData.data.RESULT.exchangeRate //兑换比率
      this.tableData.conversionTaodou = objData.data.RESULT.soyaNumber //兑换淘豆
      this.tableData.conversionAmountReceived = objData.data.RESULT.exchangeAmount //兑换金额
      this.tableData.surplusTaodou = objData.data.RESULT.overplusSoyaNumber //剩余淘豆

      this.tableData.status = objData.data.RESULT.status //状态 -1失败 1成功
      console.log('缺省 兑换日期');
      this.loading = false
    }).catch((err) => {
      console.log(err);
    })
    return {
      loading: false,
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
    .conversionRecord{
      /*text-align: left;*/
    }
.table-box{
  margin-top: 14px;
}
.el-table th>.cell{
  text-align: center;
}
    </style>
