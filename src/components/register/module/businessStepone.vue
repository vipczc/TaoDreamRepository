<template>
<div class="businessStepone">
	 <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>推荐人信息<b style="color:#ff831b;">（选填）</b></div>
		<el-form :model="basicMessage" :inline="true" ref="basicMessage"  class="demo-form-inline">
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
	  <el-form-item label="企业名称：">
	    <el-input  v-model="basicMessage.companyName" auto-complete="off" placeholder="请输入企业名称" style="width:300px;" ></el-input>
	  </el-form-item>
	   <el-form-item label="法人姓名：">
	    <el-input  v-model="basicMessage.legalPerson" auto-complete="off" placeholder="请输入法人姓名" style="width:250px;" ></el-input>
	    </el-form-item>
	    <el-form-item label="企业类型：">
	    <el-input  v-model="basicMessage.companyType" auto-complete="off" placeholder="请输入企业类型" style="width:300px;" ></el-input>
	  </el-form-item>
	   <el-form-item label="身份证号：">
	    <el-input  v-model="basicMessage.idNumber" auto-complete="off" placeholder="请输入身份证号" style="width:250px;" ></el-input>
	    </el-form-item>
	    <el-form-item label="经办人联系电话：">
	    	<el-input  v-model="basicMessage.managerPhone" auto-complete="off" placeholder="如：15456524564" style="width:250px;" ></el-input>
	  	</el-form-item>
	   	<el-form-item label="组织机构代码：">
	    	<el-input  v-model="basicMessage.organizationCode" auto-complete="off" placeholder="如：1225462156254" style="width:230px;" ></el-input>
	    </el-form-item>
	    <el-form-item label="现办公住址:">
			  <el-cascader :options="basicMessage.options" v-model="basicMessage.selectedOptions" @change="handleChange" style="width:300px;"></el-cascader>
	 		</el-form-item>
			<el-form-item label="邮政编码">
		    <el-input  v-model="basicMessage.postCode" auto-complete="off" placeholder="如：3100" style="width:150px;"></el-input>
		 	</el-form-item>
	 	<el-form-item label="详细地址：" >
	    <el-input type="textarea" v-model="basicMessage.detailAddress" auto-complete="off" placeholder="如：湖州街599号天邑国际大厦7幢7层" style="width:300px;"></el-input>
	 	</el-form-item>
	 	<el-form-item label="企业注册地址:">
			 <el-cascader :options="basicMessage.options1" v-model="basicMessage.selectedOptions1" @change="handleChange1" style="width:280px;"></el-cascader>
	 	</el-form-item>
	 	<el-form-item label="详细地址：" >
	    <el-input type="textarea" v-model="basicMessage.detailAddress1" auto-complete="off" placeholder="如：湖州街599号天邑国际大厦7幢7层" style="width:280px;"></el-input>
	 	</el-form-item>
	 	<el-form-item label="是否接受来自俱乐部赠阅的杂志和发来的短信：">
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

</template>

<script>
export default {
  name: 'businessStepone',
  props:['basicMessage'],
  methods:{
  	handleChange(value) {
			console.log(value)
			console.log(this.basicMessage.selectedOptions);
		},
		handleChange1(value) {
			console.log(value)
			console.log(this.basicMessage.selectedOptions);
		}
	}
}
</script>

<style>

</style>
