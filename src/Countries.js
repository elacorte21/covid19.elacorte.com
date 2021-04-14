import React from 'react';
import './App.css';

class Countries extends React.Component {
    state = {
        isLoading: true,
        countries: [],
        error: null
    };

    fetchCountries() {
        fetch("https://covid19.mathdro.id/api/countries/")
            .then(res => res.json())
            .then(res =>
                this.setState({
                    countries: res.countries,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchCountries();
    }

    render() {
        const { isLoading, countries, error } = this.state;
        return (
            <React.Fragment>
                <h1>Countries</h1>
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                    countries.map(country => {
                        //const { name, iso2 } = country;
                        return (
                            <div key={country.name}>
                                <p>confirmed: {country.name}</p>
                                <p>recovered: {country.iso2}</p>
                                <hr />
                            </div>
                        );
                    })
                ) : (
                        <h3>Loading...</h3>
                    )}
            </React.Fragment>
        );
    }
}

export default Countries;
