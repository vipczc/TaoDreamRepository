<template lang="html">
  <!-- 消费记录 -->
  <div class="expenseRecord">
    <!-- 搜索 -->
    <search v-show="!loading" :searchModel="searchModelData" v-on:elementSearch="elementSearchMessage" ></search>

    <el-col :span="24" style="background-color:#fff" class="table-box">
      <el-table :data="tableData" :max-height="700" stripe="true"style="width: 100%;height: 780px;"max-height="800" v-loading.body="loading" element-loading-text="加载中">
           <el-table-column type="selection" width="55">
          </el-table-column>
           <el-table-column prop="orderNo" label="订单编号">
           </el-table-column>
           <el-table-column  prop="createTime" label="消费日期">
           </el-table-column>
           <el-table-column prop="totalAmount" label="消费金额(元)">
           </el-table-column>
           <el-table-column prop="consumerEncourageScale" label="激励比例(%)">
           </el-table-column>
           <el-table-column prop="startEncourageDate" label="激励开始日期">
           </el-table-column>
           <el-table-column prop="endEncourageDate" label="激励结束日期">
           </el-table-column>
           <el-table-column label="操作">
                 <template scope="scope">
                   <el-button
                     size="small"
                     type="success"
                     @click="handleDetails(scope.$index, scope.row)">详情</el-button>
                   <el-button
                     size="small"
                     type="info"
                     @click="handleIncentiveDetails(scope.$index, scope.row)">激励明细</el-button>
                 </template>
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
    <consumptionDetails :consumptionValue="consumptionDetails" v-on:consumption="consumptionMessage"></consumptionDetails>
    <incentiveDetails :incentiveValue="incentiveDetails" v-on:incentive="incentiveMessage"></incentiveDetails>
      </div>
    </template>

    <script>
import search from '../../searchModule/search.vue'
import incentiveDetails from '../../dialog/incentiveDetails.vue'
import consumptionDetails from '../../dialog/consumptionDetails.vue'

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
        searchStr: '订单编号',
        searchApi: '',
        searchFormData: ''
      },
      searchState: 0, //搜索状态
      searchCount: 1, //搜索页数
      onCount: 1, //
      loading: true,
      consumptionDetails: {
        show: false,
        index: 0,
        typeShow: 0
      },

      incentiveDetails: {
        show: false,
        index: 0,
        typeShow: 0,
        userId: 0
      },
      tableData: [],
      allData: '',
      totalCount: 0, //分页数
      a: 0,
      b: 0,
      sum: 0,
      tableItemCount: 18,
      result: {},
    }
  },
  components: {
    search,
    consumptionDetails, //注册详情对话框组件
    incentiveDetails //激励明细对话框
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
  methods: {
    incentiveMessage(isb) {
      this.incentiveDetails.show = isb.show
    },
    consumptionMessage(isb) {
      this.consumptionDetails.show = isb.show
    },
    handleDetails(index, row) {
      this.consumptionDetails.show = true //激活 对话框
      this.consumptionDetails.index = row.id //传入当前的数据ID
      this.consumptionDetails.objectData = this.tableData[index] //发送整体数据
      this.consumptionDetails.typeShow = 0 //传入当前的显示信息类型 0 = user中的 1为咨询师 2为商铺
      console.log(index, row);
    },
    handleIncentiveDetails(index, row) {
      this.incentiveDetails.show = true //激活 对话框
      this.incentiveDetails.userId = this.tableData[index].id
      this.incentiveDetails.index = row.id //传入当前的数据ID
      this.incentiveDetails.objectData = this.result.data[index]

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
          this.result.data[i].startEncourageDate = basic.basic.formatDate(this.result.data[i].startEncourageDate)
          this.result.data[i].endEncourageDate = basic.basic.formatDate(this.result.data[i].endEncourageDate)

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

        this.$http.post(userApi.listConsumptionRecord, formData).then((objData) => { //淘豆兑换
          console.log(objData.data.RESULT);
          this.result = objData.data.RESULT //Object 所有数据
          //时间处理
          for (var i = 0; i < this.result.data.length; i++) {
            this.result.data[i].createTime = basic.basic.formatDate(this.result.data[i].createTime)
            this.result.data[i].startEncourageDate = basic.basic.formatDate(this.result.data[i].startEncourageDate)
            this.result.data[i].endEncourageDate = basic.basic.formatDate(this.result.data[i].endEncourageDate)
          }
          this.tableData = this.result.data

          this.loading = false
        }).catch((err) => {
          console.log(err);
        })
      }

    },
    searchModelDataFun() { //初始化 搜索框
      if (this.loading == false) {
        this.searchModelData.searchApi = userApi.listConsumptionRecord
        this.searchModelData.searchFormData = new FormData()
        this.searchModelData.searchFormData.set('pageNum', this.searchCount == undefined ? '1' : this.searchCount)
      }


    }


  }
}
</script>

<style lang="css">

</style>
