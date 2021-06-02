import Link from "next/link"
import Image from "next/image"

export default function FirstPost() {
    return <h1>First post

        <Image src="/vercel.svg" width={200} height={"auto"}/>
        <Link href="/">Home</Link>
    </h1>
}
