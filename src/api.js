import axios from "axios";

const pexelsApiKey = 'lIopd0oYHYhPDB9GkwkFYQzwgikZgJZHlaRl1Qj9Fyz0SGXbKwmBJtiZ'; // Replace with your actual Pexels API key

const searchImages = async (term) => {
  try {
    const response = await axios.get('https://api.pexels.com/v1/search', {
      headers: {
        Authorization: pexelsApiKey
      },
      params: {
        query: term,
        per_page: 1000 // Number of results per page
      }
    });

    return response.data.photos;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export default searchImages;
