<template>
  <div>
    <div class="info">
      <img :src="data.omdb.Poster" class="poster" />
      <div class="description">
        <h2>{{data.tmdb.title}}</h2>
        <p>{{data.tmdb.overview}}</p>
        <ul>
          <li><strong>Tipo: </strong>{{data.omdb.Type}}</li>
          <li><strong>Direção: </strong>{{data.omdb.Director}}</li>
          <li><strong>Escritor: </strong>{{data.omdb.Writer}}</li>
          <li><strong>Ano: </strong>{{data.omdb.Year}}</li>
          <li><strong>Elenco: </strong>{{data.omdb.Actors}}</li>
          <li v-if="data.omdb.totalSeasons"><strong>Temporadas: </strong>{{data.omdb.totalSeasons}}</li>
        </ul>
      </div>
    </div>
    <div class="ratings-wrapper">
      <ul class="ratings">
        <li v-for="rating in data.omdb.Ratings" :key="rating.Year">
          <h4>
            <span v-if="rating.Source == 'Internet Movie Database'">IMDB</span>
            <span v-else>{{rating.Source}}</span>
          </h4>
          <h3>{{rating.Value}}</h3>
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
export default {
  name: "Details",
  props: {
    data: Object
  }
}
</script>

<style scoped>
  .info {
    display:flex;
    padding:10px;
    margin-top:20px;
  }
  .description {
    padding:10px;
  }
  .poster {
    max-width:180px;
  }
  .ratings-wrapper {
    display: flex;
    justify-content: center;
  }
  .ratings li{
    display: inline-block;
    text-align: center;
  }

</style>