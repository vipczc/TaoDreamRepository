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
      	<businessstepone :basicMessage="basicMessage"></businessstepone>
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
import footer from '.././footer/footer.vue'
import { regionDataPlus, provinceAndCityDataPlus } from 'element-china-area-data'
export default {
  name:'bussinessRegister',
  data(){
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
      }
  	}
  },
  methods:{
  	next(){
  		let that = this;
     	this.active++;
     if (this.active > 3){
        this.active = 1;
       // this.$message.success('注册成功');
       // setTimeout(()=>{that.$router.push('/')},1000)
     }
  	},
  	handleChange (value) {
      console.log(value)
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