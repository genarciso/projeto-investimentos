import Header from "../../components/Header";
import Dashboard from "../../components/Dashboard";
import {arrayExchangesMock, ExchangeService} from "../../services/ExchangeService";
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import About from "../About";

export const Main = () => {
    const mockData = arrayExchangesMock;
    const { addData } = ExchangeService();

    useEffect(() => {
        mockData.forEach(item => {
            addData(item)
        })
    }, [])


    return (
        <Routes>
            <Route path="/" element= {
                <Dashboard>
                    <Header></Header>
                </Dashboard>}
            />

            <Route path="/about" element={<About/>} />
        </Routes>

    )
}
