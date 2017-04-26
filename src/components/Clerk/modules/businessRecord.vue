<template lang="html">
  <div class="businessRecord">
    <!-- 业务记录 -->
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
  <el-button  v-show="!loading" @click="onAdd(Value)">添加</el-button>

  <el-col :span="24" style="background-color:#fff" class="table-box">
  <el-table :data="tableData" style="width: 100%;height: 780px;" v-loading.body="loading" element-loading-text="加载中">
       <el-table-column type="selection" width="55">
      </el-table-column>
       <el-table-column prop="createTime" label="操作日期">
       </el-table-column>
       <el-table-column  prop="customerName" label="姓名">
       </el-table-column>
       <el-table-column prop="mobile" label="联系电话">
       </el-table-column>
       <el-table-column prop="identityNumber" label="身份证号">
       </el-table-column>
       <el-table-column prop="jobName" label="职业类型">
       </el-table-column>
       <el-table-column prop="birthday" label="出生年月">
       </el-table-column>
       <el-table-column prop="address" label="地址">
       </el-table-column>
       <el-table-column prop="remark" label="文字描述">
       </el-table-column>
       <el-table-column prop="statusName" label="状态">
       </el-table-column>
       <el-table-column label="操作">
             <template scope="scope">
               <el-button
                 size="small"
                 type="info"
                 @click="handleFollowUp(scope.$index, scope.row)">跟进</el-button>
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
    <followUp :followValue="followUpDialog" v-on:follow="followMessage"></followUp>
    <addPersonnel :addPersonnelValue="addPersonnelDialog" v-on:add="addMessage"></addPersonnel>
  </div>
  </template>

  <script>
import search from '../../searchModule/search.vue'
import followUp from '../../dialog/followUp.vue'
import addPersonnel from '../../dialog/addPersonnel.vue'
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
        searchStr: '姓名/账号',
        searchApi: '',
        searchFormData: ''
      },
      searchState: 0, //搜索状态
      searchCount: 1, //搜索页数
      addPersonnelDialog: {
        show: false,
        userType: 1
      },

      followUpData: true,
      result: {},
      onCount: 1,
      loading: true,
      options: [{
        Value: '1',
        label: '消费者'
      }, {
        Value: '2',
        label: '商家'
      }],
      Value: '1',
      tableData: [],
      followUpDialog: {
        show: false,
        objectData: {}
      },
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
    followUp,
    addPersonnel
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
    'Value': 'upDatafun',
    'followUpData': 'upDatafun'
  },
  methods: {
    onAdd(userType) { //添加人员
      this.addPersonnelDialog.userType = userType //人员类型
      this.addPersonnelDialog.show = true

    },
    handleFollowUp(index, row) {
      console.log(this.result.data[index]);
      this.followUpDialog.objectData = this.result.data[index]
      this.followUpDialog.show = true
    },
    followMessage(isb) {
      this.followUpDialog.show = isb.show
      this.followUpData = isb.upData
    },
    addMessage(isb) {
      this.addPersonnelDialog.show = isb.show
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
        formData.append('customerTimeStart', timeStart)
        formData.append('customerTimeEnd', timeEnd)
        formData.append('recommendType', this.Value == undefined ? '1' : this.Value == '2' ? '2' : '1')
        // formData.append('userType', this.Value == undefined ? '1' : this.Value == '2' ? '2' : '1')
        this.$http.post(clerkApi.customerRecord, formData).then((objData) => { //淘豆流水接口
          console.log(objData.data.RESULT);
          this.result = objData.data.RESULT //Object 所有数据
          //时间处理
          for (var i = 0; i < this.result.data.length; i++) {
            this.result.data[i].createTime = basic.basic.formatDate(this.result.data[i].createTime)
            this.result.data[i].birthday = basic.basic.formatDate(this.result.data[i].birthday)
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
        this.searchModelData.searchApi = clerkApi.customerRecord
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
