import React from 'react';
import './Assets/css/style.css';

class App extends React.Component {
  state = {
    isLoading: true,
    countries: [],
    error: null
  };

  fetchCountries() {
    fetch('https://extreme-ip-lookup.com/json/')
      .then(res => res.json())
      .then(data => {
        let countryId = data.countryCode;
        return fetch('https://covid19.mathdro.id/api/countries/' + countryId + '/confirmed'); // make a 2nd request and return a promise
      })
      .then(res => res.json())
      .then(data =>
        this.setState({
          countries: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchCountries();
  }

  render() {
    let { isLoading, countries, error } = this.state;
    return (
      <React.Fragment>
        <h1>COVID-19</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          countries.map(country => {
            let percentage = (value, total) => {
              return ((value / total) * 100).toFixed();
            };

            return (
              <div key={country.combinedKey}>

                <h2>{country.countryRegion}</h2>

                <div className="caseRecovered">
                  <h4>Recovered</h4>
                  <h3>{country.recovered}</h3>
                  {percentage(country.recovered, country.confirmed)}%
                </div>

                <div className="caseConfirmed">
                  <h4>Cases</h4>
                  <h2>{country.confirmed}</h2>
                </div>

                <div className="caseDeceased">
                  <h4>Deceased</h4>
                  <h3>{country.deaths}</h3>
                  {percentage(country.deaths, country.confirmed)}%
                </div>
              </div>
            );
          })
        ) : (
            <h3>Loading...</h3>
          )}
      </React.Fragment >
    );
  }
}

export default App;
