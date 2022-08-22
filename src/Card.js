import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.state}</h4>
            <p>ConfirmedCases: {data.confirmedCases}</p>
            <p>CasesOnAdmission: {data.casesOnAdmission}</p>
            <p>Discharged: {data.discharged}</p>
            <p>Death: {data.death}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
