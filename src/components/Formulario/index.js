import Butao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

import { useState } from "react";

const Formulario = () => {
    const times = [
        "programação",
        "design",
        "front-end",
        "back-end",
        "data science",
    ];
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const aoSalvar = (e) => {
        e.preventDefault();
        console.log(nome, cargo, imagem);
    };
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto
                    aoAlterado={(valor) => setNome(valor)}
                    obrigatorio={true}
                    value={nome}
                    label="Nome"
                    placeholder="digite seu nome"
                />
                <CampoTexto
                    aoAlterado={(valor) => setCargo(valor)}
                    obrigatorio={true}
                    value={cargo}
                    label="Cargo"
                    placeholder="digite seu cargo"
                />
                <CampoTexto
                    aoAlterado={(valor) => setImagem(valor)}
                    label="Imagem"
                    value={imagem}
                    placeholder="digite o endereço da imagem"
                />
                <ListaSuspensa required={true} label="Time" itens={times} />
                <Butao onSubmit={aoSalvar}>criar card</Butao>
            </form>
        </section>
    );
};
export default Formulario;
