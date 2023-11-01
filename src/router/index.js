import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// //获取原型对象上的push函数
// const originalPush = Router.prototype.push;
// //修改原型对象中的push方法
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch((err) => err);
// };

const routes = [
    {
        path: "/",
        name: "login",
        component: () => import("@/views/login/login.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/register/register.vue"),
    },
    {
        path: "/home/account",
        name: "home",
        component: () => import("@/views/home/home.vue"),
        children: [
            {
                path: "/home/account",
                name: "account",
                component: () => import("@/views/home/compontent/account/account.vue"),
               
            },
            {
                path: "/home/account/detail",
                name: "detail",
                component: () => import("@/views/home/compontent/account/detail.vue"),
            },
            {
                path: "/home/payAnyone",
                name: "payAnyone",
                component: () => import("@/views/home/compontent/payAnyone/payAnyone.vue"),
            },
            {
                path: "/home/payees",
                name: "payees",
                component: () => import("@/views/home/compontent/payees/payees.vue"),
            },
            {
                path: "/home/payees/editPayee",
                name: "editPayee",
                component: () => import("@/views/home/compontent/payees/editPayee.vue"),
            },
            {
                path: "/home/payees/addPayee",
                name: "addPayee",
                component: () => import("@/views/home/compontent/payees/addPayee.vue"),
            },
            {
                path: "/home/statement",
                name: "statement",
                component: () => import("@/views/home/compontent/statement.vue"),
            },
            {
                path: "/home/transaction",
                name: "transaction",
                component: () => import("@/views/home/compontent/transaction/transaction.vue"),
            },
            {
                path: "/home/transferBetweenAccounts",
                name: "transferBetweenAccounts",
                component: () => import("@/views/home/compontent/transferBetweenAccounts.vue"),
            },
        ]
    },

  
    
];
//解决路由多次点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes,
  mode: "hash",
});

/**
 * 路由拦截
 */
// router.beforeEach(function interceptor(to,from, next) {
//   if (to.meta.nologin) {
//     next();
//     return;
//   }
//   let token = store.getters["common/token"];
//   if (!!token) {
//     next();
//   } else {
//     router.push("/Shouye");
//     // console.log("前端没有token");
//     throw new Error ("前端没有token")
//   }
// });
export default  router ;