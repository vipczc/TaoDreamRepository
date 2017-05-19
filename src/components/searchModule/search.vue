<template lang="html">

  <div id="search">
    <!-- 搜索框 -->
    <el-col :span="4">
      <div class="">
        <el-date-picker
          v-model="value6"
          type="daterange"
          placeholder="选择日期范围" @change="dateChange">

        </el-date-picker>
      </div>
    </el-col>
    <!-- 日期 -->
    <el-col :span="5">



  <el-input
  :placeholder="searchModel.searchStr"
  icon="close"
  v-model="SearchValue"
  :on-icon-click="cancelSearch"
v-on:change="mcg"
  >

</el-input>




    </el-col>
    <el-col :span="1">
            <el-button @click="handleIconClick"  type="info" icon="search"></el-button>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SearchValue: '',
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      searchStartDate: '', //开始时间
      searchEndDate: '', //结束时间
      value6: '',
      value7: '',
      searchState: 1,
      package: {
        SearchValue: 1
      }, //包裹

    }
  },
  watch: {

  },
  props: {
    searchModel: Object
  },
  methods: {
    //搜索按钮事件
    dateChange(date) {
      this.searchStartDate = date.substring(0, 10)
      this.searchEndDate = date.substring(13, 23)
    },
    handleIconClick(ev) {
      if (!this.searchStartDate == '') {
        this.submitSearch()

      } else {
        this.messageError()
      }


      //点击搜索 进行获取搜索API 获取参数 关键字 与 日期时间
      // this.searchModel.urlApi //搜索API的URL
      // this.searchModel.endDateVariable //结束日期 变量名称设置
      // this.searchModel.startDateVariable//开始日期 变量名称设置
      // this.searchModel.searchVariable//搜索内容 变量名称设置
      // this.searchModel.pageVariable//搜索页数 变量名称设置

    },
    mcg() {

      if (this.SearchValue == '') {
        this.searchState = 0
        this.$emit('elementSearch', this.searchState)
      }
    },
    cancelSearch() {
      this.SearchValue = ''
      this.searchState = 0
      this.$emit('elementSearch', this.searchState)
    },
    submitSearch() {

      let formData = this.searchModel.searchFormData
      formData.set('requestPatameter', this.SearchValue == undefined ? '' : this.SearchValue) //搜索值
      formData.set('consumerOrderRecordTimeStart', this.searchStartDate) //搜索日期
      formData.set('consumerOrderRecordTimeEnd', this.searchEndDate) //搜索结束日期
      formData.set('taodouRecordTimeStart', this.searchStartDate) //搜索日期
      formData.set('taodouRecordTimeEnd', this.searchEndDate) //搜索结束日期

      formData.set('customerTimeStart', this.searchStartDate) //搜索日期
      formData.set('customerTimeEnd', this.searchEndDate) //搜索结束日期

      formData.set('consumerOrderRecordTimeStart', this.searchStartDate) //搜索日期
      formData.set('consumerOrderRecordTimeEnd', this.searchEndDate) //搜索结束日期
      formData.set('startDate', this.searchStartDate) //搜索日期
      formData.set('endDate', this.searchEndDate) //搜索结束日期

      formData.set('orderNo', this.SearchValue == undefined ? '' : this.SearchValue) //单据号
      formData.set('searchStr', this.SearchValue == undefined ? '' : this.SearchValue) //单据号
      formData.set('userType', this.searchModel.userType == undefined ? '1' : this.searchModel.userType) //推荐类型（1：消费者；2商家）

      formData.set('recommendType', this.searchModel.userType == undefined ? '1' : this.searchModel.userType) //推荐类型（1：消费者；2商家）


      //获取
      this.$http.post(this.searchModel.searchApi, this.searchModel.searchFormData).then((objData) => {


        if (objData.data.ERRORCODE == 0) {
          // //console.log(objData.data);
          this.$emit('elementSearch', objData.data)
          // this.disInput = false
          // this.tdrecordSumDialog.show = false
          // this.tdrecordSumDialog.upData = !this.tdrecordSumDialog.upData
          // this.$emit('td', this.tdrecordSumDialog)
          // this.scuess(objData.data.RESULT)
        } else {
          this.errorScuess(objData.data.RESULT)
        }

      }).catch((err) => {
        //console.log('访问错误2' + err);
      })
    },
    messageError() {
      this.$message({
        showClose: true,
        message: '请输入查询日期',
        type: 'warning'
      });
    }

  },

}
</script>

<style lang="css">
</style>
