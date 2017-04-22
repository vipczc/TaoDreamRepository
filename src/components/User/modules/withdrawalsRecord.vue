        <template lang="html">
          <!-- 提现记录 -->
          <div class="withdrawalsRecord">
            <!-- 搜索 -->
            <search></search>
            <el-col :span="24" style="background-color:#fff" class="table-box">
              <el-table :data="tableData" style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
                   <el-table-column type="selection" width="55">
                  </el-table-column>
                   <el-table-column prop="dateOfWithdrawal" label="提现日期">
                   </el-table-column>
                   <el-table-column  prop="cashWithdrawalAmount" label="提现金额">
                   </el-table-column>
                   <el-table-column prop="counterFee" label="手续费">
                   </el-table-column>
                   <el-table-column prop="arrivalAmount" label="到账金额">
                   </el-table-column>
                   <el-table-column prop="collectingBank" label="收款银行">
                   </el-table-column>
                   <el-table-column prop="makeRemarks" label="打款备注">
                   </el-table-column>
                   <el-table-column prop="state" label="状态">
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

    this.$http.get(userApi.withDrawlistRecord, {
      params: {
        pageNum: '1',
        startDate: '2017-02-02',
        endDate: '2017-02-05',
      }

    }).then((objData) => {
      this.tableData.phoneNumbe = objData.data.RESULT.mobile //联系电话
      this.tableData.name = objData.data.RESULT.trueName //姓名
      this.tableData.cashWithdrawalAmount = objData.data.RESULT.withdrawAmount //提现金额
      this.tableData.arrivalAmount = objData.data.RESULT.arrivedAmount //到账金额
      this.tableData.counterFee = objData.data.RESULT.fee //手续费
      this.tableData.makeRemarks = objData.data.RESULT.remark //备注
      this.tableData.dateOfWithdrawal = objData.data.RESULT.happenTime //提现时间
      this.tableData.bankName = objData.data.RESULT.bankSimpleName //银行名称
      this.tableData.collectingBank = objData.data.RESULT.branchName //支行名称
      this.tableData.bankNumbe = objData.data.RESULT.cardNumber //银行卡号
      this.tableData.sumCount = objData.data.RESULT.iTotalRecords //总条数
      this.tableData.maxCount = objData.data.RESULT.minPager //最小页码
      this.tableData.minCount = objData.data.RESULT.maxPager //最大页码
      this.tableData.status = objData.data.RESULT.status //状态 1 审核通过
      this.loading = false

    }).catch((err) => {
      console.log(err);
    })
    return {
      loading: false,
      tableData: [{
        // conversionDate: '', //兑换日期
        // conversionTaodou: '', //兑换淘豆
        // conversionAmountReceived: '', //兑换获得金额
        // surplusTaodou: '' //剩余淘豆
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
