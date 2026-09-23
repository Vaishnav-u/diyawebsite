import React from "react";
import treatmentDeepa from "./assets/treatment deepa mam.jpeg";

const CosmeticAcupuncture = () => {
    return (
        <section
            id="acupuncture"
            className="bg-[#242321] text-[#F7F5F0] px-5 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44"
        >
            <div className="max-w-[1400px] mx-auto">

                {/* =========================================
            INTRO
        ========================================= */}

                <div className="flex items-center justify-between mb-16 lg:mb-24">

                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#AEB7A5]" />

                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#AAA8A0]">
                            Cosmetic Acupuncture
                        </span>
                    </div>

                    <span className="hidden sm:block text-[10px] tracking-[0.2em] text-[#68665F]">
                        06 / 08
                    </span>

                </div>


                {/* =========================================
            BIG STATEMENT
        ========================================= */}

                <div className="max-w-[1100px]">

                    <h2 className="font-serif text-[clamp(4rem,8vw,9rem)] leading-[0.8] tracking-[-0.05em]">

                        Beauty

                        <span className="italic font-normal text-[#AEB7A5]">
                            {" "}from
                        </span>

                        <br />

                        within.

                    </h2>

                    <p className="mt-12 max-w-xl text-sm sm:text-[15px] leading-7 text-[#A6A49C]">
                        Cosmetic acupuncture is an approach that brings acupuncture into
                        the world of cosmetic and wellness care, with attention to the
                        skin, circulation, balance and the individual's overall
                        wellbeing.
                    </p>

                </div>


                {/* =========================================
            MAIN IMAGE + CONTENT
        ========================================= */}

                <div className="grid lg:grid-cols-12 gap-6 mt-24 lg:mt-36">

                    {/* IMAGE */}

                    <div className="lg:col-span-7 relative min-h-[560px] sm:min-h-[700px] lg:min-h-[820px] rounded-[28px] overflow-hidden bg-[#34332F]">

                        <img
                            src={treatmentDeepa}
                            alt="Cosmetic acupuncture treatment by Dr. Deepa at Diya Cosmetology"
                            className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                object-center
                transition-transform
                duration-[1200ms]
                hover:scale-[1.025]
              "
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />


                        {/* Floating label */}

                        <div className="absolute top-6 left-6">

                            <div className="bg-white/90 backdrop-blur-md text-[#242321] rounded-full px-5 py-3">

                                <span className="text-[10px] uppercase tracking-[0.2em]">
                                    The Diya Approach
                                </span>

                            </div>

                        </div>


                        {/* Image caption */}

                        <div className="absolute bottom-7 left-7 right-7">

                            <p className="font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-[0.95] max-w-xl">
                                A more considered
                                <br />
                                approach to beauty.
                            </p>

                        </div>

                    </div>


                    {/* CONTENT */}

                    <div className="lg:col-span-5 bg-[#E8E6DF] text-[#242321] rounded-[28px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between">

                        <div>

                            <span className="text-[10px] uppercase tracking-[0.22em] text-[#85837B]">
                                What is it?
                            </span>

                            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.88] tracking-[-0.04em] mt-8">
                                An approach
                                <br />
                                that looks
                                <br />
                                <span className="italic">
                                    beyond the surface.
                                </span>
                            </h3>

                        </div>


                        <div className="mt-16">

                            <p className="text-sm leading-7 text-[#68665F]">
                                At Diya Cosmetology, cosmetic acupuncture is approached as part
                                of a broader understanding of beauty and wellbeing. The
                                treatment is considered alongside your individual concerns
                                and overall condition.
                            </p>

                            <p className="text-sm leading-7 text-[#68665F] mt-5">
                                A consultation provides an opportunity to discuss your
                                concerns and determine whether this approach is appropriate
                                for you.
                            </p>

                        </div>

                    </div>

                </div>


                {/* =========================================
            FOUR PRINCIPLES
        ========================================= */}

                <div className="mt-24 lg:mt-40">

                    <div className="border-t border-[#484741]">

                        <div className="py-8 flex justify-between">

                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#85837D]">
                                The approach
                            </span>

                            <span className="text-[10px] tracking-[0.2em] text-[#68665F]">
                                01 — 04
                            </span>

                        </div>

                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-[#484741]">

                        {/* 01 */}
                        <div className="py-10 lg:pr-10 lg:border-r border-[#484741]">

                            <span className="text-[10px] text-[#77756E]">
                                01
                            </span>

                            <h3 className="font-serif text-4xl mt-8">
                                Balance
                            </h3>

                            <p className="text-sm leading-7 text-[#99978F] mt-5">
                                Considering the relationship between cosmetic concerns and
                                the body's broader sense of balance.
                            </p>

                        </div>


                        {/* 02 */}
                        <div className="py-10 lg:px-10 lg:border-r border-[#484741]">

                            <span className="text-[10px] text-[#77756E]">
                                02
                            </span>

                            <h3 className="font-serif text-4xl mt-8">
                                Circulation
                            </h3>

                            <p className="text-sm leading-7 text-[#99978F] mt-5">
                                Acupuncture is traditionally associated with stimulating
                                points throughout the body and may influence local
                                circulation.
                            </p>

                        </div>


                        {/* 03 */}
                        <div className="py-10 lg:px-10 lg:border-r border-[#484741]">

                            <span className="text-[10px] text-[#77756E]">
                                03
                            </span>

                            <h3 className="font-serif text-4xl mt-8">
                                Individual
                            </h3>

                            <p className="text-sm leading-7 text-[#99978F] mt-5">
                                Your concerns and circumstances are considered before
                                deciding on an appropriate treatment approach.
                            </p>

                        </div>


                        {/* 04 */}
                        <div className="py-10 lg:pl-10">

                            <span className="text-[10px] text-[#77756E]">
                                04
                            </span>

                            <h3 className="font-serif text-4xl mt-8">
                                Holistic
                            </h3>

                            <p className="text-sm leading-7 text-[#99978F] mt-5">
                                Looking at beauty and wellbeing as connected parts of a
                                person's overall experience.
                            </p>

                        </div>

                    </div>

                </div>


                {/* =========================================
            CONCERNS
        ========================================= */}

                <div className="mt-28 lg:mt-44 grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-24">

                    {/* Heading */}

                    <div>

                        <span className="text-[10px] uppercase tracking-[0.22em] text-[#85837D]">
                            Areas of focus
                        </span>

                        <h3 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.85] tracking-[-0.04em] mt-8">
                            Where it
                            <br />
                            may
                            <br />
                            <span className="italic text-[#AEB7A5]">
                                help.
                            </span>
                        </h3>

                    </div>


                    {/* List */}

                    <div className="border-t border-[#484741]">

                        {[
                            "Pigmentation concerns",
                            "Pimple and acne concerns",
                            "Hairfall concerns",
                            "Ageing-related concerns",
                        ].map((item, index) => (
                            <div
                                key={item}
                                className="
                  group
                  py-7
                  border-b
                  border-[#484741]
                  flex
                  items-center
                  justify-between
                  gap-5
                  cursor-pointer
                "
                            >

                                <div className="flex items-center gap-6">

                                    <span className="text-[10px] text-[#6E6C65]">
                                        0{index + 1}
                                    </span>

                                    <h4
                                        className="
                      font-serif
                      text-2xl
                      sm:text-3xl
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                                    >
                                        {item}
                                    </h4>

                                </div>


                                <span
                                    className="
                    w-9
                    h-9
                    rounded-full
                    border
                    border-[#55534D]
                    flex
                    items-center
                    justify-center
                    text-sm
                    transition-all
                    duration-300
                    group-hover:bg-[#F7F5F0]
                    group-hover:text-[#242321]
                  "
                                >
                                    ↗
                                </span>

                            </div>
                        ))}

                    </div>

                </div>


                {/* =========================================
            IMPORTANT NOTE
        ========================================= */}

                <div className="mt-24 lg:mt-36 border-t border-[#484741] pt-8">

                    <div className="max-w-3xl">

                        <span className="text-[10px] uppercase tracking-[0.22em] text-[#85837D]">
                            A considered approach
                        </span>

                        <p className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1] tracking-[-0.025em] mt-7 text-[#D8D5CD]">
                            Treatment begins with a consultation not a promise of a
                            particular result.
                        </p>

                        <p className="text-xs sm:text-sm leading-6 text-[#77756E] mt-7 max-w-xl">
                            Individual experiences can vary. A consultation allows the
                            practitioner to understand your concerns and discuss whether
                            cosmetic acupuncture is suitable for you.
                        </p>

                    </div>

                </div>


                {/* =========================================
            CTA
        ========================================= */}

                <div className="mt-28 lg:mt-40">

                    <div className="border-t border-[#484741] pt-8">

                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#85837D]">
                            Start with a conversation
                        </span>

                    </div>


                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mt-10">

                        <h3 className="font-serif text-[clamp(3rem,6vw,7rem)] leading-[0.82] tracking-[-0.045em]">
                            Curious about
                            <br />
                            <span className="italic text-[#AEB7A5]">
                                cosmetic acupuncture?
                            </span>
                        </h3>


                        <a
                            href="https://wa.link/7mt525"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex
                items-center
                justify-between
                gap-10
                bg-[#F7F5F0]
                text-[#242321]
                rounded-full
                px-7
                py-5
                text-[11px]
                tracking-wide
                w-fit
                hover:scale-[1.02]
                transition-transform
              "
                        >
                            Book a consultation

                            <span className="text-base">
                                ↗
                            </span>

                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CosmeticAcupuncture;