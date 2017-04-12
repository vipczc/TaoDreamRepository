<template>
  <div class="index">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <h4>主入口模块</h4>
    <el-button type="primary" @click="_go(1)">用户登录</el-button>
    <el-button type="primary" @click="_go(2)">商家登录</el-button>
    <el-button type="primary" @click="_go(3)">业务员登录</el-button>
    <el-button type="primary" @click="_register">注册</el-button> -->
      <div class="logo"><img src="../assets/img/logo.png" height="30" width="193" alt=""></div>
      <div class="content-bg"></div>
      <div class="login">
        <el-tabs v-model="activeName" @tab-click="handleClick"  >
          <el-tab-pane label="登录" name="first">
              <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="50px" style="margin-top: 25px;margin-right: 20px;">
                <el-form-item label="类型" >
                  <el-select v-model="ruleForm2.type" placeholder="消费者" style="width:100%;">
                    <el-option label="消费者" value="1"></el-option>
                    <el-option label="商家" value="2"></el-option>
                    <el-option label="咨询师" value="3"></el-option>
                  </el-select>
                </el-form-item> 
                <el-form-item label="账号" prop="account">
                 <el-input type="text" v-model="ruleForm2.account"  placeholder="请输入账号" icon="information"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass"  placeholder="请输入密码" icon="message"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="login('ruleForm2')" style="width: 100%;">登录</el-button>
                  <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                </el-form-item>
              </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="second">
              <el-form :model="ruleForm3" :rules="rules3" ref="ruleForm3" label-width="80px" style="margin-top: 25px;margin-right: 20px;">
                <el-form-item label="类型" >
                  <el-select v-model="ruleForm3.type" placeholder="消费者" style="width:100%;" >
                    <el-option label="消费者" value="1"></el-option>
                    <el-option label="商家" value="2"></el-option>
                  </el-select>
                </el-form-item> 
                <el-form-item label="手机号" prop="phoneNumber">
                 <el-input  v-model="ruleForm3.phoneNumber"  placeholder="请输入手机号码" ></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="verificationCode">
                 <el-input  v-model="ruleForm3.verificationCode"  placeholder="请输入验证码" style="width:50%;"></el-input>
                 <el-button type="primary">获取验证码</el-button>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm3.pass"  placeholder="请输入密码" icon="message"></el-input>
                </el-form-item>
              
                <el-form-item>
                  <el-button type="primary" @click="regist('ruleForm3')" style="width: 100%;">注册</el-button>
                  <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                </el-form-item>
              </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="footer">
        <v-footer></v-footer>
      </div>
  </div>
</template>

<script>
import host from '../common.js'
import footer from './footer/footer.vue'

export default {
  name: 'index',
  mounted(){
    
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      activeName: 'first',
      ruleForm2: {
          pass: '',
          account: '',
          type:'1'
        }, 
      ruleForm3: {
        pass: '',
        phoneNumber:"",
        verificationCode: '',
        type:'1',
        invitation:''
      },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          account: [
            { validator: validatePass, trigger: 'blur' }
          ]   
        },
        rules3: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          account: [
            { validator: validatePass, trigger: 'blur' }
          ]   
        }
      }
    },
 
  methods:{
    _go(ind){
      switch (ind) {
        case 1:
          this.$router.push('/user')
          break;
        case 2:
          this.$router.push('/bussiness')
          break;
        case 3:
          this.$router.push('/clerk')
          break;
      }
    },
    _register(){
      
      // this.$router.push('/register')
    },
    handleClick(tab, event) {
        // console.log(tab, event);
    },
    login(formName) {
      console.log(this.ruleForm2);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      regist(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && this.ruleForm3.type == 1) {
            this.$router.push('/consumerRegister')
          }else if(valid && this.ruleForm3.type == 2){
            this.$router.push('/bussinessRegister')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
  components:{
    'v-footer':footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .index{
    .logo{
      margin-left: 60px;
      margin-top: 30px;
      margin-bottom:30px;
    }
    .content-bg{
      width:100%;
      height:618px;
      background: url(../assets/img/banner.png) 0 0 no-repeat;
      background-size: 1920px 618px;
    }
  }
  .login{
    width: 315px;
    background: #fff;
    padding-bottom: 20px;
    position: absolute;
    right: 10%;
    top: 200px;
    .el-tabs__item{
      padding: 0 64.5px !important;
    }
    .el-tabs__active-bar{
      width: 156px !important;
    }
  }

</style>
