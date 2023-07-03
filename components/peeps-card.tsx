import { StaticImageData } from "next/image"
import Image from 'next/image'
import Card from "./card"

export default function PeepsCard({
    children,
    title,
    image
}: {
    children: React.ReactNode,
    title: string,
    image: StaticImageData
}) {
    return (
        <Card>
            <Image src={image} alt="" className="basis-1/2 flex-none self-end"/>
            <div className="m-2 -ml-8">
                <h6 className="text-2xl font-bold mb-2 text-highlight">{title}</h6>
                <p className="text-xs text-highlight">{children}</p>
            </div>
        </Card>
    )
}