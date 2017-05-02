
    <template lang="html">
      <!-- 额度流水 -->
      <div class="limitRecord">
        <!-- 搜索 -->
        <search v-show="!loading" :searchModel="searchModelData" v-on:elementSearch="elementSearchMessage"></search>

        <el-col :span="24" style="background-color:#fff" class="table-box">
          <el-table :data="tableData" :max-height="700" :stripe="true"style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
               <el-table-column type="selection" width="55">
              </el-table-column>
               <!-- <el-table-column prop="limitOrder" label="额度订单">
               </el-table-column> -->
               <el-table-column  prop="createTime" label="日期">
               </el-table-column>
               <el-table-column prop="trueName" label="会员姓名">
               </el-table-column>
               <el-table-column prop="type" label="额度类型">
               </el-table-column>
               <el-table-column prop="tradeMobile" label="收获人账号">
               </el-table-column>
               <el-table-column prop="tradeName" label="收获人姓名">
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
      searchModelData: {
        searchStr: '收获人账号/收获人姓名',
        searchApi: '',
        searchFormData: ''
      },
      searchState: 0, //搜索状态
      searchCount: 1, //搜索页数
      result: {},
      onCount: 1, //
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
    'searchCount': 'searchModelDataFun',
    'searchState': 'upDatafun',
    'loading': 'searchModelDataFun',
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

    elementSearchMessage(isb) { //搜索返回值 更新table表格
      if (isb instanceof Object) {

        this.result = isb.RESULT
        for (var i = 0; i < this.result.data.length; i++) {
          this.result.data[i].createTime = basic.basic.formatDate(this.result.data[i].createTime)

          this.result.data[i].type = this.result.data[i].type == 1 ? '赠送' : this.result.data[i].type == 2 ? '获赠' : this.result.data[i].type == 3 ? '提额' : this.result.data[i].type == 4 ? '消费' : ''
          this.result.data[i].status = this.result.data[i].status == '0' ? '审核中' : this.result.data[i].status == '1' ? '完成 ' : this.result.data[i].status == '2' ? '未通过' : ''
        }
        this.tableData = this.result.data
        this.loading = false
        this.searchState = 1 //搜索状态开启
      } else {
        this.searchState = 0
      }


    },
    handleCurrentChange(val) {
      // this.onCount = val;
      if (this.searchState == 0) {
        this.onCount = val;
      } else if (this.searchState == 1) {
        this.searchCount = val;
      }

    },

    upDatafun() {
      if (this.searchState == 0) {
        let timeStart = Date.parse(new Date());
        let timeEnd = timeStart
        timeStart = timeStart / 1000;
        timeStart = basic.basic.formatDate(timeStart)
        timeEnd = basic.basic.formatDate(timeEnd)

        let formData = new FormData()
        formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
        formData.append('startDate', timeStart)
        formData.append('endDate', timeEnd)

        this.$http.post(userApi.quatolistAccount, formData).then((objData) => { //淘豆兑换
          console.log(objData.data.RESULT);
          this.result = objData.data.RESULT //Object 所有数据
          //时间处理
          for (var i = 0; i < this.result.data.length; i++) {
            this.result.data[i].createTime = basic.basic.formatDate(this.result.data[i].createTime)
            this.result.data[i].type = this.result.data[i].type == '1' ? '赠送' : this.result.data[i].type == '2' ? '获赠' : this.result.data[i].type == '3' ? '提额' : this.result.data[i].type == '4' ? '消费' : this.result.data[i].type == '5' ? '推荐奖励' :
              ''
            this.result.data[i].status = this.result.data[i].status == '0' ? '审核中' : this.result.data[i].status == '1' ? '完成 ' : this.result.data[i].status == '2' ? '未通过' : ''
          }
          this.tableData = this.result.data

          this.loading = false
        }).catch((err) => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '服务器未响应! 请刷新重试...',
            type: 'error'
          });
        })
      }

    },
    searchModelDataFun() { //初始化 搜索框
      if (this.loading == false) {
        this.searchModelData.searchApi = userApi.quatolistAccount
        this.searchModelData.searchFormData = new FormData()
        this.searchModelData.searchFormData.append('pageNum', this.searchCount == undefined ? '1' : this.searchCount)
      }


    }


  }
}
</script>

    <style lang="css">

    </style>
