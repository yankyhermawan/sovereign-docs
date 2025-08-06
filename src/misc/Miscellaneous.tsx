import Canvas from '@/components/canvas/Canvas'
import List, { type ItemsProps } from '@/components/list/List'
import image43 from '@/assets/image-43.png'
import image44 from '@/assets/image-44.png'
import image45 from '@/assets/image-45.png'
import image46 from '@/assets/image-46.png'
import image47 from '@/assets/image-47.png'
import image48 from '@/assets/image-48.png'
import image49 from '@/assets/image-49.png'
import image50 from '@/assets/image-50.png'
import image51 from '@/assets/image-51.png'
import image52 from '@/assets/image-52.png'
import image53 from '@/assets/image-53.png'
import image54 from '@/assets/image-54.png'
import image55 from '@/assets/image-55.png'
import image56 from '@/assets/image-56.png'
import image57 from '@/assets/image-57.png'
import image58 from '@/assets/image-58.png'
import image59 from '@/assets/image-59.png'
import image60 from '@/assets/image-60.png'
import image61 from '@/assets/image-61.png'
import image62 from '@/assets/image-62.png'
import image63 from '@/assets/image-63.png'
import image64 from '@/assets/image-64.png'
import image65 from '@/assets/image-65.png'
import image66 from '@/assets/image-66.png'
import image67 from '@/assets/image-67.png'
import image68 from '@/assets/image-68.png'
import image69 from '@/assets/image-69.png'
import image70 from '@/assets/image-70.png'
import image71 from '@/assets/image-71.png'
import image72 from '@/assets/image-72.png'

