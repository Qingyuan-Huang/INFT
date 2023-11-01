<template>
  <div>
    <div class="title-tab">
      <div class="payee">Payees</div>
      <div class="billers">Billers</div>
    </div>
    <div class="ieft">
      <span><img src="@/assets/searchBlue.png" alt="" /></span>
      <input type="text" placeholder="Search Transactions">
    </div>
    <div class="payee-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="Payee" label="Payee" ></el-table-column>
        <el-table-column prop="Nickname" label="Nickname" ></el-table-column>
        <el-table-column label="Account/Pay ID" >
          <template slot-scope="scope">
            <i class="el-icon-bank-card"></i>
            <span style="margin-left: 10px">{{ scope.row.AccountPayId }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="Description" label="Description" ></el-table-column>
        <el-table-column label="">
          <template slot-scope="scope">
            <el-button size="mini" @click="handlePay(scope.$index, scope.row)"
              ><i class="el-icon-user-solid"></i>Pay</el-button
            >
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              ><i class="el-icon-edit"></i>Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              ><i class="el-icon-delete"></i>Delete</el-button
            >
            
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="addPayee">
      <button @click="addPayee">Add Payee</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "INFTPayees",

  data() {
    return {
        tableData:[
            {
                Payee: "123456789",
                Description: "Test",
                Nickname: "123456789",
                AccountPayId: "123456789"
            },
            {
                Payee: "123456789",
                Description: "Test",
                Nickname: "123456789",
                AccountPayId: "123456789"
            },
            {
                Payee: "123456789",
                Description: "Test",
                Nickname: "123456789",
                AccountPayId: "123456789"
            },
            ,
            {
                Payee: "123456789",
                Description: "Test",
                Nickname: "123456789",
                AccountPayId: "123456789"
            },
        ]
    };
  },

  mounted() {},

  methods: {
    addPayee(){
      this.$router.push({path:'/home/payees/addPayee'});
    },
    handlePay(index,row){
      console.log('index,rowPay :>> ', index,row);
    },
    handleEdit(index,row){
      console.log('index,row edit:>> ', index,row);
      this.$router.push({path:'/home/payees/editPayee',query:row});

    },
    handleDelete(index,row){
      console.log('index,rowDelete :>> ', index,row);
      this.$confirm('Delete current data, do you want to continue? ',' Prompt ',{
          confirmButtonText: 'yes',
          cancelButtonText: 'no',
          type: 'warning'
        }).then(() => {
            // this.$router.push("/home/payees");
            this.$message({
            type: 'success',
            message: 'Successfully deleted'
          }); 
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Cancel deletion'
          });          
        });
    }
  },
};
</script>
<style>
.addPayee{
  display: flex;
  margin-top: 20px;
}
.addPayee button{
  width: 100px;
  height: 30px;
  background-color: #f47b29;
  border: none;
  color: #fff;
  cursor: pointer;
}
.payee-table .el-table th.el-table__cell{
    background-color: #008cd1;
    color: #ffff;
}
</style>
<style  scoped>
.payee-table{
    margin-top: 20px;
}
.title-tab{
    width: 100%;
    display: flex;
}
.payee{
    background-color: #008cd1;
    width: 50%;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}
.billers{
    background-color: #fff;
    width: 50%;
    height: 40px;
    line-height: 40px;
    color: #333;
    font-size: 18px;
    border: 1px solid #008cd1;
    box-sizing: border-box;
}
.ieft{
    width: 100%;
    display: flex;
    margin-top: 20px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    align-items: center;
}
.ieft  span{
    flex: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-right: 1px solid #ccc;
    cursor: pointer;
}
.ieft img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin-left: 10px;
 
}
.ieft  input{
    flex: 9;
    border: none;
    outline: none;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
}

</style>
