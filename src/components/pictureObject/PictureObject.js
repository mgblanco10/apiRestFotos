import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PictureObject.css';

const PictureObject = ({ picture }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/image?imageUrl=${encodeURIComponent(picture.download_url)}`);
  };

  return (
    <div className="container" onClick={handleClick}>
      <ul className="container-PintureObject">
        <li key={picture.id}>
          <p className="id-img">ID: {picture.id}</p>
          <p className="autor-img">Autor: {picture.author}</p>
          <img
            className="size-img"
            src={picture.download_url}
            alt={`Imagen por ${picture.author}`}
          />
        </li>
      </ul>
    </div>
  );
};

export default PictureObject;
