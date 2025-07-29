import { lazy } from 'react'

const programs = [
	{
		title: 'Introduction',
		url: '/',
		icon: 'home',
		components: lazy(() => import('../dashboard/Dashboard')),
	},
	{
		title: 'Getting-started',
		url: '/getting-started',
		icon: 'home',
		components: lazy(() => import('../gettingstarted/GettingStarted')),
	},
]

export default programs
