import { StaticImageData } from "next/image"
import Image from 'next/image'
import Card from '@/components/card'

export default function FeaturesCard({
    children,
    title,
    image,
}: {
    children: React.ReactNode,
    title: string,
    image: string | StaticImageData,
}) {
    return (
        <Card>
            <div className="m-2 -mr-4">
                <h4 className="text-xl font-bold my-2 text-highlight">{title}</h4>
                <p className="text-sm text-highlight">{children}</p>
            </div>
            <Image src={image} alt="" className="shrink-0 basis-[180-px]"/>
        </Card>
    )
}