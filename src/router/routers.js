import Main from '@/components/main'
import parentView from '@/components/parent-view'
export default [{
		path: '/login',
		name: 'login',
		meta: { title: '登录' },
		component: () =>
			import('@/views/login/login.vue')
	},
	{
		path: '/',
		name: 'home',
		redirect: '/home',
		component: Main,
		children: [{
			path: '/home',
			name: 'home',
			meta: { title: '首页' },
			component: () =>
				import('@/views/home/home.vue')
		}]
	},
	{
		path: 'recommend',
		name: 'recommend',
		component: Main,
		children: [{
			path: '/recommend',
			name: 'recommend',
			meta: { title: '推荐' },
			component: () =>
				import('@/views/recommend/recommend.vue')
		}]
	},
	{
		path: 'search',
		name: 'search',
		component: Main,
		children: [{
			path: '/search',
			name: 'search',
			meta: { title: '搜索' },
			component: () =>
				import('@/views/search/search.vue')
		}]
	},{
		path: 'user',
		name: 'user',
		component: Main,
		children: [{
			path: '/user',
			name: 'user',
			meta: { title: '我' },
			component: () =>
				import('@/views/user/user.vue')
		}]
	},
]