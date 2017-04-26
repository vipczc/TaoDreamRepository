
    <template lang="html">
      <!-- 推荐记录 -->
      <div class="recommendRecord">
        <!-- 搜索 -->
        <!-- <search></search> -->
        <el-col :span="24" style="background-color:#fff" class="table-box">
          <el-table :data="tableData" style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
               <el-table-column type="selection" width="55">
              </el-table-column>
               <el-table-column prop="registerTime" label="推荐日期">
               </el-table-column>
               <el-table-column  prop="mobile" label="会员账号">
               </el-table-column>
               <el-table-column prop="trueName" label="会员姓名">
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

      // console.log(this.getItmeCon(objData.data, 10));
      console.log(`每页 ${val} 条`);

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

      this.$http.post(userApi.listRecommendRecord, formData).then((objData) => { //淘豆兑换
        console.log(objData.data.RESULT);
        this.result = objData.data.RESULT //Object 所有数据
        //时间处理
        for (var i = 0; i < this.result.data.length; i++) {
          this.result.data[i].registerTime = basic.basic.formatDate(this.result.data[i].registerTime)
        }
        this.tableData = this.result.data

        this.loading = false
      }).catch((err) => {
        console.log(err);
      })
    }


  }
}
</script>

    <style lang="css">

    </style>
