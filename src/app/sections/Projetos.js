import Button from '../components/Button';

const projectsCreate = [
    {
        id: 1,
        name: "Avila Spaces",
        link: "https://avilaspaces.com/en/",
        about: "Ecossistema de coworking e escritórios virtuais focado em networking e produtividade corporativa.",
        typeCard: 'full'
    },
    {
        id: 2, 
        name: "Douro Azul",
        link: "https://www.douroazul.com/",
        about: "Líder em cruzeiros fluviais no Rio Douro, oferecendo experiências de luxo e turismo em Portugal.",
        typeCard: 'small'
    },
    {
        id: 3, 
        name: "Dolce Travel",
        link: "https://www.dolcetravel.pt/",
        about: "Agência de viagens boutique especializada em roteiros personalizados e experiências exclusivas.",
        typeCard: 'big'
    },
    {
        id: 4,
        name: "Element Gyms",
        link: "https://elementgyms.pt/",
        about: "Rede de ginásios premium com foco em alta performance e experiência de treino personalizada.",
        typeCard: 'big'
    },
    {
        id: 5, 
        name: "Quinta da Ria",
        link: "https://www.quintadaria.com/pt-pt/",
        about: "Resort de golfe de prestígio no Algarve, unindo esporte e preservação ambiental.",
        typeCard: 'small'
    },
    {
        id: 6,
        name: "Vitiagro",
        link: "https://www.vitiagro.pt/",
        about: "Soluções tecnológicas para o setor agrícola, focada em vitivinicultura e sustentabilidade.",
        typeCard: 'full'
    },
    {
        id: 7,
        name: "Junta Freguesia Alcantara",
        link: "https://lavagem.jf-alcantara.pt/",
        about: "Portal de gestão pública e serviços comunitários para a freguesia de Alcântara.",
        typeCard: 'big'
    },
    {
        id: 8,
        name: "J Sobral",
        link: "https://www.jsobralfilhos.pt/",
        about: "Empresa especializada em soluções de infraestrutura e serviços industriais.",
        typeCard: 'small'
    },
    {
        id: 9,
        name: "Solinca",
        link: "https://www.solinca.pt/",
        about: "A maior rede de clubes de saúde e fitness em Portugal, focada em bem-estar e acessibilidade.",
        typeCard: "full"
    },
    {
        id: 10,
        name: "Real Lince Karate",
        link: "https://karatereallince.com.br/",
        about: "Associação dedicada ao ensino do Karate e desenvolvimento de valores sociais através do esporte.",
        typeCard: 'full'
    }
];

const Projetos = () => {
    return(
        <div name='projetos' className="md:px-8 lg:px-12 px-5 md:py-30 py-15 bg-black">
            <div className='container m-auto'>
                <div className="flex md:flex-row flex-col justify-between mb-16 md:items-end items-start reveal">
                    <div>
                        <div className="text-[10px] tracking-[0.2em] gap-3 flex items-center mb-12 uppercase text-[#4D9EFF]">
                            <span className="h-[1px] w-8 block bg-[#4D9EFF]"></span>
                            Trabalhos selecionados
                        </div>
                        <h2 className="text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-[-2px] text-white font-syne mb-5">Projetos</h2>
                    </div>
                    <div>
                        <Button text={"Quero um projeto →"} classCss={"btn-secondary"} path={"contato"}/>
                    </div>
                </div>
                <div className='grid gap-1 grid-cols-12'>
                    {projectsCreate.map((project) => (
                        <a key={project.id} href={project.link} target='_blank' rel="noopener noreferrer" className={`project-card reveal bg-[#111111] p-10 relative overflow-hidden block border-[#1f1f1f] border ${project.typeCard}`} >
                            <div className='project-img bg-linear-to-r from-[#1a1a1a] to-[#0f0f0f] opacity-50 absolute w-full h-full top-0 left-0'></div>
                            <div className='z-2 relative'>
                                <div className='text-[11px] mb-8 tracking-[0.15em] text-[#9a9a90]'>0{project.id}</div>                               
                                <div className='text-white font-syne font-extrabold tracking-[-1px] mb-3 leading-[1.1em] text-[28px]'>{project.name}</div>
                                <div className='text-[13px] max-w-[380px] leading-[1.7em] text-[#9a9a90]'>{project.about}</div>
                            </div>
                            <div className='absolute top-8 text-[#e8e8e0] right-8 text-[20px] opacity-30 project-arrow'>↗</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projetos;