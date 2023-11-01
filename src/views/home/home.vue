<template>
  <div>
    <div class="header">
      <div class="header-container">
        <div class="title">Liquid bank</div>
          <div class="logout" @click="toLogin">
            <img src="../../assets/back.png" alt="">
            <span>Logout</span>
          </div>
      </div>
    </div>
    <div class="main">
      <div class="main-left">
      <div class="menu-list">
              <div class="menu-item" v-for="(item,index) in menusList" :class="index == currentIndex ? 'select-style':''" :key="index" @click="changgeMenu(index,item.path)">
                {{ item.name }}
              </div>
            </div>
    </div>
    <div class="main-right">
      <router-view></router-view>
    </div>
    </div>
  
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      menusList:[
        {
          name:'Account',
          path:'/home/account',
        },
        {
          name:'Transaction',
          path:'/home/transaction',
        },
        {
          name:'Transfer between accounts',
          path:'/home/transferBetweenAccounts',
        },
        {
          name:'Pay anyone',
          path:'/home/payAnyone',
        },
        {
          name:'Statement',
          path:'/home/statement',
        },
        {
          name:'Payees',
          path:'/home/payees',
        },
      ],
      currentIndex:0
    }
  },
  mounted(){

  },
  computed:{

  },
  methods:{
    toLogin(){
      this.$confirm('Confirm exit?', 'Tips', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$router.push('/')
          this.$message({
            type: 'success',
            message: 'Exit successfully!'
          });
        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Unexit!'
          });          
        });
   
    },
    // Switch menu
    changgeMenu(index,path){
      this.currentIndex = index
      this.$router.push(path)
    }
  },
}
</script>
<style>

  </style>
<style scoped>
.main-right{
  flex: 8;
  box-sizing: border-box;
  padding: 20px 16px;
  background-color: #f9f9f9;
}
.main-left{
  background-color: #D3DCE6;
    color: #333;
    text-align: center;
    flex: 2;
}
.header-container{
  display: flex;

}
.header .title{
  font-size: 23px;
  font-weight: 600;
}
.logout img{
  width: 20px;
  flex-shrink: 0;
  margin-right: 10px;
}
.header .logout{
  font-size: 18px;
  box-sizing: border-box;
  height: 40px;
  display: flex;
  position: absolute;
  top: 10px;
  align-items: center;
  right:30px;
  border: 1px solid #333;
  background-color: #253250;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
}
.header{
  height: 60px;
  background-color: #1f2a44;
    color: #fff;
    text-align: center;
    line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.main{
  display: flex;
  background-color: #f9f9f9;
    color: #333;
    text-align: center;
    height: 877px;
}
.menu-list{
  padding: 10px 0;
}
.menu-item{
  height: 60px;
  line-height: 60px;
  font-size: 18px;
}
.menu-item:hover{
  background-color: #1f2a44;
  color: #fff;
  cursor: pointer;
}
.select-style{
  background-color: #1f2a44;
  color: #fff;
}
</style>
