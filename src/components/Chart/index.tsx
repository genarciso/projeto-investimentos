import "./styles.scss"
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import {useEffect, useState} from "react";
import {IExchange} from "../../models/IExchange";

interface IChart {
    exchange: IExchange,
    props?: HighchartsReact.Props
}

const Chart = (props: IChart ) => {
    const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
        title: {
            text: ''
        },
        yAxis: {
            title: {
                text: "Valor"
            },
        },
        xAxis: {
            type: "datetime",
            title: {
                text: 'Tempo'
            },
            categories: [],
        },
        series: [
            { data: [] }
        ],

    } as Highcharts.Options);

    const formateDate = (date: Date) => {
        return `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    useEffect(()=> {
        setChartOptions(prevState => {
            return {
                ...prevState,
                series: [{
                    name: props.exchange.tag,
                    data: props.exchange.values.map((item) => item.value)
                }], xAxis: {
                    categories: props.exchange.values.map((item) =>  formateDate(new Date(item.timestamp))),
                }
            } as Highcharts.Options
        })
    }, [props.exchange])

    return (
        <div className="chart">
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                {...props.props}
            />
        </div>
    );
}

export default Chart
