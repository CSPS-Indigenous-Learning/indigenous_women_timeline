<template>
  <div>
    <bypass />

    <b-container fluid class="topbar-container">
      <b-row no-gutters>
        <b-col><topbar /></b-col>
      </b-row>
    </b-container>

    <b-container tag="main" id="mainContent">
      <timeline />
    </b-container>

    <ils />

    <page-footer />

    <back-to-top />
  </div>
</template>

<script>

  import timeline from "~/components/timeline";
  import bypass from "~/components/bypass";
  import ils from "~/components/ils";
  import pageFooter from "~/components/pageFooter";
  import backToTop from '../components/backToTop.vue';

  export default{
    components: {
      timeline,
      bypass,
      ils,
      pageFooter,
      backToTop
    },

    data(){
      return{
        
      }
    }
  }

</script>

<style scoped lang="scss">

  .container-fluid.topbar-container{
    background-color: white;
    margin-bottom: 50px;
    box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.1);
  }

</style>

<i18n>

  {
    "en": {
      
    },
    "fr": {
      
    }
  }

</i18n>