const Miscellaneous = () => {
	const items: ItemsProps[] = [
		{
			title: 'Buffs',
			description: [
				{
					type: 'text',
					content: [
						`Alright, adventurer! To truly dominate Verathea, you'll need to master buffs.
						These fantastic temporary boosts, from grand World Buffs to your gear's Item Buffs, delicious Food Buffs, and unique Special Buffs, are your key to conquering any challenge!`,
						`Note: Some of these buffs only work on dungeons, nests and EFM. You can just check your status bar and see what buffs are currently active`
					]
				}
			]
		},
		{
			title: 'Guild Buffs',
			description: [
				{
					type: 'jsx',
					content: [
						<span>
							Guild buffs provide an ample amount of stats and attributes that are vital for farming.
							So make sure to join a guild, better if you join max level guilds so that you can get maximum buffs.
							Also, you can find friends to aid you in your journey. Join us in Sovereign! Just apply to the guild or visit our discord server &nbsp;
							<a className='underline' href='https://discord.gg/4CcaUejA' target='_blank'>here</a>!
						</span>
					]
				},
				{
					type: 'text',
					content: [
						`Here below are the buffs provided by the guild.`
					]
				},
				{
					type: 'image',
					image_url: image43,
					width: 200
				},
				{
					type: 'image',
					image_url: image44,
					width: 200
				},
				{
					type: 'image',
					image_url: image45,
					width: 200,
				},
				{
					type: 'image',
					image_url: image46,
					width: 200
				}
			]
		},
		{
			title: 'World Buffs',
			description: [
				{
					type: 'text',
					content: [
						`World buffs consist of power-ups that can be shared all throughout Alfheim. Here are the names, variety and stats.`,
						`Important Note: The drop rate buffs stack with your Adventure or Beginning Talisman!! So farm as much as you can!!`
					]
				},

			]
		},
		{
			title: '5-Flavor Buffs',
			description: [
				{
					type: 'jsx',
					content: [
						<span>
							These buffs can be buffed by everyone via the <a className='underline' href='https://reference.wutheringnest.com/items/26621450' target='_blank'>Blessing Bell</a>. 
							The GMs, CM and Community Helpers have a scheduled buff everyday.
							Check the official discord for the buff schedule. 
							<a className='underline' href='https://discord.com/channels/1310318293755629608/1310320565550317740/1395290095443247126' target='_blank'>Discord Buff Schedule</a>
						</span>
					]
				},
				{
					type: 'image',
					image_url: image47,
					width: 400
				},
				{
					type: 'image',
					image_url: image48,
					width: 250
				},
				{
					type: 'image',
					image_url: image49,
					width: 250
				},
				{
					type: 'image',
					image_url: image50,
					width: 250
				},
				{
					type: 'image',
					image_url: image51,
					width: 250
				},
				{
					type: 'image',
					image_url: image52,
					width: 250
				}
			]
		},
		{
			title: 'Special Buff',
			description: [
				{
					type: 'jsx',
					content: [
						<span>
							This special varies from 50% or 100% depending on time, usually on weekdays this buff is 50% and on weekends it's 100%. 
							This can be buffed by GM or by you! You just have to purchase the &nbsp;
							<a className='underline' href='https://reference.wutheringnest.com/items/26621450' target='_blank'>Blessing Bell</a> 
							&nbsp;through Yoshimoto Shizuka NPC &gt; 
							General tab for 500g, this item refreshes every 3 days.
						</span>
					]
				},
				{
					type: 'text',
					content: [
						`To activate the buff yourself, just go to Yoshimoto Shizuka NPC again and choose the World Buff option.`
					]
				},
				{
					type: 'image',
					image_url: image53,
					width: 250
				}
			]
		},
		{
			title: 'Happiness Buff',
			description: [
				{
					type: 'jsx',
					content: [
						<span>
							Happiness buffs are buffs that are given by players who have a <a className='underline' href='https://reference.wutheringnest.com/items/26621401' target='_blank'>World Buff Coupon</a>. 
							You can get this coupon via purchasing any Wuthering Daily Blessing Package (CC) in the Cash Shop (F11). To activate this buff, simply go to Eltia Justitia NPC.
						</span>
					]
				},
				{
					type: 'image',
					image_url: image54,
					width: 400
				},
				{
					type: 'image',
					image_url: image55
				},
				{
					type: 'text',
					content: [
						`Usually, players are kind enough to shout it out in the world that they will be buffing this in town, so don't miss this and make sure to stay in town!`
					]
				},
				{
					type: 'image',
					image_url: image56,
					width: 250
				}
			]
		},
		{
			title: 'Daily SSS Buff',
			description: [
				{
					type: 'jsx',
					content: [
						<span>
							This buff is given by players who reached the peak rank of SSS! 
							They will receive a&nbsp;
							<a className='underline' href='https://reference.wutheringnest.com/items/26621430' target='_blank'>Daily World Buff SSS-Rank</a> coupon and they are generous enough to shout it out to the world if they are buffing this in town, 
							so make sure you don't miss this!
						</span>
					]
				},
				{
					type: 'image',
					image_url: image57,
					width: 250
				}
			]
		},
		{
			title: 'Adventure Rank Buff',
			description: [
				{
					type: 'text',
					content: [
						`These buffs are given to players who have risen to the ranks.
						This is only a 1-time buff for every rank you reach. To activate this buff, make sure you have the
						Emblem of Brave in your inventory and go to any Mission Board NPC > Adventure World Buff > Choose the desired rank buff and voila!.
						Here's the drop rate for each of the rank buffs.`
					]
				},
				{
					type: 'image',
					image_url: image58
				},
				{
					type: 'image',
					image_url: image59
				}
			]
		},
		{
			title: 'Item Buffs',
			description: [
				{
					type: 'text',
					content: [
						`These buffs can be purchased in-game and usually are durational items.`
					]
				}
			]
		},
		{
			title: 'Dene Lifestyle Package',
			description: [
				{
					type: 'jsx',
					content: [
						<span>
							This package can be bought in Cash Shop via DNP or CC. 
							This is only worth 5,000 DNP/CC. 
							This package includes
							<a className='underline' href='https://reference.wutheringnest.com/items/1073932327' target='_blank'> Willpower Stone (30day) Pouch, </a>
							<a className='underline' href='https://reference.wutheringnest.com/items/536886066' target='_blank'> Dragon Girl Jewel Pouch </a>
							and 
							<a className='underline' href='https://reference.wutheringnest.com/items/536876096' target='_blank'> Premium Stone. </a>
							Make sure to open these pouches for you to use the buffs!. You can buy this package 5 times per month.
						</span>
					]
				},
				{
					type: 'image',
					image_url: image60
				},
				{
					type: 'image',
					image_url: image61,
					width: 250
				},
				{
					type: 'text',
					content: [
						`TIP: Make sure to get the Premium Package in the Cash Shop after opening the Dene Lifestyle Package.`
					]
				},
				{
					type: 'image',
					image_url: image62
				},
				{
					type: 'image',
					image_url: image63,
					width: 250
				},
				{
					type: 'image',
					image_url: image64,
					width: 250
				}
			]
		},
		{
			title: 'Althea Goddess\'s Stone',
			description: [
				{
					type: 'jsx',
					content: [
						<span>
							<a className='underline' href='https://reference.wutheringnest.com/items/536875609' target='_blank'>Althea Godess's Stone </a>
							can be purchased via Wuthering Nest Points. Simply go to Yoshimoto Shizuka NPC &gt; Shop &gt; Point &gt; Wuthering Nest Points. This item cost 150 points.
						</span>
					]
				},
				{
					type: 'image',
					image_url: image65,
					width: 250
				},
				{
					type: 'image',
					image_url: image66
				}
			]
		},
		{
			title: 'Raining Blossoms Stone',
			description: [
				{
					type: 'text',
					content: [
						`These stones are normally given through finishing guild conquest, but in this server you can buy these stones in the Wuthering Nest Point shop.
						Simply go to Yoshimoto Shizuka NPC > Shop > Point > Wuthering Nest Point.`,
						`Important Note: Buy only 1 kind in any of these stones because they don't stack with each other!
						If you accidentally buy both, only the stone with the highest given stats will be added.`
					]
				},
				{
					type: 'image',
					image_url: image67
				},
				{
					type: 'jsx',
					content: [
						<span>
							<a className='underline' href='https://reference.wutheringnest.com/items/268488008' target='_blank'>Raining Blossoms Stone: Flowering </a>
							- 200 wune points.
						</span>
					]
				},
				{
					type: 'image',
					image_url: image68,
					width: 250
				},
				{
					type: 'jsx',
					content: [
						<span>
							<a className='underline' href='https://reference.wutheringnest.com/items/268488007' target='_blank'>Raining Blossoms Stone: Full Bloom </a>
							- 500 wune points.
						</span>
					]
				},
				{
					type: 'image',
					image_url: image69,
					width: 250
				},
				{
					type: 'jsx',
					content: [
						<span>
							There’s another type of Raining Blossom Stone which is
							<a className='underline' href='https://reference.wutheringnest.com/items/268488006' target='_blank'> Raining Blossoms Stone: Flurry. </a>
							This is usually given by STG Events as rewards and you cannot buy this anywhere else.
						</span>
					]
				},
				{
					type: 'image',
					image_url: image70,
					width: 250
				}
			]
		},
		{
			title: 'Dimension Rock',
			description: [
				{
					type: 'text',
					content: [
						`These rocks can be purchased through Mission Board NPC > Adventure Shop.`,
						`Important Note: These stone buffs don't stack with each other. So make sure to only buy 1. Only the highest stat buff will be applied. `
					]
				},
				{
					type: 'image',
					image_url: image71
				},
				{
					type: 'image',
					image_url: image72,
					width: 250
				}
			]
		},
		{
			title: 'Food Buff',
			description: [
				{
					type: 'text',
					content: [
						`There are many food buffs in this game but these 4 are the most prominent ones and can easily procure.
						You can buy these buffs via Guild Coins and you can earn guild coins for completing guild mission quests.`
					]
				},
				{
					type: 'jsx',
					content: [
						<span>
							<a className='underline' href='https://reference.wutheringnest.com/items/268495254' target='_blank'>Reliable Castella</a>
						</span>
					]
				},
				{
					type: 'jsx',
					content: [
						<span>
							<a className='underline' href='https://reference.wutheringnest.com/items/536882755' target='_blank'>Reliable Attack Elixir</a>
						</span>
					]
				},
				{
					type: 'jsx',
					content: [
						<span>
							<a className='underline' href='https://reference.wutheringnest.com/items/268488298' target='_blank'>Dragon Fire Flambe Cake</a>
						</span>
					]
				},
				{
					type: 'jsx',
					content: [
						<span>
							<a className='underline' href='https://reference.wutheringnest.com/items/536884677' target='_blank'>High Grade Alliance Attack Elixir</a>
						</span>
					]
				}
			]
		}
	]
	return (
		<Canvas>
			<List items={items} title='Miscellaneous' />
		</Canvas>
	)
}

export default Miscellaneous