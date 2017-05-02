<template lang="html">
  <div class="consumptionDetails">
    <!-- 消费详情对话框  -->
    <el-dialog title="详情" v-model="consumptionDetailsDialog.show = consumptionValue.show" size="small" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%" >
    <div class="cir" @click="consumptionDetailsValue"><i class="el-icon-close i-top" ></i></div>

      <!-- <div class="" v-show="true">

      </div> -->
      <!-- <h1>{{ consumptionValue.index }}</h1> -->
                <!-- 会员 消费记录详情 -->
                <div class="dialog-list-box" v-if="consumptionValue.typeShow == 0">
                      <div class="box-left">
                      <p>订单编号:&#12288&#12288&#12288 <span>{{ consumptionValue.objectData.orderNo }}</span></p>
                      <p>消费金额:&#12288&#12288&#12288 <span>{{ consumptionValue.objectData.totalAmount }}</span></p>
                      <p>激励开始日期:&#12288 <span>{{ consumptionValue.objectData.startEncourageDate }}</span></p>

                      </div>
                      <div class="box-right">
                        <p>消费日期:&#12288&#12288&#12288 <span>{{ consumptionValue.objectData.createTime }}</span></p>
                        <p>激励比例:&#12288&#12288&#12288 <span>{{ consumptionValue.objectData.consumerEncourageScale }}</span></p>
                        <p>激励结束日期:&#12288 <span>{{ consumptionValue.objectData.endEncourageDate }}</span></p>

                      </div>
                </div>
                <!-- 咨询师 消费记录详情 -->
                <div class="dialog-list-box" v-else-if="consumptionValue.typeShow == 1">

                  <div class="box-left">
                  <p>订单编号:&#12288&#12288 <span>{{ consumptionValue.objectData.orderNo }}</span></p>
                  <p>消费日期:&#12288&#12288 <span>{{ consumptionValue.objectData.createTime }}</span></p>
                  <p>会员账号:&#12288&#12288 <span>{{ consumptionValue.objectData.mobile }}</span></p>

                  </div>
                  <div class="box-right">
                    <p>会员姓名:&#12288&#12288 <span>{{ consumptionValue.objectData.trueName }}</span></p>
                    <p>消费金额:&#12288&#12288 <span>{{ consumptionValue.objectData.totalAmount }}</span></p>
                    <p>会员类型:&#12288&#12288 <span>{{ consumptionValue.objectData.userTypeName }}</span></p>

                  </div>
                </div>
                <!-- 商铺 消费记录详情 -->
                <div class="dialog-list-box" v-else-if="consumptionValue.typeShow == 2">

                  <div class="box-left">
                  <p>订单编号:&#12288&#12288 <span>{{ consumptionValue.objectData.orderNo }}</span></p>
                  <p>消费日期:&#12288&#12288 <span>{{ consumptionValue.objectData.createTime }}</span></p>
                  <p>消费金额:&#12288&#12288 <span>{{ consumptionValue.objectData.totalAmount }}</span></p>

                  </div>
                  <div class="box-right">
                    <p>会员账号:&#12288&#12288 <span>{{ consumptionValue.objectData.mobile }}</span></p>
                    <p>会员姓名:&#12288&#12288 <span>{{ consumptionValue.objectData.trueName }}</span></p>

                  </div>
                </div>
            <el-table :data="tableData"style="width: 100%" max-height="400">
                <el-table-column prop="goodsName"     label="商品名称">
                </el-table-column>
                <el-table-column prop="quantity"     label="数量">
                </el-table-column>
                <el-table-column prop="price"  label="单价(元)">
                </el-table-column>
                <el-table-column prop="subtotal"  label="小计(元)">
                </el-table-column>
                <el-table-column prop="descrition"  label="商品描述">
                </el-table-column>
            </el-table>
    <!-- 分页 -->
    <div class="page-box">
      <el-pagination

        :current-page="Number(onCount)"

        :page-size="10"
        layout="total, prev, pager, next"
        :total="result.totalElements">
      </el-pagination>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="consumptionDetailsValue">关 闭</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  userApi,
  businessAPi,
  clerkApi
} from '../api/apiCode.js'

export default {
  data() {
    return {
      result: {},
      onCount: 1, //当前分页数
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
      tableData: [],
      consumptionDetailsDialog: {
        show: false,
      }
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
  watch: {
    'onCount': 'upDatafun',
    'consumptionDetailsDialog.show': 'upDatafun'
  },
  methods: {
    handleCurrentChange(val) {
      this.onCount = val;
    },
    consumptionDetailsValue() {
      this.consumptionDetailsDialog.show = false
      this.$emit('consumption', this.consumptionDetailsDialog)
    },
    upDatafun() {

      if (this.consumptionValue.typeShow == 0) { //消费者
        if (!this.consumptionDetailsDialog.show == false) { //控制数据获取
          let formData = new FormData()
          formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
          formData.append('consumerOrderId', this.consumptionValue.objectData.id)

          this.$http.post(userApi.consumptionDetail, formData).then((objData) => {
            console.log(objData.data.RESULT);
            this.result = objData.data.RESULT //Object 所有数据
            for (var i = 0; i < this.result.data.length; i++) {
              this.result.data[i].subtotal = this.result.data[i].price * this.result.data[i].quantity
              this.result.data[i].price = this.result.data[i].price + this.result.data[i].unit
            }
            this.tableData = this.result.data
            this.loading = false
          }).catch((err) => {
            console.log(err);
          })
        }
      } else if (this.consumptionValue.typeShow == 2) { //商家
        if (!this.consumptionDetailsDialog.show == false) { //控制数据获取
          let formData = new FormData()
          formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
          formData.append('consumerOrderId', this.consumptionValue.objectData.id)

          this.$http.post(businessAPi.consumerOrderRecordInfo, formData).then((objData) => {
            console.log(objData.data.RESULT);
            this.result = objData.data.RESULT //Object 所有数据
            for (var i = 0; i < this.result.data.length; i++) {
              this.result.data[i].subtotal = this.result.data[i].price * this.result.data[i].quantity
              this.result.data[i].price = this.result.data[i].price + this.result.data[i].unit
            }
            this.tableData = this.result.data
            this.loading = false
          }).catch((err) => {
            console.log(err);
          })
        }
      } else if (this.consumptionValue.typeShow == 1) { //咨询师

        if (!this.consumptionDetailsDialog.show == false) { //控制数据获取
          let formData = new FormData()
          formData.append('pageNum', this.onCount == undefined ? '1' : this.onCount)
          formData.append('consumerOrderId', this.consumptionValue.objectData.id)
          formData.append('userType', this.consumptionValue.thisUserType)
          this.$http.post(clerkApi.consumerOrderRecordInfo, formData).then((objData) => {
            console.log(objData.data.RESULT);
            this.result = objData.data.RESULT //Object 所有数据
            for (var i = 0; i < this.result.data.length; i++) {
              this.result.data[i].subtotal = this.result.data[i].price * this.result.data[i].quantity
              this.result.data[i].price = this.result.data[i].price + this.result.data[i].unit
            }
            this.tableData = this.result.data
            this.loading = false
          }).catch((err) => {
            console.log(err);
          })
        }

      }

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
.consumptionDetails .el-notification{
 right: 800px !important;
}
</style>
