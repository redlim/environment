<template>
  <div class="home">
    <router-link to="map">Map</router-link>
  </div>
</template>

<script>
export default {
  name: 'AwHome',
  data () {
    return {
      msg: 'this is enviroment!'
    }
  },
  mounted(){
    let date = '2017-12-10';
    this.$http.get('http://localhost:5000/data?date='+date).then(response => {

     console.log(response.body);

    }, response => {
      // error callback
    });
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
   list-style-type: none;
   padding: 0;
 }
li {
  display: inline-block;
}
</style>
