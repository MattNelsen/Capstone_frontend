<template>
  <div class="rivernorth">
    <div id="map"></div>
    <img
      src="https://www.price4limo.com/locations/site/assets/files/126852/chicago_nightlife_review.600x0-is.jpg"
      alt=""
      width="100%"
      height="500"
    />
  </div>
</template>
<script>
/* global mapboxgl */

export default {
  data: function() {
    return {
      message: "River north Message"
    };
  },
  created: function() {},
  mounted: function() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWF0dG5lbHNlbjUiLCJhIjoiY2s1Yjg0cnh0MG1qYjNrcnpjYW52dHhjNiJ9.oP09KRf6xW5bimDss-x0xA";
    var rivernorth = [-87.6341, 41.8924];
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: rivernorth,
      zoom: 12.5
    });
  },
  methods: {}
};
</script>
