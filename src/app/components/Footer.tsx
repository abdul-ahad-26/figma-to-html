import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer>
                <div className="icons">
                    <Link href="https://www.facebook.com/"><i className="bi bi-facebook"></i></Link>
                    <Link href="https://www.instagram.com/"><i className="bi bi-instagram"></i></Link>
                    <Link href="https://www.x.com/"><i className="bi bi-twitter"></i></Link>
                    <Link href="https://www.linkedin.com/"><i className="bi bi-linkedin"></i></Link>
                </div>
                <p className="text">Copyright ©2020 All rights reserved</p>
            </footer>
        </>
    );
}
