import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// component
import { NameCard } from './component/NameCard';
import { CardList } from './component/CardList';

export const Ayat = () => {
  let params = useParams();

  const [listAyat, setListAyat] = useState({});
  const [infoError, setInfoError] = useState('');

  const getDataAyat = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/surah/${params.idSurah}.json`);
      setListAyat(data);
      setInfoError('');
    } catch (error) {
      setInfoError(error.response.data);
    }
  };

  useEffect(() => {
    getDataAyat();
  }, []);

  return (
    <div className="bg-light list-ayat">
      <div className="container">
        <Link to="/" className="btn btn-transparent btn-sm my-4">
          <FontAwesomeIcon icon={faArrowLeft} className="text-icon" /> Back
        </Link>
        {infoError && (
          <div className="alert alert-danger text-center" role="alert">
            {infoError}
          </div>
        )}

        {!infoError && <NameCard surah={listAyat} />}

        <div className="mb-4"></div>

        {listAyat.verses &&
          listAyat.verses.map((ayat, i) => {
            return <CardList ayat={ayat} key={i} />;
          })}
      </div>
    </div>
  );
};
