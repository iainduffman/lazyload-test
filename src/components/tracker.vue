<template>
  <div>
    <nav class="uk-background-secondary uk-light" uk-navbar>
      <div class="uk-navbar-left">
        <h1 class="ml11">
  <span class="text-wrapper">
    <span class="line line1"></span>
    <span class="letters">Hello Goodbye</span>
  </span>
</h1>
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
<style>
.ml11 {
  font-weight: 700;
  font-size: 3.5em;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 { 
  top: 0; 
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
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