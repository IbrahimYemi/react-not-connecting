import React from 'react';
import Card from './Card';

const Application = () => {
  let renderlists =
    lists.Response === 'True' ? (
      lists.states.map((movie, index) => <Card key={movie.id} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3>API CALL FAILS</h3>
      </div>
    );

  return (
    <div className="list-wrapper">
      <div className="card-top">
        <p className="totalSamplesTested">{lists.totalSamplesTested}</p>
        <p className="totalConfirmedCases">{lists.totalConfirmedCases}</p>
        <p className="totalActiveCases">{lists.totalActiveCases}</p>
        <p className="discharged">{lists.discharged}</p>
        <p className="death">{lists.death}</p>
      </div>
      <div className="list-list">
        <h2>Details</h2>
        <div className="list-container">{renderlists}</div>
      </div>
    </div>
  );
};

export default Application;
