import Vue from 'vue'
import Router from 'vue-router'
const Header = resolve => require(['@/components/common/header'], resolve)
const Header2 = resolve => require(['@/components/common/headerType'], resolve)
const Footer = resolve => require(['@/components/common/footer'], resolve)

Vue.use(Router)

export default new Router({
	mode: 'history', //开发
	//mode: 'hash',  //打包
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index'
    },
    {
		path: '/index',
		meta: {
			title: '北京经开公众服务平台',
			tit:'首页'
		},
		components: {
			//header: Header,
			footer: Footer,
			default: (resolve) => require(['@/components/index'], resolve)
		}
	},
	{
		path: '/personal', 
		meta:{tit:'咱们'},
		components: {
			//header: Header,
			footer: Footer,
			default: (resolve) => require(['@/components/personalCenter/personal.vue'], resolve)
		}, 
		children: [
			{
				path: '/myEnroll', 
				component: (resolve) => require(['@/components/personalCenter/personList/myEnroll.vue'], resolve)
			},
		]
	}, 
	{
		path: '/activity', 
		meta:{tit:'热点'},
		components: {
			//header: Header,
			footer: Footer,
			default: (resolve) => require(['@/components/activityCenter/activity.vue'], resolve)
		}, 
		/*children: [
			{
				path: '/activityDetail/detail', 
				component: (resolve) => require(['@/components/activityCenter/activityDetail/detail.vue'], resolve)
			},
		]*/
	},
	{
		path: '/activityDetail/detail', 
		components: {
			//header: Header,
			footer: Footer,
			default: (resolve) => require(['@/components/activityCenter/activityDetail/detail.vue'], resolve)
		}
	},
	{
		path: '/uesrAuthentication', 
		components: {
			//header: Header,
			footer: Footer,
			default: (resolve) => require(['@/components/authentication/uesrAuthentication.vue'], resolve)
		}
	},
	{
		path: '/infinite', 
		components: {
			//header: Header,
			//footer: Footer,
			default: (resolve) => require(['@/components/infinite/infiniteScroll.vue'], resolve)
		}
	},
	{
		path: '/Alert', 
		components: {
			//header: Header,
			//footer: Footer,
			default: (resolve) => require(['@/components/Alert/Alert.vue'], resolve)
		}
	},
	{
		path: '/typeFooter',
		meta: {
			title: 'footer'
		},
		components: {
			//header: Header,
			footer: Footer,
			default: (resolve) => require(['@/components/footer/typeFooter.vue'], resolve)
		}
	},
  ]
})
