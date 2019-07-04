import axios from 'axios';

export default axios.create(
    {
        headers: {
            Authorization: 'Client-ID bda9c614dafa9e6d14cfc48a2045826b36db176929c22164da705fb60117a4fa'
        },
        baseURL: 'https://api.unsplash.com'       
    }
);