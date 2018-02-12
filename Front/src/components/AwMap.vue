<template>
  <div class="hello">
    <gmap-map
      :center="center"
      :zoom="9"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  export default {
    name: 'AwMap',
    data () {
      return {
        madridData:[],
        msg: 'This is Enviroment!',
        center: {lat: 40.416775, lng: -3.703790},
        markers: []
      }
    },
    mounted(){
      this.$http.get('http://localhost:5000/data').then(response => {

        // get body data
        this.madridData = response.body;
        this.madridData.forEach((d)=>{
          console.log(d.stationCoordinates[0]);
          this.markers.push({position:{lat:parseFloat(d.stationCoordinates[0]),lng:parseFloat(d.stationCoordinates[1])}});
        });

      }, response => {
        // error callback
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
