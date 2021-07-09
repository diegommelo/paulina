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
      <Results :data="response" />
    </div>
  </div>
</template>

<script>
import {searchByNameTMDB} from '@/api.js'
import Results from '@/components/Results'

export default {
  name: 'Search',
  props: {
    msg: String
  },
  components: {
    Results
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
        searchByNameTMDB(this.search).then(resp => {
          console.log(resp)
           if(resp.results.length < 0) {
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
