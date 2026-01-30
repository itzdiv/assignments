import axios from "axios";

const Giphy_key = import.meta.env.VITE_GIPHY_KEY
const Unsplash_key = import.meta.env.VITE_UNSPLASH_KEY
const Pexels_key = import.meta.env.VITE_PEXELS_KEY

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${Unsplash_key}` }
  })
  return res.data
}

export async function fetchVideos(query, per_page = 15) {
  const res = await axios.get('https://api.pexels.com/videos/search', {
    params: { query, per_page },
    headers: { Authorization: Pexels_key }
  })
  return res.data
}

export async function fetchGifs(query){
    console.log(query);
    const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
        params:{q:query,api_key:Giphy_key},
    })
    return response.data;
}