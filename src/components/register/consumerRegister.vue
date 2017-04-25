<template>
	<div class="consumerRegister">
		<el-steps :space="200" :active="active" :align-center="true" :center="true">
      <el-step title="基本信息" ></el-step>
      <el-step title="单位信息" ></el-step>
      <el-step title="资产信息" ></el-step>
      <el-step title="银行卡信息"></el-step>
      <el-step title="上传资料"></el-step>
    </el-steps>
    <div style="text-align: right;width:790px; margin:0 auto;">
      <el-button style="margin-top: 12px;" @click="next" type="info">下一步</el-button>  
    </div>
    <div class="content">
      <div class="" v-if="active == 1">
      	<!-- <consumerstepone :basicMessage="basicMessage" :active="active"></consumerstepone> -->
        <div class="consumerStepone" >
          <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>推荐人信息<b style="color:#ff831b;"></b></div>
          <el-form :model="basicMessage" :inline="true" ref="basicMessage"  class="demo-form-inline mar" :rules="rule1" >
            <el-form-item label="推荐人" prop="recommender">
              <el-select v-model="basicMessage.recommender" placeholder="请选择" style="width:100px;" @change="recommenderChange">
                <el-option label="会员" value="1"></el-option>
                <el-option label="咨询师" value="2"></el-option>
                <el-option label="无" value="3"></el-option>
              </el-select>
            </el-form-item>
             <el-form-item label="会员ID" prop="id">
              <el-input  v-model="basicMessage.id" auto-complete="off" placeholder="请输入会员ID" style="width:120px;"  ref="id"></el-input>
            </el-form-item>
            <el-form-item label="推荐人姓名" prop="recommenderName" >
              <el-input  v-model="basicMessage.recommenderName" auto-complete="off"  style="width:100px;" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="recommenderPhone">
              <el-input  v-model="basicMessage.recommenderPhone" auto-complete="off" style="width:120px;" :disabled="true"></el-input>
            </el-form-item>
            <div class="step" style="margin-left: -12px; margin-bottom: 20px; "><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px;"></span>你的基本信息<b style="color:#ff831b;"></b></div>
            <el-form-item label="中文姓名" prop="name">
              <el-input  v-model="basicMessage.name" auto-complete="off" placeholder="请输入姓名" style="width:150px;"></el-input>
            </el-form-item>
             <el-form-item label="性别：" prop="gender">
              <el-radio-group v-model="basicMessage.gender">
                <el-radio label="男" value="1"></el-radio>
                <el-radio label="女" value="2"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="身份证号" prop="idNumber">
              <el-input  v-model="basicMessage.idNumber" auto-complete="off" placeholder="请输入身份证号" style="width:250px;"></el-input>
            </el-form-item>
             <el-form-item label="联系电话" prop="phoneNumber">
              <el-input  v-model="basicMessage.phoneNumber" auto-complete="off" placeholder="如：15037035889" style="width:150px;"></el-input>
            </el-form-item>
            <el-form-item label="出生日期" prop="birthDate">
              <el-date-picker
              v-model="basicMessage.birthDate"
              type="date"
              placeholder="选择日期"
              :picker-options="basicMessage.pickerOptions0"
              >
            </el-date-picker>
            </el-form-item>
            <el-form-item label="家庭住址" prop="selectedOptions">
                <el-cascader :options="basicMessage.options" v-model="basicMessage.selectedOptions" @change="handleChange1" style="width:320px;"></el-cascader>
            </el-form-item>
            <el-form-item label="邮政编码" prop="postCode">
              <el-input  v-model="basicMessage.postCode" auto-complete="off" placeholder="如：3100" style="width:150px;"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" prop="detailAddress">
              <el-input type="textarea" v-model="basicMessage.detailAddress" auto-complete="off" placeholder="如：湖州街599号天邑国际大厦7幢7层" style="width:320px;"></el-input>
            </el-form-item>
            <el-form-item label="教育程度" prop="educationLevel">
              <el-radio-group v-model="basicMessage.educationLevel">
                <el-radio label="初中及以下"></el-radio>
                <el-radio label="高中及中专"></el-radio>
                <el-radio label="大专"></el-radio>
                <el-radio label="本科"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否接受来自俱乐部赠阅的杂志和发来的短信" prop="message">
              <el-radio-group v-model="basicMessage.message">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="电子邮件" prop="email">
              <el-input  v-model="basicMessage.email" auto-complete="off" placeholder="如：8654621258@qq.com" style="width:310px;"></el-input>
            </el-form-item>
            <el-form-item label="是否接受来自俱乐部的电子邮件" prop="sendEmail">
              <el-radio-group v-model="basicMessage.sendEmail">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
            <div style="color:#F7BA2A;">
              （请如实准确填写您的资料，以确保我们建立您的档案，以便今后可以收到俱乐部活动信息或礼品）
            </div>
        </div>
      </div>
      <div class="" v-if="active == 2">
        <!-- <consumersteptwo :unitInformation="unitInformation"></consumersteptwo> -->
        <div class="consumerSteptwo">
          <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>你的单位信息<b style="color:#ff831b;"></b></div>
          <el-form :model="unitInformation" :inline="true" ref="unitInformation"  class="demo-form-inline mar" :rules="rule2">
            <el-form-item label="单位全称：" prop="companyName">
              <el-input  v-model="unitInformation.companyName" auto-complete="off" placeholder="如：浙江至讯科技有限公司" style="width:250px;"></el-input>
            </el-form-item>
             <el-form-item label="所属行业：" prop="industry" >
                  <el-cascader
                :options="unitInformation.industry1" 
                change-on-select
                @change="selChange"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="备注：" prop="remark" v-show="remark">
              <el-input type="textarea" v-model="unitInformation.remark" auto-complete="off" placeholder="如：湖州街599号天邑国际大厦7幢7层" style="width: 500px;"></el-input>
            </el-form-item>
            <el-form-item label="任职部门：" prop="department">
              <el-input  v-model="unitInformation.department" auto-complete="off" placeholder="如：研发部" style="width:300px;"></el-input>
            </el-form-item>
            <el-form-item label="职位/岗位：" prop="position">
              <el-input  v-model="unitInformation.position" auto-complete="off" placeholder="如：员工" style="width:120px;"></el-input>
            </el-form-item>
           <el-form-item label="法人：" prop="legalPerson">
            <el-radio-group v-model="unitInformation.legalPerson">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
           <el-form-item label="年薪：" prop="annualSalary">
              <el-input  v-model="unitInformation.annualSalary" auto-complete="off" placeholder="如：15000" style="width:327px;"></el-input>
           </el-form-item>
            <el-form-item label="单位规模：" prop="unitSize">
              <el-radio-group v-model="unitInformation.unitSize">
                <el-radio label="21~50"></el-radio>
                <el-radio label="101~500"></el-radio>
                <el-radio label="其他"></el-radio>
              </el-radio-group>
            </el-form-item>
             <el-form-item label="单位现所在省市区：" prop="selectedOptions">
                <el-cascader :options="unitInformation.options" v-model="unitInformation.selectedOptions" @change="handleChange" style="width:242px;"></el-cascader>
            </el-form-item>
             <el-form-item label="邮政编码：" prop="postCode">
              <el-input  v-model="unitInformation.postCode" auto-complete="off" placeholder="如：3100" style="width:250px;"></el-input>
            </el-form-item>
            <el-form-item label="详细地址：" prop="detailAddress">
              <el-input type="textarea" v-model="unitInformation.detailAddress" auto-complete="off" placeholder="如：湖州街599号天邑国际大厦7幢7层" style="width:300px;"></el-input>
            </el-form-item>
           
             <el-form-item label="单位类型：" prop="unitType" >
                <el-radio-group v-model="unitInformation.unitType" >
                  <el-radio label="机关/事业单位"></el-radio>
                  <el-radio label="国有企业"></el-radio>
                  <el-radio label="外商独资企业"></el-radio>
                  <el-radio label="中外合资/合作企业"></el-radio>
                  <el-radio label="股份制企业"></el-radio>
                  <el-radio label="私有企业"></el-radio>
                  <el-radio label="其他"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="电话(可选填)：区号" prop="areaCode">
              <el-input type="number" v-model="unitInformation.areaCode" auto-complete="off" placeholder="如：0571" style="width:120px;"></el-input>
            </el-form-item>
            <el-form-item label="电话号码：" >
              <el-input type="number" v-model="unitInformation.phoneNumber" auto-complete="off" placeholder="如：8857567" style="width:170px;"></el-input>
            </el-form-item>
            <el-form-item label="分机：" >
              <el-input type="number" v-model="unitInformation.phoneNumberOther" auto-complete="off" placeholder="如：8857567" style="width:170px;"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="" v-if="active == 3">
        <!-- <consumerstepthree :assetInformation="assetInformation"></consumerstepthree> -->
        <div class="consumerStepthree">
          <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>资产信息<b style="color:#ff831b;">（选填）</b></div>
          <el-form :model="assetInformation" :inline="true" ref="assetInformation"  class="demo-form-inline mar">
            <el-form-item label="您拥有的信用卡数量：" prop="cardNumber">
              <el-input type="number" v-model="assetInformation.cardNumber" auto-complete="off" placeholder="如：1张" style="width:100px;"></el-input>
            </el-form-item>
            <el-form-item label="您拥有的信用卡总额度：" prop="creditLimit">
              <el-input  v-model="assetInformation.creditLimit" auto-complete="off" placeholder="如：100000元" style="width:200px;"></el-input>
            </el-form-item>
            <el-form-item label="您的居住情况：" prop="livingCondition">
              <el-radio-group v-model="assetInformation.livingCondition">
                <el-radio label="租房"></el-radio>
                <el-radio label="自有房产"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="您名下的房产数量及价值：" prop="houseProperty">
              <el-input  v-model="assetInformation.houseProperty" auto-complete="off" placeholder="如：2套500000元" style="width:300px;"></el-input>
            </el-form-item>
            <el-form-item label="您名下的这字数量和价值：" prop="carValue">
              <el-input  v-model="assetInformation.carValue" auto-complete="off" placeholder="如：2辆500000元" style="width:300px;"></el-input>
            </el-form-item>
            <el-form-item label="您做过哪些投资：" prop="investment">
              <el-select v-model="assetInformation.investment" multiple placeholder="请选择" @change="invert" style="width:400px;">
                <el-option
                  v-for="item in invests"
                  :label="item.label"
                  :value="item.value" :key="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <div class="step" style="margin-left: -12px; margin-bottom: 20px;"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>联系人信息<b style="color:#ff831b;">（选填）</b></div>
            <el-form-item label="联系人（亲属）姓名：" prop="relative1">
              <el-input  v-model="assetInformation.relative1" auto-complete="off" placeholder="请输入名称" style="width:150px;"></el-input>
            </el-form-item>
            <el-form-item label="关系：" prop="relationship1">
              <el-input  v-model="assetInformation.relationship1" auto-complete="off" placeholder="请填写关系" style="width:100px;"></el-input>
            </el-form-item>
            <el-form-item label="手机：" prop="relativePhone1">
              <el-input  v-model="assetInformation.relativePhone1" auto-complete="off" placeholder="请填写手机号" style="width:200px;"></el-input>
            </el-form-item>
            <el-form-item label="联系人（亲属）姓名：" prop="relative2">
              <el-input  v-model="assetInformation.relative2" auto-complete="off" placeholder="请输入名称" style="width:150px;"></el-input>
            </el-form-item>
            <el-form-item label="关系：" prop="relationship2">
              <el-input  v-model="assetInformation.relationship2" auto-complete="off" placeholder="请填写关系" style="width:100px;"></el-input>
            </el-form-item>
            <el-form-item label="手机：" prop="relativePhone2">
              <el-input  v-model="assetInformation.relativePhone2" auto-complete="off" placeholder="请填写手机号" style="width:200px;"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="" v-if="active == 4">
        <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>银行卡信息<b style="color:#ff831b;"></b></div>
        <el-form :model="bankInformation" :inline="true" ref="bankInformation"  class="demo-form-inline mar" :rules="rule3">
          <el-form-item label="开户银行：" prop="bankAccount">
            <el-cascader
                  :options="bankInformation.bankAccount1" 
                  change-on-select
                  @change="selChange1"
                ></el-cascader>
          </el-form-item>
          <el-form-item label="开户地区：" prop="selectedOptions">
            <el-cascader  :options="bankInformation.options" v-model="bankInformation.selectedOptions" @change="handleChange2" >
            </el-cascader>
          </el-form-item>
          <el-form-item label="开户银行：" prop="bankAccountDetail">
             
            <el-input  v-model="bankInformation.bankAccountDetail" auto-complete="off" placeholder="如：勾庄小微支行" style="width:300px;"></el-input>
          </el-form-item>
          <el-form-item label="银行卡号：" prop="bankCard">
            <el-input  v-model="bankInformation.bankCard" auto-complete="off" placeholder="请输入银行卡号" style="width:250px;"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="" v-if="active == 5">
        <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>上传资料<b style="color:#ff831b;"></b></div>
        <p>请您上传身份证照片（正面和反面）如下：</p>
        <img src="../../assets/img/sfz.jpg" height="252" width="650" alt="">
        <div style="border:1px solid #e5e5e5;padding:15px 15px;">
          <el-upload
            class="upload-demo"
            action="taodream-consumer/commonUpload/uploadFile"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :file-list="uploadData.fileList2"
            list-type="picture">
            <el-button size="small" type="primary" :disabled="upButton">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </div>
    </div>
    <div class="introduce">
      <div style="color: #FF831B;"><span class="introduce-img"></span>会员权益</div>
      <p>1.缴纳会员一万元/年即可成为淘梦者俱乐部会员，并享受30万元消费激励额度。</p>
      <p>2.消费激励额度用完后可提交书面申请提升额度，是否准予提升额度由淘梦者俱乐部决定</p>
      <p>3.投资淘梦者商城推荐理财产品可获取投资额等额的消费额度。</p>
      <p>4.可获得淘梦者理财商学院学习名额1名</p>
      <p>5.会员转介绍新会员可获得5万元/人的消费额度</p>
      <p>会员权益最终解释权归“淘梦者俱乐部”所有，淘梦者俱乐部有权根据需要指定、修改各类具体规则并在淘梦者俱乐部官网公告发布，
      不在另行向会员做个别通知，会员有权继续或停止使用淘梦者俱乐部服务。</p>
    </div>
    <div class="footer">
        <v-footer></v-footer>
    </div>
    <!-- 查看详情 -->
    <el-dialog title="图片预览" v-model="Big" >
      <div>
        <img :src="BigUrl"/>
      </div>
    </el-dialog>
	</div>
