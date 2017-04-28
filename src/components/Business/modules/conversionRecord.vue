<template lang="html">
  <!-- 兑换记录 -->
  <div class="conversionRecord">
    <!-- 搜索 -->
<search v-show="!loading"></search>
<el-col :span="24" style="background-color:#fff" class="table-box">
  <el-table :data="tableData" :max-height="700" stripe="true"style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
       <el-table-column type="selection" width="55">
      </el-table-column>
       <el-table-column prop="createTime" label="兑换日期">
       </el-table-column>
       <el-table-column  prop="taodouAmount" label="兑换淘豆(个)">
       </el-table-column>
       <el-table-column prop="exchangeAmount" label="兑换获得金额(元)">
       </el-table-column>
       <el-table-column prop="taodouBalance" label="剩余淘豆(个)">
       </el-table-column>
     </el-table>

</el-col>
<el-col :span="24" >
    <!-- <el-col :span="12">
      <span>共{{ result.iTotalRecords }}项</span>
    </el-col> -->
    <el-col :span="12" :offset="6">

      <div class="block">
<span class="demonstration"></span>
<!-- <el-pagination
@size-change="handleSizeChange"
@current-change="handleCurrentChange"

layout=" prev, pager, next"
:total="result.maxPager*10">
</el-pagination> -->

   <el-pagination
   v-show="!loading"
     @size-change="handleSizeChange"
     @current-change="handleCurrentChange"
     :current-page="Number(onCount)"


     :page-size="10"
     layout="total, prev, pager, next"
     :total="result.totalElements">
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
  businessAPi
} from '../../api/apiCode.js'
import basic from '../../../common.js'
export default {

  data() {


    return {
      loading: true,
      tableData: [],

      result: {
        iTotalRecords: '', //总条数
        maxPager: '', //最大页数
        minPager: '', //最小页数
      }, //返回参数
      allData: '',
      totalCount: 0, //分页数
      a: 0,
      b: 0,
      sum: 0,
      tableItemCount: 18,
      onCount: 1
    }
  },
  mounted() {


    //获取当前时间 老时间\
    this.upDatafun()



  },
  components: {
    search
  },
  watch: {
    'onCount': 'upDatafun'
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
      // this.currentPage = val;
      // console.log('aaa' + this.allData[val - 1].length < this.tableItemCount);
      // this.a = val * this.allData[val - 1].length - this.allData[val - 1].length
      // this.b = val * this.allData[val - 1].length
      // this.tableData = this.allData[val - 1];
      console.log(val);
      this.onCount = val //当前点击页数
    },
    upDatafun() {

      var timeStart = Date.parse(new Date());
      var timeEnd = timeStart
      timeStart = timeStart / 1000;
      timeStart = basic.basic.formatDate(timeStart)
      timeEnd = basic.basic.formatDate(timeEnd)

      let formData = new FormData()

      formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
      formData.append('taodouRecordTimeStart', timeStart)
      formData.append('taodouRecordTimeEnd', timeEnd)

      this.$http.post(businessAPi.taodouExchangeRecord, formData).then((objData) => {
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
.conversionRecord{
  /*text-align: left;*/
}
.table-box{
margin-top: 14px;
}
.el-table th>.cell{
text-align: center;
}
</style>
