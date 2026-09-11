import { Montserrat } from 'next/font/google'

import { GlobalStyles } from "@/styles/globalStyles";
import { Container, Main } from './styles'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Nav } from '@/components/nav';
import { Title } from '@/components/title';

const MontserratSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin']
})

export const metadata = {
  title: "Pamafa",
  description: "Projeto criado para etapa técnica da Pamafa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${MontserratSans.variable}`}>
      <body>
        <GlobalStyles />
        <Container>
          <Header />
          <Nav />
          <Main>
            {children}
          </Main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
