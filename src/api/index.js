import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let dynamicURL = url;

  if (country) {
    dynamicURL = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dynamicURL);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.error(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    console.error(error);
  }
};

export const getCountryNames = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => {
      return country.name;
    });
  } catch (error) {
    console.error(error);
  }
};
