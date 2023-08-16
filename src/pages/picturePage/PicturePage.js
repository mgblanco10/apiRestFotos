import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import { useParams } from 'react-router-dom';

const PicturePage = () => {
  const pictureService = LoremPicsumService();
  let {id} = useParams();
  const [imageId, setImageId] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSelect, setImageSelect] = useState(null);

  useEffect(()=>{
    const imageSelectedById = async ()=>{
      try{
        const imageSize = '600';
        const response = async ()=> pictureService.getById(id, imageSize);
        setImageSelect(response.config.url);
      }catch(error){
        console.error('Error al obtener la imagen: ', error);
      }
    };
    imageSelectedById();

  }, [id, pictureService]);


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
        <h3 style={{margin:"5px"}}>Imagenes por Id</h3>
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
      <h2>OTRA FORMA DE HACER LA LLAMADA POR ID AL HACER CLICK EN LA IMAGEN DEL ENDPOINT ANTERIOR</h2>
      <p>Ojo aún WIP</p>
      <h3>Aquí se muestra la imagen a la que le hiciste click en "Lista de Objetos"</h3>
      {imageSelect?(
        <div className='container-PintureObject'>
          <img className='size-img' src={imageSelect} alt={`Imagen po ID numero ${id}`}/>

        </div>
      ):(
        <p>No hiciste click a ninguna imagen en Lista Objetos</p>
      )}
      
    </main>
  );
};


export default PicturePage;
