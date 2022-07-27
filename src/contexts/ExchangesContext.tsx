import {createContext, useMemo, useState} from "react";
import {IExchange} from "../models/IExchange";

export interface IExchangeContext {
    exchanges: IExchange[],
    createExchange: (exchange: IExchange) => void,
    updateExchange: (exchange: IExchange) => void
}

export const ExchangesContext = createContext<IExchangeContext>({} as IExchangeContext);

const ExchangesContextProvider = ({ children }) => {
    const [exchanges, setExchanges] = useState<IExchange[]>([]);

    const createExchange = (exchange: IExchange) => {
        setExchanges(prevState =>  [...prevState, exchange]);
    }

    const updateExchange = (exchange: IExchange) => {
        const index = exchanges.findIndex(value => value.tag === exchange.tag);
        if (index > -1) {
            const newExchanges = exchanges;
            newExchanges[index] = exchange;
            setExchanges([...newExchanges]);
        }
    }

    const contextValue = useMemo(() => ({
        exchanges, createExchange, updateExchange
    } as IExchangeContext), [exchanges]);

    return (
        <ExchangesContext.Provider value={contextValue}>
            { children }
        </ExchangesContext.Provider>
    )
}

export default ExchangesContextProvider;
