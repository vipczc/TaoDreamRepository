<template>
	<div class="consumerRegister">
		<h1>我是消费者注册模块</h1>
		<el-steps :space="200" :active="active">
      <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    <div class="content">
      <div class="" v-if="active == 1">
        注册步骤一的内容
      </div>
      <div class="" v-if="active == 2">
        注册步骤二的内容
      </div>
      <div class="" v-if="active == 3">
        注册步骤三的内容
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name:'consumerRegister',
  mounted(){

  },
  data () {
    return {
      active: 1
    };
  },
  methods:{
    next() {
      let that = this;
     if (this.active++ > 2){
       this.$message.success('注册成功');
       setTimeout(()=>{that.$router.push('/')},1000)
     };
    }
  }
}
</script>

<style scoped lang="less">

</style>
