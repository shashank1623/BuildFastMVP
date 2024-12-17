"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[410px]"> {/* Increased min-h for footer */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-2">
                    <Link href="/" className="text-2xl font-bold flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 3738 3236">
                            <path fill="#fff" fillRule="evenodd"
                                d="M2530.44 1145.64 1869 0 475.379 2413.82c131.695 51.95 260.914 81.02 384.699 81.61 245.352 1.17 513.692-109.55 774.302-492.04 271.17-397.97 579.18-672.62 896.06-857.75Zm235.57 408.02c-260.46 152.82-514.92 381.09-742.39 714.95-331.66 486.76-735.71 699.86-1165.784 697.82-214.975-1.03-423.92-55.96-619.932-141.29L.982 3235.5H3737.02l-971.01-1681.84Z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="ml-2">BuldFast</span>
                    </Link>
                    <p className="mt-2 text-sm text-gray-400">
                        © {new Date().getFullYear()} Build Fast. All rights reserved.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Pages</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/products"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/solutions"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Solutions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pricing"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Socials</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors flex items-center"
                            >
                                <Facebook className="w-4 h-4 mr-2" /> Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/the_ghost1623/"
                                className="text-gray-400 hover:text-white transition-colors flex items-center"
                            >
                                <Instagram className="w-4 h-4 mr-2" /> Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/theghost1623"
                                className="text-gray-400 hover:text-white transition-colors flex items-center"
                            >
                                <Twitter className="w-4 h-4 mr-2" /> Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/shashank-bhardwaj-1a92b9213/"
                                className="text-gray-400 hover:text-white transition-colors flex items-center"
                            >
                                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/privacy-policy"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms-of-service"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cookie-policy"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Cookie Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Less visible large background text */}
            <p className="absolute bottom-0 left-0 right-0 text-center mt-10 text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[11rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-neutral-300 dark:to-neutral-700 inset-x-0 opacity-20 sm:mt-12 md:mt-16">
                BuildFast
            </p>
        </footer>
    );
}
