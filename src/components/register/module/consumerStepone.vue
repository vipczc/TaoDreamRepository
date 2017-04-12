<template>
<div class="consumerStepone">
  <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>推荐人信息<b style="color:#ff831b;"></b></div>
  <el-form :model="basicMessage" :inline="true" ref="basicMessage"  class="demo-form-inline">
  	<el-form-item label="推荐人" prop="recommender">
	    <el-select v-model="basicMessage.recommender" placeholder="请选择推荐人类型">
	      <el-option label="咨询师" value="1"></el-option>
	      <el-option label="会员" value="2"></el-option>
    	</el-select>
	  </el-form-item>
	   <el-form-item label="会员ID" prop="id">
	    <el-input  v-model="basicMessage.id" auto-complete="off" placeholder="请输入会员ID" style="width:150px;"></el-input>
	  </el-form-item>
		<el-form-item label="推荐人姓名" prop="recommenderName" >
	    <el-input  v-model="basicMessage.recommenderName" auto-complete="off"  style="width:150px;" :disabled="true"></el-input>
	  </el-form-item>
	  <el-form-item label="联系电话" prop="recommenderPhone">
	    <el-input  v-model="basicMessage.recommenderPhone" auto-complete="off" style="width:200px;" :disabled="true"></el-input>
	  </el-form-item>
	  <div class="step" style="margin-left: -12px;"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>你的基本信息<b style="color:#ff831b;">（必填）</b></div>
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
	      <el-radio label="初中以下"></el-radio>
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

</template>

<script>
export default {
	props:['basicMessage'],
	methods:{
		handleChange1(value) {
			console.log(value)
			console.log(this.basicMessage.selectedOptions);
		}
	}
}
</script>

<style>

</style>
