import {useContext} from "react";
import {ExchangesContext} from "../contexts/ExchangesContext";

export function useExchange() {
    return useContext(ExchangesContext)
}
