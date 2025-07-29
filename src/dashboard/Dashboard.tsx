import List from '@/components/list/List'
import Canvas from '@/components/canvas/Canvas'

const Dashboard = () => {
	const items = [
        { title: '64-Bit DX9/DX11' },
        { title: 'Instant Level 99' },
        { title: 'Auto Hero Skill' },
        { title: 'Auto Awakening' },
        { title: 'Auto Labyrinth Unlock' },
        { title: 'Dragon Jade System (Dreamy, Blood Moon, Verdure, Dimensional)' },
        { title: 'Rune System' },
        { title: 'Lunar Jade System' },
        { title: 'Frozen Jade System' },
        { title: 'Brooch System' },
        { title: 'Lucky Zone' },
        { title: 'DNP System' },
        { title: 'Follows Latest Official Korea Patch' },
        { title: 'Raids (BDN, Bone, Rune and many more will be added soon!!)' },
        { title: 'Mission Board Quests 🔥🔥' },
        { title: 'Adventure Rank System 🔥🔥' },
        { title: 'Nest Feat Titles 🔥🔥' },
        { title: 'Special World Buffs 🔥🔥' },
        { title: 'VERY F2P FRIENDLY!!! 🔥🔥🔥🔥🔥🔥🔥' },
        { title: 'LVL 100 unlock (SOON) 🙌' },
        { title: 'Otherwordly Dragon Jade (SOON) ❇️❇️' },
        { title: 'New Stage (Sandhill Breakwater) (SOON)' },
        { title: 'Collapse Dragon Jade (SOON)' },
    ]

	return (
        <Canvas>
            <div className="flex flex-col gap-4">
                <span className="text-4xl text-center">
                    Ultimate Guide for Wuthering Nest
                </span>
                <span className="text-center">
                    Welcome, new Dragon Nest adventurer! This guide will take you
                    from character creation to acquiring end-game gear. Prepare for
                    epic dungeons, bosses, and a vibrant community. Let's make you a
                    hero!
                </span>
                <List items={items} title="Server Information" />
            </div>
        </Canvas>
	)
}

export default Dashboard
