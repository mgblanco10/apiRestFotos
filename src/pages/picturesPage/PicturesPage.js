import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'
import {LoremPicsumService} from '../../services/LoremPicsumService'

function PicturesPage() {
  const loremPicsumService = LoremPicsumService(); 
  const [pictures, setPictures] = useState([]); 

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await loremPicsumService.getAll(); 
        setPictures(response.data); 
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };
    fetchPictures(); 
  }, []);
  
  return (
    <main>
      <h2>Aquí estarán todos los objetos de la primera llamada</h2>
      <Navbar />
      <PictureObject pictures={pictures} />
    </main>
  );
}

export default PicturesPage;