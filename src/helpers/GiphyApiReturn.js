export const GiphyApiReturn = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=MjXJ9zh0BwWznMH93R6lXEyeJf0yJx8q`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_large.url
        }
    })
    
    return gifts
}
