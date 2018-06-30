<template>
  <el-form :model="formLogin" :rules="ruleLogin" ref="formLogin" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">钱诚汇登录</h3>
    <el-form-item prop="account">
      <el-input type="text" auto-complete="off" placeholder="账号" v-model="formLogin.username"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="formLogin.password" auto-complete="off" placeholder="密码" @on-enter="login('formLogin')"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="login('formLogin')">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>

  export default {
    name: "login",
        data() {
            // 验证是否为空
        let validateLoginEmail = (rule, value, callback) => {
            /**验证邮箱**/
            // if (!(/^(\w-*\.*)+@(\w-?)+ (\.\w{2,})+$/.test(value))) {
            //     return callback(new Error('邮箱不能为空或邮箱错误'));
            // } else {
            //     callback();
            // }

            if (value === '') {
                return callback(new Error('用户名不能为空'));
            } else {
                callback();
            }
        };
        // 验证密码是否为空
        let validateLoginPassword = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('密码不能为空'));
            } else {
                callback();
            }
        };
        return {
        	  checked: true,
            rememberPassword: false,
            load: false,
            formLogin: {
                username: '', //用户名
                password: ''  //密码
            },
            ruleLogin: {
                email: [{
                    validator: validateLoginEmail,
                    trigger: 'blur'
                }],
                password: [{
                    validator: validateLoginPassword,
                    trigger: 'blur'
                }]
            }
        }
        },
        created(){

        },
        methods:{
            login(name) {
                this.$store.state.token='';
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	//alert()
                        this.$router.push('/main' )
                    }
                })
            },
            signUp(){
               this.$router.push("/register") 
            }
        },
        mounted() {
         
        }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>