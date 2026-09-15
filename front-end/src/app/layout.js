import { Montserrat } from 'next/font/google'

import { GlobalStyles } from "@/styles/globalStyles";
import { Container, Main } from './styles'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar';

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
          <Sidebar />
          <Main>
            {children}
          </Main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
