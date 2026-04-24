import './css/globals.css'
import { dmMono, syne, instrumentSerif } from '@/fonts/fonts';

export const metadata = {
  title: 'Mateus Santos - DevWeb',
  description: 'Desenvolvedor Full Stack, UI e UX Designer apaixonado por criar experiências digitais excepcionais. Combino funcionalidade robusta com design cativante para entregar projetos de alta qualidade.',
  keywords: 'Desenvolvedor Full Stack, Desenvolvimento Web, Front-end, Back-end, UI Design, UX Design, Design Responsivo, Prototipagem, HTML5, CSS3, JavaScript, React.js, Node.js, PHP, Banco de Dados, Usabilidade, Teste de Usuário, Wireframing, Experiência do Cliente, Portfolio Online',
  author: 'Mateus Santos',
  robots: 'index, follow'
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR' className={`${dmMono.variable} ${syne.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel='icon' href='/favicon.svg' />
      </head>
      <body className='font-mono' suppressHydrationWarning>{children}</body>
    </html>
  )
}
