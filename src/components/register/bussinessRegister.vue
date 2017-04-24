<template>
	<div class="bussinessRegister">
		<el-steps :space="350" :active="active" :align-center="true" :center="true">
      <el-step title="基本信息" ></el-step>
      <el-step title="银行卡信息"></el-step>
      <el-step title="证件照片上传资料"></el-step>
    </el-steps>
    <div style="text-align: right;width:790px; margin:0 auto;">
      <el-button style="margin-top: 12px;" @click="next" type="info">下一步</el-button>  
    </div>
    <div class="content">
      <div class="" v-if="active == 1">
      	<div class="businessStepone">
           <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>推荐人信息<b style="color:#ff831b;">（选填）</b></div>
            <el-form :model="basicMessage" :inline="true" ref="basicMessage"  class="demo-form-inline" :rules="rule1">
             <el-form-item label="推荐人ID：">
              <el-input  v-model="basicMessage.recommenderId" auto-complete="off" placeholder="请输入会员ID" style="width:150px;"></el-input>
            </el-form-item>
             <el-form-item label="推荐人姓名：">
              <el-input  v-model="basicMessage.recommenderName" auto-complete="off"  style="width:150px;" :disabled="true"></el-input>
            </el-form-item>
             <el-form-item label="联系电话：">
              <el-input  v-model="basicMessage.recommenderPhone" auto-complete="off" style="width:150px;" :disabled="true"></el-input>
            </el-form-item>
            <div class="step" style="margin-left: -12px;"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>企业的基本信息<b style="color:#ff831b;">（必填）</b></div>
            <el-form-item label="企业名称：" prop="companyName">
              <el-input  v-model="basicMessage.companyName" auto-complete="off" placeholder="请输入企业名称" style="width:300px;" ></el-input>
            </el-form-item>
             <el-form-item label="法人姓名："  prop="legalPerson">
              <el-input  v-model="basicMessage.legalPerson" auto-complete="off" placeholder="请输入法人姓名" style="width:250px;" ></el-input>
              </el-form-item>
              <el-form-item label="企业类型：" prop="companyType">
                <!-- <el-input  v-model="basicMessage.companyType" auto-complete="off" placeholder="请输入企业类型" style="width:300px;" ></el-input> -->
                <el-cascader
                :options="basicMessage.companyType1" 
                change-on-select
                @change="selChange"
              ></el-cascader>
              </el-form-item>
             <el-form-item label="身份证号：" prop="idNumber">
              <el-input  v-model="basicMessage.idNumber" auto-complete="off" placeholder="请输入身份证号" style="width:250px;" ></el-input>
              </el-form-item>
              <el-form-item label="经办人联系电话：" prop="managerPhone">
                <el-input  v-model="basicMessage.managerPhone" auto-complete="off" placeholder="如：15456524564" style="width:250px;" ></el-input>
              </el-form-item>
              <el-form-item label="组织机构代码：" prop="organizationCode">
                <el-input  v-model="basicMessage.organizationCode" auto-complete="off" placeholder="如：1225462156254" style="width:230px;" ></el-input>
              </el-form-item>
              <el-form-item label="现办公住址:" prop="selectedOptions">
                <el-cascader :options="basicMessage.options" v-model="basicMessage.selectedOptions" @change="handleChange" style="width:300px;"></el-cascader>
              </el-form-item>
              <el-form-item label="邮政编码" prop="postCode">
                <el-input  v-model="basicMessage.postCode" auto-complete="off" placeholder="如：3100" style="width:150px;"></el-input>
              </el-form-item>
            <el-form-item label="详细地址：" prop="detailAddress">
              <el-input type="textarea" v-model="basicMessage.detailAddress" auto-complete="off" placeholder="如：湖州街599号天邑国际大厦7幢7层" style="width:300px;"></el-input>
            </el-form-item>
            <el-form-item label="企业注册地址:" prop="selectedOptions1">
               <el-cascader :options="basicMessage.options1" v-model="basicMessage.selectedOptions1" @change="handleChange1" style="width:280px;"></el-cascader>
            </el-form-item>
            <el-form-item label="详细地址：" prop="detailAddress1">
              <el-input type="textarea" v-model="basicMessage.detailAddress1" auto-complete="off" placeholder="如：湖州街599号天邑国际大厦7幢7层" style="width:280px;"></el-input>
            </el-form-item>
            <el-form-item label="是否接受来自俱乐部赠阅的杂志和发来的短信：" prop="sendMessage">
              <el-radio-group v-model="basicMessage.sendMessage">
                <el-radio label="是" value="1"></el-radio>
                <el-radio label="否" value="2"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
          <div style="color:#F7BA2A;">
            （请如实准确填写您的资料，以确保我们建立您的档案，以便今后可以收到俱乐部活动信息或礼品）
          </div>
        </div>
      </div>
      <div class="active2" v-if="active == 2">
        <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>银行卡信息<b style="color:#ff831b;">（必填）</b></div>
        <el-form :model="bankInformation" :inline="true" ref="bankInformation"  class="demo-form-inline">
          <el-form-item label="开户银行：">
            <el-select v-model="bankInformation.bankAccount" placeholder="请选择银行"  style="width: 250px;">
              <el-option label="民生银行" value="1"></el-option>
              <el-option label="招商银行" value="2"></el-option>
              <el-option label="交通银行" value="3"></el-option>
              <el-option label="长勺银行" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="开户地区：">
            <el-cascader  :options="bankInformation.options" v-model="bankInformation.selectedOptions" @change="handleChange" >
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
      <div class="" v-if="active == 3">
        <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>证件照片资料上传（如下）<b style="color:#ff831b;"></b></div>
        	<div style="margin-bottom: 60px;">
	        	<h3>法人身份证正反面 、营业执照和开户许可证、营业场所照片（至少需要三张营业场所的照片）</h3>
	        	<img src="../../assets/img/u592.png" height="151" width="232" alt="">
	        	<img src="../../assets/img/u596.png" height="145" width="244" alt="">
	        	<img src="../../assets/img/u703.jpg" height="150" width="220" alt="">
	        	<img src="../../assets/img/u729.jpg" height="150" width="220" alt="">
	        	<img src="../../assets/img/u618.png" height="150" width="250" alt="">
	        </div>
	      <div style="margin-bottom: 60px;border:1px solid #e5e5e5;padding:15px 15px;">
          <el-upload
            class="upload-demo"
            action="//jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :file-list="uploadData.fileList2"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
         
      </div>    
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
import businessstepone from './module/businessStepone.vue'
import host from '../../common.js'
import footer from '.././footer/footer.vue'
import { regionDataPlus, provinceAndCityDataPlus } from 'element-china-area-data'
export default {
  name:'bussinessRegister',
  data(){
    var validateCon = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
  	return{
  		active:1,
  		Big:false,
      BigUrl:'',
  		basicMessage:{
  			recommenderId:"",
        recommenderName:"",
        recommenderPhone:"",
        companyName:"",
        legalPerson:"",
        companyType:"",
        companyType1:[],
        idNumber:"",
        managerPhone:"",
        organizationCode:"",
        options: regionDataPlus,
        selectedOptions: [],
        postCode:"",
        detailAddress:"",
        options1: regionDataPlus,
        selectedOptions1: [],
        detailAddress1:"",
        sendMessage:""
  		},
  		 bankInformation:{
        bankAccount:"",
        options: provinceAndCityDataPlus,
        selectedOptions: [],
        bankAccountDetail:"",
        bankCard:""
      },
      uploadData:{
        fileList2:[]
      },
      rule1:{
        companyName:[{  required:true,  message: '请输入企业名称', trigger: 'blur' }],
        legalPerson:[{  required:true,  message: '请输入法人姓名', trigger: 'blur' }],
        companyType:[{required:true, validator:validateCon, message: '请选择企业类型', trigger: 'blur' }],
        idNumber:[{  required:true,validator:host.basic.checkCard,   trigger: 'blur' }],
        managerPhone:[{  required:true,validator:host.basic.checkMobile,   trigger: 'blur' }],
        organizationCode:[{  required:true,message:'请输入组织机构代码' , trigger: 'blur' }],
        selectedOptions:[{type:'array',required:true,  message: '请选择地区', trigger: 'change' }],
        selectedOptions1:[{type:'array',required:true,  message: '请选择地区', trigger: 'change' }],
        postCode:[{  required:true,validator:host.basic.checkPost,  trigger: 'blur'}],
        detailAddress:[{required:true,  message: '请填写详细地址', trigger: 'blur' }],
        detailAddress1:[{required:true,  message: '请填写详细地址', trigger: 'blur' }],
      },
      province:"",
      city:"",
      area:"",
      registerProvince:"",
      registerCity:"",
      registerArea:"",
      isReceiveMessage:""
  	}
  },
  mounted() {
    //获取企业类型
    this.$http({
      method: 'POST',
      url: host.basic.basicUrl + '/register/selectProfession',
    }).then(function(res) {
      let arr = res.data.RESULT;
      if (res.data.ERRORCODE == '0') {
        let arr1 = [];
        for (let i = 0; i < arr.length; i++) {
          let obj = {
            value: "",
            label: ""
          };
          arr1.push(obj);
          arr1[i].value = arr[i].id;
          arr1[i].label = arr[i].label;
        };
        this.basicMessage.companyType1 = arr1;
      } else {
        // this.$message.warning(data.RESULT);
      }
    }, function(error) {
      this.$message.error('请求错误,请稍后再试');
    })
  },
  watch: {
    'basicMessage.recommenderId': 'getData'
  },
  methods:{
      //获取会员姓名电话
    getData(){
      if(this.basicMessage.recommenderId != '') {
        this.$http({
          method: 'POST',
          url: host.basic.basicUrl + '/register/selectReferee',
          params: {
            refereeType: 1,
            refereeCode: this.basicMessage.recommenderId
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
      }else{
        this.basicMessage.recommenderName = ''
        this.basicMessage.recommenderPhone = ''
      }
        
    },

  	next(){
  		let that = this;
      if(this.active == 1){
        if(this.basicMessage.sendMessage == '是')this.isReceiveMessage = 1;
        if(this.basicMessage.sendMessage == '否')this.isReceiveMessage = 0;
        this.$refs.basicMessage.validate((valid) => {
        if(valid){
            this.$http({
              method: 'POST',
              url: host.basic.basicUrl + '/shop/saveShopInfo',
              params: {
                companyName:this.basicMessage.companyName,
                trueName:this.basicMessage.legalPerson,
                identityNumber:this.basicMessage.idNumber,
                companyType:this.basicMessage.companyType,
                companyCode:this.basicMessage.organizationCode,
                telephone:this.basicMessage.managerPhone,
                province:this.province,
                city:this.city,
                area:this.area,
                address:this.basicMessage.detailAddress,
                postalCode:this.basicMessage.postCode,
                registerProvince:this.registerProvince,
                registerCity:this.registerCity,
                registerArea:this.registerArea,
                registerAddress:this.basicMessage.detailAddress1,
                isReceiveMessage:this.isReceiveMessage
              }
            }).then(function(res) {
              let data = res.data;
              if (data.ERRORCODE == '0') {
                console.log(data);
                // this.active ++
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
     if (this.active > 3){
        this.active = 1;
       // this.$message.success('注册成功');
       // setTimeout(()=>{that.$router.push('/')},1000)
     }
  	},
    //企业类型
    selChange(val){
      this.basicMessage.companyType = val[0];
      console.log(this.basicMessage.companyType);
    },
  	handleChange (value) {
      // console.log(value);
      this.province = value[0];
      this.city = value[1];
      this.area = value[2];
    },
    handleChange1(value) {
      // console.log(value)
      this.registerProvince = value[0];
      this.registerCity = value[1];
      this.registerArea = value[2];

    },
     // 上传图片处理回调
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
    handlePreview(file) {
    	this.Big = true;
      this.BigUrl = file.url;
    },
    handleSuccess(response, file, fileList){
      // console.log(response);
      // console.log(file);
      // console.log(fileList);
      let that = this;
      if(fileList.length == 7){
        this.$alert('感谢您填写完善信息，您的信息已经提交，审核之后我们会以短信通知给您！', '通知', {
          confirmButtonText: '确定',
          callback(action){
            if(action == "confirm"){
              that.$router.push('/');
            }
          }
        });
        // this.$message('感谢您填写完善信息，您的信息已经提交，审核之后我们会以短信通知给您！');
      }
    }
  },
  components:{
  	businessstepone,
  	'v-footer':footer
  }
}
</script>

<style scoped lang="less">
	.bussinessRegister{
		padding-top: 60px;
    .content{
      width:790px;
    	 margin:0 auto;
    	 margin-bottom: 60px;
    	 .active2{
    	 	margin-bottom: 342px;
    	 }
    }
    
	}
</style>