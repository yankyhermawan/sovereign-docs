import Canvas from '@/components/canvas/Canvas'
import List, { type ItemsProps } from '@/components/list/List'
import image39 from '@/assets/image-39.png'
import image40 from '@/assets/image-40.png'
import image41 from '@/assets/image-41.png'
import image42 from '@/assets/image-42.png'

const MidGame = () => {
	const items: ItemsProps[] = [
		{
			title: '',
			description: [
				{
					type: 'text',
					content: [
						`In this section, we will tackle more about what items are needed to progress mid-game.`
					]
				}
			]
		},
		{
			title: 'Itemization',
			description: [
				{
					type: 'text',
					content: [
						`If you have the Beginner Package in the Cash Shop, then good for you! It has awesome mid-game gear that will help you do higher labyrinth dungeons for mission board quests.
						Your character should look like this. The items inside the Beginner Package should be enough for you to do dungeons with a Normal/Ascension 1 difficulty`
					]
				},
				{
					type: 'image',
					image_url: image39,
					width: 400
				}
			]
		},
		{
			title: 'Ancient Armor',
			description: [
				{
					type: 'text',
					content: [
						`You can hunt ancient armor fragments in different locations. Here's the location stages for your info.
						The number of drops may vary on the level of labyrinth and drop buffs`,
						`TIP: You can absolutely hunt all the materials in EFM!
						So you can either follow mission board quests or go to EFM.`
					]
				},
				{
					type: 'image',
					image_url: image40,
					width: 400
				},
				{
					type: 'text',
					content: [
						`You can also purchase these materials via Adventurer Shop in exchange for Adventure Coins which you can get in the rewards box after completing the mission board quest`
					]
				},
				{
					type: 'image',
					image_url: image41
				},
				{
					type: 'image',
					image_url: image42,
					width: 250
				}
			]
		}
	]
	return (
		<Canvas>
			<List items={items} title='Mid Game Progression' />
		</Canvas>
	)
}

export default MidGame