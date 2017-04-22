
    <template lang="html">
      <!-- 淘豆流水 -->
      <div class="TDRecord">
        <!-- 搜索 -->
        <search></search>
        <el-col :span="24" style="background-color:#fff" class="table-box">
          <el-table :data="tableData" style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
               <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="happenTime" label="操作日期">
              </el-table-column>
               <el-table-column prop="type" label="类型">
               </el-table-column>
               <el-table-column  prop="income" label="收入">
               </el-table-column>
               <el-table-column prop="outlay" label="支出">
               </el-table-column>
               <el-table-column prop="soyaBalance" label="淘豆余额">
               </el-table-column>
               <el-table-column prop="mobile" label="消费账号">
               </el-table-column>
               <el-table-column prop="trueName" label="消费会员">
               </el-table-column>
               <el-table-column prop="orderNo" label="订单编号">
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
    this.$http.get(userApi.taodoulistAccount, {
      params: {
        pageNum: '1',
        startDate: '2017-02-02',
        endDate: '2017-02-05',
      }
    }).then((objData) => {
      this.tableData.mobile = objData.data.RESULT.mobile //	联系电话
      this.tableData.trueName = objData.data.RESULT.trueName //姓名

      this.tableData.soyaBalance = objData.data.RESULT.soyaBalance //淘豆余额
      this.tableData.income = objData.data.RESULT.income //收入
      this.tableData.outlay = objData.data.RESULT.outlay //支出
      this.tableData.happenTime = objData.data.RESULT.happenTime //兑换时间
      this.tableData.sourceId = objData.data.RESULT.sourceId //来源id
      this.tableData.orderNo = objData.data.RESULT.orderNo //订单号
      this.tableData.type = objData.data.RESULT.type == 1 ? '推荐激励' : objData.data.type == 2 ? "消费激励" : objData.data.type == 3 ? "融资返还" : objData.data.type == 4 ? '激励兑换' : '' //1-推荐激励 2-消费激励 3-融资返还 4-激励兑换

      //消费账号
      this.loading = false
    }).catch((err) => {
      console.log(err);
    })
    return {
      loading: false,
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
