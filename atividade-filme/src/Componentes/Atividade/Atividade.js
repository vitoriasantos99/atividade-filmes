import ShrekPerfil from '../../Imagens/shrek-1.jpg'
import VivaPerfil from '../../Imagens/viva a vida.jpg'
import IrmaoPerfil from '../../Imagens/irmao urso.jpg'
import BeePerfil from '../../Imagens/bee movie.jpg'
import FestaPerfil from '../../Imagens/festa no ceu.jpg'
import PrincesaPerfil from '../../Imagens/princesa e o sapo.jpg'
import EuPerfil from '../../Imagens/eu nunca.jpg'
import GoodPerfil from '../../Imagens/good.jpg'
import StrangerPerfil from '../../Imagens/stranger.jpg'
import ChambersPerfil from '../../Imagens/chambers.jpg'
import GrimmPerfil from '../../Imagens/grimm.jpg'
import DramaPerfil from '../../Imagens/drama total.jpg'
import Equipe from '../Equipe/Equipe'
import Footer from '../Footer/Footer'
// import Header from '../Header/Header'
import ExibePerfil from '../ExibePerfil/ExibePerfil'
import "./Atividade.css"


function Atividade() {
    const filme = [
        {nome: "Shrek 1", imagem: ShrekPerfil, ano: "2001"},
        {nome: "Viva a vida é uma festa", imagem: VivaPerfil, ano: "2017"},
        {nome: "Irmão Urso", imagem: IrmaoPerfil, ano: "2003"},
        {nome: "Bee Movie", imagem: BeePerfil, ano: "2007"},
        {nome: "Festa no Céu", imagem: FestaPerfil, ano: "2014"},
        {nome: "Princesa e o sapo", imagem: PrincesaPerfil, ano: "2009"},
    ]

    const serie = [
        {nome: "Eu Nunca", imagem: EuPerfil, ano: "2020"},
        {nome: "The Good Place", imagem: GoodPerfil, ano: "2016"},
        {nome: "Stranger Things", imagem: StrangerPerfil, ano: "2016"},
        {nome: "Chambers", imagem: ChambersPerfil, ano: "2019"},
        {nome: "Grimm: Contos de Terror", imagem: GrimmPerfil, ano: "2011"},
        {nome: "Drama total", imagem: DramaPerfil, ano: "2007"},
    ]

    return(
        <main>
            <Equipe titulo={"Filmes"} listaP={filme}/>
            <Equipe titulo={"Séries"} listaP={serie}/>
        </main>
    )
}

export default Atividade;

