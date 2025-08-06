import Canvas from '@/components/canvas/Canvas'
import List, { type ItemsProps } from '@/components/list/List'

const EndGame = () => {
	const items: ItemsProps[] = [
		{
			title: '',
			description: [
				{
					type: 'text',
					content: [
						`Content Here Coming Soon!!`
					]
				}
			]
		}
	]
	return (
		<Canvas>
			<List items={items} title='End Game Progression' />
		</Canvas>
	)
}

export default EndGame