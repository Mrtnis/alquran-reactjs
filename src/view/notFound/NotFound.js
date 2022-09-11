import './style.css';
import React from 'react';
import Logo from '../../logo.svg';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NotFound = () => {
  return (
    <div className="full-layer">
      <Card body className="bg-light border-0 shadow card-not-found">
        <img src={Logo} className="image"></img>
        <h5 className="mb-3">
          <b>Oops...</b> Page Not Found!
        </h5>
        <Link to="/" className="btn btn-transparent btn-sm">
          <FontAwesomeIcon icon={faArrowLeft} className="text-icon" /> Back
        </Link>
      </Card>
    </div>
  );
};
