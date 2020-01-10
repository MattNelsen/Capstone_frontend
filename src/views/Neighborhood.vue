<!-- <template>
  <div class="neighborhood">
    <h1>All Neighborhoods</h1>
    <div v-for="neighborhood in neighborhoods">
      <h2>{{ neighborhood.name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Appy Hour!!!",
      neighborhoods: []
    };
  },
  created: function() {
    axios.get("/api/neighborhoods").then(response => {
      this.neighborhoods = response.data;
    });
  },
  methods: {}
};
</script>
 -->
