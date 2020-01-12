<template>
  <div class="wickerpark">
    <h1>{{ message }}</h1>
    <div id="map"></div>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/View_of_the_Flat_Iron_Arts_Building_from_the_Coyote_Tower_%285266790849%29.jpg/1920px-View_of_the_Flat_Iron_Arts_Building_from_the_Coyote_Tower_%285266790849%29.jpg"
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
</style>

<script>
/* global mapboxgl */

export default {
  data: function() {
    return {
      message:
        "North Milwaukee Avenue is known for its bustling nightlife, dining and entertainment venues, with Double Door, Subterranean and Davenport’s setting the bar for the city's trendy music clubs. ",
      places: [
        { lat: -25.363, lng: 131.044, description: "A place in Australia" },
        { lat: -33.8675, lng: 151.207, description: "The main city!" }
      ]
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

    // create the marker
    var marker = new mapboxgl.Marker().setLngLat([-87.67, 41.91]).addTo(map);

    // create DOM element for the marker
    var el = document.createElement("div");
    el.id = "marker";
  },
  methods: {}
};
</script>
