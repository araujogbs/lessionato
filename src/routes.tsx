import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home/Index'
import { Cursos } from './pages/cursos/Index'
import { Quemsomos } from './pages/quem somos/Index'
import { PoliticaDePrivacidade } from './pages/politica de privacidade/Index'
import { PoliticaDeCookies } from './pages/politica de cookies/Index'
import { RegraseCondicoes } from './pages/regras e condicoes/Index'
import {FAQ} from './pages/FAQ/Index'


const router = createBrowserRouter([
{
    path: "/lessionato",
    element: <Home/> 
},
{
    path: "/lessionato/cursos",
    element: <Cursos/> 
},

{
    path: "/lessionato/quem-somos",
    element: <Quemsomos/> 
},

{
    path: "/lessionato/politica-de-privacidade",
    element: <PoliticaDePrivacidade/>
},

{
    path: "/lessionato/politica-de-cookies",
    element: <PoliticaDeCookies/>
},

{
    path: "/lessionato/regras-e-condicoes",
    element: <RegraseCondicoes/>
},

{
    path: "/lessionato/FAQ",
    element: <FAQ/>
}






])

export { router };