<template>
  <div id="register">
    <span class="back" @click="toLogin"> < back</span>
    <el-steps :active="active" finish-status="success">
      <el-step title="Basic Information"></el-step>
      <el-step title="Security Questions"></el-step>
      <el-step title="Finish"></el-step>
    </el-steps>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div v-show="BasicInfo">
        <el-form-item label="first name" prop="firstName">
          <el-input v-model="ruleForm.firstName"></el-input>
        </el-form-item>
        <el-form-item label="last name" prop="lastName">
          <el-input v-model="ruleForm.lastName"></el-input>
        </el-form-item>
        <el-form-item label="birth date" prop="birthDate">
          <el-input v-model="ruleForm.birthDate"></el-input>
        </el-form-item>
        <el-form-item label="address" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="phone number" prop="phonenumber">
          <el-input v-model="ruleForm.phonenumber"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="Email">
          <el-input v-model="ruleForm.Email"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <div class="tips">
          <p>1. Have to include a capital in the password.</p>
          <p>2. have to include a lowercase in the password.</p>
          <p>
            3. have to include a special symbol like !?<>@#$%* in the password.
          </p>
        </div>
      </div>
      <div v-show="SecurityQue">
        <el-form-item label="What is your son's/daughter's name？" prop="firstName">
          <el-input v-model="ruleForm.firstName"></el-input>
        </el-form-item>
        <el-form-item label="What company are you used to work for?" prop="firstName">
          <el-input v-model="ruleForm.firstName"></el-input>
        </el-form-item>
        <el-form-item label="What is your best friend’s name?" prop="firstName">
          <el-input v-model="ruleForm.firstName"></el-input>
        </el-form-item>
      </div>
      <div v-if="finisheRegister">
        After  <Countdown :time="countDown"  @finished="handleFinished"></Countdown>seconds, the login page will be automatically redirected or <span @click="$router.push('/')"> click to go to the login page immediately</span>

        <h2>Congratulations! You have finished all the steps to sign up in your online bank. Please enjoy your journey in Liquid Bank, and <span @click="$router.push('/')">click back</span> to log in page</h2>
        <h3>Please Note：Your default username is your Email</h3>
      </div>
      <el-form-item>
        
        <el-button  v-show="active!=3" @click="pre" :disabled="active == 0 ? true:false">pre </el-button>
        <el-button v-show="active==0"   @click="next('ruleForm')">NEXT </el-button>
        <el-button  v-show="active==1" type="primary" @click="submitForm('ruleForm')"
          >Register </el-button
        >        
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Countdown from '../../components/Countdown/Countdown.vue';
export default {
  components: {
    Countdown
  },
  data() {
    return {
      ruleForm: {
        firstName: "",
        lastName: "",
        birthDate: "",
        address: "",
        phonenumber: "",
        Email: "",
        password: "",
     
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "Please enter your first name",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Please enter your last name",
            trigger: "blur",
          },
        ],
        birthDate: [
          {
            required: true,
            message: "Please select your birth date",
            trigger: "change",
          },
        ],
        address: [
          {
            required: true,
            message: "Please enter your address",
            trigger: "blur",
          },
        ],
        phonenumber: [
          {
            required: true,
            message: "Please enter your phone number",
            trigger: "blur",
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "The mobile phone number format is incorrect",
            trigger: "blur",
          },
        ],
        Email: [
          {
            required: true,
            message: "Please enter your email address",
            trigger: "blur",
          },
          {
            pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            message: "The mailbox format is incorrect",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          },
          {
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%*<>?!])(?=.*[^\da-zA-Z]).{8,}$/,
            message:
              "The password must contain at least eight characters, including uppercase letters, lowercase letters, and special characters",
            trigger: "blur",
          },
        ],
      },
      active: 0,
      BasicInfo: true,
      finisheRegister:false,
      SecurityQue:false,
      countDown:10,
      autoStartB:false
    };
  },
  mounted() {},
  computed: {},
  methods: {
    toLogin(){
      this.$router.push({path:'/'})
      // aaaa
    },
    submitForm(formName) {
      console.log("ruleForm :>> ", this.ruleForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.BasicInfo = false
        this.SecurityQue = false
        this.finisheRegister = true
        this.countDown = 10
        this.autoStartB = true
        this.active = 4
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    next(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.active++ > 2) this.active = 3;
  
      if (this.active == 0) {
        this.BasicInfo = true
        this.SecurityQue = false
        this.finisheRegister = false
      } else if (this.active == 1) {
        this.BasicInfo = false
        this.SecurityQue = true
        this.finisheRegister = false
      } else {
        this.BasicInfo = false
        this.SecurityQue = false
        this.finisheRegister = true
        this.countDown = 10
        this.autoStartB = true
      }
        } 
      });
     
    },
    pre() {
      this.active--
      if (this.active == 0) {
        this.BasicInfo = true
        this.SecurityQue = false
        this.finisheRegister = false
      } else if (this.active == 1) {
        this.BasicInfo = false
        this.SecurityQue = true
        this.finisheRegister = false
      } else {
        this.BasicInfo = false
        this.SecurityQue = false
        this.finisheRegister = true
      }
  

    },
    handleFinished() {
      console.log('倒计时结束');
      this.$router.push('/')
    }
  },
};
</script>
<style>
#register .el-form-item__label{
  width: auto !important;
  flex: 2;
  font-size: 18px;
  text-align: left;
}
#register .el-form-item{

  margin-bottom: 30px !important;
  display: flex;
}
#register .el-form-item__content{
  text-align: left;
  flex: 8;
  margin-left: 0 !important;
}
</style>
<style scoped>
.demo-ruleForm{
  margin-top: 20px;
}
#register {
  width: 700px;
  margin: 0 auto;
}
.back{
  font-size: 20px;
  padding: 20px 0;
  display: block;
  color: cornflowerblue;
  cursor: pointer;
}
.tips{
  margin-bottom: 20px;
}
.tips p{
  font-size: 14px;
}
</style>
