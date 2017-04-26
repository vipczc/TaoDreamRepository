<template lang="html">
  <div class="relatedConsumptionRecord">
    <!-- 关联消费记录 -->
    <!-- 搜索 -->
  <search v-show="!loading" :searchModel="searchModelData" v-on:elementSearch="elementSearchMessage"></search>

<el-select v-model="Value" v-show="!loading" placeholder="消费者">
  <el-option
    v-for="item in options"
    :label="item.label"
    :value="item.Value"
    :key="item.Value"
>
  </el-option>
</el-select>

  <el-col :span="24" style="background-color:#fff" class="table-box">

  <el-table :data="tableData" style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
       <el-table-column type="selection" width="55">
      </el-table-column>
       <el-table-column prop="orderNo" label="订单编号">
       </el-table-column>
       <el-table-column  prop="createTime" label="消费日期">
       </el-table-column>
       <el-table-column prop="userType" label="会员账号">
       </el-table-column>
       <el-table-column prop="trueName" label="会员姓名">
       </el-table-column>
       <el-table-column prop="totalAmount" label="消费金额">
       </el-table-column>
       <el-table-column prop="referralEncourageScale" label="激励比例">
       </el-table-column>
       <el-table-column prop="pickupAddress" label="地址">
       </el-table-column>
       <el-table-column label="操作">
             <template scope="scope">
<el-button size="small" type="success" @click="handleDetails(scope.$index, scope.row)">
  详情</el-button>
</template>
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
  clerkApi
} from '../../api/apiCode.js'
import basic from '../../../common.js'
export default {

  data() {

    return {
      searchModelData: {
        searchStr: '订单号 / 姓名 / 账号',
        searchApi: '',
        searchFormData: ''
      },
      searchState: 0, //搜索状态
      searchCount: 1, //搜索页数
      onUserType: 1,
      result: {},
      onCount: 1,
      options: [{
        Value: '1',
        label: '消费者'
      }, {
        Value: '2',
        label: '商家'
      }],
      Value: '1',
      loading: true,
      consumptionDetails: {
        show: false,
        index: 0,
        typeShow: 0,
        objectData: {},
        thisUserType: 0
      },
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
    search,
    consumptionDetails, //注册详情对话框组件
  },
  mounted() {
    //获取当前时间 老时间
    this.upDatafun()
  },
  watch: {
    'searchCount': 'searchModelDataFun',
    'searchState': 'upDatafun',
    'loading': 'searchModelDataFun',
    'onCount': 'upDatafun',
    'Value': 'upDatafun', //消费者 商家互换更新数据
  },
  methods: {
    consumptionMessage(isb) {
      this.consumptionDetails.show = isb.show
    },
    handleDetails(index, row) {
      this.consumptionDetails.show = true //激活 对话框
      this.consumptionDetails.index = row.id //传入当前的数据ID
      this.consumptionDetails.typeShow = 1 //传入当前的显示信息类型 0 = 会员 1为咨询师 2为商铺
      this.consumptionDetails.objectData = this.result.data[index] //点前条的整体数据
      this.consumptionDetails.thisUserType = this.Value //当前 用户类型
      console.log(this.Value);
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
      if (this.searchState == 0 && (this.Value == 1 || this.Value == 2)) {
        var timeStart = Date.parse(new Date());
        var timeEnd = timeStart
        timeStart = timeStart / 1000;
        timeStart = basic.basic.formatDate(timeStart)
        timeEnd = basic.basic.formatDate(timeEnd)

        let formData = new FormData()
        formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
        formData.append('consumerOrderRecordTimeStart', timeStart)
        formData.append('consumerOrderRecordTimeEnd', timeEnd)
        formData.append('userType', this.Value == undefined ? '1' : this.Value == '2' ? '2' : '1')

        this.$http.post(clerkApi.consumerOrderRecord, formData).then((objData) => { //淘豆流水接口
          console.log(objData.data.RESULT);
          this.result = objData.data.RESULT //Object 所有数据
          //时间处理
          for (var i = 0; i < this.result.data.length; i++) {
            this.result.data[i].createTime = basic.basic.formatDate(this.result.data[i].createTime)

          }
          this.tableData = this.result.data

          this.loading = false
        }).catch((err) => {
          console.log(err);
        })
      }
      if (this.searchState == 1) {
        this.searchModelDataFun()
      }

    },
    searchModelDataFun() { //初始化 搜索框
      if (this.loading == false) {
        this.searchModelData.searchApi = clerkApi.consumerOrderRecord
        this.searchModelData.userType = this.Value
        this.searchModelData.searchFormData = new FormData()
        this.searchModelData.searchFormData.set('pageNum', this.searchCount == undefined ? '1' : this.searchCount)
      }


    }

  }
}
</script>

<style lang="css">
</style>
