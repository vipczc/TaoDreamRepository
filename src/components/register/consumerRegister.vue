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
        注册步骤三的内容
        <consumerstepthree></consumerstepthree>
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
	</div>
</template>
<script>
import { regionDataPlus  } from 'element-china-area-data'
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
     this.active++;
     if (this.active > 5){
        this.active = 1;
       // this.$message.success('注册成功');
       // setTimeout(()=>{that.$router.push('/')},1000)
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
