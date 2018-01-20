<template>
  <div class="map-container">
    <h1>{{ msg }}</h1>
    <div id="map"></div>
  </div>
</template>

<script>
  export default {
    name: 'AwMap',
    data () {
      return {
        msg: 'this is enviroment!'
      }
    },
    mounted (){
      var map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    }
  }
</script>

<style scoped>
  .map-container{
    height: 100%;
  }
  #map{
  height: 100%;
  width: 100%;
  }
</style>
