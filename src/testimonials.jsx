import React, { useState } from "react";

const writtenTestimonials = [
    {
        name: "Dr. Aswathy",
        role: "Patient Experience",
        tag: "Acne, Scars & PCOS Care",
        sessions: "2 Sessions",
        story:
            "I initially visited Dr. Deepa’s clinic for cosmetic treatment for acne and acne scars. During the consultation, I mentioned PCOS and a history of amenorrhea. I underwent acupuncture therapy, attended two sessions, and my periods returned about two months after the second session and remained regular for the following year.",
    },
    {
        name: "Nirupama Shankar",
        role: "Patient Experience",
        tag: "Acne Marks & Skin Tone",
        sessions: "3 Sessions",
        story:
            "I initially visited the clinic for acne, acne marks, and uneven skin tone. After my third acupuncture session, I noticed changes in my skin, including less severe cystic acne, reduced acne appearance, clearer scars, and improved skin tone.",
    },
];

const testimonials = [
    {
        id: "T0kFO2YuRVk",
        number: "01",
        name: "Client Story",
        category: "COSMETIC ACUPUNCTURE",
        quote: "My experience at Diya Clinic...",
    },
    {
        id: "UOgikOOjsqg",
        number: "02",
        name: "Client Story",
        category: "SKIN REJUVENATION",
        quote: "I wanted to share my experience...",
    },
    {
        id: "VFg2MKRG1TI",
        number: "03",
        name: "Client Story",
        category: "ACUPUNCTURE & WELLNESS",
        quote: "What surprised me most about the treatment...",
    },
    {
        id: "LChbCcnvWqU",
        number: "04",
        name: "Client Story",
        category: "HOLISTIC CARE",
        quote: "A transformative journey towards natural balance...",
    },
];

