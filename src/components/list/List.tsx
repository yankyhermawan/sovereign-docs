import { CircleSmall } from 'lucide-react'

type TextDescriptionProps = {
    type: 'text',
    content: string[]
}

type ImageDescriptionProps = {
    type: 'image',
    image_url: string
}

type DescriptionsProps = TextDescriptionProps | ImageDescriptionProps

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
                <div className='text-sm text-gray-500' key={key}>
                    {dt}
                </div>
            )
            
        }
        if (des.type === 'image') {
            return (
                <div className='flex flex-row justify-center'>
                    <img width={800} src={des.image_url} key={idx} />
                </div>
            )
        }
    }

    return (
        <div>
            <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
            {items.map((it, key) => (
                <li className='flex items-start gap-4 px-2 py-1 rounded-2xl hover:bg-gray-100 transition w-fit cursor-pointer' key={key}>
                    <CircleSmall />
                    <div>
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
