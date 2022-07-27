import {useExchange} from "../hooks/ExchangeHook";
import {IExchange} from "../models/IExchange";

export const arrayExchangesMock: IExchange[] = [{
    name: "Petrobras",
    tag: "PETR4",
    values: [{
        value: 28,
        timestamp: Date.UTC(2022, 0, 1)
    }, {
        value: 29.80,
        timestamp: Date.now()
    }, {
        value: 31.20,
        timestamp: Date.now()
    }],
    status: "High"
}, {
    name: "Vale",
    tag: "VALE3",
    values: [{
        value: 70.16,
        timestamp: Date.now()
    }, {
        value: 70.36,
        timestamp: Date.now()
    }, {
        value: 70.27,
        timestamp: Date.now()
    }],
    status: "High"
}, {
    name: "Magazine Luiza",
    tag: "MGLU3",
    values: [{
        value: 14.12,
        timestamp: Date.now()
    }, {
        value: 5.80,
        timestamp: Date.now()
    }, {
        value: 2.3,
        timestamp: Date.now()
    }],
    status: "Low"
}]

export const ExchangeService = () => {
    const { exchanges, createExchange, updateExchange } = useExchange()

    const addData = (item) => {
        if (exchanges.findIndex((exchange) => exchange.tag === item.tag) < 0) {
            createExchange(item)
        } else {
            updateExchange(item)
        }

    }

    return { addData }

}
