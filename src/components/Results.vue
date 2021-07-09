<template>
  <div class="results">
    <div class="results-item" v-for="{id, title, name, media_type} in data.results" :key="id">
      <router-link :to="{name: 'Detail', params: {id: id}, query: {type: media_type}}">
        <!-- <img :src="Poster"  class="poster"/> -->
        <p v-if="media_type == 'tv'">{{name}}</p>
        <p v-if="media_type == 'movie'">{{title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: {
    data: Object
  }
}
</script>

<style>
  .results {
    display: flex;
    flex-direction: row;
    margin-top:20px;
  }
  .results-item {
    padding:5px;
  }
  .poster {
    max-width:80px;
  }
</style>