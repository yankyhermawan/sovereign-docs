import Canvas from '@/components/canvas/Canvas'
import List, { type ItemsProps } from '@/components/list/List'
import image7 from '@/assets/image-7.png'
import image8 from '@/assets/image-8.png'
import image9 from '@/assets/image-9.png'
import image10 from '@/assets/image-10.png'
import image11 from '@/assets/image-11.png'
import image12 from '@/assets/image-12.png'
import image13 from '@/assets/image-13.png'
import image14 from '@/assets/image-14.png'
import image15 from '@/assets/image-15.png'

const EssentialKnowledge = () => {
	const items: ItemsProps[] = [
		{
			title: '',
			description: [
				{
					type: 'text',
					content: [
						`Before you dive in, understand this vital truth: progression hinges on accumulating points and gold.
						Your main sources for these points are challenging dungeons, nests, and the Erosion Fission Maze (EFM).
						Keep an eye on your point totals by navigating to "Menu" > "Character" > "Points."`
					]
				},
				{
					type: 'image',
					image_url: image7
				},
				{
					type: 'text',
					content: [
						`TIP: Tick the checkbox before the point name so that you can easily see these points in your inventory tab. Maximum of 3 kinds of points can be checked.`
					]
				}
			]
		},
		{
			title: 'Hero\'s Blood, Sweat, and Tear (BST)',
			description: [
				{
					type: 'text',
					content: [
						`These points can be mainly earned by doing Mission Board quests or Lucky Zone dungeons/nests by opening the
						reward boxes or by finishing some quests from the Beginner Guide.`,
						`BST points are crucial for purchasing items like weapon conversion,
						materials for enhancing and evolving armors and guild mission items`,
						`There are 2 kinds of BST Shop, one of which is via Yoshimoto Shizuka NPC > Shop > General > Hero's Blood, Sweat, and Tears.`
					]
				},
				{
					type: 'image',
					image_url: image8
				},
				{
					type: 'text',
					content: [
						`You can also access another BST Shop through Adventurer's Guild Member David > Mission Bulletin Board Store.
						An important item to buy here is the Weapon Conversion via Magical Conversion Key via BST Points. 
						Other items are storage, inventory and dreamy magnifying glass. Just check it out!`
					]
				},
				{
					type: 'image',
					image_url: image9
				}
			]
		},
		{
			title: 'Wuthering Nest Points',
			description: [
				{
					type: 'text',
					content: [
						`Sometimes called Wune points, is a custom point system in Wuthering Nest.
						These points are crucial for early to end-game progression, here you can buy valuable items like lunar jades, heraldries, talisman and many more!`,
						`You can farm these points via completing Mission Board quests, Erosion Fission Maze and gathering from Shiny figurines inside the dungeons.
						The amount given by hunting varies from the labyrinth difficulty of the dungeon you're entering, so the higher lab the more points!`,
						`Access the Wuthering Nest Point shop through Yoshimoto Shizuka NPC > Shop > Points > Wuthering Nest Point.
						I won't include the contents here because there are plenty!! Feel free to browse the shop and read the required points for purchase.`
					]
				},
				{
					type: 'image',
					image_url: image10
				}
			]
		},
		{
			title: 'DNP Point',
			description: [
				{
					type: 'text',
					content: [
						`DNP points or Dragon Nest Points, are points you can use to exchange goods in the Cash Shop (F11) or trading items in the Trading House.
						These points are vital for mid to end-game progression.`,
						`You can earn these points after completing Mission Board quests, Daily World tasks, EFM, Fishing, DNP Showers, Raid Rewards, Event Participation Rewards and even going AFK!!`,
						`The amount of points given from Mission Board quest and EFM varies from your current adventure rank.
						The higher your rank, the more DNP you'll get! Check the Wuthering Adventure System section for more info.`,
						`To convert DNP points into actual DNP Cash is to go to Yoshimoto Shizuka NPC > Shop > General > DNP Exchanger.
						These coupons will be placed in your Cash > Misc tab, just right click on it to charge it to your Cash Shop.`
					]
				},
				{
					type: 'image',
					image_url: image11
				},
				{
					type: 'image',
					image_url: image12
				},
				{
					type: 'image',
					image_url: image13
				},
				{
					type: 'text',
					content: [
						`You can buy almost all of the items in the Cash Shop except for Costume Requests, CC Costumes, Wuthering Packages, etc.
						You can definitely check if you can buy the item via DNP`
					]
				}
			]
		},
		{
			title: 'Gold',
			description: [
				{
					type: 'text',
					content: [
						`Gold is used on almost everything in this server, the question is, where to easily farm this?
						None other than Erosion Fission Maze! The gold you'll get from completing Mission board quests and EFM may vary from the labyrinth difficulty you are entering,
						so the higher the labyrinth, the more gold you'll get!`,
						`You can also get Shiny Hero Coin from completing World Weekly Tasks or opening reward boxes in Ark of Transcendence,
						just sell this to any Merchant NPC in town and you'll get the gold.`
					]
				},
				{
					type: 'image',
					image_url: image14
				},
				{
					type: 'text',
					content: [
						`TIP: If you're a newbie and badly need gold for enhancing, better join guilds and ask your guildmates to carry you or join EFM runs!`,
						`TIP: When running EFM, make sure you have an Abundance Talisman equipped so that you can earn more gold! You can get the Abundance Talisman through Yoshimoto Shizuka NPC > Shop > General.
						First get the Matador Rose then get the Talisman Pouch (Abundance) and open it.
						Make sure to equip it on the 200% talisman slot. You can only buy the pouch 2x/week, so make sure to farm EFM and make the most of it!`
					]
				},
				{
					type: 'image',
					image_url: image15
				}
			]
		}
	]
	return (
		<Canvas>
			<List items={items} title='Essential Knowledge'/>
		</Canvas>
	)
}

export default EssentialKnowledge