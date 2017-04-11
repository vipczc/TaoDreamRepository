<template lang="html">
  <!-- 对话框  基本信息-->
  <div class="basic">
    <el-dialog title="" v-model="basicDialog = dialogValue" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
      <div class="cir" @click="monitorValue"><i class="el-icon-close" ></i></div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基础信息" name="basic">

            <div id="basic">
              <div id="box-left">
                <span>会员姓名:张文生</span>
                <span>出生日期:1987年2月19日</span>
                <span>联系电话:1561846564</span>
                <span>家庭地址:一节2节街</span>
                
              </div>
                <div id="box-right">
                  <span>性&#12288&#12288别:女</span>
                  <span>身份证号:230124155565654588</span>
                  <span>教育程度:本科</span>

                </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="单位信息" name="work">

            <div id="basic">
              <div id="box-left">
                <span>单位名称:张文生</span>
                <span>单位规模:1987年2月19日</span>
                <span>部门职位:1561846564</span>
                <span>单位类型:一节2节街</span>
                <span>单位地址:一节2节街</span>
                <ul>
                  <!-- <li v-for="  in "></li> -->
                </ul>
              </div>
                <div id="box-right">

                  <span>所属行业:230124155565654588</span>
                  <span>任职部门:本科</span>
                  <span>年&#12288&#12288薪:本科</span>
                  <span>单位电话:本科</span>

                </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="银行卡信息" name="bank">


            <div id="basic">
              <div id="box-left">
                <span>开户银行:张文生</span>
                <span>支行银行:1987年2月19日</span>

                <ul>
                  <!-- <li v-for="  in "></li> -->
                </ul>
              </div>
                <div id="box-right">
                  <span>开户地区:女</span>
                  <span>银行卡号:230124155565654588</span>


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

<style lang="css">
.el-dialog__headerbtn{
  display: none;
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
#basic{

  text-align:left;
  display: inline;


}

#box-left{
float:left;
  display:inline;

}
#box-right{

  float: right;
  display: inline;
}
#box-left span {
  display: block;
  margin-top: 20px;
}
#box-right span {
  display: block;
  margin-top: 20px;
}
.el-tabs__item{
  padding: 0 49px !important;
  font-size: 18px !important;

}

.el-tabs__active-bar{
  display: none;
}
.el-tabs__item.is-active{
  color: #1fd34d !important;
}
</style>
