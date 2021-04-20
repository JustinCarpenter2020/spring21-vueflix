<template>
<div class="media">
  <img src="//placehold.it/75x75" class="mr-3" alt="Movie poster">
  <div class="media-body">
    <h5 class="mt-0">{{movie.title}}</h5>
    <p>{{movie.popularity}}</p>
    <p>{{movie.releaseDate}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'MediaElement',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="css" scoped>
.media {
  cursor: pointer;
  }

  .media:hover {
    outline: 1px solid grey;}

</style>
