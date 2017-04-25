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
            <div v-on:keyup.13="login('ruleForm2')">
              <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="80px" style="margin-top: 25px;margin-right: 20px;">
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
                  <el-input type="password" v-model="ruleForm2.pass"  placeholder="请输入6~18位数字、字母" icon="message"></el-input>
                </el-form-item>
                <el-form-item  prop="imgVer" v-show="imgCon1">
                  <el-input  v-model="ruleForm2.imgVer" style="width:50%;" placeholder="图形验证码"></el-input><span style="float: right;padding:0px 5px;height:30px;cursor: pointer;" @click="sendImg" ><img :src="url" alt="图形验证码" ></span>
                </el-form-item>
                <el-form-item>
                  <a href="#" style="text-decoration:none; color: #50BFFF;width:100%;text-align: right;display: inline-block;line-height: 20px;" @click="forgetPassword = true">忘记密码？</a>
                  <el-button type="primary" @click="login('ruleForm2')" style="width: 100%;">登录</el-button>
                  <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                </el-form-item>
              </el-form>
            </div>
              
          </el-tab-pane>
          <el-tab-pane label="注册" name="second">
            <div v-on:keyup.13="regist('ruleForm3')">
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
                 <el-input  v-model="ruleForm3.verificationCode"  placeholder="请输入验证码" style="width:50%;" ></el-input>
                 <el-button type="primary"  :disabled="disabled" class="ver-button" style="width:48%;"  @click="openVer">{{text}}</el-button>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm3.pass"  placeholder="请输入6~18位数字、字母" icon="message"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="regist('ruleForm3')" style="width: 100%;">注册</el-button>
                  <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="footer">
        <v-footer></v-footer>
      </div>
      <!-- 忘记密码 -->
      <el-dialog title="忘记密码" v-model="forgetPassword" size="tiny">
        <div style="width: 80%;">
            <el-form :model="ruleForm4" :rules="rules4" ref="ruleForm4" label-width="100px" class="demo-ruleForm" >
            <el-form-item label="类型" >
                  <el-select v-model="ruleForm4.type" placeholder="消费者" style="width:100%;">
                    <el-option label="消费者" value="1"></el-option>
                    <el-option label="商家" value="2"></el-option>
                    <el-option label="咨询师" value="3"></el-option>
                  </el-select>
                </el-form-item> 
            <el-form-item label="手机号" prop="phoneNumber">
              <el-input  v-model="ruleForm4.phoneNumber"  placeholder="请输入手机号码" ></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verificationCode">
              <el-input  v-model="ruleForm4.verificationCode"  placeholder="请输入验证码" style="width:50%;"></el-input>
              <el-button type="primary" style="width:48%;" @click="openVer"  :disabled="disabled">{{text}}</el-button>
            </el-form-item>
            <el-form-item label="新密码" prop="pass">
              <el-input type="password" v-model="ruleForm4.pass"  placeholder="请输入密码" icon="message"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="repeatWord">
              <el-input type="password" v-model="ruleForm4.repeatWord"  placeholder="请再次输入密码" icon="message"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="forgetPass('ruleForm4')"  style="width: 100%;">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      
      <!--   <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="forgetPassword = false">确 定</el-button>
        </span> -->
      </el-dialog>
      <!-- 登录图形验证码 -->
      <el-dialog title="图像验证码" v-model="imgCon" size="tiny">
         
        <el-input  v-model="ruleForm3.imgVer" style="width:50%;"></el-input><span style="float: right;padding:2px 5px;height:30px;cursor: pointer;" @click="sendImg" ><img :src="url" alt="图形验证码" ></span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="imgCon = false">取 消</el-button>
          <el-button type="primary" @click="sendCode">确 定</el-button>
        </span>
      </el-dialog>
       <!-- 忘记密码图形验证码 -->
      <el-dialog title="图像验证码" v-model="imgCon11" size="tiny">
         
        <el-input  v-model="ruleForm4.imgVer" style="width:50%;"></el-input><span style="float: right;padding:2px 5px;height:30px;cursor: pointer;" @click="sendImg" ><img :src="url" alt="图形验证码" ></span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="imgCon1 = false">取 消</el-button>
          <el-button type="primary" @click="sendCode1">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import host from '../common.js'
