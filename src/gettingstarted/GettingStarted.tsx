import Canvas from '@/components/canvas/Canvas'
import List, { type ItemsProps } from '@/components/list/List'
import image from '../assets/image.png'
import image1 from '../assets/image-1.png'
import image2 from '../assets/image-2.png'
import image3 from '../assets/image-3.png'
import image4 from '../assets/image-4.png'
import image5 from '../assets/image-5.png'
import image6 from '../assets/image-6.png'

const GettingStarted = () => {
    const items: ItemsProps[] = [
        {
            title: 'Account Creation',
            description: [
                {
                    type: 'text',
                    content:[
                        `To sign up for a Wuthering Nest account and get a bonus, 
                        simply visit https://wutheringnest.com/auth/register
                        fill out the registration form, 
                        and make sure to enter the referral code car66355 in the "Referrals Code" field to receive a 10% bonus on your top-ups.`
                    ]
                }
            ]
        },
        {
            title: 'Download The Game',
            description: [
                {
                    type: 'text',
                    content: [
                        `To download and access the game,
                        head over to https://wutheringnest.com/download to get the game client.
                        After you've downloaded and extracted the game files, remember that the password for extraction is @123123.`,
                        `If you encounter any issues with downloading, extracting, patching, or starting the game,
                        please visit the official Wuthering Nest Discord server for assistance: https://discord.gg/8uNJTbft.`
                    ]
                }
            ]
        },
        {
            title: 'Character Creation',
            description: [
                {
                    type: 'text',
                    content: [
                        `After downloading and installing, you'll reach the character creation screen, where you can choose from various unique classes like
                        Warrior, Archer, Sorceress, Cleric, Academic, Kali, Lancea, Assassin, Machina, or Vandar and then customize your appearance before diving into the world of Wuthering Nest.`
                    ]
                },
                {
                    type: 'image',
                    image_url: image
                },
                {
                    type: 'text',
                    content: [
                        `Important note: If you want to create special classes like Dark Avenger, Silver Hunter, Black Mara, Arch Heretic, Ray Mechanic, Oracle Elder, Vena Plaga,
                        Bleed Phantom or Beastia Reina, you have to select the base class first not the specialized class in character creation,
                        then go to Alfheim -> Yoshimoto Shizuka NPC and choose the specialization you desire.`
                    ]
                },
                {
                    type: 'image',
                    image_url: image1
                },
                {
                    type: 'text',
                    content: [
                        `After finishing the prologue, you will be redirected to Alfheim to start your journey. 
                        Go to Yoshimoto Shizuka NPC to get your specialization, awakening, hero skill and unlock labyrinth. 
                        Shizuka is placed on different points in the map, here's the map below for your info. Just click on the icon and you will be teleported to the desired destination/npc.`
                    ]
                },
                {
                    type: 'image',
                    image_url: image2
                },
                {
                    type: 'image',
                    image_url: image3
                },
                {
                    type: 'text',
                    content: [
                        `After you'll get your specialization, awakening, hero skill, and unlock labyrinth, you are now ready for the next steps.
                        Also make sure to get your skills by pressing “K” on the keyboard. `
                    ]
                },
                {
                    type: 'image',
                    image_url: image4
                },
                {
                    type: 'text',
                    content: [
                        `If you are confused or not sure on what skills to get, you can definitely follow other users skill build, you can check them in the STG Ranking Board by going to the “Menu” > “Ranking”. 
                        For more class mastery and skill rotations, you can search youtube videos for it, or better, read the skill descriptions! hahaha`,
                        'Select the class/user you want to copy.',
                        'Click “Inspect”',
                        'Click “Skill”'
                    ]
                },
                {
                    type: 'image',
                    image_url: image5
                },
                {
                    type: 'text',
                    content: [
                        `By then you can increase or decrease the points based on other user's skill build. The one on the blue is your skill points.`
                    ]
                },
                {
                    type: 'image',
                    image_url: image6
                }
            ]
        }
    ]

    return (
        <Canvas>
            <List items={items} title='Getting Started' />
        </Canvas>
    )
}

export default GettingStarted