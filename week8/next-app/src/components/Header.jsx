import Link from "next/link";
import headerStyles from "./header.module.css";

function Header() {

    return (
        <>
            <header className={headerStyles.header}>
            {/* <header className="header"> */}
                <nav>
                    <Link className="header-link" href="/" title="home page">Home</Link>&nbsp;|&nbsp;
                    <Link href="/about" title="about page">About</Link>&nbsp;|&nbsp;
                    <Link href="/posts/1">Post 1</Link>&nbsp;|&nbsp;
                    <Link href="/posts/2">Post 2</Link>&nbsp;|&nbsp;
                    <Link href="/posts/3">Post 3</Link>
                    <a href="#" className="m-1.25 bg-sky-400 p-5 hover:bg-amber-400">about</a>
                </nav>
            </header>
        </>
    )
}

export default Header