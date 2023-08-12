
let map;
const mapDiv = document.getElementById("map");  //Elemento div con id map

async function initMap() {

if(navigator.geolocation){

  //si su navegador acepta geolocalizacion creamos una funcion para detectar su ubicacion actual y le pasamos como parametro el nombre position
    navigator.geolocation.getCurrentPosition(function(position){

    let userLat = position.coords.latitude; //el parametro position con las coordenadas de la latitud
    let userLng = position.coords.longitude; //el parametro position con las coordenadas de la longitud

    //Mapa de google 
  map = new google.maps.Map(mapDiv, {
    center: { lat:userLat, lng: userLng },
    zoom: 8,
  });

  console.log(userLat, userLng)

  //Marcador para pinchar en el mapa
  new google.maps.Marker({
    position: { lat: userLat , lng: userLng },
    map,
  });
  })


    }else{
    alert("Activa tu ubicacion!")
  }
}

initMap();

