<template>
  <div class="home">
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  data() {
    return {
      search: []
    }
  },
  components: {
    Search
  },
  created() {
    
  },
  methods: {

  }
}
</script>
