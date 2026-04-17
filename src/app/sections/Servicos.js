const services = [
    {
        id: 1,
        icon : "⚡",
        name : "Sites & Landing Pages",
        description: "Sites institucionais, landing pages de alta conversão e portfólios. Foco em performance, SEO e experiência do usuário."
    },
    {
        id: 2,
        icon : "🛍️",
        name : "E-commerce",
        description: "Lojas virtuais completas com gestão de produtos, checkout seguro, integração com meios de pagamento e relatórios."
    },
    {
        id: 3,
        icon : "🔧",
        name : "Sistemas Web",
        description: "Aplicações web sob medida: dashboards, painéis administrativos, CRMs e ferramentas internas para empresas."
    }
]

const Servicos = () => {
    return(
        <div name="servicos" className="bg-black md:px-8 lg:px-12 px-5 md:py-30 py-15">
            <div className="container m-auto">
                <div className="reveal">
                    <div className="text-[10px] gap-3 tracking-[0.2em] flex items-center mb-12 uppercase text-[#c8f562]">
                        <span className="h-[1px] w-8 block bg-[#c8f562]"></span>
                        O que eu faço
                    </div>
                    <div>
                        <h2 className="text-white font-extrabold leading-[1em] mb-5 tracking-[-2px] font-syne text-[clamp(36px,5vw,64px)]">Serviços</h2>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-[1px] bg-[#1f1f1f]">
                    {services.map((serv) => (
                        <div className="hover:bg-[#111111] reveal py-12 px-9 bg-[#0a0a0a]" key={serv.id}>
                            <div className="text-[11px] tracking-[0.15em] mb-6.5 text-[#5a5a52]">{serv.id}</div>
                            <div className="mb-5 text-[32px]">{serv.icon}</div>
                            <div className="font-extrabold text-[22px] font-syne mb-3.5 tracking-[-0.5px] text-white">{serv.name}</div>
                            <div className="text-[#5a5a52] text-[13px] leading-[1.8em]">{serv.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default Servicos;