import axios from 'axios';

const BASE_URL = 'https://api.hadith.gading.dev';

export const getBooks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getBookContent = async (id, range = '1-10') => {
    try {
        const response = await axios.get(`${BASE_URL}/books/${id}?range=${range}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getHadithDetails = async (bookId, number) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/${bookId}/${number}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
