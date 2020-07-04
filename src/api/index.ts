import axios from 'axios';

interface FetchBrazil {
  brConfirmed: number;
  brRecovered: number;
  brDeaths: number;
  brDate: number;
}

interface FetchState {
  provinceState: string;
  confirmed: number;
  recovered: number;
  deaths: number;
  lastUpdate: number;
}

interface ModifiedFetchState {
  uf: string;
  ufConfirmed: number;
  ufRecovered: number;
  ufDeaths: number;
  ufDate: number;
}

const url = 'https://covid19.mathdro.id/api/countries/brazil';

export const fetchDataBrazil = async (): Promise<FetchBrazil> => {
  try {
    const {
      data: {
        confirmed: { value: brConfirmed },
        recovered: { value: brRecovered },
        deaths: { value: brDeaths },
        lastUpdate: brDate,
      },
    } = await axios.get(url);

    return { brConfirmed, brRecovered, brDeaths, brDate };
  } catch (error) {
    console.log(error);
    return error;
  }
};

// eslint-disable-next-line consistent-return
export const fetchStateData = async (
  estado: string,
): Promise<ModifiedFetchState[]> => {
  try {
    const { data } = await axios.get(`${url}/confirmed`);

    const modifiedData = data.map((state: FetchState) => ({
      uf: state.provinceState.split(' ').join('').toLowerCase(),
      ufConfirmed: state.confirmed,
      ufRecovered: state.recovered,
      ufDeaths: state.deaths,
      ufDate: state.lastUpdate,
    }));

    const stateData = modifiedData.filter(
      (ufFiltered: ModifiedFetchState) => ufFiltered.uf === estado,
    );

    return stateData;
  } catch (error) {
    console.log(error);
    return error;
  }
};
