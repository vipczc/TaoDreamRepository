
    <template lang="html">
      <!-- 淘豆流水 -->
      <div class="TDRecord">
        <!-- 搜索 -->
        <search v-show="!loading" :searchModel="searchModelData" v-on:elementSearch="elementSearchMessage"></search>

        <el-col :span="24" style="background-color:#fff" class="table-box">
          <el-table :data="tableData" :max-height="700" :stripe="true"style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
               <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="createTime" label="操作日期">
              </el-table-column>
               <el-table-column prop="typeName" label="类型">
               </el-table-column>
               <el-table-column  prop="exchangeAmount" label="收入">
               </el-table-column>
               <el-table-column prop="taodouBalance" label="淘豆余额">
               </el-table-column>
               <el-table-column prop="mobile" label="商家账号">
               </el-table-column>
               <el-table-column prop="companyName" label="商家名称">
               </el-table-column>
               <el-table-column prop="orderNo" label="订单编号">
               </el-table-column>
             </el-table>

        </el-col>
        <el-col :span="24" >

            <el-col :span="12" :offset="6">
              <el-pagination
              v-show="!loading"
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
  businessAPi
} from '../../api/apiCode.js'
import basic from '../../../common.js'
export default {

  data() {

    return {
      searchModelData: {
        searchStr: '订单号 / 商家名称 / 商家账号',
        searchApi: '',
        searchFormData: ''
      },
      searchState: 0, //搜索状态
      searchCount: 1, //搜索页数
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
  components: {
    search
  },
  mounted() {
    //获取当前时间 老时间
    this.upDatafun()
  },
  watch: {
    'searchCount': 'searchModelDataFun',
    'searchState': 'upDatafun',
    'loading': 'searchModelDataFun',
    'onCount': 'upDatafun'
  },
  methods: {
    getdata() {

    },
    //获取[{},{}*cont]*分页数的数组

    handleSizeChange(val) {

      // //console.log(this.getItmeCon(objData.data, 10));
      //console.log(`每页 ${val} 条`);

    },

    elementSearchMessage(isb) { //搜索返回值 更新table表格
      if (isb instanceof Object) {

        this.result = isb.RESULT
        for (var i = 0; i < this.result.data.length; i++) {
          this.result.data[i].createTime = basic.basic.formatDate(this.result.data[i].createTime)
        }
        this.tableData = this.result.data
        this.loading = false
        this.searchState = 1 //搜索状态开启
      } else {
        this.searchState = 0
      }


    },
    handleCurrentChange(val) { //分页
      // this.onCount = val;
      if (this.searchState == 0) {
        this.onCount = val;
      } else if (this.searchState == 1) {
        this.searchCount = val;
      }

    },

    upDatafun() {
      var timeStart = Date.parse(new Date());
      var timeEnd = timeStart
      timeStart = timeStart / 1000;
      timeStart = basic.basic.formatDate(timeStart)
      timeEnd = basic.basic.formatDate(timeEnd)

      let formData = new FormData()
      //console.log(formData);
      formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
      formData.append('taodouRecordTimeStart', timeStart)
      formData.append('taodouRecordTimeEnd', timeEnd)

      this.$http.post(businessAPi.taodouRecord, formData).then((objData) => {
        //console.log(objData.data.RESULT);
        this.result = objData.data.RESULT //Object 所有数据
        //时间处理
        for (var i = 0; i < this.result.data.length; i++) {
          this.result.data[i].createTime = basic.basic.formatDate(this.result.data[i].createTime)
        }
        this.tableData = this.result.data

        this.loading = false
      }).catch((err) => {
        this.$message.error('服务器未响应! 请刷新重试...');
      })
    },
    searchModelDataFun() { //初始化 搜索框
      if (this.loading == false) {
        this.searchModelData.searchApi = businessAPi.taodouRecord
        this.searchModelData.searchFormData = new FormData()
        this.searchModelData.searchFormData.set('pageNum', this.searchCount == undefined ? '1' : this.searchCount)
      }


    }


  }
}
</script>

    <style lang="css">

    </style>
