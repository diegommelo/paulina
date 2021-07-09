<template>
  <div class="hello">
    <input type="search" v-model="search" />
    <button @click="searchByName()">Buscar</button>
    <div v-if="error" class='not-found'>
      Filme não encontrado
    </div>
    <div v-else>
      <div v-if="isLoading" class="loading">
        Buscando...
      </div>
      <div v-else>
        <div class="info">
          <img :src="response.Poster" class="poster" />
          <div class="description">
            <h2>{{response.Title}}</h2>
            <p>{{response.Plot}}</p>
            <ul>
              <li><strong>Tipo: </strong>{{response.Type}}</li>
              <li><strong>Direção: </strong>{{response.Director}}</li>
              <li><strong>Escritor: </strong>{{response.Writer}}</li>
              <li><strong>Ano: </strong>{{response.Year}}</li>
              <li><strong>Elenco: </strong>{{response.Actors}}</li>
              <li v-if="response.totalSeasons"><strong>Temporadas: </strong>{{response.totalSeasons}}</li>
            </ul>
          </div>
        </div>
        <div class="ratings-wrapper">
          <ul class="ratings">
            <li v-for="rating in response.Ratings" :key="rating.Year">
              <h4>
                <span v-if="rating.Source == 'Internet Movie Database'">IMDB</span>
                <span v-else>{{rating.Source}}</span>
              </h4>
              <h3>{{rating.Value}}</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {searchByName} from '@/api.js'

export default {
  name: 'Search',
  props: {
    msg: String
  },
  data() {
    return {
      response:[],
      search:"",
      error: true,
      isLoading: false
    }
  },
  methods: {
    searchByName() {
      if(this.search != "") {
        this.error = false
        this.isLoading = true
        searchByName(this.search).then(resp => {
          console.log(resp)
           if(resp.Response === "False") {
             this.error = true
             this.isLoading = false
           } else {
             this.response = resp
             this.isLoading = false
           }
        }).catch(e => {
          console.error(e)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.not-found {
  margin-top:20px;
}
.loading {
  margin-top:20px;
}
input {
  margin-right:10px;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}
li {
  margin: 5px 10px;
}
a {
  color: #42b983;
}
h4 {
  margin-top:5px;
}
</style>
