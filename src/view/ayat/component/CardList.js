import React from 'react';

export const CardList = ({ ayat }) => {
  return (
    <div className="card card-surah shadow-sm border-0 mb-3 px-2">
      <div className="card-body">
        <div className="row d-flex align-items-center">
          <div className="col-md-1 number-surah">{ayat.number}</div>
          <div className="col-md-11">
            <div className="d-flex justify-content-end">{ayat.text}</div>
            <div>{ayat.translation_id}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
