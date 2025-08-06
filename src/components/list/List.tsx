import { CircleSmall } from 'lucide-react'
import type { JSX } from 'react'

type TextDescriptionProps = {
    type: 'text',
    content: string[]
}

type ImageDescriptionProps = {
    type: 'image',
    image_url: string,
    width?: number
}

type JsxDescriptionProps = {
    type: 'jsx',
    content: JSX.Element[]
}

type DescriptionsProps = TextDescriptionProps | ImageDescriptionProps | JsxDescriptionProps

export type ItemsProps = {
    title: string,
    description?: DescriptionsProps[],
    image_url?: string
}

const ListItem = ({
	title,
    items
}: {
	title: string
    items: ItemsProps[]
}) => {

    const getDescription = (des: DescriptionsProps, idx: number) => {
        if (des.type === 'text') {
            return des.content.map((dt, key) =>
                <div className='text-gray-500' key={key}>
                    {dt}
                </div>
            )
            
        }
        if (des.type === 'image') {
            return (
                <div className='flex flex-row justify-center w-full'>
                    <img width={des.width ? des.width : 600} src={des.image_url} key={idx} />
                </div>
            )
        }
        if (des.type === 'jsx') {
            return (
                <div className='text-gray-500'>
                    {des.content}
                </div>
            )
        }
    }

    return (
        <div className='w-full'>
            <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
            {items.map((it, key) => (
                <li className='flex items-start gap-4 px-2 py-1 rounded-2xl hover:bg-gray-100 transition w-full cursor-pointer' key={key}>
                    {it.title ? <CircleSmall /> : null}
                    <div className='w-full'>
                        <p>{it.title}</p>
                        {it.description?.length ?
                            <div className='flex flex-col gap-2'>
                                {it.description.map((dt, idx) => getDescription(dt, idx))}
                            </div> :
                            null
                        }
                        {it.image_url ? <img src={it.image_url} /> : null}
                    </div>
                </li>
            ))}
        </div>
    )
}

export default ListItem
