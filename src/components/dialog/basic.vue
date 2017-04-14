<template lang="html">
  <!-- 对话框  基本信息-->
  <div id="basic">
    <el-dialog title="" v-model="basicDialog = dialogValue" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
      <div class="cir" @click="monitorValue"><i class="el-icon-close" ></i></div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基础信息" name="basic">

            <div class="basic">
              <div class="dialog-list-box">


              <div class="box-left">

                <p>会员姓名:<span> 张文生</span></p>
                <p>出生日期:<span> 1987年2月19日</span></p>
                <p>联系电话:<span> 1561846564</span></p>
                <p>家庭地址:<span> 一节2节街</span></p>

              </div>
                <div class="box-right">

                  <p>性&#12288&#12288别:<span> 女</span></p>
                  <p>身份证号:<span> 230124155565654588</span></p>
                  <p>教育程度:<span> 本科</span></p>

                </div>
            </div>
          </div>
          </el-tab-pane>
          <el-tab-pane label="单位信息" name="work">

            <div class="basic">
              <div class="dialog-list-box">
              <div class="box-left">
                <p>单位名称:<span></span></p>
                <p>单位规模:<span></span></p>
                <p>部门职位:<span></span></p>
                <p>单位类型:<span></span></p>
                <p>单位地址:<span></span></p>
                <ul>
                  <!-- <li v-for="  in "></li> -->
                </ul>
              </div>
                <div class="box-right">
                  <p>所属行业:<span></span></p>
                  <p>任职部门:<span></span></p>
                  <p>年&#12288&#12288薪:<span></span></p>
                  <p>单位电话:<span></span></p>
                </div>
            </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="银行卡信息" name="bank">


            <div class="basic">
              <div class="dialog-list-box">
              <div class="box-left">

                <p>开户银行:<span></span></p>
                <p>支行银行:<span></span></p>
                <ul>
                  <!-- <li v-for="  in "></li> -->
                </ul>
              </div>
                <div class="box-right">

                  <p>开户地区:<span></span></p>
                  <p>银行卡号:<span></span></p>

                </div>
            </div>
            </div>

          </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">

        <!-- <el-button type="primary" @click="monitorValue">确 定</el-button> -->
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicDialog: false,
      activeName: 'basic'
    }
  },
  props: {
    dialogValue: Boolean
  },
  methods: {
    monitorValue() {
      this.basicDialog = false
      this.$emit('message', this.basicDialog);
    },
    handleClick(tab, event) {
      //console.log(tab, event);
    }
  }
}
</script>

<style  lang="css">
/*.el-dialog__headerbtn{
  display: none;
}*/
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


#basic .el-tabs__item{
  padding: 0px 49px !important;
  font-size: 18px !important;
}
#basic .el-tabs__item.is-active{
  color: #1fd34d !important;
}
#basic .el-tabs__active-bar{
  background-color: #1fd34d !important;
}


</style>
