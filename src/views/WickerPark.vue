<template>
  <div class="wickerpark">
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
      message: "This will be the Wicker Park Page"
    };
  },
  created: function() {},
  mounted: function() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWF0dG5lbHNlbjUiLCJhIjoiY2s1Yjg0cnh0MG1qYjNrcnpjYW52dHhjNiJ9.oP09KRf6xW5bimDss-x0xA";
    var wickerpark = [-87.67, 41.91];
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: wickerpark,
      zoom: 13.5
    });

    // create the popup
    var popup = new mapboxgl.Popup({ offset: 25 }).setText("Construction on the Washington wickerpark began in 1848.");

    // create DOM element for the marker
    var el = document.createElement("div");
    el.id = "marker";

    // create the marker
    new mapboxgl.Marker(el)
      .setLngLat(wickerpark)
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);
  },
  methods: {}
};
</script>
