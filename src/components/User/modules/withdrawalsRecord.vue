        <template lang="html">
          <!-- 提现记录 -->
          <div class="withdrawalsRecord">
            <!-- 搜索 -->
            <!-- <search></search> -->
            <el-col :span="24" style="background-color:#fff" class="table-box">
              <el-table :data="tableData" :max-height="700" :stripe="true"style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
                   <el-table-column type="selection" width="55">
                  </el-table-column>
                   <el-table-column prop="happenTime" label="提现日期">
                   </el-table-column>
                   <el-table-column  prop="withdrawAmount" label="提现金额(元)">
                   </el-table-column>
                   <el-table-column prop="fee" label="手续费(元)">
                   </el-table-column>
                   <el-table-column prop="arrivedAmount" label="到账金额(元)">
                   </el-table-column>
                   <el-table-column prop="branchName" label="收款银行">
                   </el-table-column>
                   <el-table-column prop="remark" label="打款备注">
                   </el-table-column>
                   <el-table-column prop="status" label="状态">
                   </el-table-column>

                 </el-table>

            </el-col>
            <el-col :span="24" >

                <el-col :span="12" :offset="6">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="Number(onCount)"
                    :page-size="10"
                    layout="total, prev, pager, next"
                    :total="result.totalElements">
                  </el-pagination>
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
import basic from '../../../common.js'
export default {

  data() {
    return {
      result: {},
      onCount: 1,
      loading: true,
      tableData: [],
      allData: '',
      totalCount: 0, //分页数
      a: 0,
      b: 0,
      sum: 0,
      tableItemCount: 18
    }
  },
  mounted() {
    this.upDatafun()
  },
  watch: {
    'onCount': 'upDatafun'
  },
  components: {
    search
  },
  methods: {
    getdata() {

    },
    //获取[{},{}*cont]*分页数的数组

    handleSizeChange(val) {

      // //console.log(this.getItmeCon(objData.data, 10));
      //console.log(`每页 ${val} 条`);

    },
    handleCurrentChange(val) {
      this.onCount = val;


    },
    upDatafun() {
      let timeStart = Date.parse(new Date());
      let timeEnd = timeStart
      timeStart = timeStart / 1000;
      timeStart = basic.basic.formatDate(timeStart)
      timeEnd = basic.basic.formatDate(timeEnd)

      let formData = new FormData()
      formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
      formData.append('startDate', timeStart)
      formData.append('endDate', timeEnd)

      this.$http.post(userApi.withDrawlistRecord, formData).then((objData) => {
        //console.log(objData.data.RESULT);
        this.result = objData.data.RESULT //Object 所有数据
        //时间处理
        for (var i = 0; i < this.result.data.length; i++) {
          this.result.data[i].happenTime = basic.basic.formatDate(this.result.data[i].happenTime)
          this.result.data[i].status = this.result.data[i].status == '0' ? '处理中' : this.result.data[i].status == '-1' ? '失败' : this.result.data[i].status == '1' ? '成功' : ''
        }
        this.tableData = this.result.data

        this.loading = false
      }).catch((err) => {
        this.$message.error('服务器未响应! 请刷新重试...');
      })
    }


  }
}
</script>


        <style lang="css">

        </style>
