import "./styles.scss"
import Filter from "../Filter";
import Card from "../Card";

const Dashboard = ({children}) => {
    return (
        <>
            {children}
            <main className="dashboard">
                <div className="title-dashboard">
                    <h1 className="title-h1">Explore o mercado</h1>
                    <Filter></Filter>
                </div>
                <div className="cards">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>

            </main>
        </>


    )
}

export default Dashboard
