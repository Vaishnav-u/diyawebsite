import React from "react";
import diyaLogoWhite from "./assets/diya logo white.png";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-[#242321] text-[#F7F5F0] px-6 sm:px-10 lg:px-16 py-16"
        >
            <div className="max-w-7xl mx-auto">

                {/* Top */}
                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Logo */}
                    <div>
                        <img
                            src={diyaLogoWhite}
                            alt="Diya Clinic"
                            className="h-12 sm:h-14 w-auto object-contain mb-3"
                        />

                        <p className="text-xs text-[#99978F]">
                            Cosmetic Acupuncture
                        </p>
                    </div>


                    {/* Navigation */}
                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#B0AEA6]">

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

                        <a href="#contact" className="hover:text-white transition">
                            Contact
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
                            Book a consultation with Diya Clinic.
                        </p>

                    </div>


                    <a
                        href="https://wa.me/918408412569"
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
                <div className="border-t border-[#44433E] mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-4">

                    <p className="text-[10px] text-[#68665F]">
                        © {new Date().getFullYear()} Diya Clinic
                    </p>

                    <div className="flex gap-6">

                        <a
                            href="#"
                            className="text-[10px] text-[#68665F] hover:text-white transition"
                        >
                            Instagram
                        </a>

                        <a
                            href="#"
                            className="text-[10px] text-[#68665F] hover:text-white transition"
                        >
                            YouTube
                        </a>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;