const marqueeItems = [
  { id: 1, text: "Desenvolvimento Web" },
  { id: 2, text: "React & Next.js" },
  { id: 3, text: "UI/UX Design" },
  { id: 4, text: "Performance" },
  { id: 5, text: "SEO Técnico" },
  { id: 6, text: "E-commerce" },
  { id: 7, text: "Sistemas Web" },
  { id: 8, text: "Desenvolvimento Web" },
  { id: 9, text: "React & Next.js" },
  { id: 10, text: "UI/UX Design" },
  { id: 11, text: "Performance" },
  { id: 12, text: "SEO Técnico" },
  { id: 13, text: "E-commerce" },
  { id: 14, text: "Sistemas Web" }
];

const Marquee = () => {
    return(
        <div className="py-3.5 border overflow-hidden bg-[#111111] border-t-[#1f1f1f] border-b-[#1f1f1f]">
            <div className="flex gap-12 marquee-animation whitespace-nowrap">
                {marqueeItems.map((item) => (
                    <div className="flex gap-12 leading-[1.6] text-[#5a5a52] tracking-[.2em] items-center uppercase text-[11px] font-extrabold font-syne" key={item.id}>
                        <span className="text-[10px] text-[#c8f562]">✦</span>
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Marquee;