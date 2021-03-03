import axios from 'axios'

const beerApi = axios.create({
    baseURL: 'https://api.punkapi.com/v2/beers/?per_page=8'
})

export default beerApi