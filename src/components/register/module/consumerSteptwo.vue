<template>
<div class="consumerSteptwo">
  <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>你的单位信息<b style="color:#ff831b;">（必填）</b></div>
  <el-form :model="unitInformation" :inline="true" ref="unitInformation"  class="demo-form-inline">
	  <el-form-item label="单位全称" prop="companyName">
	    <el-input  v-model="unitInformation.companyName" auto-complete="off" placeholder="如：浙江至讯科技有限公司" style="width:300px;"></el-input>
	  </el-form-item>
	   <el-form-item label="所属行业" prop="industry">
	    <el-input  v-model="unitInformation.industry" auto-complete="off" placeholder="如：互联网/IT" style="width:300px;"></el-input>
	  </el-form-item>
	  <el-form-item label="任职部门" prop="department">
	    <el-input  v-model="unitInformation.department" auto-complete="off" placeholder="如：研发部" style="width:300px;"></el-input>
	  </el-form-item>
	  <el-form-item label="职位/岗位" prop="position">
	    <el-input  v-model="unitInformation.position" auto-complete="off" placeholder="如：员工" style="width:120px;"></el-input>
	  </el-form-item>
	 <el-form-item label="法人：" prop="legalPerson">
    <el-radio-group v-model="unitInformation.legalPerson">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
   <el-form-item label="年薪" prop="annualSalary">
	    <el-input  v-model="unitInformation.annualSalary" auto-complete="off" placeholder="如：15000" style="width:327px;"></el-input>
	 </el-form-item>
	  <el-form-item label="单位规模：" prop="unitSize">
	    <el-radio-group v-model="unitInformation.unitSize">
	      <el-radio label="21~50"></el-radio>
	      <el-radio label="101~500"></el-radio>
	      <el-radio label="其他"></el-radio>
	    </el-radio-group>
  	</el-form-item>
  	 <el-form-item label="单位现所在省市区" prop="selectedOptions">
			  <el-cascader :options="unitInformation.options" v-model="unitInformation.selectedOptions" @change="handleChange" style="width:242px;"></el-cascader>
	 	</el-form-item>
	 	<el-form-item label="详细地址" prop="detailAddress">
	    <el-input  v-model="unitInformation.detailAddress" auto-complete="off" placeholder="如：湖州街599号天邑国际大厦7幢7层" style="width:300px;"></el-input>
	 	</el-form-item>
	 	<el-form-item label="邮政编码" prop="postCode">
	    <el-input  v-model="unitInformation.postCode" auto-complete="off" placeholder="如：3100" style="width:300px;"></el-input>
	 	</el-form-item>
	 	 <el-form-item label="单位类型：" prop="unitType">
		    <el-radio-group v-model="unitInformation.unitType">
		      <el-radio label="机关/事业单位"></el-radio>
		      <el-radio label="国有企业"></el-radio>
		      <el-radio label="外商独资企业"></el-radio>
		      <el-radio label="中外合资/合作企业"></el-radio>
		      <el-radio label="其他"></el-radio>
		    </el-radio-group>
  	</el-form-item>
	 	<el-form-item label="电话(可选填)：区号" prop="areaCode">
	    <el-input  v-model="unitInformation.areaCode" auto-complete="off" placeholder="如：0571" style="width:120px;"></el-input>
	 	</el-form-item>
	 	<el-form-item label="电话号码" >
	    <el-input  v-model="unitInformation.phoneNumber" auto-complete="off" placeholder="如：8857567" style="width:170px;"></el-input>
	 	</el-form-item>
	 	<el-form-item label="分机" >
	    <el-input  v-model="unitInformation.phoneNumberOther" auto-complete="off" placeholder="如：8857567" style="width:170px;"></el-input>
	 	</el-form-item>
	</el-form>
</div>

</template>

<script>
export default {
	props:['unitInformation'],
	methods:{
		handleChange(value) {
			console.log(value)
			console.log(this.unitInformation.selectedOptions);
		}
	}
}
</script>

<style>
	.step{
			margin-top: 20px;
			font-weight: bold;
		}
		.demo-form-inline{
			display:inline-block;
			padding-left: 13px;
		}
		.el-form-item{
			margin-top: 20px;
		}
</style>