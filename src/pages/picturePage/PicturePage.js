import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { LoremPicsumService } from '../../services/LoremPicsumService';

const PicturePage = () => {
  const pictureService = LoremPicsumService();

  const [imageId, setImageId] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (event) => {
    setImageId(event.target.value);
  };

  const fetchImageById = async () => {
    try {
      const imageSize = '200'; 
      const response = await pictureService.getById(imageId, imageSize);
      setSelectedImage(`${response.config.url}`);
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
      setSelectedImage(null);
    }
  };

  return (
    <main>
      <h2>Aquí estará la imagen de la segunda llamada</h2>
      <Navbar />
      <div>
        <h3 style={{margin:"5px"}}>Imagen:</h3>
        <input
          type="number"
          placeholder="Ingresa el ID de la imagen"
          value={imageId}
          onChange={handleInputChange}
          style={{ width: "210px" }}
        />
        <button onClick={fetchImageById}>Obtener Imagen</button>
        {selectedImage ? (
          <ul className="container-PintureObject">
            <li>
              <img
                className="size-img"
                src={selectedImage}
                alt={`Imagen por ID ${imageId}`}
              />
            </li>
          </ul>
        ) : (
          <p>Ingresa un ID válido y haz clic en "Obtener Imagen" para mostrar la imagen.</p>
        )}
      </div>
    </main>
  );
};


export default PicturePage;
