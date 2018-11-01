import Vue from 'vue'
import Router from 'vue-router'
// 稿件统计
import indexHome from '@/pages/home/indexHome'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'indexHome',
			component: indexHome
		}
	]
})

export default router
