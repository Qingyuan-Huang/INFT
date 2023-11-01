<template>
  <div>
    <div class="account">
      <div class="welecome">
        <div class="welecome-text">Hi MR JERRY</div>
        <div class="last-login-time">
          You last logged in 3 days ago at 8:57am on the 4th of Oct, 2023
        </div>
      </div>
      <div class="account-list">
        <div
          class="account-item"
          v-for="(item, index) in accountList"
          :key="index"
        >
          <div class="left">
            <div class="account-item-title" @click="toDetail(item)">{{ item.name }}</div>
            <div class="balance">
              <span>${{ item.balance }}</span>
            </div>
          </div>
          <div class="right">
            <span>${{ item.balance }}</span>
          </div>
        </div>
        <div class="sort">
          <div class="sort-item"  @click="sortFun">
            
            <img v-show="isSort" src="../../../../assets/down.png" alt="">
            <img v-show="!isSort" src="../../../../assets/up.png" alt="">
           <span>Sort Accounts</span>
          </div>
          
        </div>
       
      </div>
      <div class="creat-ccount">
          <button @click="openMask">New Account</button>
        </div>
    </div>
    <div v-show="ismask" id="mask">
      <div id="mask-content">
        <div class="mask-title">Create New Account</div>  
        <div class="account-name">
          <span>Account Name</span>
          <input type="text">
        </div>
        <div class="account-number">
          <span>Card Number</span>
          <input type="text">
        </div>
        <button>确定</button>
        <button @click="close">关闭</button>
        
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ismask:false,
      isSort:true,
      accountList: [
        {
          name: "Life Saver",
          balance: "1000",
        },
        {
          name: "Debit Card",
          balance: "1000",
        }
      ],
    };
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
  window.removeEventListener('resize', this.handleResize);
},
  computed: {},
  methods: {
    // to DETAIL
    toDetail(item){
      console.log('22 :>> ', item);
      this.$router.push({path:'/home/account/detail',data:item});
    },
    close(){
      this.ismask = false;

    },
    openMask(){
      this.ismask = true;
    },
    handleResize() {
      
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("mask").style.width = width+'px';
    document.getElementById("mask").style.height = height+'px';
    document.getElementById("mask-content").style.width = width*0.4+'px';
    document.getElementById("mask-content").style.height = height*0.5+'px';
  
  },
    sortFun(){
      this.isSort = !this.isSort
    }
  },
};
</script>
<style scoped>
.creat-ccount{
  margin-top: 20px;
  display: flex;
}
.creat-ccount button{
  padding: 10px 20px;
  background-color: #f47b29;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
.sort{
  padding: 10px 20px;
  display: flex;

}
.sort-item{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #158ed1;
  cursor: pointer;
  user-select: none;
}
.sort-item img{
  width: 30px;
}
.welecome {
  text-align: left;
  border: 1px solid #bee8f1;
}
.welecome-text {
  padding: 0 20px 0;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background-color: #d9edf7;

  border-bottom: 1px solid #bee8f1;
  color: #3284ba;
}
.last-login-time {
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
}
.account-list {
  border: 1px solid #e7e7e7;
  margin-top: 20px;
}
.account{

}
.account-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
  height: 60px;
  font-size: 16px;
  align-items: center;
}
.account-item-title{
    font-size: 20px;
    cursor: pointer;
}
.account-item-title:hover{
  color: #158ed1;
}
.account-item .balance,.account-item-title{
    height: 30px;
    line-height: 30px;
    text-align: left;
}
.right{
    font-size: 18px;
    font-weight: 600;
}
#mask{
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#mask-content{
  background-color: #fff;
}
</style>
