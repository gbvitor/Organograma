import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = (props) => {
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
            </form>
        </section>
    );
};
export default Formulario;
