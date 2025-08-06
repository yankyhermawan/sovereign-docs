import Canvas from '@/components/canvas/Canvas'
import List, { type ItemsProps } from '@/components/list/List'
import image30 from '@/assets/image-30.png'
import image31 from '@/assets/image-31.png'
import image32 from '@/assets/image-32.png'
import image33 from '@/assets/image-33.png'
import image34 from '@/assets/image-34.png'
import image35 from '@/assets/image-35.png'
import image36 from '@/assets/image-36.png'
import image37 from '@/assets/image-37.png'
import image38 from '@/assets/image-38.png'

const AdvanceSystem = () => {
	const items: ItemsProps[] = [
		{
			title: '',
			description: [
				{
					type: 'text',
					content: [
						`Ready to prove your mettle, adventurer? The Wuthering Adventure System is your ultimate challenge in Verathea!
						This universal ranking system pushes every player to conquer quest after quest, tallying your triumphs to propel you up the ranks.
						The more Quest Board Missions you master, the higher you climb, unlocking dazzling benefits and proving your legendary status.`
					]
				}
			]
		},
		{
			title: 'Feat Progress and Mission Board',
			description: [
				{
					type: 'text',
					content: [
						`You can check your adventure rank progression by going to the “Menu” > “Achievement” > “Feat” or by simply pressing L on your keyboard. `
					]
				},
				{
					type: 'image',
					image_url: image30
				},
				{
					type: 'text',
					content: [`You can also check your current mission board quest in the same display.`]
				},
				{
					type: 'image',
					image_url: image31
				},
				{
					type: 'text',
					content: [`You can also check your current mission board quest in the same display.`]
				},
				{
					type: 'image',
					image_url: image32
				},
				{
					type: 'text',
					content: [
						`Once you finish all your quests, you can refresh the list by going to any Mission Board NPC in the map and click “Receive Reward”.
						Here's the NPC Locations for your information.`
					]
				},
				{
					type: 'image',
					image_url: image33
				},
				{
					type: 'image',
					image_url: image34
				},
			]
		},
		{
			title: 'Adventure License',
			description: [
				{
					type: 'text',
					content: [
						`This item will serve as the basis of rewards you get in every mission you complete.`,
						`Adventure Rank starts from E to SSS. You can read the description of each license by clicking the links below.
						Each license has a minimum labyrinth difficulty for entering dungeons, nests and EFM, read it carefully so that you won’t miss the rewards`
					]
				},
				{
					type: 'jsx',
					content: [
						<a className='underline' href='https://reference.wutheringnest.com/items/26621370' target='_blank'>Adventure License E-Rank</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26621371' target='_blank'>Adventure License D-Rank</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26621372' target='_blank'>Adventure License C-Rank</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26621373' target='_blank'>Adventure License B-Rank</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26621374' target='_blank'>Adventure License A-Rank</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26621375' target='_blank'>Adventure License S-Rank</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26621376' target='_blank'>Adventure License SS-Rank</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26621377' target='_blank'>Adventure License SSS-Rank</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26621533' target='_blank'>Adventure License Ascension-Rank</a>,
					]
				},
				{
					type: 'text',
					content: [
						`Once you achieve a certain rank, you will get the new license via mail and a talisman converter to upgrade your adventure talisman to a higher rank.
						After that proceed to any Mission Board NPC and get the rank reward pouch in exchange to your previous rank license.`
					]
				},
				{
					type: 'image',
					image_url: image35
				},
				{
					type: 'text',
					content: [
						`TIP: Make sure to relogin or go to character selection(cc), to refresh your rank and get the right rewards based on your current rank.
						You can confirm this when you go to town after cc, and the correct rank shows up above your head.`
					]
				},
				{
					type: 'text',
					content: [`Here's the reward pouch for each of the ranks.`]
				},
				{
					type: 'jsx',
					content: [
						<a className='underline' href='https://reference.wutheringnest.com/items/26600280' target='_blank'>D-Rank Adventure Reward Pouch</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26600281' target='_blank'>C-Rank Adventure Reward Pouch</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26600282' target='_blank'>B-Rank Adventure Reward Pouch</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26600283' target='_blank'>A-Rank Adventure Reward Pouch</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26600284' target='_blank'>S-Rank Adventure Reward Pouch</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26600285' target='_blank'>SS-Rank Adventure Reward Pouch</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26600286' target='_blank'>SSS-Rank Adventure Reward Pouch</a>,
						<a className='underline' href='https://reference.wutheringnest.com/items/26600287' target='_blank'>Ascension-Rank Adventure Reward Pouch</a>
					]
				},
				{
					type: 'text',
					content: [
						`TIP: Equip your rank title for better stats!`
					]
				}
			]
		},
		{
			title: 'Adventure Shop',
			description: [
				{
					type: 'text',
					content: [
						`The Adventure Shop is calling, and Adventure Coins are your ticket!
						Earn them effortlessly by clearing missions from the Mission Board - one coin per successful mission. Get ready to power up!`,
						`You can check the shop by going to any Mission Board NPC > Adventure Shop.
						These items will help you progress and get stronger, enhance items, gears and buffs!`
					]
				},
				{
					type: 'image',
					image_url: image36
				}
			]
		},
		{
			title: 'Dragon Nest Newbie Mission',
			description: [
				{
					type: 'text',
					content: [
						`These are the activities that you need to do to complete your Newbie, Novice and Veteran Mission, but for this guide and for the sake of simplicity, you just need to follow the “Dragon Nest Newbie” guide.`
					]
				},
				{
					type: 'image',
					image_url: image37
				},
				{
					type: 'text',
					content: [
						`For the “Guide Articles” mission, you just have to type in /guide in the chat box and the keyword for the article is ”Im already read this articles”`,
						`For the “Newbies Packages” mission, you just have to type “Fierce Hound Pet” in the chat box.`,
						`To complete the Dragon Nest Newbie mission, it's not necessary to finish all the quests inside, you just have to make sure to finish the last mission highlighted in yellow.
						The other quests will be automatically completed as you get your specialization through Shizuka and doing Mission Board quests.`
					]
				},
				{
					type: 'image',
					image_url: image38
				}
			]
		},
		{
			title: 'Final Thoughts',
			description: [
				{
					type: 'text',
					content: [
						`Focus more on doing Mission Board quests until you reach Adventure Rank C, because that's the rank where you can earn DNP in going EFM.`,
						`Join a Guild and make new friends! They might help you on going to EFM along with some perks and help you progress. Don't be afraid to ask questions or help`
					]
				}
			]
		}
	]
	return (
		<Canvas>
			<List items={items} title='Wuthering Adventure System' />
		</Canvas>
	)
}

export default AdvanceSystem