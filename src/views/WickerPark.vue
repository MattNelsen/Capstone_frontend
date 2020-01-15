<template>
  <div class="wickerpark">
    <div id="map"></div>
    <h2>{{ message }}</h2>
    <img src="http://habitatcsn.files.wordpress.com/2012/01/wicker1.png" alt="" width="1450" height="500" />
  </div>
</template>

<style>
.wickerpark {
  position: relative;
  text-align: center;
  color: black;
}
.bottom-left {
  position: absolute;
  top: 8px;
  right: 16px;
}
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
        "North Milwaukee Avenue is known for its bustling nightlife, dining and entertainment venues, with Subterranean and Davenport’s setting the bar for the city's trendy music clubs. ",
      places: [{ lat: -87.677, lng: 41.9115, description: "Northsider Happy Hour" }]
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
      center: [-87.67, 41.91],
      zoom: 13
    });

    // create the marker and popup
    var northsiderpopup = new mapboxgl.Popup({ offset: 25 }).setText("northsider popup");
    var northsidermarker = new mapboxgl.Marker()
      .setLngLat([-87.6772, 41.9115])
      .setPopup(northsiderpopup)
      .addTo(map);
    var chopshoppopup = new mapboxgl.Popup({ offset: 25 }).setText("chop shop popup");
    var chopshopmarker = new mapboxgl.Marker()
      .setLngLat([-87.6788, 41.9102])
      .setPopup(chopshoppopup)
      .addTo(map);
    var bangersandlacepopup = new mapboxgl.Popup({ offset: 25 }).setText("bangers and lace popup");
    var bangersandlacermarker = new mapboxgl.Marker()
      .setLngLat([-87.671, 41.9034])
      .setPopup(bangersandlacepopup)
      .addTo(map);
    var whiskeybusinesspopup = new mapboxgl.Popup({ offset: 25 }).setText("whiskey business popup");
    var whiskeybusinessmarker = new mapboxgl.Marker()
      .setLngLat([-87.6714, 41.9068])
      .setPopup(whiskeybusinesspopup)
      .addTo(map);
    var easybarpopup = new mapboxgl.Popup({ offset: 25 }).setText("easy bar popup");
    var easybarmarker = new mapboxgl.Marker()
      .setLngLat([-87.6766, 41.9034])
      .setPopup(easybarpopup)
      .addTo(map);
    var flatironpopup = new mapboxgl.Popup({ offset: 25 }).setText("flat iron popup");
    var theflatironmarker = new mapboxgl.Marker()
      .setLngLat([-87.6767, 41.91])
      .setPopup(flatironpopup)
      .addTo(map);

    // create DOM element for the marker
    var el = document.createElement("div");
    el.id = "marker";
  },
  methods: {}
};
</script>
