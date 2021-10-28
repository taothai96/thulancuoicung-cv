const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c200949386440c360e1bcdb31633e99d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;