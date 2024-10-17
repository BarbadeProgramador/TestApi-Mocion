// httpClient.js
const API_URL = 'http://localhost:9090/api/v1'; 

export function getData(endpoint) {
  return fetch(`${API_URL}/${endpoint}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error en la respuesta');
      }
      console.log(`${API_URL}/${endpoint}`);
      return response.json(); 
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null; 
    });
}


// const API = "https://comicvine.gamespot.com/api";
// const API_KEY = "c7f86a81800acc187d6209e52d48457948eb5f21";  

// export function get(path) {
//   return fetch(`${API}${path}?api_key=${API_KEY}&format=json`, {  // Cambia " " por ` `
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Error en la respuesta');
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       return null;
//     });
// }
