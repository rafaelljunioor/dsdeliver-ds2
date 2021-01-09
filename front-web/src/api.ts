import axios from "axios";

const API_URL = 'http://localhost:8080';
const mapboxToken = /*'pk.eyJ1IjoianVuaW9ycmFmYWVsOTUiLCJhIjoiY2tqcTQ5ZnB5MWVoaTJ3cXV0cWxhcDdrdyJ9.qUN0ZaHlEITY1VY-9VVNvw';*/process.env.REACT_APP_ACCES_TOKEN_MAP_BOX;
export function fetchProducts(){
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local:string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}