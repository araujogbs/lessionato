// routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Importe seus componentes de página
import { Home } from './pages/home/Index';
import { Cursos } from './pages/cursos/Index';
import { Quemsomos } from './pages/quem somos/Index';
import { PoliticaDePrivacidade } from './pages/politica de privacidade/Index';
import { PoliticaDeCookies } from './pages/politica de cookies/Index';
import { RegraseCondicoes } from './pages/regras e condicoes/Index';
import { Certificado } from './pages/certificado/Index';
import { FAQ } from './pages/FAQ/Index';
import { Login } from './pages/Login/Index';
import Cadastro from './pages/Cadastro/Index';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/lessionato",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/lessionato/cursos",
    element: (
      <>
        <ScrollToTop />
        <Cursos />
      </>
    ),
  },
  {
    path: "/lessionato/quem-somos",
    element: (
      <>
        <ScrollToTop />
        <Quemsomos />
      </>
    ),
  },
  {
    path: "/lessionato/politica-de-privacidade",
    element: (
      <>
        <ScrollToTop />
        <PoliticaDePrivacidade />
      </>
    ),
  },
  {
    path: "/lessionato/politica-de-cookies",
    element: (
      <>
        <ScrollToTop />
        <PoliticaDeCookies />
      </>
    ),
  },
  {
    path: "/lessionato/regras-e-condicoes",
    element: (
      <>
        <ScrollToTop />
        <RegraseCondicoes />
      </>
    ),
  },
  {
    path: "/lessionato/FAQ",
    element: (
      <>
        <ScrollToTop />
        <FAQ />
      </>
    ),
  },
  {
    path: "/lessionato/certificado",
    element: (
      <>
        <ScrollToTop />
        <Certificado />
      </>
    ),
  },
  {
    path: "/lessionato/login",
    element: (
      <>
        <ScrollToTop />
        <Login />
      </>
    ),
  },
  {
    path: "/lessionato/cadastro",
    element: (
      <>
        <ScrollToTop />
        <Cadastro />
      </>
    ),
  },
]);

export { router };
