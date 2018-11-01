import Vue from 'vue'
import Router from 'vue-router'

//import HelloWorld from '@/components/HelloWorld'
import ManuscriptChart from '@/pages/manuscriptChart/manuscriptChart'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'ManuscriptChart',
			component: ManuscriptChart
		}
	]
})

export default router
