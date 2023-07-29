import Link from 'next/link'

export default function Body() {
    return (
    <main className='h-screen '>
        <div className='pt-12.5  bg-black justify-center items-center relative flex pt-20 '>
            <h1 className="font-bold text-white text-4xl hover:text-orange-500 ">
                Website is Currently Under Construction
            </h1>  
        </div>
        <div className="pt-12.5 relative bg-black justify-center items-center relative flex pt-20 " >
            <h2 className="font-bold text-white text-4xl ">
                <Link href="/remin">Visit Remin</Link>
            </h2>
        </div>
    </main>
    )
}