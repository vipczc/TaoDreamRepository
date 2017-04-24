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
    <el-col :span="7">
      <div class="block">


  <el-input
  placeholder="请根据姓名 编号搜索"
  icon="search"
  v-model="SearchValue"
  :on-icon-click="handleIconClick">
</el-input>
</div>

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
      value7: ''
    }
  },
  // props:{
  //   searchModel:Object
  // },
  methods: {
    //搜索按钮事件
    dateChange(date) {
      this.searchStartDate = date.substring(0, 10)
      this.searchEndDate = date.substring(13, 23)
    },
    handleIconClick(ev) {
      //点击搜索 进行获取搜索API 获取参数 关键字 与 日期时间
      // this.searchModel.urlApi //搜索API的URL
      // this.searchModel.endDateVariable //结束日期 变量名称设置
      // this.searchModel.startDateVariable//开始日期 变量名称设置
      // this.searchModel.searchVariable//搜索内容 变量名称设置
      // this.searchModel.pageVariable//搜索页数 变量名称设置

    },
    submitSearch() {
      // let formData = new FormData()
      // formData.append(this.searchModel.pageVariable, this.getDataResource.TDMoney)
      // formData.append(this.searchModel.startDateVariable, this.getDataResource.TDMoney)
      // formData.append(this.searchModel.endDateVariable, this.getDataResource.TDMoney)
      // formData.append(this.searchModel.searchVariable, this.getDataResource.TDMoney)
      //
      // this.$http.post(userApi.exchangeTaodou, formData).then((objData) => {
      //
      //
      //   if (objData.data.ERRORCODE == 0) {
      //     this.disInput = false
      //     this.tdrecordSumDialog.show = false
      //     this.tdrecordSumDialog.upData = !this.tdrecordSumDialog.upData
      //     this.$emit('td', this.tdrecordSumDialog)
      //     this.scuess(objData.data.RESULT)
      //   } else {
      //     this.errorScuess(objData.data.RESULT)
      //   }
      //
      // }).catch((err) => {
      //   console.log('访问错误2' + err);
      // })
    }
  },

}
</script>

<style lang="css">
</style>
