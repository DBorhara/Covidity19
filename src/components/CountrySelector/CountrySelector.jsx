import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { getCountryNames } from '../../api';

import styles from './CountrySelector';

const CountrySelector = ({ handleCountryChange }) => {
  const [gotCountries, setGotCountries] = useState([]);

  useEffect(() => {
    const countries = async () => {
      setGotCountries(await getCountryNames());
    };

    countries();
  }, [setGotCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => handleCountryChange(event.target.value)}
      >
        <option value="">Global</option>
        {gotCountries.map((country, i) => {
          return (
            <option key={i} value={country}>
              {country}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default CountrySelector;
