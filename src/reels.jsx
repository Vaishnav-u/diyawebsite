const reelIds = [
    "DBeUGD7uSE8",
    "DA2qiwfN_XE",
    "DA2kqJOAqKU",
    "DAxv6wiMNQv",
    "DAs4Vvhtv13",
    "C8RUhibP-vW",
    "C8UePtYP9bf",
    "C9hUTPIMNFy",
    "DAx3GxggVWc",
];

const Reels = () => (
    <section className="bg-[#F7F5F0] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reelIds.map((id) => (
                <div key={id} className="overflow-hidden rounded-lg bg-white">
                    <iframe
                        src={`https://www.instagram.com/reel/${id}/embed/`}
                        title={`Instagram reel ${id}`}
                        loading="lazy"
                        allowFullScreen
                        className="h-[560px] w-full border-0"
                    />
                </div>
            ))}
        </div>
    </section>
);

export default Reels;