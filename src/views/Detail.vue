<template>
  <div>
    <Details :data="data" />
  </div>
</template>

<script>

import {getDataFromTMDBByID, getDataFromOMDB} from '@/api.js';
import Details from '@/components/Details.vue'

export default {
  name: "Detail",
  props: ['id'],
  components: {
    Details
  },
  data() {
    return {
      data: {
        omdb: Object,
        tmdb: Object
      },
    }
  },
  created() {
    let type = this.$route.query.type;
    this.getDataFrom(this.id, type)
  },
  methods: {
    getDataFrom(tmdbID, type) {
      getDataFromTMDBByID(tmdbID, type).then(resp => {
        getDataFromOMDB(resp.external_ids.imdb_id).then(respOMDB => {
          this.data.omdb = respOMDB
          this.data.tmdb = resp
        }).catch(e => {
          console.error(`omdb error: ${e}`)
        })
      }).catch(e => {
        console.error(e)
      })  
    }
  }
}
</script>

<style>

</style>