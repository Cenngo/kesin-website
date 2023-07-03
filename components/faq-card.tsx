export default function FaqCard({
    children,
    title,
}: {
    children: React.ReactNode,
    title: string
}) {
    return (
        <details className="group shadow-lg border border-white rounded-4xl p-5 mx-10 mb-3 rounded-3xl">
            <summary className="list-none flex justify-between cursor-pointer hover:text-slate-700 font-bold text-lg">
                <span className="mt-1 border-primary-dark">{title}</span>
                <div className="flex flex-col justify-center ">
                    <span className="rounded-full border-primary-dark p-1 group-open:-rotate-180 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </div>
            </summary>
            <div className="border-t border-white text-sm mt-2">
                <p>{children}</p>
            </div>
        </details>
    )
}