<template>
  <div>
    <div class="transaction">
      <div class="transaction-account">
        <div class="transaction-account-title">Account</div>
        <div class="serch-input">
          <el-select v-model="value" placeholder="请选择" ref="mySelect">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <template #default>
                <div class="option-style">
                  <span class="custom-option">{{ item.label }}</span>
                  <span class="custom-option-description">{{
                    item.value
                  }}</span>
                </div>
              </template>
            </el-option>
          </el-select>
          <span class="tips"> change account</span>
        </div>
      </div>
      <div class="tool">
        <div class="tool-item">
          <img src="@/assets/xunhuan.png" alt="" />
          <span>Transfer between my Accounts</span>
        </div>
        <div class="tool-item">
          <img src="@/assets/user.png" alt="" />
          <span>Pay Anyone</span>
        </div>
        <div class="tool-item">
          <img src="@/assets/pay.png" alt="" />
          <span>BPAY</span>
        </div>
        <div class="tool-item">
          <img src="@/assets/I.png" alt="" />
          <span>Account Information</span>
        </div>
      </div>
      <div class="history">
        <span>Transaction History</span>
      </div>
      <div class="search-trans">
        <div class="ieft">
          <img src="@/assets/search.png" alt="" />
          <span>Search Transactions</span>
        </div>
        <div class="icon-r" @click="showSearch()">
          <img src="@/assets/arrup.png" alt="" />
        </div>
      </div>
      <div class="search-box" v-show="isSearch">
        <div class="desc">
          <span>Description</span>
          <input type="text" placeholder="Description" />
        </div>
        <div class="time">
          <el-date-picker
            lang="en"
            v-model="time"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="to"
            start-placeholder="startDate"
            end-placeholder="endDate"
            align="right"
          >
          </el-date-picker>
        </div>
        <div class="min-max">
          <div class="min">
            <span>$</span>
            <input placeholder="Min" type="text" />
          </div>
          <div class="max">
            <span>$</span>
            <input placeholder="Max" type="text" />
          </div>
        </div>
        <div class="type">
          <span
            v-for="(item, index) in typeList"
            :class="currentIndex == index ? 'isSelect' : ''"
            :key="index"
            @click="changeTab(index, item)"
            >{{ item.name }}</span
          >
        </div>
        <div class="too-btn">
          <button class="clear">Clear</button>
          <button class="search-btn">Search</button>
        </div>
      </div>
      <div class="table-info">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Date" width="180">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="300">
           
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>use:{{ scope.row.type }}</p>
                <p>amount:{{ scope.row.pay }}</p>
                <p>time:{{ scope.row.time }}</p>
                <p>cardNumber:{{ scope.row.cardNumber }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="Description">
          </el-table-column>
          <el-table-column prop="debit" label="Debit"> </el-table-column>

          <el-table-column prop="credit" label="Credit"> </el-table-column>

          <el-table-column prop="balance" label="Calance"> </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSearch:false,
      currentIndex: 0,
      typeList: [
        {
          name: "All",
          value: "All",
        },
        {
          name: "Credit",
          value: "Credit",
        },
        {
          name: "Debit",
          value: "Debit",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "Last week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last month",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last three months",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      time: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          debit: "-$20.21",
          description: "22",
          credit: "credit",
          balance: "$12,300",
          type: "shopping",
          pay: "123",
          time: "2016-05-02",
          cardNumber: "XXXX XXXX XXXX 6004",
          isInfo: false,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          debit: "-$20.21",
          description: "22",
          credit: "credit",
          balance: "$12,300",
          type: "shopping",
          pay: "123",
          time: "2016-05-02",
          cardNumber: "XXXX XXXX XXXX 6004",
          isInfo: false,
        },
      ],
    };
  },
  mounted() {},

  computed: {},
  methods: {
    showSearch(){
      this.isSearch = !this.isSearch
    },
    showInfo(item) {
      item.isInfo = !item.isInfo;
    },
    changeTab(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style>
.option-style {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.transaction .el-input--suffix .el-input__inner {
  height: 50px;
  border-radius: 0;
  width: 1250px;
  z-index: 2;
}
.time .el-range-editor.el-input__inner {
  width: 48%;
}
.time .el-date-editor .el-range-input {
  width: 48%;
}
</style>
<style scoped>
.name-style {
  display: flex;
  align-items: center;
}
.name-style img {
  width: 20px;
  vertical-align: middle;
  margin-left: 20px;
}
.too-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.clear {
  width: 200px;
  height: 40px;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  outline: none;
  cursor: pointer;
  color: #333;
}
.search-btn {
  width: 200px;
  height: 40px;
  font-size: 16px;
  background-color: #f47b29;
  color: #fff;
  outline: none;
  cursor: pointer;
  border: none;
}
.type {
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.type span {
  border: 1px solid #ccc;
  flex: 3;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  border-right: none;
}
.type span:nth-of-type(3) {
  border-right: 1px solid #ccc;
}
.min-max {
  margin-top: 20px;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
}
.min-max .min,
.max {
  border: 1px solid #ccc;
  width: 48%;
  display: flex;
}
.min-max .min span,
.max span {
  font-size: 16px;
  color: #008cd1;
  height: 40px;
  border-right: 1px solid #ccc;
  display: inline-block;
  line-height: 40px;
  width: 40px;
  flex: 1;
}
.min-max .min input,
.max input {
  border: none;
  outline: none;
  flex: 9;
  padding-left: 20px;
}
.time {
  width: 100%;
  text-align: left;
  margin-top: 20px;
}
.search-trans {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 20px;
  height: 40px;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
}
.icon-r img {
  width: 20px;
}
.ieft {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.search-box {
  border: 1px solid #ccc;
  padding: 20px 10px;
}
.desc {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
  font-size: 16px;
  display: flex;
  align-items: center;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
}
.desc span {
  color: #008cd1;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 1px solid #ccc;
  height: 40px;
  text-align: center;
  flex: 1;
}
.desc input {
  height: 38px;
  flex: 9;
  border: none;
  box-sizing: border-box;
  outline: none;
  padding-left: 10px;
}
.isSelect {
  background-color: #008cd1;
  color: #fff;
}
.history {
  width: 100%;
  font-size: 18px;
  background-color: #008cd1;
  color: #fff;
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
}
.tool {
  display: flex;
  margin-top: 30px;
}
.tool-item {
  display: flex;
  width: 376px;
  color: #008cd1;
  height: 120px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  border: 1px solid #e9e9e9;
  border-right: none;
}
.tool-item:nth-of-type(4) {
  border-right: 1px solid #e9e9e9;
}
.tool-item img {
  width: 40px;
  height: 43px;
}
.serch-input {
  position: relative;
}
.tips {
  position: absolute;
  right: -142px;
  top: 14px;
  color: #999;
  z-index: 99;
}
.transaction-account {
  border: 1px solid #dcdfe6;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 10px 0 10px 10px;
  height: 50px;
  box-sizing: border-box;
  width: 100%;
}
.transaction-account-title {
  color: #42b4e5;
  margin-right: 20px;
}
</style>
