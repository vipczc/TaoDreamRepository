<template lang="html">
  <!-- 对话框  基本信息-->
  <div id="basic">
    <el-dialog title="" v-model="basicDialog = dialogValue.show" size="small" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
      <div class="cir" @click="monitorValue"><i class="el-icon-close i-top" ></i></div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基础信息" name="basic">

            <div class="basic">
              <div class="dialog-list-box">


              <div class="box-left">

                <p>会员姓名:<span>&#12288 {{  dialogValue.objetcData.trueName	 }} </span></p>
                  <p>会员ID:<span>&#12288&#12288 {{ dialogValue.objetcData.memberCode }} </span></p>
                <p>出生日期:<span>&#12288 {{  dialogValue.objetcData.birthday }} </span></p>
                <p>联系电话:<span>&#12288 {{  dialogValue.objetcData.mobile }} </span></p>
                <p>家庭地址:<span>&#12288 {{  dialogValue.objetcData.infoProvince + dialogValue.objetcData.infoCity + dialogValue.objetcData.infoArea+ dialogValue.objetcData.address}} </span></p>

              </div>
                <div class="box-right" >

                  <p>性&#12288&#12288别:<span>&#12288 {{  dialogValue.objetcData.sex == '1' ? '男':'女'}} </span></p>
                  <p>身份证号:<span>&#12288 {{  dialogValue.objetcData.identityNumber }}</span></p>
                  <p>教育程度:<span>&#12288 {{  dialogValue.objetcData.highEdu == '1' ? "初中及以下": dialogValue.objetcData.highEdu == '2' ? "高中及中专":dialogValue.objetcData.highEdu == '3' ? "大专":dialogValue.objetcData.highEdu == '4' ? "本科":''}}</span></p>

                </div>
            </div>
          </div>
          </el-tab-pane>
          <el-tab-pane label="单位信息" name="work">

            <div class="basic">
              <div class="dialog-list-box">
              <div class="box-left">

                <p>单位名称:<span>&#12288{{  dialogValue.objetcData.companyName  }}</span></p>
                <p>单位规模:<span>&#12288{{  dialogValue.objetcData.scale == '1'?'20~50人': dialogValue.objetcData.scale == '2'?'51~100人': dialogValue.objetcData.scale == '3'?'101~500': dialogValue.objetcData.scale == '4'?'101~500': dialogValue.objetcData.scale == '5'?'501~1000': dialogValue.objetcData.scale == '6'?'1001~5000': dialogValue.objetcData.scale == '7'?'5000人以上': '其他'}}</span></p>
                <p>部门职位:<span>&#12288{{  dialogValue.objetcData.department }}</span></p>
<p>单位类型:<span>&#12288{{  dialogValue.objetcData.companyType == '1'? '机关/事业单位':dialogValue.objetcData.companyType == '2'? '国有企业': dialogValue.objetcData.companyType == '3'? '外商独资企业':dialogValue.objetcData.companyType == '4'? '中外合资':dialogValue.objetcData.companyType == '5'? '股份制企业':dialogValue.objetcData.companyType == '6'? '私有企业':dialogValue.objetcData.companyType == '7'? '其他':'其他'}}
              </span></p>
                <p>单位地址:<span>&#12288{{  dialogValue.objetcData.companyProvince +  dialogValue.objetcData.companyCity +  dialogValue.objetcData.companyArea +  dialogValue.objetcData.companyAddress}}</span></p>
                <ul>
                  <!-- <li v-for="  in "></li> -->
                </ul>
              </div>
                <div class="box-right">
                  <p>所属行业:<span>&#12288{{  dialogValue.objetcData.profession }}</span></p>
                  <p>任职部门:<span>&#12288{{  dialogValue.objetcData.department }}</span></p>
                  <p>年&#12288&#12288薪:<span>&#12288{{  dialogValue.objetcData.salary }}</span></p>
                  <p>单位电话:<span>&#12288{{  dialogValue.objetcData.phoneZone + dialogValue.objetcData.phoneNumber}}</span></p>
                </div>
            </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="银行卡信息" name="bank">


            <div class="basic">
              <div class="dialog-list-box">
              <div class="box-left">

                <p>开户银行:<span>&#12288{{  dialogValue.objetcData.bankSimpleName }}</span></p>
                <p>支行银行:<span>&#12288{{  dialogValue.objetcData.branchName }}</span></p>
                <ul>
                  <!-- <li v-for="  in "></li> -->
                </ul>
              </div>
                <div class="box-right">

                  <p>开户地区:<span>&#12288{{  dialogValue.objetcData.bankProvince + dialogValue.objetcData.bankCity}}</span></p>
                  <p>银行卡号:<span>&#12288{{  dialogValue.objetcData.cardNumber }}</span></p>

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

<style  lang="css" >
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
  padding: 0px 110px !important;
  font-size: 18px !important;
}
#basic .el-tabs__item.is-active{
  color: #1fd34d !important;
}
#basic .el-tabs__active-bar{
  background-color: #1fd34d !important;
}
.i-top{
  margin-top: 3px;
}


 .i-top {
-webkit-animation:rotateIn 1s .2s ease both;
-moz-animation:rotateIn 1s .2s ease both;}
@-webkit-keyframes rotateIn{
0%{-webkit-transform-origin:center center;
-webkit-transform:rotate(-200deg);
opacity:0}
100%{-webkit-transform-origin:center center;
-webkit-transform:rotate(0);
opacity:1}
}
@-moz-keyframes rotateIn{
0%{-moz-transform-origin:center center;
-moz-transform:rotate(-200deg);
opacity:0}
100%{-moz-transform-origin:center center;
-moz-transform:rotate(0);
opacity:1}
}
</style>
