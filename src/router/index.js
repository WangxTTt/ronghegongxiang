import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash', // 使用 hash 模式
    routes: [
        {
            path: '/', // 默认路径，重定向到 /home
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('../view/Home/Home.vue')
        },
        {
            path: '/livethree',
            name: 'LiveThree',
            component: () => import('@/view/LiveThree/LiveThree.vue')
        },
        {
            path: '/liveone',
            name: 'LiveOne',
            component: () => import('../view/LiveOne/LiveOne.vue')
        },
        {
            path: '/livetwo',
            name: 'LiveTwo',
            component: () => import('../view/LiveTwo/LiveTwo.vue')
        }, {
            path: '/aboutus',
            name: 'AboutUs',
            component: () => import('../view/AboutUs/AboutUs.vue')
        }, {
            path: '/livefour',
            name: 'LiveFour',
            component: () => import('@/view/LiveFour/LiveFour.vue')
        }, {
            path: '/livefive',
            name: 'LiveFive',
            component: () => import('@/view/LiveFive/LiveFive.vue')
        },
        {
            path: '/support',
            name: 'Support',
            component: () => import('@/view/Support/Support.vue')
        },
        {
            path: '/channel',
            name: 'Channel',
            component: () => import('@/view/Channel/Channel.vue')
        },
        {
            path: '/blockchain',
            name: 'Blockchain',
            component: () => import('@/view/Blockchain/Blockchain.vue')
        },

    ]
});

export default router;
