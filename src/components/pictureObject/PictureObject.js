import React from 'react'
import './PictureObject.css'


const PictureObject = ({ pictures }) => {
  return (
    <div>
      <h3>Imágenes:</h3>
      <ul className="container-PintureObject">
        {pictures.map((picture) => (
          <li key={picture.id}>
            <p className="id-img">ID: {picture.id}</p>
            <p className="autor-img">Autor: {picture.author}</p>
            <img className="size-img"src={picture.download_url} alt={`Imagen por ${picture.author}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PictureObject