import React, { useState } from 'react';
import './PictureForm.css';

const PictureForm = ({ onSubmit }) => {
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPicture = { author, download_url: imageUrl }; 
    onSubmit(newPicture); 
    setAuthor(''); 
    setImageUrl('');
  };

  return (
    <div className="container-PictureForm">
      <h3 className='title-form'>Formulario para agregar favoritos</h3>
      <form className="form-createFavorite" onSubmit={handleSubmit}>
        <label className='label-form'>
          Autor:
          <input className='input-form' type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Nombre del autor'/>
        </label>
        <label className='label-form'>
          URL de la imagen:
          <input className='input-form' type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='URL de la imagen'/>
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default PictureForm;

