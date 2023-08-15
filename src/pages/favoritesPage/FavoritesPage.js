import React, { useState, useEffect }  from 'react';
import Navbar from '../../components/navbar/Navbar';
import PictureList from '../../components/pictureList/PictureList';
import PictureForm from '../../components/pictureForm/PictureForm.js';
import {FavoriteService} from '../../services/FavoriteService';

function FavoritesPage() {
  const favoriteService = FavoriteService();
  const [pictures, setPictures] = useState([]);
  const [editingPictureId, setEditingPictureId] = useState(null);

  const fetchPictures = async () => {
    try {
      const response = await favoriteService.getAllFavorites(); 
      setPictures(response.data);
    } catch (error) {
      console.error('Error al obtener las imágenes favoritas:', error);
    }
  };

  useEffect(() => {
    fetchPictures();
  }, []);

  const handleAddPicture = async (newPicture) => {
    try {
      await favoriteService.create(newPicture); 
      fetchPictures(); 
    } catch (error) {
      console.error('Error al agregar la imagen favorita:', error);
    }
  };

  const handleDeletePicture = async (id) => {
    await favoriteService.remove(id);
    fetchPictures();
  };
  const handleEditPicture = (id) => {
    setEditingPictureId(id);
  };

  const handleEditAuthor = async (id, newAuthor, picture) => {
    try {
      const updatedPictureData = {
        author: newAuthor,
        download_url: picture.download_url
      };
  
      const response = await favoriteService.update(id, updatedPictureData);
      console.log('Respuesta de actualización:', response);
      setEditingPictureId(null);
      fetchPictures(); 
    } catch (error) {
      console.error('Error al editar el autor de la imagen:', error);
    }
  };

  return (
    <main>
      <Navbar />
      <div className="App">
      <h1>Mis Imágenes Favoritas guardadas en json-server</h1>
      <PictureForm onSubmit={handleAddPicture}/>
      <PictureList 
  pictures={pictures} 
  onDelete={handleDeletePicture}  
  onEdit={handleEditPicture} 
  editingPictureId={editingPictureId}
  onEditAuthor={(id, newAuthor, picture) => handleEditAuthor(id, newAuthor, picture)}
/>
    </div>
    </main>
  )
}

export default FavoritesPage


{/* <h2>Aquí estará la página principal donde guardarás tus objetos favoritos</h2>
<Navbar/>
<ul>
    <p>INSTRUCCIONES</p>
    <li>Crea un servicio llamado FavoriteService.js siguiendo el ejemplo de LoremPicsumService.js, que contenga toda la lógica que necesites para realizar el CRUD, usando axios, tu endpoint será el que te proporcione el json-server.</li>
    <li>Para tener un servidor encendido que te permita hacer un CRUD con tu pseudo base de datos, has de activar tu json-server en un puerto diferente al que tienes de node donde funciona tu aplicación de react, esto lo haces con el siguiente comando: json-server --watch src/assets/data/picturesDB.json --port 5000</li>
    <li>Una vez encendido, en tu terminal te indicará el endpoint que usarás, donde dice Resources.</li>
    <li>Si estás cansada de ejecutar toda esa línea de código cada vez que tengas que encender el servidor de json-server, puedes ponerlo en tu package.json en la sección de scripts, con un nombre que tú le des y luego podrás ejecutar el comando npm run nombre-del-script</li>
    <li>Crea los componentes que necesites para imprimir una lista o tarjetas (será la R de read del CRUD) que contengan lo siguiente (siguiendo el ejemplo del componente PictureObject, además deberán estar todos los objetos de tu archivo picturesDB.json, que está en la carpeta assets/data):</li>
    <ol>
        <li>El id de la imagen.</li>
        <li>Su autor.</li>
        <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
    </ol>
    <li>El siguiente paso será la C de create del CRUD, osea crearemos una nueva tarjeta donde capturamos los datos de la tarjeta que queramos añadir a favoritos de la API Lorem Picsum y usarás la petición http post en tu servicio (averigua como hacerlo). Una vez creada la tarjeta, automáticamente deberá aparecer en la lista de favoritos.</li>
    <li>Después vamos a añadir un botón para editar cada tarjeta de favoritos, así que haremos la U de update del CRUD, donde necesitaremos pasar la información a un formulario que nos permita editar (averigua como hacerlo).</li>
    <li>Por último, eliminaremos una tarjeta favorita que será la D de delete del CRUD (averigua como hacerlo).</li>
    <li>Crea los componentes que necesites, estará funcionando cuando podamos ver los cambios del CRUD en nuestro archivo picturesDB.json</li>
    <li>Has de borrar estas instrucciones cuando lo tengas.</li>
    <li>Los estilos los has de realizar tú misma.</li>
</ul> */}







