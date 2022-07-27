import "./styles.scss"
import Chart from "../Chart";
import {IExchange} from "../../models/IExchange";

interface ICard {
    exchange: IExchange
}

const Card = ( props: ICard ) => {
    return (
        <div className="card">
            <strong className="titleCard">
                { `${props.exchange.name} - ${props.exchange.tag}` }
            </strong>
            <Chart className="chartCard" exchange={props.exchange} ></Chart>
        </div>

    )
}

export default Card
