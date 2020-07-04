/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, MouseEvent } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Grid } from '@material-ui/core';

import { Cards, Chart } from '../../components';
import { fetchStateData } from '../../api';

import styles from './MapDetail.module.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import coronaImage from '../../assets/corona.png';

const stylesMap = require('./stylesMap.css');

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    estado?: string;
  }
}

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

interface StateClick {
  uf: string;
  estado: string;
}

const MapDetail: React.FC = () => {
  const [dataUf, setDataUf] = useState<FetchState[]>([]);
  const [stateClick, setStateClick] = useState<StateClick | null>(null);
  const location = useLocation<LocationUrl>();

  const dataBrazilDefault: FetchBrazil = {
    brConfirmed: 0,
    brRecovered: 0,
    brDeaths: 0,
    brDate: 0,
  };

  useEffect(() => {
    const fetchAPIUF = async () => {
      setDataUf(await fetchStateData(stateClick?.uf ?? ''));
    };
    fetchAPIUF();
  }, [stateClick]);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID" />
      <Cards brData={dataBrazilDefault} ufData={dataUf} currentUrl={location} />

      <Grid container justify="center">
        <Grid
          container
          item
          justify="space-between"
          alignItems="center"
          xs={12}
          md={5}
        >
          {stateClick?.estado && <h1>{stateClick.estado}</h1>}
          <Link to="/">
            <FiChevronLeft size={20} />
            Voltar
          </Link>
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={10}
          justify="space-evenly"
          alignItems="center"
        >
          <ul id="map">
            <li
              onClick={(e: MouseEvent<HTMLElement>) =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="crs"
              estado="rs"
              title="riograndedosul"
              data-value="Rio Grande do Sul"
            >
              <a href="#" id="rs">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="csc"
              estado="sc"
              title="santacatarina"
              data-value="Santa Catarina"
            >
              <a href="#" id="sc">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cpr"
              estado="pr"
              title="parana"
              data-value="Paraná"
            >
              <a href="#" id="pr">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="csp"
              estado="sp"
              title="saopaulo"
              data-value="São Paulo"
            >
              <a href="#" id="sp">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cms"
              estado="ms"
              title="matogrossodosul"
              data-value="Mato Grosso do Sul"
            >
              <a href="#" id="ms">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="crj"
              estado="rj"
              title="riodejaneiro"
              data-value="Rio de Janeiro"
            >
              <a href="#" id="rj">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="ces"
              estado="es"
              title="espiritosanto"
              data-value="Espírito Santo"
            >
              <a href="#" id="es">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cmg"
              estado="mg"
              title="minasgerais"
              data-value="Minas Gerais"
            >
              <a href="#" id="mg">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cgo"
              estado="go"
              title="goias"
              data-value="Goiás"
            >
              <a href="#" id="go">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cdf"
              estado="df"
              title="distritofederal"
              data-value="Distrito Federal"
            >
              <a href="#" id="df">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cba"
              estado="ba"
              title="bahia"
              data-value="Bahia"
            >
              <a href="#" id="ba">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cmt"
              estado="mt"
              title="matogrosso"
              data-value="Mato Grosso"
            >
              <a href="#" id="mt">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cro"
              estado="ro"
              title="rondonia"
              data-value="Rondônia"
            >
              <a href="#" id="ro">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cac"
              estado="ac"
              title="acre"
              data-value="Acre"
            >
              <a href="#" id="ac">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cam"
              estado="am"
              title="amazonas"
              data-value="Amazonas"
            >
              <a href="#" id="am">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="crr"
              estado="rr"
              title="roraima"
              data-value="Roraima"
            >
              <a href="#" id="rr">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cpa"
              estado="pa"
              title="para"
              data-value="Pará"
            >
              <a href="#" id="pa">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cap"
              estado="ap"
              title="amapa"
              data-value="Amapá"
            >
              <a href="#" id="ap">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cma"
              estado="ma"
              title="maranhao"
              data-value="Maranhão"
            >
              <a href="#" id="ma">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cto"
              estado="to"
              title="tocantins"
              data-value="Tocantins"
            >
              <a href="#" id="to">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cse"
              estado="se"
              title="sergipe"
              data-value="Sergipe"
            >
              <a href="#" id="se">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cal"
              estado="al"
              title="alagoas"
              data-value="Alagoas"
            >
              <a href="#" id="al">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cpe"
              estado="pe"
              title="pernambuco"
              data-value="Pernambuco"
            >
              <a href="#" id="pe">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cpb"
              estado="pb"
              title="paraiba"
              data-value="Paraíba"
            >
              <a href="#" id="pb">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="crn"
              estado="rn"
              title="riograndedonorte"
              data-value="Rio Grande do Norte"
            >
              <a href="#" id="rn">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cce"
              estado="ce"
              title="ceara"
              data-value="Ceará"
            >
              <a href="#" id="ce">
                <span />
              </a>
            </li>
            <li
              onClick={e =>
                setStateClick({
                  uf: e.currentTarget.getAttribute('title') ?? '',
                  estado: e.currentTarget.getAttribute('data-value') ?? '',
                })
              }
              role="presentation"
              id="cpi"
              estado="pi"
              title="piaui"
              data-value="Piauí"
            >
              <a href="#" id="pi">
                <span />
              </a>
            </li>
          </ul>
          <Chart
            brData={dataBrazilDefault}
            ufData={dataUf}
            currentUrl={location}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MapDetail;
