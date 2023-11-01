<template>
  <div>
    <div class="edit">
      <div class="title">
        <span>New Payee</span>
      </div>
      <div class="tab">
        <div
          class="tab-item"
          v-for="(item, index) in tool"
          :key="index"
          :class="currentIndex == index ? 'is-active' : ''"
          @click="selectTab(item, index)"
        >
          <span
            ><img
              :src="currentIndex == index ? item.imgUrl2 : item.imgUrl"
              alt=""
          /></span>

          <span>{{ item.name }}</span>
          <span>{{ item.name2 }}</span>
        </div>
      </div>
      <div v-if="currentIndex == 0" class="bankAccount">
        <div class="payee edit-item">
        <span>Payee</span>
        <div class="select">
          <el-select v-model="value" filterable placeholder="Payee" @blur="selectBlur($event)">
        <el-option
          clearable
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
        </div>
      </div>

      <div class="bsb edit-item">
        <span>BSB</span>
        <input type="text"  placeholder="BSB"/>
        <P>Use Liquid bank‘s BSB</P>
      </div>
      <div class="accountnumber edit-item">
        <span>Account Number</span>
        <input type="text edit-item" placeholder="Account Number" />
      </div>
      </div>
      <div v-if="currentIndex == 1" class="phoneNumber">
      <div class="phone edit-item">
            <span>Phone</span>
            <input type="text" placeholder="Phone">
        </div>
      <div class="nickname edit-item">
        <span>Nickname</span>
        <input type="text"  placeholder="Nickname"/>
      </div>
      <div class="description edit-item">
        <span>Description</span>
        <input type="text"  placeholder="Description"/>
      </div>
    </div>
      <div class="btn">
        <button class="cancel" @click="cancel">Cancel</button>
        <button class="save" @click="add">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSelect: false,
      currentIndex: 0,
      tool: [
        {
          name: "Bank",
          name2: "Account",
          imgUrl: require("@/assets/bankBlue.png"),
          imgUrl2: require("@/assets/bankW.png"),
          isSelect: false,
        },
        {
          name: "Phone",
          name2: "Number",
          imgUrl: require("@/assets/telephone.png"),
          imgUrl2: require("@/assets/telephone-wiite.png"),
          isSelect: false,
        },
        {
          name: "Email",
          name2: "Address",
          imgUrl: require("@/assets/email.png"),
          imgUrl2: require("@/assets/email-w.png"),
          isSelect: false,
        },
        {
          name: "Business",
          name2: "",
          imgUrl: require("@/assets/business-fill.png"),
          imgUrl2: require("@/assets/business-w.png"),
          isSelect: false,
        },
      ],
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value:''
    };
  },
  mounted() {
    console.log("   this.$route.query(data) :>> ", this.$route.query);
  },
  computed: {},
  methods: {
    selectBlur(e) {
        this.value = e.target.value;
    },
    selectTab(item, index) {
      item.isSelect = !item.isSelect;
      this.currentIndex = index;
    },
    add() {
        this.$confirm('Save adding, do you want to continue? ',' Prompt ',{
          confirmButtonText: 'yes',
          cancelButtonText: 'no',
          type: 'warning'
        }).then(() => {
            this.$router.push("/home/payees");
              this.$message({
            type: 'success',
            message: 'Successfully saved'
          });  
        }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: 'Cancelled adding'
        //   });          
        });
    },
    cancel() {
        
        this.$confirm('Cancel adding, do you want to continue? ',' Prompt ',{
          confirmButtonText: 'yes',
          cancelButtonText: 'no',
          type: 'warning'
        }).then(() => {
            this.$router.push("/home/payees");
          
        }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: 'Cancelled adding'
        //   });          
        });
       
    },
  },
};
</script>
<style>
.select .el-select,.select .el-input--suffix .el-input__inner{
  width: 100%;
  border: none;
}
</style>
<style scoped>
.payee{
  display: flex;
}
.payee>span{
  flex: 1;
}
.payee .select{
  flex: 9;
}
.title{
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
  background-color: #008cd1;
  font-size: 18px;
  color: #fff;
}
.save {
  padding: 10px;
  height: 40px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #f47b29;
  border: none;
  color: #fff;
  width: 100px;
  border-radius: 2px;
  cursor: pointer;
}
.cancel {
  padding: 10px;
  height: 40px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  margin-right: 20px;
  width: 100px;
  border-radius: 2px;
  cursor: pointer;
  background-color: #fff;
}
.btn {
  display: flex;
  margin-top: 20px;
}
.edit-item {
  margin-top: 20px;
  width: 100%;
  display: flex;
  border: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #fff;
}
.edit-item span {
  flex: 1;
  border-right: 1px solid #ccc;
  color: #57b2df;
}
.edit-item input {
  border: none;
  outline: none;
  padding-left: 20px;
  flex: 9;
}
.bsb span {
  flex: 1;
}
.bsb input {
  flex: 7;
}
.bsb p {
  flex: 2;
  border-left: 1px solid #ccc;
}
.is-active {
  background-color: #57b2df;
  color: #fff !important;
}
.tab {
  width: 100%;
  display: flex;
  border: 1px solid #57b2df;
}
.tab-item {
  width: 25%;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border-right: 1px solid #57b2df;
  color: #57b2df;
  padding: 5px 0;
  font-size: 16px;
}
</style>
