import ExibePerfil from '../ExibePerfil/ExibePerfil';
import './equipe.css';

function Equipe({titulo, listaP}){
    return(
        <>
        <div className='titulo'>
        <h1>{titulo}</h1>
        </div>
        
        <div className='div-exibe'>
            {listaP.map((p) => 
                <ExibePerfil nome={p.nome} img={p.imagem} ano={p.ano}/>
            )} 
        </div>
        </>
    )
}

export default Equipe;