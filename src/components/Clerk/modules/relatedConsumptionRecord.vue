<template lang="html">
  <div class="relatedConsumptionRecord">
    <!-- 关联消费记录 -->
    <!-- 搜索 -->
  <search v-show="!loading"></search>

<el-select v-model="Value" v-show="!loading" placeholder="消费者">
  <el-option
    v-for="item in options"
    :label="item.label"
    :value="item.Value"
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
    search,
    consumptionDetails, //注册详情对话框组件
  },
  mounted() {
    //获取当前时间 老时间
    this.upDatafun()
  },
  watch: {
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
    handleCurrentChange(val) {
      this.onCount = val;
    },
    upDatafun() {
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

  }
}
</script>

<style lang="css">
</style>
