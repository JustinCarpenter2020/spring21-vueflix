<template>
  <div class="component container-fluid">
    <div class="row">
      <div class="col">
        <form @submit.prevent="search">
          <label for="movie">Movie Title</label>
          <input type="text" name="movie" id="movie" placeholder="Title..." v-model="state.query">
          <button type="submit" class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Results />
      </div>
      <div class="col">
        <Details />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { moviesService } from '../services/MoviesService'
import Results from '../components/ResultsComponent'
import Details from '../components/DetailsComponent'
import Notification from '../utils/Notification'

export default {
  name: 'HomePage',
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      async search() {
        try {
          if (await Notification.confirmAction(`Are you Sure you wantt to search ${state.query}?`, "i'm not sure you want to do that", 'danger', 'yes I know')) {
            await moviesService.getMovies(state.query)
          }
          state.query = ''
        } catch (e) {
          console.error(e)
          Notification.toast('Error')
        }
      }
    }
  },
  components: {
    Results,
    Details
  }
}
</script>

<style lang="scss" scoped>

</style>
