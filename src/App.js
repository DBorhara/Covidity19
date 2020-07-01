import React from 'react';

//Components
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';

//API
import { fetchData } from './api';

//Images
import covidityLogo from './assets/images/logo.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    if (!country) {
      const data = await fetchData();
      this.setState({ data: data });
    } else {
    }
    const data = await fetchData(country);
    this.setState({ data, country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidityLogo} alt="Covidity-19" />
        <Cards data={data} />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
