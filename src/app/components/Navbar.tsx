"use client";
import Logo from "../../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Nav() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap");
    });

    return (
        <nav className="navbar navbar-expand-sm bg-white">
            <div className="container-fluid justify-content-center">
                <a className="navbar-brand ms-lg-4 d-flex mx-sm-auto">
                    <Image
                        src={Logo}
                        alt="logo"
                        className="img-fluid rounded"
                        height={50}
                    />
                    <span className="ms-2 fs-3 align-self-center">Brewery</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse mx-auto"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto align-items-center fs-5">
                        <li className="nav-item me-lg-4">
                            <Link
                                href="/"
                                className="nav-link "
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item me-lg-4 bg-dark  ps-3 pe-3">
                            <a className="nav-link text-light">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
