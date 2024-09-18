import Butao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
    const times = [
        "programação",
        "design",
        "front-end",
        "back-end",
        "data science",
    ];
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto label="Nome" placeholder="digite seu nome" />
                <CampoTexto label="Cargo" placeholder="digite seu cargo" />
                <CampoTexto
                    label="Imagem"
                    placeholder="digite o endereço da imagem"
                />
                <ListaSuspensa label="Time" itens={times} />
                <Butao>criar card</Butao>
            </form>
        </section>
    );
};
export default Formulario;
