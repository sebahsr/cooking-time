export const searchRecipes = async (searchTerm: string, page: number) => {
    let API_KEY=process.env.API_KEY
    if (!API_KEY) {
      throw new Error("API key not found");
    }
  
    const baseURL = "https://api.spoonacular.com/recipes/complexSearch";
    const url = new URL(baseURL);
  
    const queryParams = {
      apiKey: API_KEY,
      query: searchTerm,
      number: 10,
      offset: (page - 1) * 10,
    };
  
    url.search = new URLSearchParams({
        apiKey: API_KEY,
        query: searchTerm,
        number: "10",
      }).toString();
  
    try {
      const searchResponse = await fetch(url.toString());
      const resultsJson = await searchResponse.json();
      return resultsJson;
    } catch (error) {
      console.error(error);
    }
  };