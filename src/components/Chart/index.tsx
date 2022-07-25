import "./styles.scss"
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import {useRef} from "react";

const options: Highcharts.Options = {
    title: {
        text: ''
    },
    series: [{
        type: 'line',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }]
};

const Chart = (props: HighchartsReact.Props) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
            {...props}
        />
    );
}

export default Chart
