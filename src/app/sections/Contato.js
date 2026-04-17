import EmailForm from "../components/EmailForm"

const contatLinks = [
    {
        id: 1,
        name: "E-mail",
        value: "mateussds11@gmail.com",
        path: "mailto:mateussds11@gmail.com"
    },
    {
        id: 2,
        name: "Whatsapp",
        value: "(85) 99695-1897",
        path: "https://wa.me/55085996951897"
    },
    {
        id: 3,
        name: "Linkedin",
        value: "/in/mateus-santos-dev",
        path: "https://www.linkedin.com/in/mateus-santos-dev/"
    },
    {
        id: 4,
        name: "Github",
        value: "@sant0ss",
        path: "https://github.com/sant0ss",
    }
]

const Contato = () => {
    return(
        <div name="contato" className="bg-[#c8f562] md:px-8 lg:px-12 px-5 md:py-30 py-15">
            <div className="container m-auto grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 items-center">
                <div className="reveal">
                    <div>
                        <div className="text-[10px] gap-3 tracking-[0.2em] flex items-center mb-12 uppercase text-[rgba(0,0,0,0.4)]">
                            <span className="h-[1px] w-8 block bg-[rgba(0,0,0,0.4)]"></span>
                            Vamos Começar
                        </div>
                        <div>
                            <h2 className="text-black font-extrabold leading-[1em] mb-8 tracking-[-2px] font-syne text-[clamp(40px,5vw,64px)]">Pronto para <span className="italic font-instrument">começar</span>?</h2>
                        </div>
                    </div>
                    <div className="text-[rgba(0,0,0,0.6)] mb-10 text-[15px] leading-[1.8em] ">Tem um projeto em mente? Me conta a ideia e a gente descobre o melhor caminho juntos.</div>
                    <div>
                        {contatLinks.map((link) => (

                            <a target="_blank" href={link.path} className="contact-link border-t border-t-[rgba(0,0,0,0.15)] flex items-center justify-between py-5 text-[#0a0a0a]" key={link.id}>
                                <div>
                                    <div className="font-syne font-bold text-[18px]">{link.name}</div>
                                    <div className="font-mono text-[rgba(0,0,0,0.5)] text-[12px]">{link.value}</div>
                                </div>
                                <span className="cl-arrow text-[18px]">↗</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="reveal">
                    <EmailForm />
                </div>
            </div>
        </div>
    );
}

export default Contato;