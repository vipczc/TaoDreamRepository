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
      	<consumerstepone :basicMessage="basicMessage"></consumerstepone>
      </div>
      <div class="" v-if="active == 2">
        <consumersteptwo :unitInformation="unitInformation"></consumersteptwo>
      </div>
      <div class="" v-if="active == 3">
        <consumerstepthree :assetInformation="assetInformation"></consumerstepthree>
      </div>
      <div class="" v-if="active == 4">
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
      <div class="" v-if="active == 5">
        <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>上传资料<b style="color:#ff831b;"></b></div>
        <p>请您上传身份证照片（正面和反面）如下：</p>
        <img src="../../assets/img/sfz.jpg" height="252" width="650" alt="">
        <div style="border:1px solid #e5e5e5;padding:15px 15px;">
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
import consumerstepone from './module/consumerStepone.vue'
import consumersteptwo from './module/consumerSteptwo.vue'
import consumerstepthree from './module/consumerStepthree.vue'
export default {
  name:'consumerRegister',
  computed(){
   
  },
  mounted(){
  	console.log(this.active);
  },
  data () {
    return {
      active: 1,
      Big:false,
      BigUrl:'',
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
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        dateRule:"",
        options: regionDataPlus,
        selectedOptions: [],
        detailAddress:"",
        educationLevel:"",
        message:"",
        email:"",
        sendEmail:""
      },
      unitInformation:{
      	companyName:'',
      	industry:'',
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
        phoneNumberOther:""
      },
      assetInformation:{
        cardNumber:"",
        creditLimit:"",
        livingCondition:"",
        houseProperty:"",
        carValue:"",
        investment:[],
        relative1:"",
        relationship1:"",
        relativePhone1:"",
        relative2:"",
        relationship2:"",
        relativePhone2:""
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
    };
  },
  components:{
  	consumerstepone,
  	consumersteptwo,
  	consumerstepthree,
    'v-footer':footer
  },
  methods:{
    next() {
     let that = this;
     //时间格式转换
     if(this.basicMessage.birthDate != ''){
      this.basicMessage.birthDate = host.basic.formatDate(this.basicMessage.birthDate.getTime())
    };
     this.active++;
     if (this.active > 5){
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
      if(fileList.length == 2){
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
  }
}
</script>

<style scoped lang="less">
	.consumerRegister{
		padding-top: 60px;
    .content{
      width:790px;
     margin:0 auto;
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
</style>
