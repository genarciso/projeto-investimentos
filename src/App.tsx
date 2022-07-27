import './App.scss'
import {Main} from "./pages/Main";
import ExchangesContextProvider from "./contexts/ExchangesContext";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <ExchangesContextProvider >
                    <Main />
                </ExchangesContextProvider>
            </BrowserRouter>

        </div>
    )
}

export default App
