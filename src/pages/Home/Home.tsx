import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Cards, Chart, StatePicker } from '../../components';

import { fetchDataBrazil } from '../../api';

import styles from './Home.module.css';
import coronaImage from '../../assets/corona.png';

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

interface LocationUrl {
  pathname: string;
}

const Home: React.FC = () => {
  const [dataBr, setDataBr] = useState<FetchBrazil | null>(null);
  const location = useLocation<LocationUrl>();

  const dataUfDefault: FetchState[] = [
    {
      uf: '',
      ufConfirmed: 0,
      ufRecovered: 0,
      ufDeaths: 0,
      ufDate: 0,
    },
  ];

  useEffect(() => {
    const fetchAPI = async () => {
      setDataBr(await fetchDataBrazil());
    };
    fetchAPI();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      <Cards brData={dataBr} ufData={dataUfDefault} currentUrl={location} />
      <StatePicker />
      <Chart brData={dataBr} ufData={dataUfDefault} currentUrl={location} />
    </div>
  );
};

export default Home;
