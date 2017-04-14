<template lang="html">
  <div class="consumptionDetails">
    <!-- 消费详情对话框  -->
    <el-dialog title="详情" v-model="consumptionDetailsDialog = consumptionValue.show" size="small" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%" >
    <div class="cir" @click="consumptionDetailsValue"><i class="el-icon-close" ></i></div>

      <!-- <div class="" v-show="true">

      </div> -->
      <!-- <h1>{{ consumptionValue.index }}</h1> -->
                <!-- 会员 消费记录详情 -->
                <div class="dialog-list-box" v-if="consumptionValue.typeShow == 0">
                      <div class="box-left">
                      <p>订单编号: <span>{{ getDataResource.orderNumber }}</span></p>
                      <p>消费金额: <span>{{ getDataResource.consumptionAmount }}</span></p>
                      <p>激励开始日期: <span>{{ getDataResource.incentiveStartDate }}</span></p>

                      </div>
                      <div class="box-right">
                        <p>消费日期: <span>{{ getDataResource.consumptionDate }}</span></p>
                        <p>激励比例: <span>{{ getDataResource.incentiveProportion }}</span></p>
                        <p>激励结束日期: <span>{{ getDataResource.incentiveEndDate }}</span></p>

                      </div>
                </div>
                <!-- 咨询师 消费记录详情 -->
                <div class="dialog-list-box" v-else-if="consumptionValue.typeShow == 1">

                  <div class="box-left">
                  <p>订单编号: <span>{{ getDataResource.orderNumber }}</span></p>
                  <p>消费日期: <span>{{ getDataResource.consumptionDate }}</span></p>
                  <p>会员账号: <span>{{ getDataResource.memberAccount }}</span></p>

                  </div>
                  <div class="box-right">
                    <p>会员姓名: <span>{{ getDataResource.memberName }}</span></p>
                    <p>消费金额: <span>{{ getDataResource.consumptionAmount }}</span></p>
                    <p>会员类型: <span>{{ getDataResource.accountType }}</span></p>

                  </div>
                </div>
                <!-- 商铺 消费记录详情 -->
                <div class="dialog-list-box" v-else-if="consumptionValue.typeShow == 2">

                  <div class="box-left">
                  <p>订单编号: <span>{{ getDataResource.orderNumber }}</span></p>
                  <p>消费日期: <span>{{ getDataResource.consumptionDate }}</span></p>
                  <p>消费金额: <span>{{ getDataResource.consumptionAmount }}</span></p>

                  </div>
                  <div class="box-right">
                    <p>会员账号: <span>{{ getDataResource.memberAccount }}</span></p>
                    <p>会员姓名: <span>{{ getDataResource.memberName }}</span></p>

                  </div>
                </div>
            <el-table :data="tableData"style="width: 100%" max-height="400">
                <el-table-column prop="date"     label="商品名称">
                </el-table-column>
                <el-table-column prop="name"     label="数量">
                </el-table-column>
                <el-table-column prop="address"  label="单价(元)">
                </el-table-column>
                <el-table-column prop="date"  label="小计(元)">
                </el-table-column>
                <el-table-column prop="name"  label="商品描述">
                </el-table-column>
            </el-table>
    <!-- 分页 -->
    <div class="page-box">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="consumptionDetailsValue">关 闭</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getDataResource: {
        orderNumber: '', //订单编号
        consumptionDate: '', //消费日期
        memberAccount: '', //会员账号
        memberName: '', //会员姓名
        consumptionAmount: '', //消费金额
        accountType: '', //会员类型
        incentiveProportion: '', //激励比例
        incentiveStartDate: '', //激励开始日期
        incentiveEndDate: '' //激励结束日期
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      consumptionDetailsDialog: false,
      // isShow:()=>{
      //   if ($router.path == '../..') {
      //     return true
      //   }else if (){
      //
      //   }else{
      //     return false
      //   }
      //
      // }
    }
  },
  props: {
    consumptionValue: Object
  },
  methods: {
    consumptionDetailsValue() {

      this.consumptionDetailsDialog = false
      this.$emit('consumption', this.consumptionDetailsDialog)
    }
  }
}
</script>

<style lang="css">
.dialog-list-box{
  text-align: left;
  margin: 10px 50px;
}
.cir{
  width: 20px;
  height:20px;
  border: 1px solid #48576a;
  border-radius: 10px;
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor:pointer;
}
 .dialog-list-box .box-left{
  width: 50%;
  display: inline-block;
}
 .dialog-list-box .box-right{
  width: 50%;
float: right;
}
.page-box{
  margin-top: 40px;
}
</style>
