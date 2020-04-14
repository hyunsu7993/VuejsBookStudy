import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        { path: "/", component: Home },
        { path: "/home", name: "home", component: Home },
        {
            path: "/store",
            name: "store",
            component: StoreList,
            children: []
        },
    ]
});


new Vue({
    render: h => h(App),
}).$mount('#app')