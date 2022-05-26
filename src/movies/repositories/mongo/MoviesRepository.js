import FantasyMovie from '../../entities/FantasyMovie';
  import mongoose from 'mongoose';
  import MoviesRepository from '../Repository';

  export default class extends MoviesRepository {

      constructor() {
          super();
          const fantasyMovieSchema = new mongoose.Schema({
              title: String,
              overview: String,
              genres: [Number],
              runtime: Number,
              release_date: String
              
          });
          this.model = mongoose.model('FantasyMovie', fantasyMovieSchema);
      }

      async createFantasyMovie(fantasyMovieEntity) {
          const {title, overview, genres, runtime, release_date} = fantasyMovieEntity;
          const result = new this.model({title, overview, genres, runtime,release_date});
          await result.save();
          fantasyMovieEntity.id=result.id;
          return fantasyMovieEntity;
      }

      async getFantasyMovie(fantasymovieid) {
        const result = await this.model.findById(fantasymovieid);
        const {id, title, overview, genres, runtime, release_date} = result;
        return new FantasyMovie(id, title, overview, genres, runtime, release_date );
    }

    }