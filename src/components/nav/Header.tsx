import Link from "next/link";

export default function Header() {

    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <Link href="/">
                Home
            </Link>
            <Link href="/about-us">
                About Us
            </Link>
            <Link href="/our-mission">
                Our Mission
            </Link>
            <Link href="/contact-us">
                Contact Us
            </Link>
        </div>
    )
}