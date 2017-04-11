<template lang="html">
  <!-- 推荐记录 -->
  <div id="recommendRecord">
    <!-- 搜索框 -->
    <el-col :span="7">
      <div class="">
        <el-input
        placeholder="请根据姓名 编号搜索"
        icon="search"
        v-model="SearchValue"
        :on-icon-click="handleIconClick">
      </el-input>
      </div>
    </el-col>
    <!-- 日期 -->
    <el-col :span="5">
      <div class="block">

  <el-date-picker
    v-model="value6"
    type="daterange"
    placeholder="选择日期范围">
  </el-date-picker>
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
      value6: '',
      value7: ''
    }
  },
  methods: {
    //搜索按钮事件
    handleIconClick(ev) {
      console.log(this.value6 + '' + this.value7);
    }
  }
}
</script>

<style lang="css">
</style>
