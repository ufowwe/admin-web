import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Message from './views/busmanage/message.vue'
import Pass from './views/busmanage/pass.vue'
import Settle from './views/busmanage/settle.vue'
import Webpass from './views/busmanage/webpass.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
   {
        path: '/',
        component: Home,
        name: 'Home',
        iconCls: 'fa fa-home',
        leaf: true,//只有一个节点
        children: [
            { path: '/main', component: Main, name: '首页' }
        ]
    },{
        path: '/',
        component: Home,
        name: '商户管理',
        iconCls: 'fa fa-leaf',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/message', component: Message, name: '商户信息' },
            { path: '/settle', component: Settle, name: '商户结算' },
            { path: '/pass', component: Pass, name: '商户通道' },
            { path: '/webpass', component: Webpass, name: '网站通道' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '客服管理',
        iconCls: 'fa fa-headphones',
        children: [
            { path: '/page4', component: Page4, name: '拒付' },
            { path: '/page5', component: Page5, name: '调阅' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '结算管理',
        iconCls: 'fa fa-credit-card',
        children: [
            { path: '/page6', component: Page6, name: '提现审核' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '销售管理',
        iconCls: 'fa fa-buysellads',
        children: [
            { path: '/echarts', component: echarts, name: '交易状况' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;