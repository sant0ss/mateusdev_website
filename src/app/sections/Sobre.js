import Image from "next/image";
import profileImage from '../images/profile.PNG';
import { useEffect } from "react";

const skills = [
    {
        id: 1,
        name: 'Frontend',
        porcentagem: 100,
    },
    {
        id: 2,
        name: 'Backend',
        porcentagem: 100,
    },
    {
        id: 3,
        name: 'UX/UI',
        porcentagem: 100,
    },
    {
        id: 4,
        name: 'Perfomace',
        porcentagem: 100,
    }
]

const Sobre = () => {

    useEffect(() => {
        const bars = document.querySelectorAll('.skill-fill');
        const barObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if(e.isIntersecting) {
             e.target.style.width = (parseFloat(e.target.dataset.width)*100)+'%';
             e.target.classList.add('visible');
            }
        });
        }, { threshold: 0.5 });
        bars.forEach(b => { b.style.width = '0'; barObs.observe(b); });
    })

    return(
        <div name="sobre" className="bg-[#111111] border-0 border-t-[#1f1f1f] border-b-[#1f1f1f] md:px-8 lg:px-12 px-5 md:py-30 py-15">
            <div className="container m-auto grid md:gap-20 gap-10 items-center md:grid-cols-2 grid-cols-1">
                <div className="relative reveal p-4">
                    <div>
                        <Image src={profileImage}alt="Profile"width={1000} height={1000} />                
                    </div>
                    <div className="top-0 left-0 absolute px-4.5 py-2.5 leading-[1.6em] tracking-[0.03em] text-[12px] font-bold font-syne text-[#0a0a0a] bg-[#4D9EFF]">Full Stack</div>
                    <div className="bottom-0 right-0 absolute px-4.5 py-2.5 tracking-[0.03em] text-[12px] font-bold font-syne text-[#0a0a0a] bg-[#4D9EFF]">Disponível ✓</div>
                </div>
                <div className="reveal">
                    <div className="text-[10px] gap-3 tracking-[0.2em] flex items-center mb-12 uppercase text-[#4D9EFF]">
                        <span className="h-[1px] w-8 block bg-[#4D9EFF]"></span>
                        Quem sou eu
                    </div>
                    <div>
                        <h2 className="text-white font-extrabold leading-[1em] mb-5 tracking-[-2px] font-syne text-[clamp(36px,5vw,64px)]">Sobre mim</h2>
                    </div>
                    <div>
                        <p className="text-[15px] mb-5 leading-[1.9em] text-[#9a9a90]">Olá! Sou um <strong className="text-[17px] text-white font-instrument italic">desenvolvedor web apaixonado</strong> por criar produtos digitais que realmente funcionam — bonitos por fora, sólidos por dentro.</p>
                        <p className="text-[15px] mb-5 leading-[1.9em] text-[#9a9a90]">Trabalho com o ciclo completo de desenvolvimento, desde a conversa inicial com o cliente até o deploy em produção. Cada projeto recebe atenção total.</p>
                    </div>
                    <div className="mt-10">
                        {skills.map((skill) => (                            
                            <div className="border-t border-b border-[#1f1f1f] flex items-center gap-4 py-3.5 " key={skill.id}>
                                <span className="text-[12px] uppercase tracking-widest shrink-0 text-[#9a9a90]">{skill.name}</span>
                                <div className="h-[2px] relative bg-[#1f1f1f] flex-1">
                                    <div className="skill-fill h-full bg-[#4D9EFF]" data-width={skill.porcentagem / 100} style={{ width: `${skill.porcentagem}%` }}></div>                            
                                </div>
                                <span className="text-[11px] text-right shrink-0 text-[#9a9a90]">{skill.porcentagem}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;