const Testimonials = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section
            id="testimonials"
            className="bg-[#F7F5F0] text-[#242321] px-5 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44"
        >
            <div className="max-w-[1400px] mx-auto">

                {/* =========================================
            HEADER
        ========================================= */}

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#9DAA91]" />

                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#77766F]">
                            Client stories
                        </span>
                    </div>

                    <span className="hidden sm:block text-[10px] tracking-[0.2em] text-[#AAA8A0]">
                        07 / 08
                    </span>

                </div>


                {/* =========================================
            INTRO
        ========================================= */}

                <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-24 mt-16 lg:mt-20">

                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#96938A] leading-6 max-w-[220px]">
                            Real experiences.
                            <br />
                            Real conversations.
                        </p>
                    </div>


                    <div>

                        <h2 className="font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.86] tracking-[-0.045em]">
                            Don't just
                            <br />
                            take our
                            <br />
                            <span className="italic">
                                word for it.
                            </span>
                        </h2>

                        <p className="mt-10 max-w-xl text-sm sm:text-[15px] leading-7 text-[#68665F]">
                            Hear directly from people who have shared their experiences
                            with Diya Clinic. Each story is personal, and every treatment
                            journey is different.
                        </p>

                    </div>

                </div>


                {/* =========================================
            FEATURED VIDEO
        ========================================= */}

                <div className="mt-24 lg:mt-32">

                    <div
                        onClick={() => setActiveVideo(testimonials[0].id)}
                        className="
              group
              relative
              aspect-[16/9]
              sm:aspect-[2/1]
              lg:aspect-[2.15/1]
              rounded-[28px]
              overflow-hidden
              bg-[#292824]
              cursor-pointer
            "
                    >

                        {/* YouTube thumbnail */}
                        <img
                            src={`https://img.youtube.com/vi/${testimonials[0].id}/maxresdefault.jpg`}
                            onError={(e) => {
                                e.currentTarget.src = `https://img.youtube.com/vi/${testimonials[0].id}/hqdefault.jpg`;
                            }}
                            alt={testimonials[0].name}
                            className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                opacity-75
                transition-transform
                duration-700
                group-hover:scale-[1.025]
              "
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-500" />


                        {/* Category */}
                        <div className="absolute top-6 left-6">

                            <div className="bg-white/90 backdrop-blur-md text-[#242321] rounded-full px-5 py-3">

                                <span className="text-[10px] uppercase tracking-[0.2em]">
                                    {testimonials[0].category}
                                </span>

                            </div>

                        </div>


                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">

                            <div
                                className="
                  w-20
                  h-20
                  sm:w-24
                  sm:h-24
                  rounded-full
                  bg-[#F7F5F0]
                  text-[#242321]
                  flex
                  items-center
                  justify-center
                  text-xl
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
                            >
                                ▶
                            </div>

                        </div>


                        {/* Bottom content */}
                        <div className="absolute bottom-7 left-7 right-7 flex flex-col sm:flex-row sm:items-end justify-between gap-6">

                            <div>

                                <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-3">
                                    Featured story
                                </p>

                                <h3 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-[-0.035em]">
                                    {testimonials[0].name}
                                </h3>

                            </div>

                            <span className="text-white/80 text-xs">
                                Watch story ↗
                            </span>

                        </div>

                    </div>

                </div>


                {/* =========================================
            VIDEO GRID
        ========================================= */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                    {testimonials.slice(1).map((testimonial) => (

                        <article
                            key={testimonial.id}
                            onClick={() => setActiveVideo(testimonial.id)}
                            className="group cursor-pointer"
                        >

                            {/* Thumbnail */}
                            <div className="relative aspect-video rounded-[24px] overflow-hidden bg-[#DDDAD2]">

                                <img
                                    src={`https://img.youtube.com/vi/${testimonial.id}/hqdefault.jpg`}
                                    alt={testimonial.name}
                                    className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                  "
                                />

                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />


                                {/* Number */}
                                <div className="absolute top-5 left-5">

                                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[10px]">
                                        {testimonial.number}
                                    </div>

                                </div>


                                {/* Play */}
                                <div className="absolute inset-0 flex items-center justify-center">

                                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-sm transition-transform duration-300 group-hover:scale-110">
                                        ▶
                                    </div>

                                </div>

                            </div>


                            {/* Information */}
                            <div className="pt-5 border-b border-[#D8D5CD] pb-6">

                                <div className="flex items-center justify-between gap-5">

                                    <div>

                                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#929087]">
                                            {testimonial.category}
                                        </p>

                                        <h3 className="font-serif text-3xl sm:text-4xl mt-2 tracking-[-0.025em]">
                                            {testimonial.name}
                                        </h3>

                                    </div>

                                    <span className="w-10 h-10 rounded-full border border-[#CBC8BF] flex items-center justify-center group-hover:bg-[#242321] group-hover:text-white group-hover:border-[#242321] transition-all">
                                        ↗
                                    </span>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>


                {/* =========================================
            WRITTEN CLIENT STORIES
        ========================================= */}

                <div className="mt-28 lg:mt-36">

                    <div className="border-t border-[#D8D5CD] pt-8 mb-12 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#85837D]">
                            Patient Experiences
                        </span>
                        <span className="text-[10px] tracking-[0.2em] text-[#AAA8A0]">
                            Documented Journeys
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {writtenTestimonials.map((item, index) => (
                            <div
                                key={item.name}
                                className="bg-[#EFEDE7] rounded-[28px] p-8 sm:p-10 lg:p-12 flex flex-col justify-between border border-[#E4E1D8] relative overflow-hidden group hover:bg-[#EAE7DF] transition-all duration-300"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-4 mb-8">
                                        <span className="bg-white/80 backdrop-blur-sm text-[#242321] text-[10px] uppercase tracking-[0.18em] px-4 py-2 rounded-full">
                                            {item.tag}
                                        </span>
                                        <span className="text-[11px] text-[#8A8880] tracking-wide">
                                            {item.sessions}
                                        </span>
                                    </div>

                                    <p className="font-serif italic text-xl sm:text-2xl lg:text-[25px] leading-[1.35] text-[#242321]">
                                        “{item.story}”
                                    </p>
                                </div>

                                <div className="mt-10 pt-6 border-t border-[#DCD9D0] flex items-center justify-between">
                                    <div>
                                        <h4 className="font-serif text-2xl tracking-[-0.02em]">
                                            {item.name}
                                        </h4>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#85837B] mt-1">
                                            {item.role}
                                        </p>
                                    </div>
                                    <span className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-xs text-[#242321]">
                                        0{index + 1}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>


                {/* =========================================
            TEXT TESTIMONIAL
        ========================================= */}



                {/* =========================================
            CTA
        ========================================= */}

                <div className="mt-32 lg:mt-44 border-t border-[#D8D5CD] pt-10">

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">

                        <div>

                            <span className="text-[10px] uppercase tracking-[0.22em] text-[#96938A]">
                                Your story could start here
                            </span>

                            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-[-0.035em] mt-6">
                                Begin with
                                <br />
                                a conversation.
                            </h3>

                        </div>


                        <a
                            href="#contact"
                            className="
                flex
                items-center
                justify-between
                gap-10
                bg-[#242321]
                text-white
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


            {/* =========================================
          VIDEO MODAL
      ========================================= */}

            {activeVideo && (

                <div
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-5 sm:p-10"
                    onClick={() => setActiveVideo(null)}
                >

                    <div
                        className="relative w-full max-w-6xl aspect-video bg-black rounded-[20px] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <iframe
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                            title="Diya Clinic testimonial"
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />

                        {/* Close */}
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="
                absolute
                top-4
                right-4
                z-10
                w-10
                h-10
                rounded-full
                bg-white
                text-[#242321]
                flex
                items-center
                justify-center
                text-lg
              "
                        >
                            ×
                        </button>

                    </div>

                </div>

            )}

        </section>
    );
};

export default Testimonials;