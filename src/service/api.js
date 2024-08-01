// import axios from 'axios';

// const API_URI = 'https://file-sharing-app-backend-9kme.onrender.com';

// export const uploadFile = async (data) => {
//     try {
//         const response = await axios.post(`${API_URI}/upload`, data);
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling the API ', error.message);
//     }
// }
import axios from 'axios';

const API_URI = 'https://file-sharing-app-backend-9kme.onrender.com';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API:', error.message);
        throw error; // Throw error to let the calling function handle it
    }
}
