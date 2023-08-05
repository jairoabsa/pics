import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: { 
            Authorization: 'Client-ID V-e7hUe4rwFFSkHm7WqsPxlMgb4sxI1U7aEhwuuRMfM'

        },
        params: {
            query: 'cars'
        }
    });
console.log(response);
return response;
};

export default searchImages;