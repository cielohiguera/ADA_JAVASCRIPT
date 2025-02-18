const formatMovieResponse = (movie) => {
    if (!movie) {
        return JSON.stringify({ error: 'Película no encontrada' });
    }
    return JSON.stringify(movie, null, 2);
};

module.exports = { formatMovieResponse };