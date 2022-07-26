import "./styles.scss"
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import {useState} from "react";

const Chart = (props: HighchartsReact.Props) => {
    const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
        title: {
            text: ''
        },
        yAxis: {
            title: ''
        },
        xAxis: {
            categories: ['A', 'B', 'C'],
        },
        series: [
            { data: [1, 2, 3] }
        ],

    } as Highcharts.Options);

    return (
        <div className="chart">
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                {...props}
            />
        </div>
    );
}

export default Chart
