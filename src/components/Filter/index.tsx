import "./styles.scss"

const Filter = () => {
    function changeStatus(type: string) {
        if (type === "high") {
            console.log("Mudar para ações em alta")
        } else {
            console.log("Mudar para ações em baixa")
        }
    }

    return (
        <div className="filter">
            <span className="order">Ordenar: </span>
            <button className="btnHigh" onClick={ () => changeStatus('high') }>Em alta</button>
            <button className="btnLow"  onClick={ () => changeStatus('low') }>Em baixa</button>
        </div>

    )
}

export default Filter