import footer from './footer/footer.vue'
let flag = false
export default {
  name: 'index',
  mounted(){
    
  },
  data () {
    let checkNumber = (rule, value, callback) => {
      if (!/^\d+(\.\d+)?$/.test(value)) {
        callback(new Error('请输入正确的数字'));
        return false
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
     var validatePassRepeat = (rule, value, callback) => {
      if (value != this.rules4.pass) {
        callback(new Error('两次密码不一致'));
      } else {
        callback();
      }
    };
    return {
      activeName: 'first',
      imgCon:false,
      imgCon11:false,
      imgCon1:true,
      url: host.basic.basicUrl + '/validateCode?' + new Date().getTime(),
      forgetPassword:false,
      flag:1,
      disabled:false,
      text:'获取验证码',
      time:60,
      ruleForm2: {
          pass: '',
          account: '',
          type:'1',
          imgVer:''
        }, 
      ruleForm3: {
        pass: '',
        phoneNumber:"",
        verificationCode: '',
        type:'1',
        invitation:'',
        imgVer:''
      },
      ruleForm4: {
          phoneNumber: '',
          verificationCode: '',
          pass: '',
          imgVer:'',
          type:'1',
          repeatWord:''
      },
        rules2: {
          pass: [
            { validator: host.basic.checkPass, trigger: 'blur' }
          ],
          account: [
            { validator: validatePass ,message: '请输入账号', trigger: 'blur' }
          ]   
        },
        rules3: {
          phoneNumber: [
            { validator: host.basic.checkMobile, trigger: 'blur' }
          ],
          pass: [
            { validator: host.basic.checkPass, trigger: 'blur' }
          ],
          
          verificationCode: [
            { validator: checkNumber, message: '请输入正确验证码', trigger: 'blur' }
          ],
          imgVer:[
            { validator: host.basic.checkVer,  trigger: 'blur' }
          ] 
        },
        rules4: {
           phoneNumber: [
            { validator: host.basic.checkMobile, trigger: 'blur' }
          ],
          repeatWord: [
            { validator: validatePass, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          verificationCode: [
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
        this.$refs[formName].validate((valid) => {
          if (valid) {
             this.$http({
              method: 'POST',
              url: host.basic.basicUrl + '/logined',
              params: {
                userType: this.ruleForm2.type,
                userName: this.ruleForm2.account,
                passWord: this.ruleForm2.pass,
                imageCode: this.ruleForm2.imgVer
              }
            }).then(function(res) {
              let data = res.data;
              if (data.ERRORCODE == '0') {      
                //个人中心      
                if(this.ruleForm2.type == 1){
                  setTimeout(()=>{this.$router.push('/user')},1000);
                }else if(this.ruleForm2.type == 2){
                  setTimeout(()=>{this.$router.push('/business')},1000);
                }else if(this.ruleForm2.type == 3){
                  setTimeout(()=>{this.$router.push('/clerk')},1000);
                }
              }else if (data.ERRORCODE == '10013'){
                //填写资料
                  if(this.ruleForm2.type == 1){
                  this.$message.success('登录成功，请先完善资料！');
                  setTimeout(()=>{this.$router.push('/consumerRegister')},1000);
                }else if(this.ruleForm2.type == 2){
                   this.$message.success('登录成功，请先完善资料！');
                  setTimeout(()=>{this.$router.push('/bussinessRegister')},1000);
                }
              }else {
                //冻结或失败
                this.$message.warning(data.RESULT);
              }
            }, function(error) {
              this.$message.error('请求错误,请稍后再试');
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      regist(formName) {
        this.$refs[formName].validate((valid) => {
          
          if (valid) {
            this.$http({
              method: 'POST',
              url: host.basic.basicUrl + '/register/register',
              params: {
                userType: this.ruleForm3.type,
                mobile: this.ruleForm3.phoneNumber,
                passWord: this.ruleForm3.pass,
                validateCode: this.ruleForm3.verificationCode
              }
            }).then(function(res) {
              let data = res.data;
              if (data.ERRORCODE == '0') {
                this.$message.success('注册成功!');             
                this.activeName = "first";
                this.$refs.ruleForm3.resetFields();
              } else {
                this.$message.warning(data.RESULT);
              }
            }, function(error) {
              this.$message.error('请求错误,请稍后再试');
            })
          };
            
        });
      },
      openVer(){
        if(this.ruleForm3.phoneNumber != ''){
          this.imgCon = true;
          this.$http({
            methods:'POST',
            url:host.basic.basicUrl + '/validateCode?' + new Date().getTime(),
          }).then(function (res){
            this.url = res.url;
            if(res.status == 200){
               console.log(res);
            }else{
              this.$message.warning('获取图像验证码失败');
            }
          })
        }
        if(this.ruleForm4.phoneNumber != ''){
          this.imgCon11 = true;
          this.$http({
            methods:'POST',
            url:host.basic.basicUrl + '/validateCode?' + new Date().getTime(),
          }).then(function (res){
            this.url = res.url;
            if(res.status == 200){
               console.log(res);
            }else{
              this.$message.warning('获取图像验证码失败');
            }
          })
        }
      },
      //忘记密码验证码
      sendCode1(){
        this.$http({
          method:'POST',
          url:host.basic.basicUrl+'/sendMsg/sendValidateCode',
          params: {
            type: 2,
            mobile: this.ruleForm4.phoneNumber,
            validateCode:this.ruleForm4.imgVer
          }
        }).then(function(res){
          let data = res.data;
          if(data.ERRORCODE == '0'){
            this.countDown();
            // console.log(data);
            this.imgCon11 = false;
            this.$message.success('短信已发送');
          }else{
            this.$message.warning(data.RESULT);
          }
        },function(error){
          this.$message.error('请求错误,请稍后再试');
        })
      },
      //注册验证码
      sendCode(){
        this.$http({
          method:'POST',
          url:host.basic.basicUrl+'/sendMsg/sendValidateCode',
          params: {
            type: 1,
            mobile: this.ruleForm3.phoneNumber,
            validateCode:this.ruleForm3.imgVer
          }
        }).then(function(res){
          let data = res.data;
          if(data.ERRORCODE == '0'){
            this.countDown();
            // console.log(data);
            this.imgCon = false;
            this.$message.success('短信已发送');
          }else{
            this.$message.warning(data.RESULT);
          }
        },function(error){
          this.$message.error('请求错误,请稍后再试');
        })
      },
      countDown() {
        let time = 60;
        this.disabled = true;
        let timer = setInterval(() => {
          this.text = time + "s后重新获取";
          time--;
          if (time == 0) {
            clearInterval(timer);
            this.disabled = false;
            this.text = "获取验证码";
          }
        }, 1000)
      },
      sendImg(){
        this.url = host.basic.basicUrl + '/validateCode?' + new Date().getTime()
      },
      forgetPass(formName) {
        console.log(this.ruleForm4);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http({
              method: 'POST',
              url: host.basic.basicUrl + '/register/forgetPassword',
              params: {
                userType: this.ruleForm4.type,
                mobile: this.ruleForm4.phoneNumber,
                passWord: this.ruleForm4.pass,
                repeatWord: this.ruleForm4.repeatWord,
                validateCode: this.ruleForm4.verificationCode
              }
            }).then(function(res) {
              let data = res.data;
              if (data.ERRORCODE == '0') {
                this.$message.success('修改成功!');
                this.imgCon11=true;
                // this.$router.push('/');
              } else {
                this.$message.warning(data.RESULT);
              }
            }, function(error) {
              this.$message.error('请求错误,请稍后再试');
            })
          } else {
            // console.log('error submit!!');
            // return false;
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
<style lang="less" >
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
    // padding-bottom: 20px;
    position: absolute;
    right: 10%;
    top: 200px;
    .el-tabs__item{
      padding: 0 64.5px !important;
    }
    .el-tabs__active-bar{
      width: 156px !important;
    }
    .ver-button{
      padding:10px 5px !important;
    }
  }
// .el-notification{
//   right:16px !important;
// }
</style>
