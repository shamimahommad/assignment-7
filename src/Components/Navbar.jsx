import Container from "./Container";


const Navbar = () => {
    return (
        <div className="shadow">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    ></path>
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <a>Home</a>
                                </li>
                                <li>
                                    <a>FAQ</a>
                                </li>
                                <li>
                                    <a>Changelog</a>
                                </li>
                                <li>
                                    <a>Blog</a>
                                </li>
                                <li>
                                    <a>Download</a>
                                </li>
                                <li>
                                    <a>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <h1 className="text-2xl font-bold hidden sm:block">CS — Ticket System</h1>
                        <h1 className="text-2xl font-bold md:hidden">CS —</h1>
                    </div>

                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>FAQ</a>
                            </li>
                            <li>
                                <a>Changelog</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Download</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                        <a className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white">
                            + New Ticket
                        </a>
                    </div>

                    <div className="md:hidden navbar-end">
                        <a className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white">
                            + New Ticket
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;