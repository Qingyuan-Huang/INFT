<template>
  <div>
   <div class="detail-container">
      <div class="detail-item">
        <div class="left">
          <div class="title">Debit Card</div>
          <div class="card-info">
            <div class="card-bbs">BBS: <span>666000</span>  </div>
            <div class="card-number">Account: <span>666000</span>  </div>
            <div class="card-balance">Balance: <span>666000</span>  </div>
          </div>
        </div>
        <div class="right">
          <span>1231231</span>
        </div>
      </div>
      <div class="detail-item">
        <div class="title">Financial Year Interest</div>
        <div class="card-info">
            <div class="card-bbs">Crrent Year: <span>666000</span>  </div>
            <div class="card-number">2022-2023: <span>666000</span>  </div>
          </div>
      </div>
      <div class="detail-item">
        <div class="title">Address Details</div>
        <div class="card-info">
            <div class="card-bbs"> <span class="address-info">You can update your details here or by calling 13 13 86</span>  </div>
          </div>
      </div>
      <div class="detail-item">
        <div class="title">PaylD Management</div>
        <div class="card-info">
            <div class="card-bbs">Your PayIDs Linked to this acconut: </div>
            <div class="card-number payid">+61  <span>434XXX356</span>  </div>
          </div>
      </div>
   </div>

  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted(){
    console.log('this.$route.query :>> ', this.$route.query);
  },
  computed:{

  },
  methods:{

  },
}
</script>
<style scoped>
.payid{
  position: relative;
  padding-left: 20px;
}
.payid::before{
  content: '';
    display: block;
    width: 10px;
    height: 10px;
    border: 1px solid #42b4e5;
    position: absolute;
    left: 0px;
    top: 7px;
    transform: skew(-20deg);
}
.address-info{
  color: #42b4e5;
}
.detail-container{
  border: 1px solid #ebebeb;
}
.detail-item{
  text-align: left;
  padding: 10px;
  font-size: 16px;
}
.detail-item:nth-of-type(1){
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail-item:nth-of-type(2n-1){
  background-color: #fff;
}
.detail-item:nth-of-type(2n){
  background-color: #f5f5f5;
}
.detail-item .title{
  padding: 10px 0px;
  font-size: 18px;
  font-weight: 700;
  color: #205876;
  
}
</style>
