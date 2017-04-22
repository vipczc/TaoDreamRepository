<template lang="html">
  <!-- 对话框  基本信息-->
  <div id="basic">
    <el-dialog title="" v-model="basicDialog = dialogValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
      <div class="cir" @click="monitorValue"><i class="el-icon-close" ></i></div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基础信息" name="basic">

            <div class="basic">
              <div class="dialog-list-box">


              <div class="box-left">

                <p>会员姓名:<span> {{  dialogValue.objetcData.trueName	 }} </span></p>
                  <p>会员ID:<span> TMZ155555 </span></p>
                <p>出生日期:<span> {{  dialogValue.objetcData.birthday }} </span></p>
                <p>联系电话:<span> {{  dialogValue.objetcData.mobile }} </span></p>
                <p>家庭地址:<span> {{  dialogValue.objetcData.infoProvince + dialogValue.objetcData.infoCity + dialogValue.objetcData.infoArea+ dialogValue.objetcData.address}} </span></p>

              </div>
                <div class="box-right" >

                  <p>性&#12288&#12288别:<span> {{  dialogValue.objetcData.sex == '1' ? '女':'男'}} </span></p>
                  <p>身份证号:<span> {{  dialogValue.objetcData.mobile }}</span></p>
                  <p>教育程度:<span> {{  dialogValue.objetcData.highEdu == '1' ? "初中及以下": dialogValue.objetcData.highEdu == '2' ? "高中及中专":dialogValue.objetcData.highEdu == '3' ? "大专":dialogValue.objetcData.highEdu == '4' ? "本科":''}}</span></p>

                </div>
            </div>
          </div>
          </el-tab-pane>
          <el-tab-pane label="单位信息" name="work">

            <div class="basic">
              <div class="dialog-list-box">
              <div class="box-left">
                <p>单位名称:<span>{{  dialogValue.objetcData.companyName  }}</span></p>
                <p>单位规模:<span>{{  dialogValue.objetcData.scale == '1'?'21-50人': dialogValue.objetcData.scale == '2'?'101-500人': dialogValue.objetcData.scale == '3'?'其他': '其他'}}</span></p>
                <p>部门职位:<span>{{  dialogValue.objetcData.department }}</span></p>
                <p>单位类型:<span>{{  dialogValue.objetcData.companyType == '1'? '事业单位':dialogValue.objetcData.companyType == '2'? '国企': dialogValue.objetcData.companyType == '3'? '外企':dialogValue.objetcData.companyType == '4'? '合资 ':dialogValue.objetcData.companyType == '5'? '其他':'其他'}}</span></p>
                <p>单位地址:<span>{{  dialogValue.objetcData.companyProvince +  dialogValue.objetcData.companyCity +  dialogValue.objetcData.companyArea +  dialogValue.objetcData.companyAddress}}</span></p>
                <ul>
                  <!-- <li v-for="  in "></li> -->
                </ul>
              </div>
                <div class="box-right">
                  <p>所属行业:<span>{{  dialogValue.objetcData.profession }}</span></p>
                  <p>任职部门:<span>{{  dialogValue.objetcData.department }}</span></p>
                  <p>年&#12288&#12288薪:<span>{{  dialogValue.objetcData.salary }}</span></p>
                  <p>单位电话:<span>{{  dialogValue.objetcData.phoneZone + dialogValue.objetcData.phoneNumber}}</span></p>
                </div>
            </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="银行卡信息" name="bank">


            <div class="basic">
              <div class="dialog-list-box">
              <div class="box-left">

                <p>开户银行:<span>{{  dialogValue.objetcData.bankSimpleName }}</span></p>
                <p>支行银行:<span>{{  dialogValue.objetcData.branchName }}</span></p>
                <ul>
                  <!-- <li v-for="  in "></li> -->
                </ul>
              </div>
                <div class="box-right">

                  <p>开户地区:<span>{{  dialogValue.objetcData.bankProvince + dialogValue.objetcData.bankCity}}</span></p>
                  <p>银行卡号:<span>{{  dialogValue.objetcData.cardNumber }}</span></p>

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
    dialogValue: Object
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
