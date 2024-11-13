import Link from "next/link";
import {Inter} from "next/font/google";

type FontType = ReturnType<typeof Inter>;

export default function Header(data: {font: FontType}) {
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
