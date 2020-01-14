<template>
  <div class="lakeview">
    <div id="map"></div>
    <img
      src="https://cdn.choosechicago.com/uploads/2019/05/wrigleyville-1-1800x900.jpg"
      alt=""
      height="400"
      width="100%"
    />
  </div>
</template>
<script>
/* global mapboxgl */

export default {
  data: function() {
    return {
      message: "Lakeview Message"
    };
  },
  created: function() {},
  mounted: function() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWF0dG5lbHNlbjUiLCJhIjoiY2s1Yjg0cnh0MG1qYjNrcnpjYW52dHhjNiJ9.oP09KRf6xW5bimDss-x0xA";
    var lakeview = [-87.6589, 41.9398];
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: lakeview,
      zoom: 12.5
    });
  },
  methods: {}
};
</script>
