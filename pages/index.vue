<template>
  <div>
    <bypass />

    <!--<page-footer />-->

    <b-container fluid class="topbar-container">
      <b-row no-gutters>
        <b-col><topbar /></b-col>
      </b-row>
    </b-container>
    
    <ils />

    <b-container tag="main" id="mainContent">
      <welcome />
      <suggest />
      <timeline />
    </b-container>

    <back-to-top />
  </div>
</template>

<script>

  import timeline from "~/components/timeline";
  import bypass from "~/components/bypass";
  import ils from "~/components/ils";
  import pageFooter from "~/components/pageFooter";
  import backToTop from '~/components/backToTop.vue';
  import Welcome from '~/components/welcome.vue';
  import suggest from '~/components/suggest.vue';

  export default{
    components: {
      timeline,
      bypass,
      ils,
      pageFooter,
      backToTop,
      Welcome,
      suggest
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
    margin-bottom: 40px;
    box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.1);
    padding: 0;
    position: relative;
    z-index: 1;
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