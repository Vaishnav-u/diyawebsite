import React, { useState } from "react";
import diyaLogoBlack from "./assets/diya logo black.png";
import treatmentDeepa from "./assets/treatment deepa mam.jpeg";

const Hero = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <section className="min-h-screen bg-[#F7F5F0] text-[#242321] px-5 sm:px-8 lg:px-12 py-5">

            {/* =========================
                NAVIGATION
            ========================= */}

            <nav className="relative z-50 max-w-[1400px] mx-auto flex items-center justify-between h-16">

                {/* Logo */}
                <a href="#" className="flex items-center">
                    <img
                        src={diyaLogoBlack}
                        alt="Diya Cosmetology"
                        className="h-10 sm:h-12 w-auto object-contain"
                    />
                </a>


                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-9 text-[12px] tracking-wide text-[#55554F]">

                    <a
                        href="#about"
                        className="hover:text-black transition-colors"
                    >
                        About
                    </a>

                    <a
                        href="#treatments"
                        className="hover:text-black transition-colors"
                    >
                        Treatments
                    </a>

                    <a
                        href="#acupuncture"
                        className="hover:text-black transition-colors"
                    >
                        Our Approach
                    </a>

                    <a
                        href="#doctor"
                        className="hover:text-black transition-colors"
                    >
                        Dr. Deepa
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-black transition-colors"
                    >
                        Contact
                    </a>

                </div>


                {/* Desktop CTA */}
                <a
                    href="https://wa.link/7mt525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-3 bg-[#242321] text-white rounded-full px-5 py-3 text-[11px] tracking-wide hover:bg-[#3A3935] transition-all duration-300"
                >
                    Book Consultation

                    <span className="text-sm">
                        ↗
                    </span>
                </a>


                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="
                        md:hidden
                        relative
                        z-[60]
                        w-11
                        h-11
                        rounded-full
                        border
                        border-[#D6D3CB]
                        bg-[#F7F5F0]
                        flex
                        items-center
                        justify-center
                        text-[#242321]
                        hover:bg-[#ECE9E1]
                        transition-colors
                    "
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >

                    {menuOpen ? (
                        <span className="text-xl leading-none">
                            ×
                        </span>
                    ) : (
                        <span className="text-xl leading-none">
                            ☰
                        </span>
                    )}

                </button>

            </nav>


            {/* =========================
                MOBILE MENU
            ========================= */}

            <div
                className={`
                    md:hidden
                    fixed
                    inset-0
                    z-40
                    bg-[#F7F5F0]
                    transition-all
                    duration-300
                    ${menuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                    }
                `}
            >

                <div className="px-6 pt-28 pb-10 h-full flex flex-col justify-between">

                    {/* Navigation links */}
                    <div className="flex flex-col">

                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="py-5 border-b border-[#D9D6CE] font-serif text-4xl"
                        >
                            About
                        </a>

                        <a
                            href="#treatments"
                            onClick={closeMenu}
                            className="py-5 border-b border-[#D9D6CE] font-serif text-4xl"
                        >
                            Treatments
                        </a>

                        <a
                            href="#acupuncture"
                            onClick={closeMenu}
                            className="py-5 border-b border-[#D9D6CE] font-serif text-4xl"
                        >
                            Our Approach
                        </a>

                        <a
                            href="#doctor"
                            onClick={closeMenu}
                            className="py-5 border-b border-[#D9D6CE] font-serif text-4xl"
                        >
                            Dr. Deepa
                        </a>

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="py-5 border-b border-[#D9D6CE] font-serif text-4xl"
                        >
                            Contact
                        </a>

                    </div>


                    {/* Bottom CTA */}
                    <div>

                        <p className="text-xs text-[#77766F] mb-4">
                            Ready to begin your journey?
                        </p>

                        <a
                            href="https://wa.link/7mt525"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="
                                flex
                                items-center
                                justify-between
                                w-full
                                bg-[#242321]
                                text-white
                                rounded-full
                                px-6
                                py-4
                                text-sm
                            "
                        >
                            Book a consultation

                            <span>
                                ↗
                            </span>

                        </a>

                    </div>

                </div>

            </div>


            {/* =========================
                HERO
            ========================= */}

            <div className="max-w-[1400px] mx-auto mt-8 lg:mt-10">

                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-5">


                    {/* LEFT CONTENT */}
                    <div className="bg-[#EFEDE7] rounded-[28px] min-h-[620px] lg:min-h-[calc(100vh-125px)] flex flex-col justify-between p-7 sm:p-10 lg:p-14">

                        {/* Small Label */}
                        <div className="flex items-center gap-3">

                            <span className="w-2 h-2 rounded-full bg-[#9DAA91]" />

                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#686861]">
                                Cosmetic Acupuncture
                            </span>

                        </div>


                        {/* Main Heading */}
                        <div className="my-16 lg:my-0">

                            <p className="text-[11px] uppercase tracking-[0.22em] text-[#77766F] mb-6">
                                DIYA COSMETOLOGY · KERALA, INDIA
                            </p>

                            <h1 className="font-serif text-[clamp(4rem,7vw,7.5rem)] leading-[0.82] tracking-[-0.045em]">

                                Beauty,

                                <br />

                                <span className="italic font-normal">
                                    naturally
                                </span>

                                <br />

                                restored.

                            </h1>

                            <p className="mt-8 max-w-md text-sm sm:text-[15px] leading-7 text-[#66655E]">
                                A holistic approach to skin, hair and wellbeing
                                combining cosmetic acupuncture with a deeper
                                understanding of your body's natural balance.
                            </p>

                        </div>


                        {/* Bottom CTA */}
                        <div className="flex flex-wrap items-center gap-5">

                            <a
                                href="https://wa.link/7mt525"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 bg-[#242321] text-white rounded-full px-6 py-4 text-xs tracking-wide hover:scale-[1.02] transition-transform duration-300"
                            >
                                Book a consultation

                                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                    ↗
                                </span>

                            </a>


                            <a
                                href="#treatments"
                                className="text-xs tracking-wide border-b border-[#8A8982] pb-1 hover:border-black transition-colors"
                            >
                                Explore treatments
                            </a>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="relative min-h-[650px] lg:min-h-[calc(120vh-125px)] rounded-[28px] overflow-hidden bg-[#DAD8D2]">

                        <img
                            src={treatmentDeepa}
                            alt="Cosmetic acupuncture treatment at Diya Cosmetology"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />


                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />


                        {/* Top floating information */}
                        <div className="absolute top-5 left-5 right-5 flex items-start justify-between">

                            <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2.5 text-[10px] tracking-wide">
                                A natural approach to beauty
                            </div>

                            <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm">
                                ↗
                            </div>

                        </div>


                        {/* Bottom information */}
                        <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">

                            <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 max-w-[260px]">

                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#77766F]">
                                    DIYA COSMETOLOGY
                                </p>

                                <p className="mt-1 text-sm leading-5">
                                    Where beauty meets
                                    <br />
                                    balance.
                                </p>

                            </div>


                            <div className="bg-[#B8C1AC] rounded-full px-5 py-3 text-[10px] tracking-wide">
                                Discover your natural glow →
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;