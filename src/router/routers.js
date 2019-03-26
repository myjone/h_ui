import Main from '@/components/main'
import parentView from '@/components/parent-view'
export default [{
		path: '/login',
		name: 'login',
		meta: { 
			title: '登录'
			},
		component: () =>
			import('@/views/login/login.vue')
	},{
		path: '/register',
		name: 'register',
		meta: { 
			title: '注册'
			},
		component: () =>
			import('@/views/register/register.vue')
	},
	{
		path: '/',
		name: 'home',
		redirect: '/home',
		component: Main,
		children: [{
			path: '/home',
			name: 'home',
			meta: { 
				title: '首页'
				},
			component: () =>
				import('@/views/home/home.vue')
		},{
			path: '/user',
			name: 'user',
			meta: {
				title: '我'
				},
			component: () =>
				import('@/views/user/user.vue')
		}]
	},
	{
		path: 'recommend',
		name: 'recommend',
		redirect :'/recommend',
		component: Main,
		children: [{
			path: '/recommend',
			name: 'recommend',
			meta: { 
				title: '推荐' 
			},
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
			meta: { 
				title: '搜索' 
			},
			component: () =>
				import('@/views/search/search.vue')
		}]
	},{
		path: '/user',
		name: 'user',
		redirect :'/user',
		component: parentView,
		children: [{
			path: 'center',
			name: 'center',
			meta: { 
					title: '个人主页'
				},
			component: () =>
				import('@/views/user/center.vue')
		},{
			path: 'author',
			name: 'author',
			meta: { 
					title: '站在风口的猪啊！！！！'
				},
			component: () =>
				import('@/views/user/author.vue')
		}]
	},{
		path: '/article',
		name: 'article',
		redirect :'/article',
		component: parentView,
		children: [{
			path: 'add',
			name: 'add',
			meta: { 
					title: '编写文章'
				},
			component: () =>
				import('@/views/article/edit.vue')
		},{
			path: 'detail/:id',
			name: 'detail',
			meta: { 
					title: '文章详情 '
				},
			component: () =>
				import('@/views/article/detail.vue')
		}]
	}
]