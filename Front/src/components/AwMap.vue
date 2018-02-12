<template>
  <div class="hello">
    <div class="google-map" :id="mapName"></div>
  </div>
</template>

<script>

  export default {
    name: 'AwMap',
    data () {
      return {
        name:"miMapa",
        mapName: this.name + "-map",
        madridData:[],
        msg: 'This is Enviroment!',
        center: {lat: 40.416775, lng: -3.703790},
        markers: [],
        map:{}
      }
    },
    mounted(){
      const element = document.getElementById(this.mapName);
      this.bounds = new google.maps.LatLngBounds();
      const options = {
        center: new google.maps.LatLng(this.center.lat, this.center.lng)
      };
      this.map = new google.maps.Map(element, options);
      this.$http.get('http://localhost:5000/data').then(response => {

        // get body data
        this.madridData = response.body;
        this.madridData.forEach((d)=>{
          console.log(d.stationCoordinates[0]);
          const position = new google.maps.LatLng(d.stationCoordinates[0], d.stationCoordinates[1]);
          const marker = new google.maps.Marker({
            position,
            map: this.map
          });
          this.markers.push(marker);
          this.markers.push({position:{lat:parseFloat(d.stationCoordinates[0]),lng:parseFloat(d.stationCoordinates[1])}});
          this.map.fitBounds(this.bounds.extend(position))
        });

      }, response => {
        // error callback
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .google-map {
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: gray;
  }
</style>
