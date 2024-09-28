import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
    const times = [
        {
            nome: "Programação",
            corPrimaria: "#57c278",
            corSecundaria: "#d9f7e9",
        },
        {
            nome: "Design",
            corPrimaria: "#82cffa",
            corSecundaria: "#E8F8FF",
        },
        {
            nome: "Front-end",
            corPrimaria: "#a6d157",
            corSecundaria: "#f0f8e2",
        },
        {
            nome: "Back-end",
            corPrimaria: "#db6ebf",
            corSecundaria: "#fae9f5",
        },
    ];
    const [colaboradores, setColaboradores] = useState([]);
    const aoNovoColaboradorCadastrado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };
    return (
        <div className="App">
            <Banner />
            <Formulario
                times={times.map((time) => time.nome)}
                aoColaboradorCadastrado={(colaborador) =>
                    aoNovoColaboradorCadastrado(colaborador)
                }
            />
            {times.map((time) => (
                <Time
                    key={time.nome}
                    nome={time.nome}
                    corPrimaria={time.corPrimaria}
                    corSecundaria={time.corSecundaria}
                    colaboradores={colaboradores.filter(
                        (colaborador) => colaborador.time === time.nome
                    )}
                />
            ))}
            <Rodape />
        </div>
    );
}

export default App;
