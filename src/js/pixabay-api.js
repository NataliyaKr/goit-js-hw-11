import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38261717-27bd7f89674a0466f806230dc';

export async function fetchImages(value, page = 1, perPage = 40) {
    try {
        const response = await axios.get(
            `${BASE_URL}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
        );
        return response;
    } catch (error) {
    }
}
