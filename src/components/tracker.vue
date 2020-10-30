<template>
  <div>
    <nav class="uk-background-secondary uk-light" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="#">Corvid-19 Cases Tracker</a>
      </div>
    </nav>
    <section>
      <div class="uk-container uk-margin-top">

         <div v-if="loading" class="uk-align-center">
          <span uk-spinner="ratio: 4.5"></span>
        </div>

        <div class="uk-child-width-1-4@s uk-grid-match" uk-grid>
          <div v-for="(data,key) in cases" :key="key">
            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
              <div class="uk-card-badge uk-label">{{data.id}}</div>
              <h3 class="uk-card-title uk-margin-top">{{data.id}}</h3>
              <ul class="uk-list uk-list-divider">
                 <li>{{data.title.rendered}}</li>
                 <p>{{data.excerpt.rendered}}</p>
                <img :src='data.fimg_url' />
                
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      loading: false
    };
  },
  methods: {
    async getResultFromVuex() {
      this.loading = true;
      await this.$store.dispatch("getAllCases");
      this.loading = false;
    }
  },
  created() {
    this.getResultFromVuex();
  },
  computed: {
    ...mapState(["cases"])
  }
};
</script>