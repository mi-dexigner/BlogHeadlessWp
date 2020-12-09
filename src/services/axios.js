import axios from 'axios';

/* 
* base url to make request to the blog database
*/

const instance = axios.create({
    baseURL:"https://api.midexigner.com/wp-json/wp/v2"
});

export default instance;