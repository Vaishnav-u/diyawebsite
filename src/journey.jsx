import React from "react";

const steps = [
    {
        number: "01",
        title: "The conversation",
        label: "CONSULTATION",
        description:
            "Every journey begins with a conversation. We take time to understand your concerns, your goals and what you would like to achieve.",
    },
    {
        number: "02",
        title: "Understanding you",
        label: "ASSESSMENT",
        description:
            "Your individual concerns are considered before deciding on an approach that is appropriate for your needs.",
    },
    {
        number: "03",
        title: "Your treatment",
        label: "PERSONALIZED CARE",
        description:
            "Your treatment is carried out according to the approach discussed during your consultation, with attention to your individual requirements.",
    },
    {
        number: "04",
        title: "Your journey continues",
        label: "FOLLOW-UP",
        description:
            "Your progress can be reviewed over time, allowing the treatment approach to be considered as your journey develops.",
    },
];

const TreatmentJourney = () => {
    return (
        <section
            id="journey"
            className="bg-[#F7F5F0] text-[#242321] px-5 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44"
        >
            <div className="max-w-[1400px] mx-auto">

                {/* =========================================
            HEADER
        ========================================= */}

                <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-10 lg:gap-24">

                    <div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#9DAA91]" />

                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#77766F]">
                                Your journey
                            </span>
                        </div>

                        <p className="hidden lg:block mt-10 text-xs leading-6 text-[#929087] max-w-[190px]">
                            From your first conversation to your continuing care, every
                            step begins with understanding.
                        </p>
                    </div>


                    <div>

                        <h2 className="font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.86] tracking-[-0.045em]">
                            It starts
                            <br />
                            with
                            <br />
                            <span className="italic">you.</span>
                        </h2>

                        <p className="mt-10 max-w-xl text-sm sm:text-[15px] leading-7 text-[#68665F]">
                            Your concerns are personal. So your treatment journey should
                            be too. We keep the process simple, considered and focused on
                            understanding what you need.
                        </p>

                    </div>

                </div>


                {/* =========================================
            JOURNEY TIMELINE
        ========================================= */}

                <div className="mt-24 lg:mt-36">

                    <div className="relative">

                        {/* Vertical line */}
                        <div className="absolute left-[27px] sm:left-[35px] top-0 bottom-0 w-px bg-[#D8D5CD]" />


                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="group relative grid grid-cols-[55px_1fr] sm:grid-cols-[72px_1fr] gap-5 sm:gap-8 pb-20 lg:pb-28 last:pb-0"
                            >

                                {/* =================================
                    NUMBER
                ================================= */}

                                <div className="relative z-10">

                                    <div
                                        className="
                      w-[55px]
                      h-[55px]
                      sm:w-[72px]
                      sm:h-[72px]
                      rounded-full
                      bg-[#F7F5F0]
                      border
                      border-[#CFCBC2]
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      group-hover:bg-[#242321]
                      group-hover:text-white
                      group-hover:border-[#242321]
                    "
                                    >
                                        <span className="text-[10px] tracking-[0.12em]">
                                            {step.number}
                                        </span>
                                    </div>

                                </div>


                                {/* =================================
                    CONTENT
                ================================= */}

                                <div className="border-b border-[#D9D6CE] pb-12 sm:pb-16">

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">

                                        <div>

                                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#96938A]">
                                                {step.label}
                                            </span>

                                            <h3
                                                className="
                          font-serif
                          text-4xl
                          sm:text-5xl
                          lg:text-6xl
                          tracking-[-0.035em]
                          leading-[0.9]
                          mt-4
                          transition-transform
                          duration-500
                          group-hover:translate-x-2
                        "
                                            >
                                                {step.title}
                                            </h3>

                                        </div>


                                        {/* Arrow */}
                                        <div
                                            className="
                        hidden
                        sm:flex
                        w-11
                        h-11
                        rounded-full
                        border
                        border-[#CFCBC2]
                        items-center
                        justify-center
                        text-sm
                        transition-all
                        duration-500
                        group-hover:bg-[#242321]
                        group-hover:text-white
                        group-hover:border-[#242321]
                      "
                                        >
                                            ↗
                                        </div>

                                    </div>


                                    <div className="mt-7 flex flex-col sm:flex-row gap-8 sm:gap-16">

                                        <div className="hidden sm:block w-[1px]" />

                                        <p className="max-w-xl text-sm leading-7 text-[#6C6A63]">
                                            {step.description}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>


                {/* =========================================
            SMALL HIGHLIGHT
        ========================================= */}

                <div className="mt-12 lg:mt-16 flex justify-center items-center w-full">

                    {/* Small information panel */}
                    <div className="w-full max-w-xl rounded-[26px] p-8 sm:p-12 flex flex-col items-center text-center">

                        <h3 className="font-serif text-4xl sm:text-5xl leading-[0.92] tracking-[-0.035em]">
                            Have a concern?
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-[#60675C] max-w-sm">
                            Start with a consultation and have a conversation about
                            what you are looking for.
                        </p>

                        <a
                            href="#contact"
                            className="
                  inline-flex
                  items-center
                  gap-4
                  mt-8
                  bg-[#242321]
                  text-white
                  rounded-full
                  px-6
                  py-4
                  text-[11px]
                  tracking-wide
                  hover:scale-[1.02]
                  transition-transform
                "
                        >
                            Book a consultation

                            <span>↗</span>
                        </a>

                    </div>

                </div>


                {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

                <div className="mt-32 lg:mt-44 text-center">

                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#96938A]">
                        Take the first step
                    </span>

                    <h3 className="font-serif text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.04em] mt-7">
                        Understanding first.
                        <br />
                        <span className="italic">
                            Treatment second.
                        </span>
                    </h3>

                </div>

            </div>
        </section>
    );
};

export default TreatmentJourney;