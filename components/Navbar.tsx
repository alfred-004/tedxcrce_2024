import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-2 z-50 w-[80%] transition-transform duration-300 bg-black-200 bg-opacity-100 mx-4 rounded-2xl ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="max-w-7xl px-4 py-4 sm:py-2 flex justify-between items-center">
                {/* Logo */}
                <a href="#">
                    <img
                        className="w-auto h-6 sm:h-10"
                        src="/tedxcrcelogo.png"
                        alt="Logo"
                    />
                </a>

                {/* Nav Links */}
                <div
                    className={`absolute inset-x-0 top-full z-20 w-full px-6 py-4 rounded-2xl bg-black-200 bg-opacity-90 transition-transform duration-300 ease-in-out md:relative md:top-0 md:bg-transparent md:w-auto md:translate-x-0 md:flex md:items-center ${
                        isOpen ? 'block' : 'hidden'
                    }`}
                >
                    <div className="flex flex-col md:flex-row justify-center md:mx-6">
                        <a
                            className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-orange-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Home
                        </a>
                        <a
                            className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-orange-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Speakers
                        </a>
                        <a
                            className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-orange-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Talks
                        </a>
                        <a
                            className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-orange-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Partners
                        </a>
                    </div>

                    {/* Register Button inside the mobile menu */}
                    <div className="flex justify-center mt-4 md:hidden">
                        <a
                            href="#"
                            className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                        >
                            Register
                        </a>
                    </div>
                </div>

                {/* Register Button for Desktop */}
                <div className="hidden md:block">
                    <a
                        href="#"
                        className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                    >
                        Register
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                        aria-label="toggle menu"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 8h16M4 16h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
