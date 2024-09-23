import "./CampoTexto.css";

const CampoTexto = (props) => {
    // Adicione aqui o código para capturar e disparar o evento ao alterar o valor do input

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value);
    };
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                onChange={aoDigitado}
                value={props.valor}
                type="text"
                required={props.obrigatorio}
                placeholder={props.placeholder}
            ></input>
        </div>
    );
};

export default CampoTexto;
