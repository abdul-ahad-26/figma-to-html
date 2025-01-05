import Link from "next/link";

interface HeaderProps{
  font : {className :string};
}

export default function Header(data:HeaderProps) {
  return (
    <>
      <header>
        <nav className = {`${data.font.className}`}>
          <ul className="links">
            <li className="link"><Link href="/works">Works</Link></li>
            <li className="link"><Link href="/blog">Blog</Link></li>
            <li className="link"><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
