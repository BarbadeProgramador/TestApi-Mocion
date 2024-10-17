const fetch = require('node-fetch'); 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importación de cors
const app = express();


app.use(cors());
app.use(bodyParser.json());


const API_KEY = 'c7f86a81800acc187d6209e52d48457948eb5f21';
const API_URL = 'https://comicvine.gamespot.com/api';
const API_Version = '/api/v1';

//Endpoint get volumes

const Route_Volumes = API_Version + '/volumes';

app.get(Route_Volumes, (req, res) => {
    fetch(`${API_URL}/volumes?api_key=${API_KEY}&format=json`)
      .then(response => {
        if (!response.ok) {
          res.status(response.status).json({ error: 'Error en la respuesta de la API' });
          return;
        }
        return response.json();
      })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      });
  });

  // Endpoint Comic Find by ID 
  app.get(Route_Volumes + '/:id', (req, res) => {

    const comicId = req.params.id;
    fetch(`${API_URL}/volumes?api_key=${API_KEY}&format=json&filter=id:${comicId}`)
      .then(response => {
        if (!response.ok) {
          res.status(response.status).json({ error: 'Error en la respuesta de la API' });
          return;
        }
        return response.json();
      })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      });
  });



  //Endpoint Volume 
  // const Route_Volume = API_Version + '/volume';

  // app.get(Route_Volume + '/:id', (req, res) => {

  //   const comicId = req.params.id;

  //   fetch(`${API_URL}/volume/4035-${comicId}?api_key=${API_KEY}&format=json`)
  //     .then(response => {
  //       if (!response.ok) {
  //         res.status(response.status).json({ error: 'Error en la respuesta de la API' });
  //         return;
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       res.json(data);
  //     })
  //     .catch(error => {
  //       console.error('Error al obtener datos:', error);
  //       res.status(500).json({ error: 'Error interno del servidor' });
  //     });
  // });

  //Endpoint get volume
  // app.get('/api/v1/volume/:id', (req, res) => {

  //   const idComic = req.params.id;

  //   fetch(`${API_URL}/volume/4000--${idComic}?api_key=${API_KEY}&format=json`)
  //     .then(response => {
  //       if (!response.ok) {
  //         res.status(response.status).json({ error: 'Error en la respuesta de la API' });
  //         return;
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       res.json(data);
  //     })
  //     .catch(error => {
  //       console.error('Error al obtener datos:', error);
  //       res.status(500).json({ error: 'Error interno del servidor' });
  //     });
  // });





const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});