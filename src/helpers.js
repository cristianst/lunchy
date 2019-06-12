export const getRestaurants = async () => {
    const restaurantsUrl = 'https://sheetsu.com/apis/v1.0su/34a03c6fdc3c/sheets/restaurants';
    
    const response = await fetch(restaurantsUrl);

    const result = await response.json();

    return result;
}