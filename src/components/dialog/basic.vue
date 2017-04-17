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

                <p>会员姓名:<span> {{  protData.userName }} </span></p>
                <p>出生日期:<span> {{  protData.birthDate }} </span></p>
                <p>联系电话:<span> {{  protData.phoneNumber }} </span></p>
                <p>家庭地址:<span> {{  protData.homeAddress }} </span></p>

              </div>
                <div class="box-right">

                  <p>性&#12288&#12288别:<span> {{  protData.sex }} </span></p>
                  <p>身份证号:<span> {{  protData.id }}</span></p>
                  <p>教育程度:<span> {{  protData.ebbducationLevel }}</span></p>

                </div>
            </div>
          </div>
          </el-tab-pane>
          <el-tab-pane label="单位信息" name="work">

            <div class="basic">
              <div class="dialog-list-box">
              <div class="box-left">
                <p>单位名称:<span>{{  protData.unitName  }}</span></p>
                <p>单位规模:<span>{{  protData.unitSize }}</span></p>
                <p>部门职位:<span>{{  protData.departmentPosition }}</span></p>
                <p>单位类型:<span>{{  protData.unitType }}</span></p>
                <p>单位地址:<span>{{  protData.unitAddress }}</span></p>
                <ul>
                  <!-- <li v-for="  in "></li> -->
                </ul>
              </div>
                <div class="box-right">
                  <p>所属行业:<span>{{  protData.subordinateIndustry }}</span></p>
                  <p>任职部门:<span>{{  protData.department }}</span></p>
                  <p>年&#12288&#12288薪:<span>{{  protData.annualSalary }}</span></p>
                  <p>单位电话:<span>{{  protData.unitphone }}</span></p>
                </div>
            </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="银行卡信息" name="bank">


            <div class="basic">
              <div class="dialog-list-box">
              <div class="box-left">

                <p>开户银行:<span>{{  protData.bankAccount }}</span></p>
                <p>支行银行:<span>{{  protData.takeOutBank }}</span></p>
                <ul>
                  <!-- <li v-for="  in "></li> -->
                </ul>
              </div>
                <div class="box-right">

                  <p>开户地区:<span>{{  protData.registeredRegion }}</span></p>
                  <p>银行卡号:<span>{{  protData.bankNumber }}</span></p>

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
      protData: {
        userName: '', //会员姓名
        birthDate: '', //出生日期
        phoneNumber: '', //联系电话
        homeAddress: '', //家庭地址
        sex: '', //性别
        id: '', //身份证号
        ebbducationLevel: '', //教育程度
        unitName: '', //单位名称
        unitSize: '', //单位规模
        departmentPosition: '', //部门职位
        unitType: '', //单位类型
        unitAddress: '', //单位地址
        subordinateIndustry: '', //所属行业
        department: '', //任职部门

        annualSalary: '', //年薪
        unitphone: '', //单位电话

        bankAccount: '', //开户银行
        takeOutBank: '', //支行银行
        registeredRegion: '', //开户地区
        bankNumber: '', //银行卡号
      },
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
