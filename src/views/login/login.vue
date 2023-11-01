<template>
  <div id="main">
    <div class="hender">
        <div class="tool-container">
            <div class="ngm">NGM Group</div>
            <div class="ngm">Charitable Foundation</div>
            <div class="ngm">BSB</div>
            <div class="ngm">Local us</div>
            <div class="ngm">NGM Group</div>
            <div class="ngm">NGM Group</div>
        </div>
    </div>
    <div class="menu-nav">
      <div class="nav">
        <div class="logo">Liquid bank</div>
        <div class="nav-item-list">
          <div class="nav-item" v-for="(item,index) in navList" :key="index">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="login-container">
      <div class="bank-name">Liquid bank</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="" prop="account">
          <el-input
            v-model="ruleForm.account"
            placeholder="Please enter your account number"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            v-model="ruleForm.password"
            :type="passwordType == true ? 'password' : 'text'"
            placeholder="Please enter your account number"
          >
            <template #append>
              <div @click="togglePassword" class="view-box">
                <i
                  class="el-icon-view"
                  :class="showPassword ? 'active' : ''"
                ></i>
              </div>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            @click="submitForm('ruleForm')"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
      <div class="other-container">
        <div class="forget-password">
          <span class="forget-password-text">Forget password?</span>
        </div>
        <div class="register-account">
          <span class="register-account-text">Don't have an account ?</span>
          <span class="register-account-link" @click="$router.push('/register')"
            >Register</span
          >
        </div>
      </div>
    </div>
    </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList:[
        {
          name:'Personal',
          path:'/',
        },
        {
          name:'Business',
          path:'/',
        },
        {
          name:'Community',
          path:'/',
        },
        {
          name:'Help Center',
          path:'/',
        },
        {
          name:'About Us',
          path:'/',
        },
      ],
      showPassword: false,
      passwordType: true,
      ruleForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          {
            required: true,
            message: "The account cannot be empty",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "The password cannot be empty",
            trigger: "change",
          },
        ],
      },
    };
  },
  mounted() {},
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          this.$router.push({ path: "/home/account" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
      this.passwordType = !this.passwordType;
    },
  },
};
</script>
<style>

#main .el-form-item__content{
  margin-left: 0 !important;
  /* margin-bottom: 30px; */
}
#main .el-input-group__append {
  padding: 0;
}
#main .view-box {
  padding: 0 20px;
  height: 38px;
  line-height: 38px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
}
#main .el-icon-view {
  font-size: 20px;
}
</style>
<style scoped>
.nav-item:hover{
    color: #0083ca;
}
#main{
  height: 877px;
}
.ngm{
  margin-left: 20px;
  width: 150px;
}
#main{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main{
  flex: 8.4;
  background-image: url("../../assets/befor-login-back.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* height: 83.9vh; */
  display: flex;
  align-items: center;
  justify-content: end;

}
.menu-nav{
  flex: 1.1;
  height: 100px;
  background-color: #0a4067;
  color: #fff;
  font-size: 18px;
  line-height: 100px;
}
.logo{
  margin-right: 40px;
  font-size: 23px;
}
.nav{
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-item-list{
  display: flex;
  align-items: center;

}
.nav-item{
  padding: 0 20px;
  margin-right: 20px;
  cursor: pointer;
}
.hender{
  flex: 0.5;
  height: 50px;
  background-color: #1f2a44;
  color: #fff;
  line-height: 50px;

}
.tool-container{
  width: 80%;
  margin: auto;
  font-size: 16px;
  display: flex;
  justify-content: end;
}
.bank-name {
  font-size: 20px;
  color: #0083ca;
  margin-bottom: 30px;
}
.login-container {
  width: 500px;
  height: 300px;
  box-sizing: border-box;
  margin-right: 200px;
  margin-top: -90px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 30px 20px;
}
.active {
  color: #0083ca;
}
.login-btn {
  width: 100%;
  background-color: #f47b29;
  border: none;
}
.other-container{
  display: flex;
  justify-content: space-between;
}
.forget-password-text,.register-account-link,.register-account-text{
  font-size: 16px;
  
}
.forget-password{
  cursor: pointer;
}
.register-account-link{
  cursor: pointer;
  color: #0083ca;
  margin-left: 10px;
}


</style>
