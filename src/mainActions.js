import axios from "axios";
import _ from "underscore";

export const getCountriesData = (countries) => {
    return {
        type: 'GET_COUNTRIES',
        payload: countries
    };
};

export const setRandomCountry = (randomCountry) => {
    return {
        type: 'SET_RANDOM_COUNTRY',
        payload: randomCountry
    };
};

export const fetchCountries = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const i = _.sortBy(response.data.map(country => ({
            name: country.name.common,
            capital: country.capital,
            currencies: country.currencies,
            languages: country.languages,
            flag: country.flags,
            map: country.maps,
        })), 'name');
        dispatch(getCountriesData(i)); 
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
  };
  
  export const getRandomCountry = (data) => {
    return async (dispatch) => {
        const randomIndex = _.random(data.length - 1);
        const randomCountry = data[randomIndex];
        dispatch(setRandomCountry(randomCountry)); 
    };
  };