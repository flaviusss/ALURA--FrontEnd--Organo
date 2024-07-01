import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Colaborador.css'

const Colaborador = ({ id, favorito = false, nome, imagem, cargo, corDeFundo, aoDeletar, aoFavoritar }) => {

    const favoritar = _ => {
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle
                size={25}
                className="deletar"
                onClick={() => aoDeletar(id)}
            />
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {favorito
                        ? <AiFillHeart className="fav-icon" {...propsFavorito} color="#ff0000" />
                        : <AiOutlineHeart className="fav-icon" {...propsFavorito} />}
                </div>
            </div>
        </div>
    )
}

export default Colaborador