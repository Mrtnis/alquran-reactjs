import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export const ListSurah = () => {
  const navigate = useNavigate();
  const [dataSurah, setDataSurah] = useState([]);
  const [isError, setIsError] = useState(false);
  const [infoError, setInfoError] = useState('');

  const getDataSurah = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/quran.json`);
      setDataSurah(data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setInfoError(error.response.data);
    }
  };

  useEffect(() => {
    getDataSurah();
  }, []);

  return (
    <div className="bg-light">
      <div className="container py-5">
        {isError && (
          <div className="alert alert-danger text-center" role="alert">
            {infoError}
          </div>
        )}
        {dataSurah &&
          dataSurah.map((surah, i) => {
            return (
              <div key={i}>
                <div className="card border-0 card-surah shadow-sm mb-4" onClick={() => navigate(`surah/${surah.number_of_surah}`)}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* left */}
                      <div className="d-flex align-items-center">
                        <div className="number-surah">{surah.number_of_surah}</div>
                        <div>
                          <div>
                            <h5>{surah.name}</h5>
                          </div>
                          <div>
                            {surah.name_translations.id} - {surah.type} - {surah.number_of_ayah} Ayat
                          </div>
                        </div>
                      </div>
                      {/* right */}
                      <div>{surah.name_translations.ar}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
