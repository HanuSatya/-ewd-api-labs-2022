export default class {
    constructor(id = undefined, title, overview, genres=[], runtime, release_date) {
      this.id = id;
      this.title = title;
      this.overview = overview;
      this.genres = genres;
      this.runtime = runtime;
      this.release_date = release_date;
    }
  }