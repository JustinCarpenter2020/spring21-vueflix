import { AppState } from '../AppState'
import Movie from '../models/Movie'
import { movieApi } from './AxiosService'
import Notification from '../utils/Notification'

class MoviesService {
  async getMovies(query) {
    const res = await movieApi.get(query)
    AppState.results = res.data.results.map(r => new Movie(r))
  }

  setActive(movie) {
    if (movie.popularity < 100) {
      Notification.toast('this is a not so good movie', 'error', 'top-center', 5000, true)
    } else {
      Notification.toast('this is a good movie', 'success', 'top-center', 2000, false)
      AppState.activeMovie = movie
    }
    console.log(movie)
  }
}

export const moviesService = new MoviesService()

// title = 'Warning!', display = 'warning', position = 'top-end', timer = 3000, progressBar = true
