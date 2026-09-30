import React from "react";
import facialAcupuncture3 from "./assets/Facial Accupuncture 3.jpe";
import treatmentHairfall from "./assets/treatment_hairfall.jpg";
import antiageing from "./assets/Antiageing.jpg";
import pimpletreatment from "./assets/pimple treatment.jpg";
import pigmentation from "./assets/pigmentation.jpg";
import beforeAfter1 from "./assets/beforeafter1.jpeg";
import beforeAfter2 from "./assets/beforeafter2.jpeg";
import pimpleBefore from "./assets/pimple treatment bf 1.jpeg";
import pimpleAfter from "./assets/pimple treatment bf 2.jpeg";
import hairfallBefore from "./assets/hairfall bf 1.jpeg";
import hairfallAfter from "./assets/hairfall bf 2.jpeg";
import antiageingBefore from "./assets/anti-ageing b&f 1.jpeg";
import antiageingAfter from "./assets/anti-ageing b&f 2.jpeg";

const treatments = [
    {
        number: "01",
        title: "LPP & Pigmentation",
        badge: "Flagship Specialty",
        description:
            "Specialized clinical management of Lichen Planus Pigmentosus (LPP) and chronic dermal pigmentation using non-invasive cosmetic acupuncture to clear stubborn melanophages without laser trauma.",
        image: pigmentation,
        className: "lg:col-span-7",
    },
    {
        number: "02",
        title: "Pimple Treatment",
        description:
            "A personalized approach to acne and pimple concerns, with attention to the underlying balance of the body.",
        image: pimpletreatment,
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
                            Explore our clinical treatments designed around a holistic understanding
                            of skin, hair and wellbeing, with special clinical mastery in difficult
                            conditions like <strong className="text-white font-normal">Lichen Planus Pigmentosus (LPP)</strong> and persistent dermal pigmentation.
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


                                {/* Number & Badge */}
                                <div className="absolute top-5 left-5 flex items-center gap-3">

                                    <div className="w-11 h-11 rounded-full bg-white/90 text-[#242321] flex items-center justify-center text-[10px]">
                                        {treatment.number}
                                    </div>

                                    {treatment.badge && (
                                        <span className="bg-[#AEB7A5] text-[#1E1D1B] font-medium text-[9px] uppercase tracking-[0.2em] px-3.5 py-2 rounded-full backdrop-blur-md shadow-sm">
                                            {treatment.badge}
                                        </span>
                                    )}

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


                            </div>

                        </article>
                    ))}

                </div>


                {/* =====================================
                    LPP (LICHEN PLANUS PIGMENTOSUS)
                    CLINICAL FOCUS & CASE SHOWCASE
                ===================================== */}

                <div id="lpp-specialization" className="mt-32 lg:mt-44 scroll-mt-28">

                    {/* Section Header */}
                    <div className="border-t border-[#484741] pt-10 mb-14 lg:mb-20">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-3 mb-4">
                                </div>
                                <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-[-0.035em] leading-[0.95]">
                                    Lichen Planus Pigmentosus
                                    <br />
                                    <span className="italic font-normal text-[#AEB7A5]">
                                        (LPP) Treatment
                                    </span>
                                </h3>
                            </div>
                            <p className="max-w-md text-sm text-[#AAA8A0] leading-7">
                                Deepa S Chandran, Acupuncture Cosmetologist, specializes in managing complex, stubborn pigmentary conditions most notably Lichen Planus Pigmentosus (LPP) where standard dermatological interventions often fail or cause rebound darkening.
                            </p>
                        </div>
                    </div>

                    {/* Clinical Overview & Why Cosmetic Acupuncture Works */}
                    <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">

                        {/* What is LPP - Medical Context */}
                        <div className="lg:col-span-6 bg-[#2B2A26] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between">
                            <div>

                                <h4 className="font-serif text-2xl sm:text-3xl text-[#F7F5F0] mb-5">
                                    What is Lichen Planus Pigmentosus?
                                </h4>

                                <p className="text-sm leading-7 text-[#AAA8A0] mb-4">
                                    <strong className="text-white font-normal">Lichen Planus Pigmentosus (LPP)</strong> is a chronic, acquired pigmentary disorder characterized by diffuse, reticular, or mottled slate-gray to dark brownish-black macules on sun-exposed and flexural areas like the face, temples, cheeks, and neck.
                                </p>

                                <div className="space-y-3.5 mt-6 border-t border-[#3E3C36] pt-6">
                                    <div className="flex items-start gap-3 text-xs leading-6 text-[#9A9890]">
                                        <span className="text-[#AEB7A5] font-serif text-sm">✦</span>
                                        <span><strong className="text-[#E5E3DC]">Dermal Melanin Incontinence:</strong> Unlike surface tanning, LPP involves an inflammatory lichenoid reaction where melanin granules drop deep into the dermis, trapped within melanophages.</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-xs leading-6 text-[#9A9890]">
                                        <span className="text-[#AEB7A5] font-serif text-sm">✦</span>
                                        <span><strong className="text-[#E5E3DC]">Resistance to Standard Care:</strong> Traditional chemical peels, bleaching hydroquinone creams, or thermal lasers frequently provoke severe <span className="text-[#E0DEC5]">Post-Inflammatory Hyperpigmentation (PIH)</span>, making the condition darker or causing it to spread.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#3E3C36] flex items-center justify-between text-xs text-[#8E8C83]">
                                <span>Commonly Affects: Face, Temples & Neck</span>
                                <span className="text-[#AEB7A5]">Requires Non-Thermal Care</span>
                            </div>
                        </div>

                        {/* How acupuncture is used to treat LPP */}
                        <div className="lg:col-span-6 bg-gradient-to-br from-[#2F2E29] to-[#252420]  rounded-[28px] p-8 sm:p-10 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-6">

                                </div>

                                <h4 className="font-serif text-2xl sm:text-3xl text-[#F7F5F0] mb-5">
                                    How Cosmetic Acupuncture Heals LPP
                                </h4>

                                <p className="text-sm leading-7 text-[#AAA8A0] mb-4">
                                    Deepa S Chandran employs a specialized, highly gentle <strong className="text-white font-normal">Cosmetic Acupuncture protocol</strong> designed specifically for deep dermal pigment clearance and root-cause immune balance without skin ablation.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mt-6 border-t border-[#3E3C36] pt-6">
                                    <div className="bg-[#242321]/60 rounded-2xl p-4 border border-white/5">
                                        <h5 className="font-serif text-base text-[#F7F5F0] mb-1.5">No Heat, No PIH</h5>
                                        <p className="text-xs text-[#9A9890] leading-5">Zero heat or chemical burns eliminates the danger of rebound laser hyperpigmentation.</p>
                                    </div>
                                    <div className="bg-[#242321]/60 rounded-2xl p-4 border border-white/5">
                                        <h5 className="font-serif text-base text-[#F7F5F0] mb-1.5">Dermal Clearance</h5>
                                        <p className="text-xs text-[#9A9890] leading-5">Micro-needles stimulate localized lymphatic drainage and macrophage digestion of melanin.</p>
                                    </div>
                                    <div className="bg-[#242321]/60 rounded-2xl p-4 border border-white/5">
                                        <h5 className="font-serif text-base text-[#F7F5F0] mb-1.5">Anti-Inflammatory</h5>
                                        <p className="text-xs text-[#9A9890] leading-5">Calms the dermo-epidermal lichenoid cascade, halting new pigment deposition.</p>
                                    </div>
                                    <div className="bg-[#242321]/60 rounded-2xl p-4 border border-white/5">
                                        <h5 className="font-serif text-base text-[#F7F5F0] mb-1.5">Barrier Resilience</h5>
                                        <p className="text-xs text-[#9A9890] leading-5">Strengthens natural skin barrier and cellular regeneration from within.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#3E3C36] flex flex-wrap items-center justify-between gap-4">
                                <span className="text-xs text-[#AAA8A0]">Clinical results documented across hundreds of sessions</span>
                                <a
                                    href="https://wa.link/7mt525"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs text-[#AEB7A5] hover:text-white transition-colors"
                                >
                                    <span>Discuss your LPP concerns</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* TWO CLINICAL CONDITION & RESULT IMAGES */}
                    <div className="mb-16">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#AEB7A5]">
                                    Documented Clinical Cases
                                </span>
                                <h4 className="font-serif text-2xl sm:text-3xl text-[#F7F5F0] mt-1">
                                    LPP Patient Results
                                </h4>
                            </div>
                            <span className="text-xs text-[#8E8C83]">
                                Genuine clinical documentation under Deepa S Chandran's care
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

                            {/* Case 1 */}
                            <div className="bg-[#2D2C28] border border-[#3E3C36] rounded-[28px] p-6 sm:p-8 flex flex-col group hover:border-[#67655E] transition-all duration-300">
                                <div className="relative overflow-hidden rounded-[22px] bg-[#1E1D1B] aspect-square shadow-inner">
                                    <img
                                        src={beforeAfter1}
                                        alt="Clinical photograph showing Lichen Planus Pigmentosus (LPP) before and after one cosmetic acupuncture session"
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-white/10">
                                        Condition Photo 01 · LPP
                                    </div>
                                </div>

                                <div className="pt-6 mt-auto">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#AEB7A5] font-medium">
                                            LPP Case Study 01
                                        </span>
                                        <span className="text-[11px] text-[#A9A79F] px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
                                            Single Session Response
                                        </span>
                                    </div>
                                    <h4 className="font-serif text-2xl text-[#F7F5F0]">
                                        Facial Lichen Planus Pigmentosus (LPP)
                                    </h4>
                                    <div className="mt-3 space-y-2 text-xs sm:text-[13px] leading-6 text-[#99978F]">
                                        <p>
                                            <strong className="text-[#C9C7BF] font-normal">Condition Presentation:</strong> Deep, diffuse slate-gray macular hyperpigmentation across the cheeks and jawline, characteristic of active dermal LPP.
                                        </p>
                                        <p>
                                            <strong className="text-[#AEB7A5] font-normal">Observed Result:</strong> Noticeable lightening of deep dermal pigment patches and visible reduction in underlying erythema after just one targeted cosmetic acupuncture session.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Case 2 */}
                            <div className="bg-[#2D2C28] border border-[#3E3C36] rounded-[28px] p-6 sm:p-8 flex flex-col group hover:border-[#67655E] transition-all duration-300">
                                <div className="relative overflow-hidden rounded-[22px] bg-[#1E1D1B] aspect-square shadow-inner">
                                    <img
                                        src={beforeAfter2}
                                        alt="Clinical photograph showing deep facial hyperpigmentation and LPP before and after 6 months of cosmetic acupuncture treatment"
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-white/10">
                                        Condition Photo 02 · Deep Dermal
                                    </div>
                                </div>

                                <div className="pt-6 mt-auto">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#AEB7A5] font-medium">
                                            LPP Case Study 02
                                        </span>
                                        <span className="text-[11px] text-[#A9A79F] px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
                                            6 Months Protocol
                                        </span>
                                    </div>
                                    <h4 className="font-serif text-2xl text-[#F7F5F0]">
                                        Chronic Deep Pigmentation & Stabilization
                                    </h4>
                                    <div className="mt-3 space-y-2 text-xs sm:text-[13px] leading-6 text-[#99978F]">
                                        <p>
                                            <strong className="text-[#C9C7BF] font-normal">Condition Presentation:</strong> Stubborn, dark brownish-black periorbital and temple hyperpigmentation persisting despite months of topical and conventional attempts.
                                        </p>
                                        <p>
                                            <strong className="text-[#AEB7A5] font-normal">Observed Result:</strong> Substantial, natural clearing of deep pigment deposits, sustained revitalization of skin tone, and zero rebound darkening across a 6-month holistic course.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div className="mt-24 lg:mt-32 border-t border-[#484741] pt-10">
                    <div className="mb-10">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#AEB7A5]">
                            Other treatments
                        </span>
                        <h3 className="font-serif text-3xl sm:text-5xl text-[#F7F5F0] mt-3">
                            Care for skin and hair
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                        {[
                            {
                                title: "Pimple Treatment",
                                description: "Acne can be influenced by hormonal changes. Our acupuncture based approach considers these factors and aims to support hormonal balance while drainingm out cystic acne. No injections or medications are used. It can also be a solution for endometriosis.",
                                before: pimpleBefore,
                                after: pimpleAfter,
                            },
                            {
                                title: "Hairfall Control",
                                description: "Scalp acupuncture is used to nourish the scalp and support concerns such as hairfall and thinning. Melanocytes naturally produce melanin, while the treatment focuses on supporting scalp health and healthy-looking strands.",
                                before: hairfallBefore,
                                after: hairfallAfter,
                            },
                            {
                                title: "Anti-Ageing",
                                description: "A gentle approach to the visible signs of ageing, including fine lines, wrinkles, changes in skin texture and the appearance of facial contours.",
                                before: antiageingBefore,
                                after: antiageingAfter,
                            },
                        ].map((treatment) => (
                            <article key={treatment.title}>
                                <div className="grid grid-cols-2 gap-2">
                                    {[treatment.before, treatment.after].map((image, index) => (
                                        <figure key={image}>
                                            <img
                                                src={image}
                                                alt={`${treatment.title} ${index === 0 ? "before" : "after"} treatment`}
                                                className="w-full aspect-[4/5] object-cover rounded-lg bg-[#34332F]"
                                            />
                                        </figure>
                                    ))}
                                </div>
                                <h4 className="font-serif text-2xl text-[#F7F5F0] mt-5">
                                    {treatment.title}
                                </h4>
                                <p className="text-[13px] leading-6 text-[#AAA8A0] mt-2">
                                    {treatment.description}
                                </p>
                            </article>
                        ))}
                    </div>
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