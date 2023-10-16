import './exibePerfil.css';

function ExibePerfil({nome, img, ano}){
    
    return(
        <div>
            <figure className='container'>
            <img className="img-exibe-perfil" src={img} alt={nome}/>
            <figcaption>Destaque</figcaption>
            </figure>
            <h3>{nome}</h3>
            <h3>{ano}</h3>
        </div>
    )
}

export default ExibePerfil;