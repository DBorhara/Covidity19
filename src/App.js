import React from 'react';

//Components
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';

//API
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data});
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountrySelector />
        <Chart />
      </div>
    );
  }
}

export default App;
