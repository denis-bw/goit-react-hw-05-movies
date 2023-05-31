import axios from 'axios';

export const ApiServerRequest = async (url) => {

   
    return await axios.get(url).then(response => {
            return response;
        }).catch(error => {
            throw new Error(error);
        })

};
