<template>
  <div>
    <!--<b-container fluid class="topbar-container">
      <b-row>
        <b-col><topbar /></b-col>
      </b-row>
    </b-container>-->
    <!--<b-container>-->
      <Nuxt />
    <!--</b-container>-->
  </div>
</template>

<script>

  import topbar from "~/components/topbar";

  export default{
    components: {
      topbar
    },

    data(){
      return{
        politics: this.$i18n.t('politics')
      }
    },

    methods:{

    }
  }

</script>

<style lang="scss">

  //Colors
  $dark_purple: #713e5a;
  $light_purple: #94778b;
  $lavender: #c6d4ff;
  $green: #caff8a;
  $beige: #f9e0c8;

  html, body{
    margin: 0;
    padding: 0;
  }

  body{
    background: url("~assets/background.jpg");
    background-attachment: fixed;
    font-family: "Titillium Web";
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 700;
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
