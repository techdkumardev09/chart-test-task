import { useCallback, useEffect, useMemo, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartEvent,
    LegendItem
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CirclesWithBar } from 'react-loader-spinner';
import { toast } from "react-toastify"
import Error from './Error';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface Dataset {
    label: string;
    data: string[];
    backgroundColor: string;
}
function Chart({ isError, title, labels, dataSets }: { isError: boolean, title: string, labels: string[], dataSets: Dataset[] }) {
    const [isLoading, setIsLoading] = useState(true);

    const toggleLegendClickHandler = useCallback((e: ChartEvent, legendItem: LegendItem, legend: any) => {
        console.log(e)
        let index = legendItem.datasetIndex;
        let indexOther: number = (index === 0) ? 1 : 0;
        const ci = legend.chart;
        if (ci.isDatasetVisible(index)) {
            ci.hide(index);
            legendItem.hidden = true;
            ci.show(indexOther);
        } else {
            ci.show(index);
            legendItem.hidden = false;
            ci.hide(indexOther);
        }
    }, [])

    const data = useMemo(() => ({
        labels: labels,
        datasets: dataSets
    }), [labels, dataSets])

    const options = useMemo(() => ({
        // responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                onClick: toggleLegendClickHandler
            },
            title: {
                display: true,
                text: title
            },
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false
                }
            },
            y: {
                grid: {
                    drawOnChartArea: false
                },
            }
        }
    }), [title])

    useEffect(() => {
        if (isError) {
            toast.error(<Error title={title} />)
            setIsLoading(false)
        }
        if (labels) {
            setIsLoading(false)
        }
        return () => {
            setIsLoading(true)
        }
    }, [labels, isError])

    return (
        <div style={{
            flexGrow: 1,
            flexBasis: '50%',
            padding: 20,
            background: '#ffffff',
            borderRadius: 20,
            boxShadow: '0 0 0 0 #000000',
            position: 'relative',
        }}>
            <div style={{ width: '100%' }}>
                <Bar width={'100%'} height={'500px'} options={options} data={data} />
            </div>

            {isError && <div style={{
                width: 'calc(100% - 40px)',
                height: 'calc(100% - 40px)',
                borderRadius: '20px',
                position: 'absolute',
                top: '20px',
                left: '20px',
                // background: '#00000040',
                display: 'flex',
                flexDirection: 'column',
                placeContent: 'center',
                placeItems: 'center'
            }}>
                <Error title={''} />
            </div>}

            {isLoading && <div style={{
                width: 'calc(100% - 40px)',
                height: 'calc(100% - 40px)',
                borderRadius: '20px',
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: '#00000040',
                display: 'flex',
                placeContent: 'center',
                placeItems: 'center'
            }}>
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#dd7b88"
                    outerCircleColor="#dd7b88"
                    innerCircleColor="#dd7b88"
                    barColor="#dd7b88"
                    ariaLabel="circles-with-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>}
        </div>
    )
}

export default Chart