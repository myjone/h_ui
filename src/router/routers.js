import Main from '@/components/main'
import parentView from '@/components/parent-view'
export default [{
		path: '/login',
		name: 'login',
		component: () =>
			import('@/views/login/login.vue')
	},
	{
		path: '/',
		name: '_home',
		redirect: '/home',
		component: Main,
		children: [{
			path: '/home',
			name: 'home',
			component: () =>
				import('@/views/home/home.vue')
		}]
	},
]