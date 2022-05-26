import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response) => {
        //input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
        //output
        response.status(200).json(movie);
    };
    const getUpcomingMovie = async (request, response) => {
        //input
        // const movieId = request.params.id;
        const query =  request.query;   
        // Treatment
        const movie = await moviesService.getUpcomingMovie(query, dependencies);
        //output
        response.status(200).json(movie);
    };
    const find = async (request, response) => {
        //input
        const query =  request.query;     
        // Treatment
        const accounts = await moviesService.find(query, dependencies);
        //output
        response.status(200).json(accounts);
    };

    const createFantasyMovie = async (request, response, next) => {
        // Input
        const { title, overview, genres, runtime, release_date } = request.body;
        // Treatment
        const account = await moviesService.createFantasyMovie(title, overview, genres, runtime, release_date, dependencies);
        //const output = dependencies.accountsSerializer.serialize(account);
        //output
        response.status(201).json(account);
    };

    const getFantasyMovie = async (request, response, next) => {
        //input
        const fantasymovieId = request.params.id;
        // Treatment
        const fantasymovie = await moviesService.getFantasyMovie(fantasymovieId, dependencies);
        // const output = dependencies.accountsSerializer.serialize(account);
        //output
        response.status(200).json(fantasymovie);
    };

    return {
        getMovie,
        getUpcomingMovie,
        find,
        createFantasyMovie,
        getFantasyMovie
    };
};