</template>
<script>
import { regionDataPlus, provinceAndCityDataPlus } from 'element-china-area-data'
import host from '../../common.js'
import footer from '.././footer/footer.vue'
// import consumerstepone from './module/consumerStepone.vue'
// import consumersteptwo from './module/consumerSteptwo.vue'
// import consumerstepthree from './module/consumerStepthree.vue'
export default {
  name:'consumerRegister',
  computed(){
   
  },
  mounted(){
    //监听信息填写步骤
    this.$http({
      method: 'POST',
      url: host.basic.basicUrl + '/register/selectCurrentUser'
    }).then(function(res) {
      let data = res.data;
      let status = data.RESULT.status;
      let userType = data.RESULT.userType;
      // console.log(data);
      // let status = data.RESULT.userType;
      if (data.ERRORCODE == '0') {
        if(userType == 1){
          if(status === 1)this.active = 1;
          if(status === 2)this.active = 2;
          if(status === 3)this.active = 3;
          if(status === 4)this.active = 4;
          if(status === 5)this.active = 5;
          if(status === 9)this.active = 1;
        }
      } else {
        this.$message.warning(data.RESULT);
      }
    }, function(error) {
      this.$message.error('请求错误,请稍后再试');
    });
    //获取行业
    this.$http({
          method: 'POST',
          url: host.basic.basicUrl + '/register/selectProfession',
        }).then(function(res) {
          let arr = res.data.RESULT;
          if (res.data.ERRORCODE == '0') {
            let arr1 = [];
            for (let i = 0; i < arr.length; i++) {
              let obj = {value:"",label:""};
              arr1.push(obj);
             arr1[i].value = arr[i].id;
             arr1[i].label = arr[i].label;
            };
            this.unitInformation.industry1 = arr1;
          } else {
            // this.$message.warning(data.RESULT);
          }
        }, function(error) {
          this.$message.error('请求错误,请稍后再试');
        })
    //获取银行
    this.$http({
          method: 'POST',
          url: host.basic.basicUrl + '/register/selectBank',
        }).then(function(res) {
          let arr = res.data.RESULT;
          if (res.data.ERRORCODE == '0') {
            let arr2 = [];
            for (let i = 0; i < arr.length; i++) {
              let obj = {value:"",label:""};
              arr2.push(obj);
             arr2[i].value = arr[i].code;
             arr2[i].label = arr[i].fullName;
            };
            this.bankInformation.bankAccount1 = arr2;
            // console.log(this.bankInformation.bankAccount1);
          } else {
            // this.$message.warning(data.RESULT);
          }
        }, function(error) {
          this.$message.error('请求错误,请稍后再试');
        })
  },
  watch: {
    'basicMessage.id': 'getData'
  },
  data() {
    var validateCon = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      active: 1,
      Big:false,
      remark:false,
      remark:false,
      remark:false,
      remark:false,
      remark:false,
      BigUrl:'',
      imgUrl:host.basic.basicUrl + '/commonUpload/uploadFile',
      basicMessage:{
        recommender:"",
        recommenderName:"",
        id:"",
        recommenderPhone:"",
        name:"",
        gender:"",
        idNumber:"",
        phoneNumber:"",
        birthDate:"",
        // pickerOptions0: {},
        dateRule:"",
        options: regionDataPlus,
        selectedOptions: [],
        detailAddress:"",
        educationLevel:"",
        message:"",
        email:"",
        sendEmail:"",
        province:"",
        city:"",
        area:""
      },
      unitInformation:{
      	companyName:'',
      	industry:'',
        remark:'',
        industry1:[
          
        ],
      	department:"",
      	position:"",
      	legalPerson:"",
      	annualSalary:"",
      	unitSize:"",
        options: regionDataPlus,
      	selectedOptions: [],
      	detailAddress:"",
      	postCode:"",
      	unitType:"",
        areaCode:"",
        phoneNumber:"",
        phoneNumberOther:"",
        sels:'',
        province:'',
        city:'',
        area:''
      },
      assetInformation:{
        cardNumber:"",
        creditLimit:"",
        livingCondition:"",
        houseProperty:"",
        carValue:"",
        investment:[],
        investmens:'',
        relative1:"",
        relationship1:"",
        relativePhone1:"",
        relative2:"",
        relationship2:"",
        relativePhone2:""
       
      },
      bankInformation:{
        bankAccount:"",
        bankAccount1:[],
        options: provinceAndCityDataPlus,
        selectedOptions: [],
        bankAccountDetail:"",
        bankCard:"",
        province:"",
        city:""
      },
      uploadData:{
        fileList2:[]
      },
       invests:[
          {value:1,label:'股票'},
          {value:2,label:'基金'},
          {value:3,label:'银行理财产品'},
          {value:4,label:'外汇'},
          {value:5,label:'期货'},
          {value:6,label:'房产'},
          {value:7,label:'黄金'},
          {value:8,label:'收藏品'},
          {value:9,label:'其他'}
        ],
      rule1:{
        // recommender:[{ validator:validateCon,  message: '请选择推荐人类型', trigger: 'blur'}],
        // id:[{ validator:validateCon,  message: '请输入ID', trigger: 'blur' }],
        name:[{  required:true,validator:validateCon,  message: '请输入姓名', trigger: 'blur' }],
        // gender:[{ validator:validateCon,  message: '请选择性别', trigger: 'blur' }],
        idNumber:[{  required:true,validator:host.basic.checkCard,  message: '请输入正确的身份证号', trigger: 'blur' }],
        phoneNumber:[{  required:true,validator:host.basic.checkMobile, trigger: 'blur' }],
        birthDate:[{ required:true, validator:validateCon,  message: '请选择出生日期', trigger: 'blur' }],
       selectedOptions:[{ type:'array', required:true,  message: '请选择家庭住址', trigger: 'change'}],
        postCode:[{  required:true,validator:host.basic.checkPost,  trigger: 'blur'}],
        detailAddress:[{  required:true,validator:validateCon, message: '请填写您的详细地址', trigger: 'blur'}],
        educationLevel:[{  required:true,validator:validateCon, message: '请选择您的教育程度', trigger: 'blur'}]
        // message:[{ validator:validateCon, message: '请选择是或否', trigger: 'blur'}],
        // email:[{ validator:validateCon, message: '请填写电子邮箱', trigger: 'blur'}],
        // sendEmail:[{ validator:validateCon, message: '请选择是或否', trigger: 'blur'}],

      },
      rule2:{
        companyName:[{required:true, validator:validateCon,  message: '请输入单位全称', trigger: 'blur' }],
        industry:[{required:true, validator:validateCon,  message: '请选择所属行业', trigger: 'blur' }],
        selectedOptions:[{ type:'array',required:true,   message: '请选择', trigger: 'change' }],
        detailAddress:[{required:true, validator:validateCon,  message: '请填写详细地址', trigger: 'blur' }],
        postCode:[{  required:true,validator:host.basic.checkPost,  trigger: 'blur'}],
      },
       rule3:{
        bankAccount:[{required:true,  message: '请选择银行', trigger: 'blur' }],
        selectedOptions:[{type:'array',required:true,  message: '请选择地区', trigger: 'change' }],
        bankAccountDetail:[{required:true,  message: '请填写详细银行', trigger: 'blur' }],
        bankCard:[{required:true, validator:host.basic.checkBank,  trigger: 'blur' }],
      
      },
      sex:'',
      highEdu:'',
      isReceiveMessage:'',
      isReceiveEmail:'',
      corporation:'',
      companyType:'',
      scale:'',
      liveType:'',
      id1:'',
      id2:'',
      upButton:false,
      imgObj:null,
      fileLength:''
    };
  },
  components:{
  	// consumerstepone,
  	// consumersteptwo,
  	// consumerstepthree,
    'v-footer':footer
  },
  methods:{
    //获取会员姓名电话
    getData(){
      if (this.basicMessage.recommender != '') {
        this.$http({
          method: 'POST',
          url: host.basic.basicUrl + '/register/selectReferee',
          params: {
            refereeType: this.basicMessage.recommender,
            refereeCode: this.basicMessage.id
          }
        }).then(function(res) {
          let data = res.data;
          if (data.ERRORCODE == '0') {
            this.basicMessage.recommenderName = data.RESULT.trueName
            this.basicMessage.recommenderPhone = data.RESULT.mobile
          } else {
            // this.$message.warning(data.RESULT);
          }
        }, function(error) {
          this.$message.error('请求错误,请稍后再试');
        })
      }
    },
    recommenderChange(val){
      if(val == 3){
        this.basicMessage.id = ''
        this.basicMessage.recommenderName = ''
        this.basicMessage.recommenderPhone = ''
      }
    },
  //选择行业
    selChange(val){
      this.unitInformation.industry = val[0];
      console.log(this.unitInformation.industry)
     if(this.unitInformation.industry == 88){
      this.remark = true;
     }else{
      this.remark = false;
     }
    },
    //选择银行
    selChange1(val){
      this.bankInformation.bankAccount = val[0];
      // console.log(this.bankInformation.bankAccount);
    },
    //投资选择
    invert(val){
      this.assetInformation.investments = val.join(","); 
      // console.log(this.assetInformation.investments)
    },
    //下一步
    next() {
     let that = this;
     //时间格式转换
     if(this.basicMessage.birthDate != ''){
      this.basicMessage.birthDate = host.basic.formatDate(this.basicMessage.birthDate)
    };
    if(this.active == 1){
      if(this.basicMessage.gender == '男' )this.sex = 1;
      if(this.basicMessage.gender == '女' )this.sex = 0;
      if(this.basicMessage.educationLevel == '初中及以下')this.highEdu = 1;
      if(this.basicMessage.educationLevel == '高中及中专')this.highEdu = 2;
      if(this.basicMessage.educationLevel == '大专')this.highEdu = 3;
      if(this.basicMessage.educationLevel == '本科')this.highEdu = 4;
      if(this.basicMessage.message == '是')this.isReceiveMessage = 1;
      if(this.basicMessage.message == '否')this.isReceiveMessage = 0;
      if(this.basicMessage.sendEmail == '是')this.isReceiveEmail = 1;
      if(this.basicMessage.sendEmail == '否')this.isReceiveEmail = 0;
      this.$refs.basicMessage.validate((valid) => {
        if(valid){
            this.$http({
              method: 'POST',
              url: host.basic.basicUrl + '/member/saveMemberInfo',
              params: {
                refereeType: this.basicMessage.recommender,
                refereeCode: this.basicMessage.id,
                trueName: this.basicMessage.name,
                trueName: this.basicMessage.name,
                sex: this.sex,
                identityNumber: this.basicMessage.idNumber,
                birthday: this.basicMessage.birthDate,
                telephone: this.basicMessage.phoneNumber,
                province:this.basicMessage.province,
                city:this.basicMessage.city,
                area:this.basicMessage.area,
                address:this.basicMessage.address,
                postalCode:this.basicMessage.postalCode,
                highEdu:this.highEdu,
                isReceiveMessage:this.isReceiveMessage,
                email:this.basicMessage.email,
                isReceiveEmail:this.isReceiveEmail
              }
            }).then(function(res) {
              let data = res.data;
              if (data.ERRORCODE == '0') {
                console.log(data);
                this.active ++
              } else {
                this.$message.warning(data.RESULT);
              }
            }, function(error) {
              this.$message.error('请求错误,请稍后再试');
            })

        }else{
          // alert(1);
        }

      })
    };
    if(this.active == 2){
      if(this.unitInformation.legalPerson == '是')this.corporation = 1;
      if(this.unitInformation.legalPerson == '否')this.corporation = 0;
      if(this.unitInformation.unitSize == '21~50')this.scale = 1;
      if(this.unitInformation.unitSize == '101~500')this.scale = 2;
      if(this.unitInformation.unitSize == '其他')this.scale = 3;
      if(this.unitInformation.unitType == '机关/事业单位')this.companyType = 1;
      if(this.unitInformation.unitType == '国有企业')this.companyType = 2;
      if(this.unitInformation.unitType == '外商独资企业')this.companyType = 3;
      if(this.unitInformation.unitType == '中外合资/合作企业')this.companyType = 4;
      if(this.unitInformation.unitType == '股份制企业')this.companyType = 5;
      if(this.unitInformation.unitType == '私有企业')this.companyType = 6;
      if(this.unitInformation.unitType == '其他')this.companyType = 7;
       this.$refs.unitInformation.validate((valid) => {
        if(valid){
           this.$http({
              method: 'POST',
              url: host.basic.basicUrl + '/member/saveMemberCompany',
              params: {
                companyName: this.unitInformation.companyName,
                profession: this.unitInformation.industry,
                department: this.unitInformation.department,
                job: this.unitInformation.position,
                corporation: this.corporation,
                salary: this.unitInformation.annualSalary,
                scale: this.scale,
                province: this.unitInformation.province,
                city: this.unitInformation.city,
                remark:this.unitInformation.remark,
                area: this.unitInformation.area,
                address: this.unitInformation.detailAddress,
                postalCode: this.unitInformation.postCode,
                companyType:this.companyType,
                phoneZone:this.unitInformation.areaCode,
                phoneNumber:this.unitInformation.phoneNumber,
                phoneExtension:this.unitInformation.phoneNumberOther
                
              }
            }).then(function(res) {
              let data = res.data;
              if (data.ERRORCODE == '0') {
                // console.log(data);
                this.active ++
              } else {
                this.$message.warning(data.RESULT);
              }
            }, function(error) {
              this.$message.error('请求错误,请稍后再试');
            })

        }else{
          // alert(1);
        }

      })
    };

    if(this.active == 3){
      if(this.assetInformation.livingCondition == '自有房产')this.liveType = 1;
      if(this.assetInformation.livingCondition == '租房')this.liveType = 0;
      // console.log(this.assetInformation);
        this.$http({
          method: 'POST',
          url: host.basic.basicUrl + '/member/saveMemberAsset',
          params: {
            creditCardNumber:this.assetInformation.cardNumber,
            creditCardQuota:this.assetInformation.creditLimit,
            liveType:this.liveType,
            houseProperty:this.assetInformation.houseProperty,
            carProperty:this.assetInformation.carValue,
            investment:this.assetInformation.investments,
            contactsNameFirst:this.assetInformation.relative1,
            contactsRelationFirst:this.assetInformation.relationship1,
            contactsPhoneFirst:this.assetInformation.relativePhone1,
            contactsNameSecond:this.assetInformation.relative2,
            contactsRelationSecond:this.assetInformation.relationship2,
            contactsPhoneSecond:this.assetInformation.relativePhone2
          }
        }).then(function(res) {
          let data = res.data;
          if (data.ERRORCODE == '0') {
            // console.log(data);
            this.active++
          } else {
            this.$message.warning(data.RESULT);
          }
        }, function(error) {
          this.$message.error('请求错误,请稍后再试');
        })
    }
      
    if(this.active == 4){
        this.$refs.bankInformation.validate((valid) => {
        if(valid){
            this.$http({
              method: 'POST',
              url: host.basic.basicUrl + '/member/saveMemberBankCard',
              params: {
                bankCode: this.bankInformation.bankAccount,
                bankProvince: this.bankInformation.province,
                bankCity: this.bankInformation.city,
                cardNumber: this.bankInformation.bankCard,
                branchName: this.bankInformation.bankAccountDetail,
               
              }
            }).then(function(res) {
              let data = res.data;
              if (data.ERRORCODE == '0') {
                // console.log(data);
                this.active ++
              } else {
                this.$message.warning(data.RESULT);
              }
            }, function(error) {
              this.$message.error('请求错误,请稍后再试');
            })

        }else{
          // alert(1);
        }

      })

    }
   
        // this.active = 1; 
    
    },
    handleChange (value) {
      this.unitInformation.province = value[0];
      this.unitInformation.city = value[1];
      this.unitInformation.area = value[2];
    },
    handleChange2 (value) {
      this.bankInformation.province = value[0];
      this.bankInformation.city = value[1];

    },
    //家庭住址
    handleChange1(value) {
      this.basicMessage.province = value[0];
      this.basicMessage.city = value[1];
      this.basicMessage.area = value[2];
    },

    // 上传图片处理回调
    handleRemove(file, fileList) {
        // console.log(file, fileList);
        this.upButton = false;
    },
    handlePreview(file) {
      this.Big = true;
      this.BigUrl = file.url;
    },
    handleSuccess(response, file, fileList){
      // console.log(response);
      if(response.ERRORCODE == 0){
        file.uid = response.RESULT.id
        file.url = response.RESULT.url
      }

      this.fileLength = fileList.length;
      let that = this;
      if(fileList.length == 2){
        this.upButton = true;
        this.id1=  fileList[0].uid + ',' + '1' ;
        this.id2=  fileList[1].uid + ',' + '2' ;
        this.imgObj=  this.id1 + ';' + this.id2 ;
        this.$alert('感谢您填写完善信息，您的信息已经提交，审核之后我们会以短信通知给您！', '通知', {
          confirmButtonText: '确定',
          callback(action){
            if(action == "confirm"){
              that.$message.success('图片上传完成！');
            
                that.$http({
                  method: 'POST',
                  url: host.basic.basicUrl + '/member/saveMemberPic',
                  params: {
                    pics: that.imgObj
                  }
                }).then(function(res) {
                  let data = res.data;
                  if (data.ERRORCODE == '0') {
                    that.$router.push('/');

                  } else {
                    that.$message.warning(data.RESULT);
                  }
                }, function(error) {
                  that.$message.error('请求错误,请稍后再试');
                });
             
              // that.$router.push('/');
              // alert(1);
            }
          }
        });
        // this.$message('感谢您填写完善信息，您的信息已经提交，审核之后我们会以短信通知给您！');
      }
    }  
  }
  
}
</script>

<style  lang="less">
	.consumerRegister{
		padding-top: 60px;
    .content{
      width:790px;
     margin:0 auto;
    }
  .mar{
    margin-top: 20px;
    }

    .introduce{
      width: 790px;
      margin:0 auto;
      margin-top: 60px;
      margin-bottom: 60px;
      .introduce-img{
        display: inline-block;
        width:15px;
        height:14px;
        background:url(../../assets/img/xinghao.png) no-repeat center center;
        background-size: 15px 14px;
        margin-right: 5px;
      }
    }
	}
   .el-cascader-menu{
     min-width: 214px !important;
   }
</style>
