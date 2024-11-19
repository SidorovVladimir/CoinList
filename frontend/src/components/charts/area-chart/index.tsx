import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';
import moment from 'moment';
import { IAreaChartProps } from '../../../common/types/assets';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: { display: false, grid: { display: false } },
    y: { display: false, grid: { display: false } },
  },
  plugins: {
    legend: {
      // position: 'top' as const,
      display: false,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const AreaChart = (props: IAreaChartProps) => {
  const { data } = props;
  const values = {
    labels: data.map((element: number[]): string =>
      moment(element[0]).format('DD.MM.YY')
    ),
    datasets: [
      {
        fill: true,
        label: 'Цена',
        // data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        // borderColor: 'rgb(53, 162, 235)',
        data: data.map((element: number[]): number => {
          return element[1] as number;
        }),
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, '#C1EF00');
          gradient.addColorStop(1, '#232323');
          return gradient;
        },
      },
    ],
  };
  return <Line options={options} data={values} width={300} height={100} />;
};

export default AreaChart;
