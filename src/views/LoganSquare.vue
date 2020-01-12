<template>
  <div class="logansquare">
    <h1>{{ message }}</h1>
    <div id="map"></div>
  </div>
</template>

<style>
#map {
  /*position: absolute;*/
  /*top: 0;*/
  /*bottom: 0;*/
  /*width: 100%;*/
  height: 300px;
}
</style>

<script>
/* global mapboxgl */

export default {
  data: function() {
    return {
      message: "This will be the Logan Square Page"
    };
  },
  created: function() {},
  mounted: function() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWF0dG5lbHNlbjUiLCJhIjoiY2s1Yjg0cnh0MG1qYjNrcnpjYW52dHhjNiJ9.oP09KRf6xW5bimDss-x0xA";
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-87.7, 41.92], // starting position [lng, lat]
      zoom: 13.5 // starting zoom
    });
  },
  methods: {}
};
</script>
