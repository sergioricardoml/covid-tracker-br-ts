import React from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

interface FetchBrazil {
  brConfirmed: number;
  brRecovered: number;
  brDeaths: number;
  brDate: number;
}

interface FetchState {
  uf: string;
  ufConfirmed: number;
  ufRecovered: number;
  ufDeaths: number;
  ufDate: number;
}

interface UrlPathname {
  pathname: string;
}

interface PropsFetched {
  brData: FetchBrazil | null;
  currentUrl: UrlPathname;
  ufData: FetchState[];
}

const Chart: React.FC<PropsFetched> = (props: PropsFetched) => {
  const { brData, currentUrl, ufData } = props;
  const { pathname } = currentUrl;

  if (!ufData[0] || !brData) {
    return null;
  }

  const { brConfirmed, brRecovered, brDeaths, brDate } = brData;
  const { ufConfirmed, ufRecovered, ufDeaths, ufDate } = ufData[0];

  const barChartBrazil = brConfirmed ? (
    <Bar
      height={400}
      width={600}
      data={{
        labels: [
          `Números da COVID-19 no Brasil, última atualização às ${new Date(
            brDate,
          ).toLocaleTimeString()} do dia ${new Date(
            brDate,
          ).toLocaleDateString()}`,
        ],
        datasets: [
          {
            label: 'Infectados',
            backgroundColor: ['rgba(62, 193, 65, 0.6)'],
            borderWidth: 2,
            borderColor: ['rgba(62, 193, 65, 0.6)'],
            hoverBorderColor: ['rgba(62, 193, 65, 1)'],
            data: [brConfirmed],
          },
          {
            label: 'Recuperados',
            backgroundColor: ['rgba(65, 62, 193, 0.6)'],
            borderWidth: 2,
            borderColor: ['rgba(65, 62, 193, 0.6)'],
            hoverBorderColor: ['rgba(65, 62, 193, 1)'],
            data: [brRecovered],
          },
          {
            label: 'Óbitos',
            backgroundColor: ['rgba(193, 65, 62, 0.6)'],
            borderWidth: 2,
            borderColor: ['rgba(193, 65, 62, 0.6)'],
            hoverBorderColor: ['rgba(193, 65, 62, 1)'],
            data: [brDeaths],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: `Números atuais da COVID-19 no Brasil` },
      }}
    />
  ) : null;

  const barChartState = ufConfirmed ? (
    <Bar
      height={300}
      width={500}
      data={{
        labels: [
          `Números da COVID-19, última atualização às ${new Date(
            ufDate,
          ).toLocaleTimeString()} do dia ${new Date(
            ufDate,
          ).toLocaleDateString()}`,
        ],
        datasets: [
          {
            label: 'Infectados',
            backgroundColor: ['rgba(62, 193, 65, 0.5)'],
            borderWidth: 2,
            borderColor: ['rgba(62, 193, 65, 0.5)'],
            hoverBorderColor: ['rgba(62, 193, 65, 1)'],
            data: [ufConfirmed],
          },
          {
            label: 'Recuperados',
            backgroundColor: ['rgba(65, 62, 193, 0.5)'],
            borderWidth: 2,
            borderColor: ['rgba(65, 62, 193, 0.5)'],
            hoverBorderColor: ['rgba(65, 62, 193, 1)'],
            data: [ufRecovered],
          },
          {
            label: 'Óbitos',
            backgroundColor: ['rgba(193, 65, 62, 0.5)'],
            borderWidth: 2,
            borderColor: ['rgba(193, 65, 62, 0.5)'],
            hoverBorderColor: ['rgba(193, 65, 62, 1)'],
            data: [ufDeaths],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: {
          display: true,
          text: `Números atuais da COVID-19 nos Estados brasileiros`,
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {pathname === '/estados' ? barChartState : barChartBrazil}
    </div>
  );
};

export default Chart;
