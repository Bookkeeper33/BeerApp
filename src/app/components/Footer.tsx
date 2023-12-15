import Link from "next/link";

export default function Footer() {
    return (
        <footer className="d-flex justify-content-between align-items-center flex-wrap bg-dark mt-5">
            <div className="p-3 mx-auto">
                <h2 className="text-white fs-3">Brewery app</h2>
            </div>
            <nav className="navbar p-3 mx-auto fs-5">
                <ul className="nav align-items-center justify-content-center">
                    <li className="nav-item me-lg-4 ">
                        <Link
                            href={"/"}
                            className="nav-link text-white"
                            aria-current="page"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item me-lg-4 ">
                        <Link href="/contact" className="nav-link text-white">
                            Contact us
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
