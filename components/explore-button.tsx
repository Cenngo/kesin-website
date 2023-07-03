import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"

export default function ExploreButton({
    children,
    href,
    className
}: {
    children: React.ReactNode,
    href: Url,
    className?: string
}) {
    return (
        <Link href={href} className={className}>
            <div className="bg-secondary px-12 py-3 rounded-full inline-flex group hover-shadow relative overflow-hidden">
                <span className="group-hover:text-secondary transition z-10">{children}</span>
                <span className="inline self-center ml-2 transition group-hover:translate-x-2 group-hover:text-secondary z-10">-&#62;</span>
                <div className="absolute skew-x-6 left-0 inset-y-0 bg-white scale-x-0 group-hover:scale-x-100 w-full h-full transition"></div>
            </div>
        </Link>
    )
}