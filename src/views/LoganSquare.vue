<template>
  <div class="logansquare">
    <div id="map"></div>
    <h5>{{ message }}</h5>
    <img
      src="https://cdn.vox-cdn.com/thumbor/UAh8VjrwQNzQQ880uANp-7v4qLE=/0x0:2048x1365/1200x800/filters:focal(861x520:1187x846)/cdn.vox-cdn.com/uploads/chorus_image/image/57954839/27211487959_893cd4d20b_k.0.jpg"
      alt=""
      width="1450"
      height="500"
    />
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
      message:
        " North Milwaukee Avenue is the main commercial strip and features cool restaurants, cocktail bars and craft beer taverns. "
    };
  },
  created: function() {},
  mounted: function() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWF0dG5lbHNlbjUiLCJhIjoiY2s1Yjg0cnh0MG1qYjNrcnpjYW52dHhjNiJ9.oP09KRf6xW5bimDss-x0xA";
    var logansquare = [-87.7068, 41.9277];
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: logansquare,
      zoom: 12.5
    });

    // create the marker
    var moonlightermarker = new mapboxgl.Marker().setLngLat([-87.7074, 41.9177]).addTo(map);
    var lostlakemarker = new mapboxgl.Marker().setLngLat([-87.7071, 41.9321]).addTo(map);
    var spiltmilkmarker = new mapboxgl.Marker().setLngLat([-87.6972, 41.935]).addTo(map);
    var bestintentionsmarker = new mapboxgl.Marker().setLngLat([-87.71072, 41.9171]).addTo(map);
    var parkandfieldmarker = new mapboxgl.Marker().setLngLat([-87.7145, 41.9244]).addTo(map);
    var dosurbanmarker = new mapboxgl.Marker().setLngLat([-87.6984, 41.9173]).addTo(map);
    var parkandfieldmarker5 = new mapboxgl.Marker().setLngLat([-87.701, 41.9254]).addTo(map);

    // create DOM element for the marker
    var el = document.createElement("div");
    el.id = "marker";
  },
  methods: {}
};
</script>
