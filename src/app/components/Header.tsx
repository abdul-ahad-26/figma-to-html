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
            <li className="link"><Link href="">Works</Link></li>
            <li className="link"><Link href="">Blog</Link></li>
            <li className="link"><Link href="">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
