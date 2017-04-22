
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
               <el-table-column  prop="createTime" label="赠送日期">
               </el-table-column>
               <el-table-column prop="trueName" label="会员姓名">
               </el-table-column>
               <el-table-column prop="quotaType" label="额度类型">
               </el-table-column>
               <el-table-column prop="tradeName" label="收货人账号">
               </el-table-column>
               <el-table-column prop="tradeMobile" label="收货人姓名">
               </el-table-column>
               <el-table-column prop="status" label="状态">
               </el-table-column>
               <el-table-column prop="quota" label="额度">
               </el-table-column>
               <el-table-column prop="surplusQuota" label="剩余额度">
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

    this.$http.get(userApi.quatolistAccount, {
      params: {
        pageNum: '', //页码 默认1
        startDate: '', //	开始时间
        enDate: '', //结束时间
        searchStr: '', //搜索内容
      }

    }).then((objData) => {
      this.tableData.type = objData.data.RESULT.length == 1 ? "赠送" : objData.data.length == 2 ? "获赠" : objData.data.length == 3 ? "提额" : objData.data.length == 4 ? "消费" : "" //1-赠送 2-获赠 3-提额 4-消费
      this.tableData.status = objData.data.RESULT.length == 0 ? '审核中' : objData.data.length == 1 ? '完成' : objData.data.length == 2 ? '未通过' : "" //0-审核中 1-完成 2-未通过
      this.tableData.quota = objData.data.RESULT.length //	额度
      this.tableData.surplusQuota = objData.data.RESULT.length //剩余额度
      this.tableData.createTime = objData.data.RESULT.length //发生时间
      this.tableData.trueName = objData.data.RESULT.length //用户姓名
      this.tableData.tradeName = objData.data.RESULT.length //赠送/受赠用户姓名
      this.tableData.tradeMobile = objData.data.RESULT.length //	赠送/受赠用户账号

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
