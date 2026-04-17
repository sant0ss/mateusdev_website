import Button from '../components/Button';

const stacks = [
    'HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL',
    'WordPress', 'Elementor', 'Bootstrap', 'React', 'React Native', 'Flutter',
    'GIT', 'Docker', 'jQuery', 'Angular', 'Python', 'Java',
    'C', 'C#', 'Django', 'Spring Boot', 'Node.js'
];

const Hero = () => {
    return(
        <div name="home" className='md:px-8 lg:px-12 px-5 py-30 pb-20 min-h-screen flex items-ce bg-black'>
            <div className='container m-auto grid md:grid-cols-2 grid-cols-1 text-white gap-10 items-center'>
                <div className='hero-bg-grid'></div>
                <div>
                    <div className='fade-in mb-6.5 inline-flex text-[#5a5a52] gap-2 tracking-widest text-[11px] uppercase px-3.5 py-1.5 py items-center border border-[#1f1f1f]'>
                        <span className='bg-[#c8f562] pulse w-1.5 h-1.5 rounded-full'></span>
                        Disponível para novos projetos
                    </div>
                    <div>
                        <h1 className="hero-title">
                            <span className="line"><span>Eu crio</span></span>
                            <span className="line"><span className="accent">experiências</span></span>
                            <span className="line"><span className="outline">digitais.</span></span>
                        </h1>
                    </div>
                    <div className='max-w-[420px]'>
                        <p className='text-[14px] leading-[1.8] text-[#5a5a52] mb-10 fade-in'>Desenvolvedor web focado em criar sites rápidos, modernos e com atenção obsessiva a cada detalhe. Do design à entrega.</p>
                    </div>
                    <div className='flex gap-4 fade-in'>
                        <Button classCss={'btn-primary'} text={"Ver projetos"} path={"projetos"}/>
                        <Button classCss={'btn-secondary'} text={"Contato"} path={"contato"}/>
                    </div>
                </div>
                <div className='flex flex-col gap-6 items-end fade-in'>
                    <div className='bg-[#111111] border border-[#1f1f1f] p-6.5 md:max-w-[340px] max-w-full w-full'>
                        <div className='text-[10px] mb-2.5 uppercase text-[#5a5a52]'>Anos de experiência</div>
                        <div className='text-[48px] leading-none text-[#c8f562] font-extrabold font-syne'>3+</div>
                        <div className='text-[12px] mt-1.5 text-[#5a5a52]'>Projetos entregues com qualidade</div>
                    </div>
                    <div className='bg-[#111111] border border-[#1f1f1f] p-6.5 md:max-w-[340px] max-w-full w-full'>
                        <div className='text-[10px] mb-2.5 uppercase text-[#5a5a52]'>Stack principal</div>
                        <div className='flex flex-wrap gap-2'>
                            {stacks.map((stack) => (
                                <span className='text-[#5a5a52] text-[11px] px-3 py-1 tracking-wider border border-[#1f1f1f]' key={stack}>{stack}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;