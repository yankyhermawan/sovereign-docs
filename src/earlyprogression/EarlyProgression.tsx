import Canvas from '@/components/canvas/Canvas'
import List, { type ItemsProps } from '@/components/list/List'
import image16 from '@/assets/image-16.png'
import image17 from '@/assets/image-17.png'
import image18 from '@/assets/image-18.png'
import image19 from '@/assets/image-19.png'
import image20 from '@/assets/image-20.png'
import image21 from '@/assets/image-21.png'
import image22 from '@/assets/image-22.png'
import image23 from '@/assets/image-23.png'
import image24 from '@/assets/image-24.png'
import image25 from '@/assets/image-25.png'
import image26 from '@/assets/image-26.png'
import image27 from '@/assets/image-27.png'
import image28 from '@/assets/image-28.png'
import image29 from '@/assets/image-29.png'

const EarlyProgression = () => {
	const items: ItemsProps[] = [
		{
			title: 'Starter Items',
			description: [
				{
					type: 'text',
					content: [
						`Right after setting up your specialization and skills, you'll get 3 items in your inventory.`
					]
				},
				{
					type: 'jsx',
					content: [
						<a className='underline' href='https://reference.wutheringnest.com/items/26621020' target='_blank'>1. Beginner Box Exchange Coupon</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26621370' target='_blank'>2. Adventure Licence E-Rank</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26550391' target='_blank'>3.Beginning Talisman</a>
					]
				},
				{
					type: 'image',
					image_url: image16
				}
			]
		},
		{
			title: 'Beginner Box Exchange Coupon',
			description: [
				{
					type: 'text',
					content: [
						`To exchange this coupon, go to NPC Yoshimoto Shizuka > General tab.
						The images below are where you can locate the box and the contents of the box.`
					]
				},
				{
					type: 'jsx',
					content: [
						<div className='bg-yellow-200'>
							Important Note: If this is your first character in your account and yo're planning to make it your main character,
							it's recommended that you buy the Beginner Package inside the Cash Shop (F11).
							This box has better contents than the wuthering beginner box.
							You can only buy this package once per account, so if you are creating sub-characters, you will be getting the wuthering beginner box.
						</div>
					]
				}
			]
		},
		{
			title: 'Beginner Package',
			description: [
				{
					type: 'image',
					image_url: image17
				},
				{
					type: 'image',
					image_url: image18,
					width: 200
				}
			]
		},
		{
			title: 'Wuthering Beginner Box',
			description: [
				{
					type: 'image',
					image_url: image19
				},
				{
					type: 'image',
					image_url: image20,
					width: 250
				},
				{
					type: 'text',
					content: [
						`Open the box and equip the weapon, armors, accessories, heraldry, talisman and dragon jades.`,
						`TIP: Opening the pouches can make your inventory full, check your Cash Inventory > Functional and use these 3 items below to increase storage,
						inventory and heraldry slots.`
					]
				},
				{
					type: 'image',
					image_url: image21
				},
				{
					type: 'text',
					content: [
						`I chose the Wuthering Beginner Box in this example, because I already used the Beginner Package on my main char,
						main difference is the armor, weapons and accessories.`,
						`Beginner Package has`,
						`+10 Ancient Armor tier 1`,
						`+20 Ancient Weapon`,
						`+10 Unknown Ancient Accessories`,
						`TIP: Equip the necessary heraldry and talisman based on your main stat.
						In the example below my main stat is STR(Physical ATK). So I will be equipping Bear Heraldry, Destruction Heraldry and Talisman. `
					]
				},
				{
					type: 'image',
					image_url: image22,
					width: 250
				},
				{
					type: 'text',
					content: [
						`TIP: Equip the Beginning Talisman on the furthest left in your talisman slot because it has 200% efficiency,
						this will help you get more drops when you go dungeons, nests and EFM (Erosion Fission Maze).`
					]
				},
				{
					type: 'image',
					image_url: image23,
					width: 250
				},
				{
					type: 'text',
					content: [
						`TIP: Equip the primary weapon that your skills require, e.g. Dark Avenger skills needs a Sword for it to be casted. You can check this also in your skill descriptions`
					]
				},
				{
					type: 'image',
					image_url: image24,
					width: 250
				},
				{
					type: 'text',
					content: [
						`TIP: Weapon Lunar Jade for Elemental Attribute Convert. Some characters in game have innate element attribute on their skills e.g. Silver Hunter, Dark Avenger, Oracle Elder, etc and some have not e.g.
						Shooting Star, Moon Lord, Blade Dancer etc. You can check if your character has an innate element attribute by reading the skill description like this below.`
					]
				},
				{
					type: 'image',
					image_url: image25,
					width: 250
				},
				{
					type: 'text',
					content: [
						`If your skills have this included in the description,
						you must use the normal Weapon Dragon Jade and if not, use the Weapon Dragon Jade with added Elemental Attribute, here are examples below.`
					]
				},
				{
					type: 'jsx',
					content: [
						<span className='underline'>Normal</span>
					]
				},
				{
					type: 'image',
					image_url: image26,
					width: 250
				},
				{
					type: 'jsx',
					content: [
						<span className='underliner'>Elemental Attribute Added</span>
					]
				},
				{
					type: 'image',
					image_url: image27,
					width: 250
				},
				{
					type: 'text',
					content: [
						`Also, don't forget to equip the Wuthering Nest Beginner title for added stats!
						You can check this through “Menu” > “Character” > “Title”, tick both boxes and click “Apply”.`,
						`Note: Cover title will be shown beside your character name and the ability title will be applied to your stats accordingly.`
					]
				},
				{
					type: 'image',
					image_url: image28
				},
				{
					type: 'image',
					image_url: image29
				},
				{
					type: 'text',
					content: [
						`And thats it for Starter Items`
					]
				}
			]
		},
	]
	return (
		<Canvas>
			<List items={items} title=''></List>
		</Canvas>
	)
}

export default EarlyProgression