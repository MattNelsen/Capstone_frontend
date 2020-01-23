<template>
  <div class="neighborhoodshow">
    <div id="map"></div>
    <img v-bind:src="neighborhood.image" alt="" width="100%" height="500" />
    <div class="bottom-left">
      <h1>{{ neighborhood.description }}</h1>
    </div>
  </div>
</template>

<style>
.neighborhoodshow {
  position: relative;
  color: white;
  text-align: left;
  font-family: sans;
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 5px;
  width: 30em;
  word-wrap: break-word;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  text-transform: uppercase;
}
#map {
  /*position: absolute;*/
  /*top: 0;*/
  /*bottom: 0;*/
  /*width: 100%;*/
  height: 300px;
}

.mapboxgl-popup {
  max-width: 200px;
  color: black;
}
</style>

<script>
import axios from "axios";
/* global mapboxgl,mapboxSdk */

export default {
  data: function() {
    return {
      message:
        " North Milwaukee Avenue is the main commercial strip and features cool restaurants, cocktail bars and craft beer taverns. ",
      neighborhood: {},
      specials: []
    };
  },
  created: function() {},
  mounted: function() {
    axios.get(`/api/neighborhoods/${this.$route.params.id}`).then(response => {
      this.neighborhood = response.data;
      console.log(this.neighborhood);
      this.setupMap();
    });
  },
  methods: {
    setupMap: function() {
      // Setup mapbox
      mapboxgl.accessToken =
        "pk.eyJ1IjoibWF0dG5lbHNlbjUiLCJhIjoiY2s1Yjg0cnh0MG1qYjNrcnpjYW52dHhjNiJ9.oP09KRf6xW5bimDss-x0xA";
      var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });

      // Get lat/lng of neighborhood
      mapboxClient.geocoding
        .forwardGeocode({
          query: `${this.neighborhood.name}, Chicago, IL`,
          autocomplete: false,
          limit: 1
        })
        .send()
        .then(response => {
          if (response && response.body && response.body.features && response.body.features.length) {
            var feature = response.body.features[0];
            // Create map centered at neighborhood
            var map = new mapboxgl.Map({
              container: "map",
              style: "mapbox://styles/mapbox/light-v10",
              center: feature.center,
              zoom: 12.95
            });

            // Get lat/lng of each bar in neighborhood
            this.neighborhood.bars.forEach(bar => {
              console.log("bar", bar);
              mapboxClient.geocoding
                .forwardGeocode({
                  query: bar.address,
                  autocomplete: false,
                  limit: 1
                })
                .send()
                .then(response => {
                  if (response && response.body && response.body.features && response.body.features.length) {
                    var feature = response.body.features[0];
                    // Make the popup
                    var text = "";
                    bar.specials.forEach(special => {
                      text += `<div>${bar.name}</div>`;
                    });
                    var text2 = "<h7>Specials</h7>";
                    bar.specials.forEach(special => {
                      text += `<div>${special.day_of_week}: ${special.description}</div>`;
                    });
                    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(text);
                    // Make the marker with popup on map
                    new mapboxgl.Marker()
                      .setLngLat(feature.center)
                      .setPopup(popup)
                      .addTo(map);
                  }
                });
            });
          }
        });

      // create the marker and popup

      // this.specials.forEach(function(special) {
      //
      // var moonlighterpopup = new mapboxgl.Popup({ offset: 25 }).setText("specials in bars.description");
      // var moonlightermarker = new mapboxgl.Marker()
      //   .setLngLat([-87.7074, 41.9177])
      //   .setPopup(moonlighterpopup)
      //   .addTo(map);
      // var lostlakepopup = new mapboxgl.Popup({ offset: 25 }).setText("lostlake popup");
      // var lostlakemarker = new mapboxgl.Marker()
      //   .setLngLat([-87.7071, 41.9321])
      //   .setPopup(lostlakepopup)
      //   .addTo(map);
      // var spiltmilkpopup = new mapboxgl.Popup({ offset: 25 }).setText("spiltmilkpopup popup");
      // var spiltmilkmarker = new mapboxgl.Marker()
      //   .setLngLat([-87.6972, 41.935])
      //   .setPopup(spiltmilkpopup)
      //   .addTo(map);
      // var bestintentionspopup = new mapboxgl.Popup({ offset: 25 }).setText("best intentions popup");
      // var bestintentionsmarker = new mapboxgl.Marker()
      //   .setLngLat([-87.71072, 41.9171])
      //   .setPopup(bestintentionspopup)
      //   .addTo(map);
      // var parkandfieldpopup = new mapboxgl.Popup({ offset: 25 }).setText("park and field popup");
      // var parkandfieldmarker = new mapboxgl.Marker()
      //   .setLngLat([-87.7145, 41.9244])
      //   .setPopup(parkandfieldpopup)
      //   .addTo(map);
      // var dosurbanpopup = new mapboxgl.Popup({ offset: 25 }).setText("dos urban popup");
      // var dosurbanmarker = new mapboxgl.Marker()
      //   .setLngLat([-87.6984, 41.9173])
      //   .setPopup(dosurbanpopup)
      //   .addTo(map);
      // var remedypopup = new mapboxgl.Popup({ offset: 25 }).setText("remedy popup");
      // var remedymarker = new mapboxgl.Marker()
      //   .setLngLat([-87.701, 41.9254])
      //   .setPopup(remedypopup)
      //   .addTo(map);

      // // create DOM element for the marker
      // var el = document.createElement("div");
      // el.id = "marker";
    }
  }
};
</script>
