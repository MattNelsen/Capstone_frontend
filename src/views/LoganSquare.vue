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
#marker {
  background-image: url("https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 200px;
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
    var logansquare = [-87.7, 41.92];
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: logansquare,
      zoom: 13.5
    });

    // create the popup
    var popup = new mapboxgl.Popup({ offset: 25 }).setText("Construction on the Washington logansquare began in 1848.");

    // create DOM element for the marker
    var el = document.createElement("div");
    el.id = "marker";

    // create the marker
    new mapboxgl.Marker(el)
      .setLngLat(logansquare)
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);
  },
  methods: {}
};
</script>
