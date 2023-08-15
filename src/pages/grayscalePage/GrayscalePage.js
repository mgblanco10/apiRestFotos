import React, { useState } from "react";
import Navbar from '../../components/navbar/Navbar';
import { LoremPicsumService } from '../../services/LoremPicsumService';

const GrayscalePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [randomImage, setRandomImage] = useState(null);

  const handleGetRandomGrayscale = async () => {
    setLoading(true);
    setError(null);

    try {
      const imageSize = '300'; 
      const response = await LoremPicsumService().getRandomGrayscale(imageSize);
      setRandomImage(response.config.url);
      setLoading(false);
    } catch (error) {
      setError('Error al obtener la imagen aleatoria en escala de grises');
      setLoading(false);
    }
  };

  return (
    <main>
      <h2>Aquí estará la imagen aleatoria en escala de grises de la tercera llamada</h2>
      <Navbar />

      {loading && <p>Cargando imagen...</p>}

      {error && <p>Error: {error}</p>}

      {randomImage ? (
        <div>
          <img
            src={randomImage}
            alt="Imagen aleatoria en escala de grises"
            onError={() => setError('Error al cargar la imagen')}
          />
        </div>
      ) : (
        <p>Aún no se ha cargado una la imagen.</p>
      )}

      <button onClick={handleGetRandomGrayscale} disabled={loading}>
        Clic para obtener imagen en escala de grises
      </button>
    </main>
  );
}

export default GrayscalePage;

