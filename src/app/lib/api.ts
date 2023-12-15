const BASE_URL = "https://api.punkapi.com/v2";

export const fetchBeers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/beers`);
        return response.json();
    } catch (error) {
        console.error("Error fetching beers:", error);
        throw error;
    }
};

export const fetchRandomBeer = async () => {
    try {
        const response = await fetch(`${BASE_URL}/beers/random`);
        return response.json();
    } catch (error) {
        console.error("Error fetching random beer:", error);
        throw error;
    }
};
