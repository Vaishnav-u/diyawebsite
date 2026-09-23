import React from "react";
import diyaLogoWhite from "./assets/diya logo white.png";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-[#242321] text-[#F7F5F0] px-6 sm:px-10 lg:px-16 py-16"
        >
            <div className="max-w-7xl mx-auto">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-12">

                    {/* Logo & Brand */}
                    <div className="max-w-xs">
                        <img
                            src={diyaLogoWhite}
                            alt="Diya Cosmetology"
                            className="h-12 sm:h-14 w-auto object-contain mb-3"
                        />
                        <p className="text-xs text-[#99978F]">
                            Diya Cosmetic Acupuncture
                        </p>
                    </div>

                    {/* Contact Details with Icons */}
                    <div className="flex flex-col gap-6 text-xs text-[#B0AEA6]">

                        {/* Location */}
                        <div className="flex items-start gap-3">
                            <svg
                                className="w-4 h-4 text-[#C2BFB5] mt-0.5 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div>
                                <span className="block text-[10px] uppercase tracking-wider text-[#75736C] font-medium mb-1">
                                    Location
                                </span>
                                <span className="text-[#F7F5F0] text-sm font-light">
                                    Trivandrum, Kerala
                                </span>
                            </div>
                        </div>

                        {/* Phone / WhatsApp */}
                        <a
                            href="https://wa.me/919656263480"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 group transition-colors"
                        >
                            <svg
                                className="w-4 h-4 text-[#C2BFB5] group-hover:text-white mt-0.5 shrink-0 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <div>
                                <span className="block text-[10px] uppercase tracking-wider text-[#75736C] font-medium mb-1">
                                    Phone / WhatsApp
                                </span>
                                <span className="text-[#F7F5F0] text-sm font-light group-hover:underline decoration-[#89877F]">
                                    +91 96562 63480
                                </span>
                            </div>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/diyacosmeticacupuncture/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 group transition-colors"
                        >
                            <svg
                                className="w-4 h-4 text-[#C2BFB5] group-hover:text-white mt-0.5 shrink-0 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            <div>
                                <span className="block text-[10px] uppercase tracking-wider text-[#75736C] font-medium mb-1">
                                    Instagram
                                </span>
                                <span className="text-[#F7F5F0] text-sm font-light group-hover:underline decoration-[#89877F]">
                                    @diyacosmeticacupuncture
                                </span>
                            </div>
                        </a>

                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap lg:flex-col gap-x-8 gap-y-3 text-sm text-[#B0AEA6]">
                        <a href="#about" className="hover:text-white transition">
                            About
                        </a>
                        <a href="#treatments" className="hover:text-white transition">
                            Treatments
                        </a>
                        <a href="#doctor" className="hover:text-white transition">
                            Dr. Deepa
                        </a>
                        <a href="#testimonials" className="hover:text-white transition">
                            Testimonials
                        </a>
                    </div>

                </div>


                {/* CTA */}
                <div className="border-t border-[#44433E] mt-12 pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

                    <div>
                        <p className="font-serif text-3xl sm:text-4xl">
                            Ready to begin?
                        </p>
                        <p className="text-xs text-[#89877F] mt-2">
                            Book a consultation with Dr. Deepa.
                        </p>
                    </div>

                    <a
                        href="https://wa.link/7mt525"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              bg-[#F7F5F0]
              text-[#242321]
              rounded-full
              px-6
              py-3.5
              text-xs
              hover:scale-105
              transition-transform
            "
                    >
                        Book Consultation ↗
                    </a>

                </div>


                {/* Bottom */}
                <div className="border-t border-[#44433E] mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-4 items-center">

                    <p className="text-[10px] text-[#68665F]">
                        © {new Date().getFullYear()} Diya Cosmetology
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.instagram.com/diyacosmeticacupuncture/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[10px] text-[#89877F] hover:text-white transition"
                        >
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            Instagram
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;