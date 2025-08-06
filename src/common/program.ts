import { lazy, type JSX } from 'react'

type ProgramsType = {
	title: string
	url: string
	icon: string
	components: React.LazyExoticComponent<() => JSX.Element>
}

const programs: ProgramsType[] = [
	{
		title: 'Introduction',
		url: '/',
		icon: 'home',
		components: lazy(() => import('../dashboard/Dashboard')),
	},
	{
		title: 'Getting Started',
		url: '/getting-started',
		icon: 'home',
		components: lazy(() => import('../gettingstarted/GettingStarted')),
	},
	{
		title: 'Essential Knowledge',
		url: '/essential-knowledge',
		icon: 'home',
		components: lazy(
			() => import('../essentialknowledge/EssentialKnowledge'),
		),
	},
	{
		title: 'Early Progression',
		url: '/early-progression',
		icon: 'home',
		components: lazy(() => import('../earlyprogression/EarlyProgression')),
	},
	{
		title: 'Adventure System',
		url: '/adventure-system',
		icon: 'home',
		components: lazy(() => import('../advancesystem/AdvanceSystem')),
	},
	{
		title: 'Mid Game Progression',
		url: '/mid-game',
		icon: 'home',
		components: lazy(() => import('../midgame/MidGame')),
	},
	{
		title: 'End Game Progression',
		url: '/end-game',
		icon: 'home',
		components: lazy(() => import('../endgame/EndGame')),
	},
	{
		title: 'Miscellaneous',
		url: '/misc',
		icon: 'home',
		components: lazy(() => import('../misc/Miscellaneous')),
	},
]

export default programs
