import React from "react";

const Numbers = props => {
    const percentage = (value, total) => {
        return ((value / total) * 100).toFixed();
    };

    return (
        <div>
            <div className="caseRecovered">
                <h4>Recovered</h4>
                <h3>{props.country.recovered}</h3>
                {percentage(props.country.recovered.value, props.country.confirmed)}%
                </div>

            <div className="caseConfirmed">
                <h4>Cases</h4>
                <h2>{props.country.confirmed}</h2>
            </div>

            <div className="caseDeceased">
                <h4>Deceased</h4>
                <h3>{props.country.deaths}</h3>
                {percentage(props.country.deaths, props.country.confirmed)}%
                </div>
        </div>
    );
};

export default Numbers;
