<template lang="html">
  <!-- 消费记录 -->
  <div class="expenseRecord">
    <!-- 搜索 -->
    <search v-show="!loading" :searchModel="searchModelData" v-on:elementSearch="elementSearchMessage"></search>

    <el-col :span="24" style="background-color:#fff" class="table-box">
      <el-table :data="tableData" :max-height="700" :stripe="true"style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
           <el-table-column type="selection" width="55">
          </el-table-column>
           <el-table-column prop="orderNo" label="订单编号">
           </el-table-column>
           <el-table-column  prop="createTime" label="消费日期">
           </el-table-column>
           <el-table-column prop="totalAmount" label="消费金额">
           </el-table-column>
           <el-table-column prop="trueName" label="消费者姓名">
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
        <!-- <el-col :span="12">
          <span>共{{ sum }}项</span>
        </el-col> -->
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
import {
  businessAPi
} from '../../api/apiCode.js'
import basic from '../../../common.js'
export default {

  data() {



    return {
      searchModelData: {
        searchStr: '订单号/姓名',
        searchApi: '',
        searchFormData: ''
      },
      tableData: [],
      result: {},
      searchState: 0, //搜索状态
      searchCount: 1, //搜索页数
      onCount: 1, //未搜索页数
      loading: true,
      consumptionDetails: {
        show: false,
        index: 0,
        typeShow: 0,

        objectData: {}
      },
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
    search,
    consumptionDetails, //注册详情对话框组件
  },
  watch: {
    'searchCount': 'searchModelDataFun',
    'searchState': 'upDatafun',
    'loading': 'searchModelDataFun',
    'onCount': 'upDatafun'
  },
  mounted() {

    // this.searchModelDataFun()
    //获取当前时间 老时间
    this.upDatafun()
  },
  methods: {
    consumptionMessage(isb) {
      this.consumptionDetails.show = isb.show
    },

    handleDetails(index, row) {
      this.consumptionDetails.show = true //激活 对话框
      this.consumptionDetails.index = row.id //传入当前的数据ID
      this.consumptionDetails.typeShow = 2 //传入当前的显示信息类型 0 = 会员 1为咨询师 2为商铺
      // this.consumptionDetails.orderNo = this.tableData[index].orderNo //发送订单编号
      this.consumptionDetails.objectData = this.tableData[index] //发送整体数据
      console.log(index, row);


    },
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
        var timeStart = Date.parse(new Date());
        var timeEnd = timeStart
        timeStart = timeStart / 1000;
        timeStart = basic.basic.formatDate(timeStart)
        timeEnd = basic.basic.formatDate(timeEnd)

        let formData = new FormData()
        console.log(formData);
        formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
        formData.append('consumerOrderRecordTimeStart', timeStart)
        formData.append('consumerOrderRecordTimeEnd', timeEnd)

        this.$http.post(businessAPi.consumerOrderRecord, formData).then((objData) => {
          console.log(objData.data.RESULT);
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
      }

    },


    searchModelDataFun() { //初始化 搜索框
      if (this.loading == false) {
        this.searchModelData.searchApi = businessAPi.consumerOrderRecord
        this.searchModelData.searchFormData = new FormData()
        this.searchModelData.searchFormData.set('pageNum', this.searchCount == undefined ? '1' : this.searchCount)
      }


    }


  }
}
</script>

<style lang="css">

</style>
