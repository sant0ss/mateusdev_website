"use client"

import Hero from './Hero';
import Marquee from './Marquee';
import Projetos from './Projetos';
import Sobre from './Sobre';
import Servicos from './Servicos';
import Contato from './Contato';

const Main = () => {

    return (
        <div>
            {/* Hero */}
            <Hero />
            {/*MARQUEE*/}
            <Marquee />
            {/* PROJETOS */}
            <Projetos />
            {/* SOBRE */}
            <Sobre />
            {/* SERVICOS */}
            <Servicos />
            {/* CONTATO */}
            <Contato />
        </div>
    );

};

export default Main;
