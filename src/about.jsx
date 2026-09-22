import React from "react";
import treatment1 from "./assets/treatment 1.jpeg";

const AboutClinic = () => {
    return (
        <section
            id="about"
            className="bg-[#F7F5F0] text-[#242321] px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40"
        >
            <div className="max-w-[1400px] mx-auto">

                {/* --------------------------------
            TOP LABEL
        -------------------------------- */}
                <div className="flex items-center justify-between mb-16">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#9DAA91]" />

                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#77766F]">
                            About Diya Clinic
                        </span>
                    </div>

                    <span className="hidden sm:block text-[10px] tracking-[0.2em] text-[#AAA8A0]">
                        01 / 05
                    </span>
                </div>


                {/* --------------------------------
            INTRO
        -------------------------------- */}
                <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-24">

                    {/* Small side text */}
                    <div className="lg:pt-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#8A8982] leading-6 max-w-[220px]">
                            A different perspective
                            <br />
                            on beauty & wellbeing.
                        </p>
                    </div>


                    {/* Main statement */}
                    <div>
                        <h2 className="font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.04em]">
                            Beauty is more
                            <br />
                            than what
                            <br />
                            <span className="italic">meets the eye.</span>
                        </h2>

                        <div className="mt-10 max-w-2xl">
                            <p className="text-[15px] sm:text-base leading-8 text-[#66655E]">
                                At Diya Clinic, we believe that beauty and wellbeing are
                                deeply connected. Our approach combines cosmetic acupuncture
                                with a holistic understanding of the body to address your
                                individual concerns naturally.
                            </p>
                        </div>
                    </div>

                </div>


                {/* --------------------------------
            DIVIDER
        -------------------------------- */}
                <div className="w-full h-px bg-[#D9D6CE] my-20 lg:my-28" />


                {/* --------------------------------
            THREE PRINCIPLES
        -------------------------------- */}
                <div className="grid md:grid-cols-3 gap-0 border-t border-[#D9D6CE]">

                    {/* 01 */}
                    <div className="py-10 md:pr-12 md:border-r border-[#D9D6CE]">
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-[11px] text-[#9A988F]">
                                01
                            </span>

                            <span className="text-[10px] uppercase tracking-[0.18em] text-[#9A988F]">
                                Philosophy
                            </span>
                        </div>

                        <h3 className="font-serif text-4xl sm:text-5xl tracking-[-0.03em]">
                            Balance
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-[#6B6962] max-w-sm">
                            Supporting the body's natural balance while understanding
                            the individual needs behind every concern.
                        </p>
                    </div>


                    {/* 02 */}
                    <div className="py-10 md:px-12 md:border-r border-[#D9D6CE]">
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-[11px] text-[#9A988F]">
                                02
                            </span>

                            <span className="text-[10px] uppercase tracking-[0.18em] text-[#9A988F]">
                                Philosophy
                            </span>
                        </div>

                        <h3 className="font-serif text-4xl sm:text-5xl tracking-[-0.03em]">
                            Naturally
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-[#6B6962] max-w-sm">
                            A treatment philosophy focused on working with the body's
                            natural processes rather than simply treating the surface.
                        </p>
                    </div>


                    {/* 03 */}
                    <div className="py-10 md:pl-12">
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-[11px] text-[#9A988F]">
                                03
                            </span>

                            <span className="text-[10px] uppercase tracking-[0.18em] text-[#9A988F]">
                                Philosophy
                            </span>
                        </div>

                        <h3 className="font-serif text-4xl sm:text-5xl tracking-[-0.03em]">
                            Personal
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-[#6B6962] max-w-sm">
                            Every person is different. Your concerns, goals and treatment
                            journey deserve an approach that is personal to you.
                        </p>
                    </div>

                </div>


                {/* --------------------------------
            IMAGE + TEXT
        -------------------------------- */}
                <div className="mt-24 lg:mt-36 grid lg:grid-cols-[1.15fr_0.85fr] gap-6">

                    {/* Image */}
                    <div className="relative h-[500px] sm:h-[650px] rounded-[28px] overflow-hidden bg-[#DDDAD2]">

                        <img
                            src={treatment1}
                            alt="Cosmetic acupuncture treatment at Diya Clinic"
                            className="w-full h-[500px] sm:h-[1000px] rounded-[28px] overflow-hidden bg-[#DDDAD2] object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                        <div className="absolute bottom-6 left-6">
                            <div className="bg-white/90 backdrop-blur-md rounded-full px-5 py-3">
                                <span className="text-[10px] uppercase tracking-[0.2em]">
                                    The Diya Approach
                                </span>
                            </div>
                        </div>

                    </div>


                    {/* Text */}
                    <div className="bg-[#EAE8E1] rounded-[28px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between min-h-[500px]">

                        <div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#85837B]">
                                Why Diya
                            </span>

                            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.035em] mt-8">
                                A more
                                <br />
                                thoughtful
                                <br />
                                approach.
                            </h3>
                        </div>


                        <div className="mt-16">

                            <p className="text-sm leading-7 text-[#68665F] max-w-md">
                                From your first consultation to your treatment journey,
                                we focus on understanding the person behind the concern.
                                Our goal is to create a calm, personal and considered
                                experience at every step.
                            </p>

                            <a
                                href="#doctor"
                                className="inline-flex items-center gap-4 mt-8 text-xs tracking-wide border-b border-[#77766F] pb-2 hover:border-black transition-colors"
                            >
                                Meet Dr. Deepa

                                <span>
                                    ↗
                                </span>
                            </a>

                        </div>

                    </div>

                </div>


                {/* --------------------------------
            BOTTOM STATEMENT
        -------------------------------- */}
                <div className="mt-28 lg:mt-40 text-center">

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#96948C] mb-7">
                        Our belief
                    </p>

                    <h3 className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-[-0.035em]">
                        Healthy skin.
                        <br />
                        <span className="italic">Natural confidence.</span>
                    </h3>

                </div>

            </div>
        </section>
    );
};

export default AboutClinic;