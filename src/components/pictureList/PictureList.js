import React from 'react';
import './PictureList.css';

const PictureList = ({ pictures, onDelete, onEdit, editingPictureId, onEditAuthor }) => {
  return (
    <div className='containerPictureList'>
      <ul className="container-PictureList">
        {pictures.map((picture) => (
          <li key={picture.id} className="picture-card">
            <p>ID: {picture.id}</p>
            {editingPictureId === picture.id ? (
              <div>
                <input
                  type="text"
                  value={picture.newAuthor || picture.author}
                  onChange={(e) => {
                    const newAuthor = e.target.value;
                    onEditAuthor(picture.id, newAuthor); 
                  }}
                />
                <button onClick={() => onEdit(picture.id)}>Cancelar</button>
                <button onClick={() => {
                  onEditAuthor(picture.id, picture.newAuthor); 
                }}>Guardar</button>
              </div>
            ) : (
              <p>Autor: {picture.author}</p>
            )}
            <img className='img-PictureList' src={picture.download_url} alt={`Imagen por ${picture.author}`} />
            {editingPictureId !== picture.id ? (
              <button onClick={() => onEdit(picture.id)}>Editar</button>
            ) : null}
            <button onClick={() => onDelete(picture.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PictureList;
