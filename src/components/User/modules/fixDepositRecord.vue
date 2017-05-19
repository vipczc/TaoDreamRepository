<template lang="html">
  <!-- 定存宝记录 -->
  <div class="fixDepositRecord">
    <el-col :span="24" style="background-color:#fff" class="table-box" >
      <el-table :data="tableData" style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中":max-height="700" :stripe="true">
           <el-table-column type="selection" width="55">
          </el-table-column>
           <el-table-column prop="startTime" label="转入日期">
           </el-table-column>
           <el-table-column  prop="endTime" label="到期时间">
           </el-table-column>
           <el-table-column prop="duration" label="定存期限(月)">
           </el-table-column>
           <el-table-column prop="soya" label="转入淘豆(个)">
           </el-table-column>
           <el-table-column prop="due" label="预计收益(个)">
           </el-table-column>
           <el-table-column prop="appreciation" label="增值比例(%)">
           </el-table-column>
           <el-table-column prop="statusName" label="状态">
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
import basic from '../../../common.js'
import {
  userApi
} from '../../api/apiCode.js'
export default {
  data() {

    return {
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
    //获取当前时间 老时间
    this.upDatafun()
  },
  watch: {
    'onCount': 'upDatafun'
  },
  methods: {

    //获取[{},{}*cont]*分页数的数组

    handleSizeChange(val) {

      // //console.log(this.getItmeCon(objData.data, 10));
      // //console.log(`每页 ${val} 条`);

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
      formData.append('memberProductRecordTimeStart', timeStart)
      formData.append('memberProductRecordTimeEnd', timeEnd)
      //console.log(timeEnd);
      this.$http.post(userApi.memberProductRecord, formData).then((objData) => { //淘豆兑换
        //console.log(objData.data.RESULT);
        this.result = objData.data.RESULT //Object 所有数据
        //时间处理
        for (var i = 0; i < this.result.data.length; i++) {
          this.result.data[i].startTime = basic.basic.formatDate(this.result.data[i].startTime)
          this.result.data[i].endTime = basic.basic.formatDate(this.result.data[i].endTime)
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
