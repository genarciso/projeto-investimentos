import "./styles.scss"
import Filter from "../Filter";
import {useExchange} from "../../hooks/ExchangeHook";
import Card from "../Card";
import {useMemo} from "react";

const Dashboard = ({children}) => {
    const { exchanges } = useExchange()

    const cardsList = useMemo(() => {
        return (exchanges.map( (item) => <Card key={item.tag} exchange={item} ></Card>))
    }, [exchanges] )

    return (
        <>
            {children}
            <main className="dashboard">
                <div className="title-dashboard">
                    <h1 className="title-h1">Explore o mercado</h1>
                    <Filter></Filter>
                </div>
                <div className="cards">
                    {
                        cardsList
                    }
                </div>

            </main>
        </>


    )
}

export default Dashboard
