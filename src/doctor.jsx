import React from "react";
import deepaMamMain from "./assets/Deepa mam main.jpeg";
import deepaMam1 from "./assets/deepa mam 1.jpeg";

const Doctor = () => {
    return (
        <section
            id="doctor"
            className="bg-[#F7F5F0] text-[#242321] px-5 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44"
        >
            <div className="max-w-[1400px] mx-auto">

                {/* =====================================
            SECTION HEADER
        ===================================== */}

                <div className="flex items-center justify-between mb-16 lg:mb-24">

                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#9DAA91]" />

                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#77766F]">
                            The practitioner
                        </span>
                    </div>

                    <span className="hidden sm:block text-[10px] tracking-[0.2em] text-[#AAA8A0]">
                        03 / 05
                    </span>

                </div>


                {/* =====================================
            MAIN INTRO
        ===================================== */}

                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-24">

                    {/* Small editorial text */}
                    <div className="lg:pt-5">

                        <p className="text-xs uppercase tracking-[0.18em] text-[#89877F] leading-6 max-w-[230px]">
                            Experience,
                            <br />
                            knowledge,
                            <br />
                            a personal approach.
                        </p>

                    </div>


                    {/* Heading */}
                    <div>

                        <h2 className="font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.86] tracking-[-0.045em]">
                            Meet
                            <br />
                            <span className="italic">
                                Dr. Deepa S.
                            </span>
                        </h2>

                        <p className="mt-10 max-w-xl text-sm sm:text-[15px] leading-7 text-[#68665F]">
                            An acupuncture cosmetologist with training across clinical
                            cosmetology, trichology and acupuncture cosmetology, bringing
                            together different perspectives on beauty and wellbeing.
                        </p>

                    </div>

                </div>


                {/* =====================================
            DOCTOR PROFILE
        ===================================== */}

                <div className="grid lg:grid-cols-12 gap-6 mt-20 lg:mt-28">

                    {/* =================================
              IMAGE
          ================================= */}

                    <div className="lg:col-span-7 relative">

                        <div className="relative h-[600px] sm:h-[720px] lg:h-[780px] rounded-[28px] overflow-hidden bg-[#DEDCD5]">

                            <img
                                src={deepaMamMain}
                                alt="Dr. Deepa S - Cosmetic Acupuncturist"
                                className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />


                            {/* Image label */}
                            <div className="absolute top-6 left-6">

                                <div className="bg-white/90 backdrop-blur-md rounded-full px-5 py-3">
                                    <span className="text-[10px] uppercase tracking-[0.2em]">
                                        Dr. Deepa S.
                                    </span>
                                </div>

                            </div>


                            {/* Bottom quote */}
                            <div className="absolute bottom-7 left-7 right-7">

                                <p className="font-serif italic text-white text-3xl sm:text-4xl max-w-lg leading-[1]">
                                    “Beauty and wellbeing
                                    <br />
                                    are deeply connected.”
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =================================
              INFORMATION
          ================================= */}

                    <div className="lg:col-span-5 bg-[#EAE8E1] rounded-[28px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between">

                        <div>

                            <span className="text-[10px] uppercase tracking-[0.22em] text-[#85837B]">
                                About
                            </span>

                            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-[-0.035em] mt-8">
                                A practice
                                <br />
                                built around
                                <br />
                                <span className="italic">
                                    understanding.
                                </span>
                            </h3>


                            <div className="mt-10 space-y-5">

                                <p className="text-sm leading-7 text-[#68665F]">
                                    Dr. Deepa S. is an acupuncture cosmetologist trained in
                                    Clinical Cosmetology, Trichology and Acupuncture
                                    Cosmetology.
                                </p>

                                <p className="text-sm leading-7 text-[#68665F]">
                                    Her approach combines these areas of knowledge to create
                                    a more holistic perspective on cosmetic concerns involving
                                    the skin and hair.
                                </p>

                            </div>

                        </div>


                        {/* Credentials */}
                        <div className="mt-16">

                            <div className="border-t border-[#D0CDC4]">

                                {/* Credential 1 */}
                                <div className="py-5 border-b border-[#D0CDC4] flex items-center justify-between gap-5">

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#85837B]">
                                            Training
                                        </p>

                                        <p className="mt-1 text-sm">
                                            Clinical Cosmetology
                                        </p>
                                    </div>

                                    <span className="text-[#96938A] text-xs">
                                        01
                                    </span>

                                </div>


                                {/* Credential 2 */}
                                <div className="py-5 border-b border-[#D0CDC4] flex items-center justify-between gap-5">

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#85837B]">
                                            Training
                                        </p>

                                        <p className="mt-1 text-sm">
                                            Trichology
                                        </p>
                                    </div>

                                    <span className="text-[#96938A] text-xs">
                                        02
                                    </span>

                                </div>


                                {/* Credential 3 */}
                                <div className="py-5 border-b border-[#D0CDC4] flex items-center justify-between gap-5">

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#85837B]">
                                            Training
                                        </p>

                                        <p className="mt-1 text-sm">
                                            Acupuncture Cosmetology
                                        </p>
                                    </div>

                                    <span className="text-[#96938A] text-xs">
                                        03
                                    </span>

                                </div>


                                {/* Credential 4 */}
                                <div className="py-5 flex items-center justify-between gap-5">

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#85837B]">
                                            Institute
                                        </p>

                                        <p className="mt-1 text-sm">
                                            IICTN, Mumbai
                                        </p>
                                    </div>

                                    <span className="text-[#96938A] text-xs">
                                        04
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
            EXPERIENCE / STATISTICS
        ===================================== */}

                <div className="mt-24 lg:mt-36">

                    <div className="border-t border-[#D9D6CE]">

                        <div className="grid sm:grid-cols-3">

                            {/* Stat 1 */}
                            <div className="py-10 sm:pr-10 sm:border-r border-[#D9D6CE]">

                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#939188]">
                                    Patients
                                </p>

                                <p className="font-serif text-6xl sm:text-7xl lg:text-8xl mt-5 tracking-[-0.05em]">
                                    1500<span className="text-[#9DAA91]">+</span>
                                </p>

                                <p className="text-xs text-[#77756E] mt-4">
                                    Patients treated during her practice
                                </p>

                            </div>


                            {/* Stat 2 */}
                            <div className="py-10 sm:px-10 sm:border-r border-[#D9D6CE]">

                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#939188]">
                                    Specialization
                                </p>

                                <p className="font-serif text-5xl sm:text-6xl lg:text-7xl mt-5 tracking-[-0.04em]">
                                    03
                                </p>

                                <p className="text-xs text-[#77756E] mt-4">
                                    Areas of specialized training
                                </p>

                            </div>


                            {/* Stat 3 */}
                            <div className="py-10 sm:pl-10">

                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#939188]">
                                    Approach
                                </p>

                                <p className="font-serif text-5xl sm:text-6xl lg:text-7xl mt-5 tracking-[-0.04em]">
                                    01
                                </p>

                                <p className="text-xs text-[#77756E] mt-4">
                                    Personalized treatment philosophy
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
            TRAINING / MENTOR
        ===================================== */}

                <div className="mt-24 lg:mt-36 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24 items-center">

                    <div>

                        <div className="relative rounded-[24px] overflow-hidden bg-[#DEDCD5] aspect-[4/5] max-w-md shadow-sm">
                            <img
                                src={deepaMam1}
                                alt="Dr. Deepa S - Diya Clinic"
                                className="w-full h-full object-cover object-[center_20%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <span className="text-[10px] uppercase tracking-[0.22em] text-[#E0DEC5]">
                                    Cosmetic Acupuncturist
                                </span>
                                <p className="font-serif italic text-2xl mt-1">
                                    Dr. Deepa S.
                                </p>
                            </div>
                        </div>

                    </div>


                    <div>

                        <span className="text-[10px] uppercase tracking-[0.22em] text-[#8C8A82]">
                            Professional journey
                        </span>

                        <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-[-0.035em] mt-8">
                            Trained with
                            <br />
                            <span className="italic">
                                experience.
                            </span>
                        </h3>

                        <div className="border-t border-[#D9D6CE] mt-10">

                            <div className="py-7 border-b border-[#D9D6CE]">

                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#96938A]">
                                    Institute
                                </p>

                                <h4 className="font-serif text-3xl mt-3">
                                    IICTN, Mumbai
                                </h4>

                                <p className="text-sm text-[#6D6B64] leading-7 mt-4 max-w-lg">
                                    Dr. Deepa completed her courses through the Indian Institute
                                    of Cosmetology, Trichology and Nutrition in Mumbai.
                                </p>

                            </div>


                            <div className="py-7">

                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#96938A]">
                                    Guidance
                                </p>

                                <h4 className="font-serif text-3xl mt-3">
                                    Dr. Jhoomer Kulshrestha
                                </h4>

                                <p className="text-sm text-[#6D6B64] leading-7 mt-4 max-w-lg">
                                    Her training was completed under the guidance of Dr. Jhoomer
                                    Kulshrestha, chairperson of IICTN.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
            FINAL STATEMENT
        ===================================== */}

                <div className="mt-32 lg:mt-48 text-center">

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#96938A] mb-7">
                        The Diya philosophy
                    </p>

                    <h3 className="font-serif text-[clamp(2.8rem,5.5vw,6rem)] leading-[0.9] tracking-[-0.045em]">
                        A personal approach
                        <br />
                        to <span className="italic">natural beauty.</span>
                    </h3>

                </div>

            </div>
        </section>
    );
};

export default Doctor;