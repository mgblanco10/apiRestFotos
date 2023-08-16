import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'
import {LoremPicsumService} from '../../services/LoremPicsumService'
import "./PicturesPage.css";

function PicturesPage() {

  const loremPicsumService = LoremPicsumService(); 
  const [pictures, setPictures] = useState([]); 
  // console.log(loremPicsumService.getAll());

  useEffect(()=>{
    (loremPicsumService.getAll()
    .then(response=>{
      setPictures(response.data)
    }))
  }, []);
  console.log(pictures);
  
  return (
    <main className='main-container'>
      <h2>Aquí estarán todos los objetos de la primera llamada</h2>
      <Navbar />
      <div className="pictures-container">
      {pictures.map((picture,index) => (<PictureObject className="container-card" picture={picture} key={index} />))}
      </div>
    </main>
  );
}

export default PicturesPage;