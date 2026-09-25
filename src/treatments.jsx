import React from "react";
import facialAcupuncture3 from "./assets/Facial Accupuncture 3.jpe";
import treatmentPigmentation from "./assets/treatment_pigmentation.jpg";
import treatmentPimple from "./assets/treatment_pimple.jpg";
import treatmentHairfall from "./assets/treatment_hairfall.jpg";
import antiageing from "./assets/Antiageing.jpg";

const treatments = [
    {
        number: "01",
        title: "Pigmentation",
        description:
            "A holistic approach to pigmentation concerns, focusing on supporting healthier-looking and more balanced skin.",
        image: treatmentPigmentation,
        className: "lg:col-span-7",
    },
    {
        number: "02",
        title: "Pimple Treatment",
        description:
            "A personalized approach to acne and pimple concerns, with attention to the underlying balance of the body.",
        image: treatmentPimple,
        className: "lg:col-span-5 lg:mt-24",
    },
    {
        number: "03",
        title: "Hairfall Control",
        description:
            "Supporting healthier hair and scalp through an approach that looks beyond the surface.",
        image: treatmentHairfall,
        className: "lg:col-span-5",
    },
    {
        number: "04",
        title: "Anti-Ageing",
        description:
            "A natural approach to ageing concerns designed around skin health, vitality and overall wellbeing.",
        image: antiageing,
        className: "lg:col-span-7 lg:mt-24",
    },
];

const Treatments = () => {
    return (
        <section
            id="treatments"
            className="bg-[#242321] text-[#F7F5F0] px-5 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44"
        >
            <div className="max-w-[1400px] mx-auto">

                {/* =====================================
            HEADER
        ===================================== */}

                <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 mb-24 lg:mb-32">

                    <div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#AEB7A5]" />

                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A9A79F]">
                                Our Treatments
                            </span>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.86] tracking-[-0.045em]">
                            Beauty,
                            <br />
                            <span className="italic font-normal">
                                treated
                            </span>
                            <br />
                            differently.
                        </h2>

                        <p className="mt-10 max-w-xl text-sm sm:text-[15px] leading-7 text-[#AAA8A0]">
                            Explore our treatments designed around a holistic understanding
                            of skin, hair and wellbeing. Every treatment begins with
                            understanding your individual concerns.
                        </p>
                    </div>

                </div>


                {/* =====================================
            TREATMENT GRID
        ===================================== */}

                <div className="grid lg:grid-cols-12 gap-x-6 gap-y-16 lg:gap-y-24">

                    {treatments.map((treatment) => (
                        <article
                            key={treatment.number}
                            className={`${treatment.className} group cursor-pointer`}
                        >

                            {/* Image */}
                            <div className="relative overflow-hidden rounded-[26px] bg-[#34332F] aspect-[1.25/1]">

                                <img
                                    src={treatment.image}
                                    alt={treatment.title}
                                    className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    grayscale-[15%]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.045]
                  "
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />


                                {/* Number */}
                                <div className="absolute top-5 left-5">

                                    <div className="w-11 h-11 rounded-full bg-white/90 text-[#242321] flex items-center justify-center text-[10px]">
                                        {treatment.number}
                                    </div>

                                </div>


                                {/* Arrow */}
                                <div
                                    className="
                    absolute
                    top-5
                    right-5
                    w-11
                    h-11
                    rounded-full
                    bg-white/90
                    text-[#242321]
                    flex
                    items-center
                    justify-center
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                                >
                                    ↗
                                </div>


                                {/* Image title */}
                                <div className="absolute bottom-6 left-6 right-6">

                                    <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.035em]">
                                        {treatment.title}
                                    </h3>

                                </div>

                            </div>


                            {/* Description */}
                            <div className="flex justify-between gap-8 pt-5 border-t border-[#484741] mt-4">

                                <p className="text-[13px] leading-6 text-[#99978F] max-w-md">
                                    {treatment.description}
                                </p>

                                <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-[#77756E] whitespace-nowrap">
                                    Explore →
                                </span>

                            </div>

                        </article>
                    ))}

                </div>


                {/* =====================================
            COSMETIC ACUPUNCTURE FEATURE
        ===================================== */}

                <div className="mt-32 lg:mt-48">

                    <div className="border-t border-[#484741] pt-8">

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8D8B84]">
                                The signature approach
                            </span>

                            <span className="text-[10px] tracking-[0.2em] text-[#69675F]">
                                05
                            </span>

                        </div>

                    </div>


                    <div className="grid lg:grid-cols-[1fr_1fr] gap-6 mt-8">

                        {/* Image */}
                        <div className="relative rounded-[26px] overflow-hidden min-h-[500px] lg:min-h-[650px]">

                            <img
                                src={facialAcupuncture3}
                                alt="Facial and scalp acupuncture treatment at Diya Cosmetology"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />

                            <div className="absolute inset-0 bg-black/20" />

                            <div className="absolute top-6 left-6">

                                <span className="bg-white/90 text-[#242321] px-5 py-3 rounded-full text-[10px] uppercase tracking-[0.18em]">
                                    Cosmetic Acupuncture
                                </span>

                            </div>

                        </div>


                        {/* Content */}
                        <div className="bg-[#E8E6DF] text-[#242321] rounded-[26px] p-8 sm:p-12 lg:p-16 flex flex-col justify-between">

                            <div>

                                <span className="text-[10px] uppercase tracking-[0.22em] text-[#85837B]">
                                    A natural approach
                                </span>

                                <h3 className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[0.88] tracking-[-0.04em] mt-8">
                                    Beauty
                                    <br />
                                    begins
                                    <br />
                                    <span className="italic">
                                        within.
                                    </span>
                                </h3>

                            </div>


                            <div className="mt-16">

                                <p className="text-sm leading-7 text-[#67655E] max-w-md">
                                    Cosmetic acupuncture is at the heart of our approach.
                                    Rather than focusing only on the surface, the treatment
                                    considers the body's natural balance, circulation and
                                    overall wellbeing.
                                </p>


                                <button className="mt-9 group flex items-center gap-4 text-xs tracking-wide">

                                    <span className="border-b border-[#77756E] pb-2">
                                        Discover cosmetic acupuncture
                                    </span>

                                    <span className="w-9 h-9 rounded-full border border-[#C4C1B8] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                                        ↗
                                    </span>

                                </button>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
            BOTTOM STATEMENT
        ===================================== */}

                <div className="mt-32 lg:mt-44">

                    <div className="max-w-4xl">

                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#85837D] mb-8">
                            Treatment philosophy
                        </p>

                        <h3 className="font-serif text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.92] tracking-[-0.04em]">
                            Not just treating
                            <br />
                            <span className="italic text-[#AEB7A5]">
                                the symptom.
                            </span>
                        </h3>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Treatments;