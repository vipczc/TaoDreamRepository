<template>
<div class="consumerStepthree">
  <div class="step"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>资产信息<b style="color:#ff831b;">（选填）</b></div>
	<el-form :model="assetInformation" :inline="true" ref="assetInformation"  class="demo-form-inline">
	  <el-form-item label="您拥有的信用卡数量：" prop="cardNumber">
	    <el-input  v-model="assetInformation.cardNumber" auto-complete="off" placeholder="如：1张" style="width:100px;"></el-input>
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
		   <el-checkbox-group v-model="assetInformation.investment">
	      <el-checkbox label="股票" name="investment"></el-checkbox>
	      <el-checkbox label="基金" name="investment"></el-checkbox>
	      <el-checkbox label="银行理财产品" name="investment"></el-checkbox>
	      <el-checkbox label="外汇" name="investment"></el-checkbox>
	      <el-checkbox label="期货" name="investment"></el-checkbox>
	      <el-checkbox label="房产" name="investment"></el-checkbox><br>
	      <el-checkbox label="黄金" name="investment"></el-checkbox>
	      <el-checkbox label="收藏品" name="investment"></el-checkbox>
	      <el-checkbox label="其他" name="investment"></el-checkbox>
	    </el-checkbox-group>
	  </el-form-item>
	  <div class="step" style="margin-left: -12px;"><span style="float:left;width:4px;height:20px;background: #36A5FF;background-repeat: repeat; margin-right:8px; "></span>联系人信息<b style="color:#ff831b;">（选填）</b></div>
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
</template>

<script>
export default {
	props:['assetInformation']
}
</script>

<style>

</style>